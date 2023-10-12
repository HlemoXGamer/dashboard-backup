<template>
  <VCol cols="12">
    <VTable class="text-no-wrap" height="500">
      <thead>
        <tr>
          <th class="text-uppercase">{{ $t('Order Id') }}</th>
          <th class="text-uppercase">{{ $t('Description') }}</th>
          <th class="text-uppercase text-center">{{ $t('Change At') }}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in items" :key="item.orderID">
          <td>
            {{ item.orderID }}
          </td>
          <td>
            {{ item.description }}
          </td>
          <td class="text-center">
            {{ item.changeDate }}
          </td>
        </tr>
      </tbody>
    </VTable>
  </VCol>
</template>

<script setup>
import axios from "@axios";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const userRole = JSON.parse(localStorage.getItem("userData")).type;
const route = useRoute();

const items = ref([]);
const headers = computed(() => [
  {
    title: "history",
    key: "historyId",
  },
  {
    title: "order",
    key: "orderID",
  },
  {
    title: "User",
    key: "userID",
  },
  {
    title: "Description",
    key: "description",
  },
  {
    title: "Change Date",
    key: "changeDate",
  },
])

const FetchOrderHistory = () => {
  axios
    .get(`${userRole == 'admin' ? '' : userRole == 'logistic' ? 'logistic' : userRole == 'operation' ? 'operation' : ''}/order-history`, {
      params: {
        orderId: route.params.id,
      },
    })
    .then((response) => {
      const data = response.data.data;
      items.value = data;
    });
};

onMounted(() => {
  FetchOrderHistory();
});
</script>
