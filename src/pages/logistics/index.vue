<script setup>
import { get as getLogistics } from "@/apis/admin/logistics";

const logistics = ref([]);
const searchTerm = ref("");
const loading = ref(false);
const _getLogistics = () => {
  loading.value = true;
  getLogistics().then(({ data, meta }) => {
    logistics.value = data.data;
  }).finally(() => {
    loading.value = false;
  });
};

onMounted(() => {
    _getLogistics();
});
</script>

<template>
  <VRow class="mt-4 px-4">
    <VCol style="background-color: rgb(var(--v-theme-surface))" class="rounded">
      <p class="text-h4 pt-3 pb-2 px-3">{{ $t('Logistics') }}</p>
      <VRow class="px-7" align="center" justify="space-between">
        <VRow align="center" justify="center" justify-lg="start">
          <AppTextField
            v-model="searchTerm"
            :placeholder="$t('Search for a Logistic')"
            class="mx-2"
            style="width: 300px; max-width: 300px"
          ></AppTextField>
        </VRow>
        <VBtn @click="$router.push('logistics/add/')"
          ><VIcon start icon="tabler-plus" />{{ $t('Add Logistic') }}</VBtn
        >
      </VRow>
      <LogisticsTable :loading="loading" :logistics="logistics" :search="searchTerm" />
    </VCol>
  </VRow>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
  roles: ["admin"]
</route>
