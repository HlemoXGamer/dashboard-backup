<script setup>
import { onMounted } from "vue";
import { useToast } from "vue-toastification";
import axios from "@/plugins/axios";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
const $useI18n = useI18n();
const t = $useI18n.t;

const props = defineProps({
  order: {
    type: Object,
    default: {},
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
const statuses = computed(() => [
  { id: 0, name: t("Created"), value: "created", itemDisabled: true },
  { id: 1, name: t("Paid"), value: "paid", itemDisabled: true, disabled: true },
  { id: 2, name: t("In Progress"), value: "in_progress", itemDisabled: true },
  {
    id: 3,
    name: t("Ready For Delivery"),
    value: "ready_for_delivery",
    itemDisabled: true,
  },
  { id: 4, name: t("On The Way"), value: "on_the_way", itemDisabled: true },
  { id: 5, name: t("Delivered"), value: "delivered", itemDisabled: true },
  { id: 6, name: t("Cancelled"), value: "cancelled", itemDisabled: true },
]);

const route = useRoute();
const toast = useToast();
const currentStatus = ref(props.order?.status);
let currentStatusIndex = statuses.value.findIndex(
  (status) => status.value === currentStatus.value,
);
const currentDelivery = ref(props.order?.delivery_man_id);
const currentTime = ref(props.order.est_time?.time);
const deliveries = ref([]);
const filteredDeliveries = ref([]);
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const UpdateOrderData = ref({
  est_time: null,
  status: null,
});
const branchTime = JSON.parse(localStorage.getItem("userData"));
const start = ref(props.start);
const end = ref(props.end);
const dialog = ref(false),
  deliveryLoading = ref(false),
  orderLoading = ref(false);
const UpdateOrder = async () => {
  UpdateOrderData.value.est_time = currentTime.value;
  UpdateOrderData.value.status = currentStatus.value;
  try {
    await axios.post(
      `/restaurant-apis/orders/${route.params.id}`,
      UpdateOrderData.value,
    );
    currentStatusIndex = statuses.value.findIndex(
      (status) => status.value === currentStatus.value,
    );
    toast.success("Order Updated Successfully");
    dialog.value = false;
  } catch (error) {
    toast.error(error.message);
    dialog.value = false;
  }
};
const selectStatus = (t, index) => {
  currentStatus.value = t;
  statuses.value[index + 1].itemDisabled = false;
  statuses.value[index - 1].itemDisabled = true;
  statuses.value.forEach((statue, i) => {
    if (statue.value === currentStatus.value) {
      statue.itemDisabled = false;
    }
  });
  statuses.value[4].itemDisabled = true;
  statuses.value[5].itemDisabled = true;
  statuses.value[6].itemDisabled = true;
};

const setStatus = () => {
  if (
    currentStatus.value !== "created" &&
    currentStatus.value !== "delivered"
  ) {
    dialog.value = true;
  }
};

const FetchDeliveries = () => {
  axios
    .get("/restaurant-apis/deliverymen")
    .then((response) => {
      deliveries.value = response.data.data;
      filteredDeliveries.value = deliveries.value.filter(
        (delivery) =>
          delivery.is_active === 1 || delivery.id === currentDelivery.value,
      );
    })
    .catch((error) => {});
};

const DeliverymanData = ref({
  order_id: route.params.id,
  delivery_man_id: currentDelivery,
});

const UpdateOrderDeliveryman = () => {
  axios
    .put("/restaurant-apis/assign/delivery", DeliverymanData.value)
    .then((response) => {
      filteredDeliveries.value = deliveries.value.filter(
        (delivery) => delivery.is_active === 1,
      );
      toast.success("Deliveryman Updated Successfully");
    })
    .catch((error) => {
      toast.error(error.message);
    });
};
const isDeliveryDisabled = computed(() => {
  return currentStatus.value !== "ready_for_delivery";
});

// Watch for changes in currentDelivery
watch(currentDelivery, (newDelivery, oldDelivery) => {
  // Perform actions when currentDelivery changes
  if (oldDelivery !== undefined) UpdateOrderDeliveryman();
});

// Watch for changes in currentStatus
watch(currentStatus, (newStatus, oldStatus) => {
  // Perform actions when currentStatus changes
  if (oldStatus !== undefined) setStatus();
});

onMounted(() => {
  if (userRole == "restaurant") {
    FetchDeliveries();
    setTimeout(() => {
      if (currentStatusIndex !== -1) {
        statuses.value[currentStatusIndex].itemDisabled = false;
        statuses.value[currentStatusIndex + 1].itemDisabled = false;
        statuses.value[4].itemDisabled = true;
        statuses.value[5].itemDisabled = true;
        statuses.value[6].itemDisabled = true;
      }
    }, 2000);
  }
});
</script>
<template>
  <VDialog v-model="dialog" persistent class="v-dialog-sm">
    <!-- Dialog Content -->
    <VCard title="Delivery Time">
      <VCardText>
        {{ $t("Are you sure that you want to change Status") }}
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn color="secondary" variant="tonal" @click="dialog = false">
          {{ $t("Cancel") }}
        </VBtn>
        <VBtn @click="UpdateOrder" :loading="orderLoading">
          {{ $t("Confirm") }}
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
  <VCol
    class="mt-6 px-5 rounded pb-8 w-100 mx-auto"
    style="background-color: rgb(var(--v-theme-surface))"
  >
    <p class="text-h4 pt-3 mb-3">{{ $t("Status") }}</p>
    <VCol>
      <VRow justify="space-between" align="center">
        <VSelect
          :items="statuses"
          item-value="value"
          item-title="name"
          :item-props="true"
          v-model="currentStatus"
          prepend-inner-icon="tabler-activity-heartbeat"
          placeholder="Status"
          label="Status"
          style="width: 100%"
          variant="outlined"
        >
          <template v-slot:item="{ item, index }">
            <v-list-item
              :disabled="item.raw.itemDisabled || item.raw?.disabled"
              :active="item.value === currentStatus"
              class="hoverEffect"
              @click="selectStatus(item.value, index)"
            >
              {{ item.title }}
            </v-list-item>
          </template>
        </VSelect>
      </VRow>
      <VRow justify="space-between" align="center" class="mt-7">
        <VSelect
          :disabled="isDeliveryDisabled"
          :items="filteredDeliveries"
          item-value="id"
          item-title="name"
          item-disabled="itemDisabled"
          disable-lock
          :return-object="false"
          v-model="currentDelivery"
          prepend-inner-icon="tabler-truck-delivery"
          placeholder="Delivery"
          label="Delivery"
          style="width: 100%"
          variant="outlined"
          @update:model-value="UpdateOrderDeliveryman"
        />
      </VRow>
      <VRow justify="space-between" align="center" class="mt-7">
        <!-- TASK: [SAB-563] Restaurant and Agent shouldn't have time -->
        <!-- :disabled="currentStatusIndex > 3" -->
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
            minTime: branchTime.b_start,
            maxTime: branchTime.b_end,
          }"
        />
        <VBtn
          class="mt-4"
          block
          @click="UpdateOrder"
          :loading="orderLoading"
          :disabled="order.status == 'delivered' || order.status == 'paid'"
          >{{ $t("Save") }}</VBtn
        >
      </VRow>
    </VCol>
  </VCol>
</template>
