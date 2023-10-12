<script setup>
import { get as getBranches } from "@/apis/admin/branches";
import { get as getAdminDeliveries } from "@/apis/admin/deliveries";
import { get as getRestaurantDeliveries } from "@/apis/restuarant/deliveries";

const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const loading = ref(false);
const deliveries = ref([]);
const searchTerm = ref("");
const branches = ref([]);
const branchesdata = ref([]);
const selectedBranch = ref();

const _getBranches = () => {
  getBranches().then(({ data, meta }) => {
    branches.value = data.data.map((branch) => branch.name_en);
    branchesdata.value = data.data;
  });
};
const _getDeliveries = async () => {
  loading.value = true;
  if (userRole == "admin") {
    await getAdminDeliveries().then(({ data, meta }) => {
      deliveries.value = data.data;
    });
  } else if (userRole == "restaurant") {
    await getRestaurantDeliveries().then(({ data, meta }) => {
      deliveries.value = data.data;
    });
  }
  loading.value = false;
};

onMounted(() => {
  if (userRole == "admin") {
    _getBranches();
  }
  _getDeliveries();
});
</script>

<template>
  <VRow class="mt-4 px-4">
    <VCol style="background-color: rgb(var(--v-theme-surface))" class="rounded">
      <VRow class="pt-5 pb-2 px-5" align="center" justify="space-between">
        <p class="text-h4">{{ $t('Deliveries') }}</p>
        <!-- Appears Only In Admin -->
        <VBtn
          v-if="userRole == 'admin'"
          @click="$router.push('deliveries/add/')"
        >
          <VIcon start icon="tabler-plus" />{{ $t('Add Delivery') }}
        </VBtn>
        <!-- Appears Only In Admin -->
      </VRow>
      <VRow class="px-7" align="center" justify="start">
        <AppTextField
          v-model="searchTerm"
          :placeholder="$t('Search for a Delivery')"
          class="mx-2 my-2"
          style="width: 300px; max-width: 300px"
        ></AppTextField>
        <!-- Appears Only In Admin -->
        <AppCombobox
          v-if="userRole == 'admin'"
          v-model="selectedBranch"
          :items="branches"
          variant="outlined"
          clearable
          :placeholder="$t('Branches')"
          class="flex-grow-0 mx-2 my-2"
          style="width: 300px; max-width: 300px"
        />
        <!-- Appears Only In Admin -->
      </VRow>
      <DeliveriesTable
        :loading="loading"
        :deliveries="deliveries"
        :search="searchTerm + ',' + selectedBranch"
      />
    </VCol>
  </VRow>
</template>
