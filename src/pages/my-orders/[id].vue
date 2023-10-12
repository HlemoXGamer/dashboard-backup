<script setup>
import { kuwaitValidator, numericValidator, requiredValidator } from "@/@core/utils/validators";
import { get as getBranches } from "@/apis/agent/branches";
import { get as getDeliveries } from "@/apis/agent/deliveries";
import { get as getAreas } from "@/apis/agent/areas";
import {
  assignDelivery,
  show,
  update,
  updateBranch,
} from "@/apis/agent/orders";
import { sendSMS } from "@/apis/agent/sms";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";
import { useI18n } from "vue-i18n"
const $useI18n = useI18n()
const t = $useI18n.t;
const toast = useToast();
const addressLoading = ref(false),
  dialog = ref(false),
  deliveryLoading = ref(false),
  branchLoading = ref(false),
  orderLoading = ref(false);
const orderId = useRoute().params.id;
const order = ref([]),
  branches = ref([]);
const currentBranch = ref(null),
  currentStatus = ref(null),
  deliveries = ref([]),
  currentDelivery = ref(null),
  actualStatus = ref(null);
const currentTime = ref(null),
  start = ref(null),
  end = ref(null),
  timeKey = ref(0);
const addressForm = ref();
const form = ref({
  address_apartment: "",
  address_building_no: "",
  address_phone: "",
  address_street_name: "",
  address_floor: "",
  block_no: "",
});
const _getOrder = async () => {
  await show(orderId).then((res) => {
    order.value = res.data.data;
    currentBranch.value = res.data.data.branch_id;
    currentStatus.value = res.data.data.status;
    actualStatus.value = res.data.data.status;
    currentDelivery.value = res.data.data.delivery_man_id;
    currentTime.value = new Date(res.data.data.est_time)?.getTime();

    let {
      address_apartment,
      address_building_no,
      address_phone,
      address_street_name,
      address_floor,
      block_no,
    } = res.data.data;

    form.value = {
      address_apartment,
      address_building_no,
      address_phone,
      address_street_name,
      address_floor,
      block_no,
    };
  });
};
const statuses = computed(() => {
  let status = [
    { name: t("Created"), value: "created", disabled: true },
    { name: t("Paid"), value: "paid", disabled: true },
    { name: t("In Progress"), value: "in_progress" },
    { name: t("Ready For Delivery"), value: "ready_for_delivery", disabled: true },
    { name: t("On The Way"), value: "on_the_way", disabled: true },
    { name: t("Delivered"), value: "delivered", disabled: true },
    { name: t("Cancelled"), value: "cancelled", disabled: true }
  ];

  let currentIndex = status.map(s => s.value).indexOf(actualStatus.value);
  for(let i = 0; i <= currentIndex; i++){
      status[i].disabled = true;
  }
  return status;
})

const _getBranches = async () => {
  await getBranches().then(({data}) => {
    branches.value = data.data.filter(branch => branch.is_active === 1);
    const branchData = branches.value.find(
      (branch) => branch.id === currentBranch.value,
    );
    start.value = new Date().toTimeString().slice(0, 5);
    end.value = branchData.end;
    timeKey.value += 1;
  });
};

const _getDeliveries = async () => {
  await getDeliveries().then((res) => {
    deliveries.value = res.data.data;
  });
};

const _setStatus = () => {
  if (
    currentStatus.value !== "created" &&
    currentStatus.value !== "delivered"
  ) {
    dialog.value = true;
  }
};

const _updateOrderAddress = async () => {
  addressForm.value?.validate().then(async ({ valid: isValid }) => {
    if (isValid) {
      addressLoading.value = true;
      try {
        await update(orderId, form.value);
        toast.success("Order updated successfully");
        addressLoading.value = false;
      } catch (err) {
        toast.error(err.response.data.message);
        addressLoading.value = false;
      }
    }
  });
};

const _updateOrder = async () => {
  orderLoading.value = true;
  try {
    await update(orderId, {
      status: currentStatus.value,
      est_time: currentTime.value,
    });
    toast.success("Order updated successfully");
    actualStatus.value = currentStatus.value;
    if (currentStatus.value === "in_progress") {
      await sendSMS({
        status: currentStatus.value,
        phones: [order.address_phone],
        order_id: orderId,
      });
      toast.success("SMS sent successfully");
    }
    orderLoading.value = false;
    dialog.value = false;
  } catch (err) {
    toast.error(err.response.data.message);
    orderLoading.value = false;
    dialog.value = false;
  }
};

const _setDelivery = async () => {
  deliveryLoading.value = true;
  try {
    setTimeout(async () => {
      await assignDelivery({
        delivery_man_id: currentDelivery.value,
        order_id: orderId,
      });
      toast.success("Delivery man updated successfully");
      deliveryLoading.value = false;
    }, 500);
  } catch (err) {
    toast.error(err.response.data.message);
    deliveryLoading.value = false;
  }
};

