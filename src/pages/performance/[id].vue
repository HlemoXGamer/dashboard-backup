<script setup>
import { get as getAreas } from "@/apis/admin/areas";
import { get as getBranches } from "@/apis/admin/branches";
import { get as getCities } from "@/apis/admin/cities";
import { get as getOrders } from "@/apis/admin/orders";
import { useRoute } from "vue-router";
const branches = ref([]);
const cities = ref([]);
const areas = ref([]);
const searchTerm = ref(null);
const currentBranch = ref(null);
const branchId = useRoute().params.id;
const orders = ref([]);
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const _getBranches = () => {
  getBranches().then(({ data, meta }) => {
    branches.value = data.data;
    currentBranch.value = branches.value.filter(
      (branch) => branch.id == branchId,
    )[0];
  });
};

const _getAreas = () => {
  getAreas().then(({ data, meta }) => {
    areas.value = data.data.map((area) => area.name);
  });
};

const _getCities = () => {
  getCities().then(({ data, meta }) => {
    cities.value = data.data.map((city) => city.name);
  });
};

const _getOrders = () => {
  getOrders({ branch: branchId }).then(({ data, meta }) => {
    orders.value = data.data;
  });
};

onMounted(() => {
  if (userRole == "admin") {
    _getBranches();
    _getCities();
    _getAreas();
    _getOrders();
  }
});
</script>

<template>
  <VRow class="mt-4 px-4">
    <VCol style="background-color: rgb(var(--v-theme-surface))" class="rounded">
      <VRow class="pt-5 pb-0 px-5" align="center" justify="space-between">
        <p class="text-h4 pb-0 mb-2">
          {{ currentBranch !== null ? currentBranch["name_en"] : "" }}
        </p>
      </VRow>
      <VRow class="px-4" align="center" justify="start">
        <AppTextField
          v-model="searchTerm"
          placeholder="Search by Product name"
          class="mx-2 my-2"
          style="width: 300px; max-width: 300px"
        ></AppTextField>
        <!-- <AppTextField v-model="searchTerm" placeholder="Search by City" class="mx-2 my-2" style="width: 300px;max-width: 300px;"></AppTextField> -->
      </VRow>
      <OrdersTable :items="orders" :search="searchTerm" />
    </VCol>
  </VRow>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
  roles: ["admin"]
</route>
