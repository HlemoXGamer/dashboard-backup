<script setup>
import { useToast } from "vue-toastification";
import { update } from '@/apis/operation/orders';
import { useRoute } from 'vue-router';
import { useI18n } from "vue-i18n"
const $useI18n = useI18n()
const t = $useI18n.t;
const props = defineProps({
  order: {
    type: Object,
    default: {},
  },
  deliveries: {
    type: Array,
    default: [],
  },
  timeKey: {
    default: "",
  },
  start: {
    default: "",
  },
  end: {
    default: "",
  },
});

const toast = useToast();
const route = useRoute();
const orderId = route.params.id;

const currentStatus = ref(props.order?.status);
const actualStatus = ref(props.order?.status);
const currentDelivery = ref(props.order?.delivery_man_id);
const currentTime = ref();
const start = ref(props.start);
const end = ref(props.end);
const dialog = ref(false),
  deliveryLoading = ref(false),
  orderLoading = ref(false);
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
      // try{
      //   await sendSMS({
      //     status: currentStatus.value,
      //     phones: [order.address_phone],
      //     order_id: orderId,
      //   });
      //   toast.success("SMS sent successfully");
      // }catch(err){
      //   toast.error(err);
      // }
    }
    orderLoading.value = false;
    dialog.value = false;
  } catch (err) {
    console.log(err);
    toast.error(err.response);
    orderLoading.value = false;
    dialog.value = false;
  }
};
const statuses = computed(() => {
  let status = [
    { name: t("Created"), value: "created", disabled: true },
    { name: t("Paid"), value: "paid", disabled: true },
    { name: t("In Progress"), value: "in_progress" },
    { name: t("Ready For Delivery"), value: "ready_for_delivery" },
    { name: t("On The Way"), value: "on_the_way" },
    { name: t("Delivered"), value: "delivered" },
    { name: t("Cancelled"), value: "cancelled" }
  ];

  let currentIndex = status.map(s => s.value).indexOf(actualStatus.value);
  for(let i = 0; i <= currentIndex; i++){
      status[i].disabled = true;
  }
  return status;
})
const _setDelivery = async () => {
  // deliveryLoading.value = true;
  // setTimeout(async () => {
  //   try {
  //     await assignDelivery({
  //       delivery_man_id: currentDelivery.value,
  //       order_id: orderId,
  //     });
  //     toast.success("Delivery man updated successfully");
  //     deliveryLoading.value = false;
  //   } catch (err) {
  //     toast.error(err.response.data.message);
  //     deliveryLoading.value = false;
  //   }
  // }, 500);
};

const _setStatus = () => {
  if (
    currentStatus.value !== "created" &&
    currentStatus.value !== "delivered"
  ) {
    dialog.value = true;
  }
};
const fallBackStatus = () => {
  dialog.value = false;
  currentStatus.value = actualStatus.value;
}
</script>
<template>
  <VDialog v-model="dialog" persistent class="v-dialog-sm">
    <!-- Dialog Content -->
    <VCard title="Delivery Time">
      <VCardText>
        {{ $t("Are you sure that you want to change the status") }}
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn color="secondary" variant="tonal" @click="fallBackStatus()">
          Cancel
        </VBtn>
        <VBtn @click="_updateOrder" :loading="orderLoading"> {{ $t('Confirm') }} </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
  <VCol
    class="mt-6 px-5 rounded pb-8 w-100 mx-auto"
    style="background-color: rgb(var(--v-theme-surface))"
  >
    <p class="text-h4 pt-3 mb-3">{{$t('Status')}}</p>
    <VCol>
      <VRow justify="space-between" align="center">
        <VSelect
          disabled
          @update:model-value="_setStatus"
          :items="statuses"
          item-value="value"
          item-title="name"
          :item-props="true"
          v-model="currentStatus"
          prepend-inner-icon="tabler-activity-heartbeat"
          placeholder="Status"
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
          :return-object="false"
          v-model="currentDelivery"
          prepend-inner-icon="tabler-truck-delivery"
          placeholder="Delivery"
          :label="$t('Delivery')"
          style="width: 100%"
          variant="outlined"
        />
      </VRow>
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
          disabled
          class="mt-4"
          block
          @click="_updateOrder"
          :loading="orderLoading"
          >{{ $t('Save') }}</VBtn
        >
      </VRow>
    </VCol>
  </VCol>
</template>