const _setBranch = async () => {
  branchLoading.value = true;
  try {
    await updateBranch({ order_id: orderId, branch_id: currentBranch.value });
    toast.success("Order Branch updated successfully");
    branchLoading.value = false;
  } catch (err) {
    toast.error(err.response.data.message);
    branchLoading.value = false;
  }
};

const areas = ref([]);
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const _getAreas = async () => {
  try {
    const { data } = await getAreas();
    areas.value = data.data;
  } catch (err) {
    console.log(err);
  }
};
const fallBackStatus = () => {
  dialog.value = false;
  currentStatus.value = actualStatus.value;
}

onMounted(() => {
  if (userRole == "agent") {
    _getAreas();
    _getOrder();
    _getBranches();
    _getDeliveries();
  }
});
</script>
<template>
  <div>
    <VDialog v-model="dialog" persistent class="v-dialog-sm">
      <!-- Dialog Content -->
      <VCard title="Delivery Time">
        <VCardText>
          {{ $t('Are you sure that you want to change the status') }}
        </VCardText>

        <VCardText class="d-flex justify-end gap-3 flex-wrap">
          <VBtn color="secondary" variant="tonal" @click="fallBackStatus()">
            {{ $t('Cancel') }}
          </VBtn>
          <VBtn @click="_updateOrder" :loading="orderLoading"> {{ $t('Confirm') }} </VBtn>
        </VCardText>
      </VCard>
    </VDialog>

    <VRow class="mt-4 px-2" justify="space-around">
      <VCol class="pt-0" cols="12">
        <VRow align="center" justify="space-between" class="mx-0 my-0">
          <p class="text-h3 pt-3 pb-0 mb-3 text-left">#{{ order.id }}</p>
          <strong
            class="text-h5 pt-3 pb-0 mb-3 text-right"
            v-if="order.delivery_date"
            >{{ $t('Delivery Date') }}: {{ order.delivery_date }}
          </strong>
        </VRow>
      </VCol>
      <VCol class="pt-0" :cols="$vuetify.display.smAndDown ? 12 : 8">

        <OrderDetails :products="order.products" />

        <VCol
          class="mt-7 px-2 rounded pb-2"
          style="background-color: rgb(var(--v-theme-surface))"
        >
          <VRow class="px-6 pt-3" align="center" justify="space-between">
            <p class="text-h4 pt-3 mb-4">{{ $t('Address Details') }}</p>
            <VSpacer />
            <VChip size="default" label class="mr-3" color="success">
              {{ order.address_area }}
            </VChip>
            <VChip size="default" label color="primary">
              {{ order.branch_name }}
            </VChip>
          </VRow>
          <VCol>
            <VCol>
              <VForm ref="addressForm" @submit.prevent="_updateOrderAddress">
                <VRow justify="space-between" align="start">
                  <AppTextField
                    prepend-inner-icon="tabler-phone"
                    :label="$t('Phone Number')"
                    :rules="[requiredValidator, kuwaitValidator, numericValidator]"
                    placeholder="Phone Number"
                    class="flex-grow-1 mx-2 my-1"
                    v-model="form.address_phone"
                  ></AppTextField>
                  <AppTextField
                    prepend-inner-icon="tabler-container"
                    :label="$t('Building Number')"
                    :rules="[requiredValidator]"
                    placeholder="Building Number"
                    class="flex-grow-1 mx-2 my-1"
                    v-model="form.address_building_no"
                  ></AppTextField>
                </VRow>
                <VRow justify="space-between" align="start" class="mt-6">
                  <AppTextField
                    prepend-inner-icon="tabler-stairs"
                    placeholder="Floor"
                    :label="$t('Floor')"
                    :rules="[requiredValidator]"
                    class="flex-grow-1 mx-2 my-1"
                    v-model="form.address_floor"
                  ></AppTextField>
                  <AppTextField
                    prepend-inner-icon="tabler-window"
                    :label="$t('Apartment')"
                    :rules="[requiredValidator]"
                    placeholder="Apartment"
                    class="flex-grow-1 mx-2 my-1"
                    v-model="form.address_apartment"
                  ></AppTextField>
                </VRow>
                <VRow justify="space-between" align="start" class="mt-6">
                  <AppTextField
                    prepend-inner-icon="tabler-road"
                    placeholder="Street Name"
                    :rules="[requiredValidator]"
                    :label="$t('Street Name')"
                    class="flex-grow-1 mx-2 my-1"
                    v-model="form.address_street_name"
                  ></AppTextField>
                  <AppTextField
                    prepend-inner-icon="tabler-number"
                    :rules="[requiredValidator]"
                    :label="$t('Block Number')"
                    placeholder="Block Number"
                    class="flex-grow-1 mx-2 my-1"
                    v-model="form.block_no"
                  ></AppTextField>
                </VRow>
                <VBtn class="mt-7" block type="submit" :loading="addressLoading"
                  ><VIcon icon="tabler-check"></VIcon> {{ $t('Update') }}</VBtn
                >
              </VForm>
            </VCol>
          </VCol>
        </VCol>

        <VCol
          class="mt-7 px-5 rounded pb-7"
          style="background-color: rgb(var(--v-theme-surface))"
        >
          <p class="text-h4 pt-3 mb-1">{{ $t('Customer Review') }}</p>
          <VCol>
            <p
              class="text-h5 pt-0 mb-0"
              :class="order.review !== null ? 'text-left' : 'text-center'"
            >
              {{ order.complain !== null ? order.complain : "No Reviews Yet!" }}
            </p>
          </VCol>
        </VCol>

        <VCol
          class="mt-7 px-5 rounded pb-7"
          style="background-color: rgb(var(--v-theme-surface))"
        >
          <p class="text-h4 pt-3 mb-1">{{ $t('Customer Complaint') }}</p>
          <VCol>
            <p
              class="text-h5 pt-0 mb-0"
              :class="order.complain !== null ? 'text-left' : 'text-center'"
            >
              {{
                order.complain !== null ? order.complain : "No Complains Yet!"
              }}
            </p>
          </VCol>
        </VCol>
      </VCol>

      <VCol class="pt-0 mt-0" :cols="$vuetify.display.smAndDown ? 12 : 4">
        <PaymentDetails
          :total="order.total"
          :paymentMethod="order.payment_method"
          :subtotal="order.sub_total"
          :newtotal="order?.new_total"
          :discountType="order?.discount_type"
          :discountRate="order?.discount_rate"
          :deliveryCost="order?.delivery_cost"
        />

        <VCol
          class="mt-6 px-5 rounded pb-8 w-100 mx-auto"
          style="background-color: rgb(var(--v-theme-surface))"
        >
          <p class="text-h4 pt-3 mb-3">{{ $t('Branch') }}</p>
          <VCol>
            <VRow justify="space-between" align="center">
              <VSelect
                :items="branches"
                item-value="id"
                item-title="name_en"
                v-model="currentBranch"
                prepend-inner-icon="tabler-building-store"
                placeholder="Select a Branch"
                :label="$t('Branch')"
                style="width: 100%"
                variant="outlined"
              />
              <VBtn
                class="mt-3"
                :loading="branchLoading"
                block
                @click="_setBranch"
                >{{ $t('Update') }}</VBtn
              >
            </VRow>
          </VCol>
        </VCol>

        <VCol
          class="mt-6 px-5 rounded pb-8 w-100 mx-auto"
          style="background-color: rgb(var(--v-theme-surface))"
        >
          <p class="text-h4 pt-3 mb-3">{{ $t('Status') }}</p>
          <VCol>
            <VRow justify="space-between" align="center">
              <VSelect
                @update:model-value="_setStatus"
                :items="statuses"
                item-value="value"
                item-title="name"
                :item-props="true"
                v-model="currentStatus"
                prepend-inner-icon="tabler-activity-heartbeat"
                :placeholder="$t('Status')"
                :label="$t('Status')"
                style="width: 100%"
                variant="outlined"
              />
            </VRow>
            <VRow justify="space-between" align="center" class="mt-7">
              <VSelect
                disabled
                :loading="deliveryLoading"
                @update:model-value="_setDelivery"
                :items="deliveries"
                item-value="id"
                item-title="name"
                v-model="currentDelivery"
                prepend-inner-icon="tabler-truck-delivery"
                placeholder="Delivery"
                label="Delivery"
                style="width: 100%"
                variant="outlined"
              />
            </VRow>
            <!-- TASK: [SAB-563] Restaurant and Agent shouldn't have time -->
            <VRow justify="space-between" align="center" class="mt-7">
              <AppDateTimePicker
                disabled
                :key="timeKey"
                v-model="currentTime"
                prepend-inner-icon="tabler-calendar"
                placeholder="Delivery Time"
                class="flex-grow-1"
                :config="{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: 'H:i',
                  minTime: start,
                  maxTime: end,
                }"
              />
              <VBtn
                class="mt-4"
                block
                @click="_updateOrder"
                :loading="orderLoading"
                :disabled="
                  currentStatus == 'delivered' || currentStatus == 'paid'
                "
                >{{ $t('Save') }}</VBtn
              >
            </VRow>
          </VCol>
        </VCol>
      </VCol>
    </VRow>
  </div>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
  roles: ["agent"]
</route>

<style lang="scss" scoped>
.app-picker-field {
  width: 49%;
}
</style>
