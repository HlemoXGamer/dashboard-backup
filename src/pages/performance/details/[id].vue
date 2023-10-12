<script setup>
import { show } from "@/apis/admin/orders";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const orderId = useRoute().params.id;
const order = ref([]);
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;

const resolveStatusVariant = (status) => {
  if (status == "created") {
    return {
      color: "warning",
      text: "Created",
    };
  } else if (status == "ready_for_delivery") {
    return {
      color: "#2FE9D0",
      text: "Ready For delivery",
    };
  } else if (status == "in_progress") {
    return {
      color: "#E9982F",
      text: "In Progress",
    };
  } else if (status == "cancelled") {
    return {
      color: "danger",
      text: "Cancelled",
    };
  } else if (status == "on_they_way") {
    return {
      color: "grey lighten-3 black--text",
      text: "On The Way",
    };
  }
};

const _getOrder = async () => {
  await show(orderId).then((res) => {
    order.value = res.data.data;
  });
};

const getStatusTime = (statuses, status) => {
  const filteredStatus = statuses.filter((st) => st.status == status);
  if (filteredStatus.length > 0) {
    return statuses.filter((st) => st.status == status)[0].time;
  } else {
    return 0;
  }
};

onMounted(() => {
  if (userRole == "admin") {
    _getOrder();
  }
});
</script>
<template>
  <div>
    <VRow class="mt-4 px-2" justify="space-around">
      <VCol class="pt-0" :cols="$vuetify.display.smAndDown ? 12 : 8">
        <VRow align="center" justify="space-between" class="mx-0 my-0">
          <p class="text-h3 pt-3 pb-0 text-left">#{{ order.id }}</p>
          <strong class="text-h5 pt-3 pb-0 text-right">{{ order.temp }}</strong>
        </VRow>
        <OrderDetails :products="order.products" :status="order.status" />

        <VRow align="start" justify="space-between" class="mx-0 my-0">
          <VCol
            class="mt-7 px-5 rounded pb-7 me-2"
            style="background-color: rgb(var(--v-theme-surface))"
          >
            <VRow class="px-4 pt-3" align="center" justify="space-between">
              <p class="text-h4 pt-3 mb-4">Address Details</p>
            </VRow>
            <VCol>
              <p class="text-h6 pt-3 mb-0">
                Customer Name : {{ order.customer_name }}
              </p>
              <p class="text-h6 pt-3 mb-0">
                {{ order.address_city }} , {{ order.address_area_name }}
              </p>
              <p class="text-h6 pt-3 mb-0">
                Building Number {{ order.address_building_no }}, Floor
                {{ order.address_floor }}, Apartment
                {{ order.address_apartment }}
              </p>
              <p class="text-h6 pt-3 mb-0">Block Number {{ order.block_no }}</p>
              <p class="text-h6 pt-3 mb-0">
                Phone Number : {{ order.address_phone }}
              </p>
            </VCol>
          </VCol>

          <VCol
            class="mt-7 px-5 rounded pb-7 ms-2"
            style="background-color: rgb(var(--v-theme-surface))"
          >
            <VRow class="px-4 pt-3" align="center" justify="space-between">
              <p class="text-h4 pt-3 mb-4">Delivery Man Details</p>
            </VRow>
            <VCol>
              <p class="text-h6 pt-3 mb-0">
                {{ order.deliveryMan ? order.deliveryMan.name : "" }}
              </p>
              <p class="text-h6 pt-3 mb-0">
                {{ order.deliveryMan ? order.deliveryMan.phone : "" }}
              </p>
              <p class="text-h6 pt-3 mb-0">
                {{
                  order.deliveryMan
                    ? order.deliveryMan.days.map((day) => day.name).join(" ,")
                    : ""
                }}
              </p>
            </VCol>
          </VCol>
        </VRow>

        <VCol
          class="mt-7 px-5 rounded pb-7"
          style="background-color: rgb(var(--v-theme-surface))"
        >
          <p class="text-h4 pt-3 mb-1">Customer Review</p>
          <VCol>
            <p
              class="text-h5 pt-0 mb-0"
              :class="order.review !== null ? 'text-left' : 'text-center'"
            >
              {{ order.complain !== null ? order.complain : "No Reviews Yet!" }}
            </p>
          </VCol>
        </VCol>
      </VCol>

      <VCol class="pt-0" :cols="$vuetify.display.smAndDown ? 12 : 4">
        <PaymentDetails
          :total="order.total"
          :paymentMethod="order.payment_method"
        />

        <VCol
          class="mt-6 px-5 rounded pb-7 w-100 mx-auto"
          style="background-color: rgb(var(--v-theme-surface))"
        >
          <p class="text-h4 pt-3 mb-0">Order Statuses</p>
          <VCol>
            <VRow class="mt-0">
              <VCard
                class="w-100 px-0 py-0"
                variant="flat"
                v-for="status in order.order_statuses"
              >
                <VCardText>
                  <VRow align="center" justify="space-between">
                    <VChip
                      size="default"
                      :color="resolveStatusVariant(status.status).color"
                      >{{ resolveStatusVariant(status.status).text }}</VChip
                    >
                    <span>{{
                      getStatusTime(order.order_statuses, status.status)
                    }}</span>
                  </VRow>
                </VCardText>
              </VCard>
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
  roles: ["admin"]
</route>

<style lang="scss" scoped>
.app-picker-field {
  width: 49%;
}
</style>
