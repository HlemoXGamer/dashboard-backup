<script setup>
import { get as getFinances } from "@/apis/admin/finances";

const finances = ref([]);
const searchTerm = ref("");
const loading = ref(false);
const _getFinances = () => {
  loading.value = true;
  getFinances().then(({ data, meta }) => {
    finances.value = data.data;
  }).finally(() => {
    loading.value = false;
  });
};

onMounted(() => {
    _getFinances();
});
</script>

<template>
  <VRow class="mt-4 px-4">
    <VCol style="background-color: rgb(var(--v-theme-surface))" class="rounded">
      <p class="text-h4 pt-3 pb-2 px-3">{{ $t('Finances') }}</p>
      <VRow class="px-7" align="center" justify="space-between">
        <VRow align="center" justify="center" justify-lg="start">
          <AppTextField
            v-model="searchTerm"
            :placeholder="$t('Search for a Finance')"
            class="mx-2"
            style="width: 300px; max-width: 300px"
          ></AppTextField>
        </VRow>
        <VBtn @click="$router.push('finances/add/')"
          ><VIcon start icon="tabler-plus" />{{ $t('Add Finance') }}</VBtn
        >
      </VRow>
      <FinancesTable :loading="loading" :finances="finances" :search="searchTerm" />
    </VCol>
  </VRow>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
  roles: ["admin"]
</route>
