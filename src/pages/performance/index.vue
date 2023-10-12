<script setup>
import { get as getAreas } from "@/apis/admin/areas";
import { get as getBranches } from "@/apis/admin/branches";
import { get as getCities } from "@/apis/admin/cities";
const branches = ref([]);
const cities = ref([]);
const areas = ref([]);
const searchTerm = ref("");
const selectedArea = ref([]);
const selectedCity = ref([]);
const loading = ref(false);
const _getBranches = () => {
  loading.value = true;
  getBranches().then(({ data, meta }) => {
    branches.value = data.data;
  }).finally(() => {
    loading.value = false;
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

onMounted(() => {
    _getBranches();
    _getCities();
    _getAreas();
});
</script>

<template>
  <VRow class="mt-4 px-4">
    <VCol style="background-color: rgb(var(--v-theme-surface))" class="rounded">
      <VRow class="pt-5 pb-2 px-5" align="center" justify="space-between">
        <p class="text-h4">Branches Performance</p>
      </VRow>
      <VRow class="px-7" align="center" justify="space-between">
        <AppTextField
          v-model="searchTerm"
          placeholder="Search for a Branch"
          class="mx-2 my-2"
          style="width: 300px; max-width: 300px"
        ></AppTextField>
        <VCombobox
          v-model="selectedCity"
          multiple
          :items="cities"
          variant="outlined"
          label="Cities"
          clearable
          class="flex-grow-0 mx-2 my-2"
          style="width: 300px; max-width: 300px"
        />
        <VCombobox
          v-model="selectedArea"
          multiple
          :disabled="!selectedCity.length"
          :items="areas"
          variant="outlined"
          label="Areas"
          class="flex-grow-0 mx-2 my-2"
          clearable
          style="width: 300px; max-width: 300px"
        />
      </VRow>
      <BranchesTable
        :loading="loading"
        :performance="true"
        :branches="branches"
        :search="searchTerm + ',' + selectedArea.join('-') + ',' + selectedCity"
      />
    </VCol>
  </VRow>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
  roles: ["admin"]
</route>
