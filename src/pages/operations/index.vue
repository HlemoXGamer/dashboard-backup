<script setup>
import { get as getOperations } from "@/apis/admin/operations";

const operations = ref([]);
const searchTerm = ref("");
const loading = ref(false);
const _getOperations = () => {
  loading.value = true;
  getOperations().then(({ data, meta }) => {
    operations.value = data.data;
  }).finally(() => {
    loading.value = false;
  });
};

onMounted(() => {
    _getOperations();
});
</script>

<template>
  <VRow class="mt-4 px-4">
    <VCol style="background-color: rgb(var(--v-theme-surface))" class="rounded">
      <p class="text-h4 pt-3 pb-2 px-3">{{ $t('Operations') }}</p>
      <VRow class="px-7" align="center" justify="space-between">
        <VRow align="center" justify="center" justify-lg="start">
          <AppTextField
            v-model="searchTerm"
            :placeholder="$t('Search for an Operation')"
            class="mx-2"
            style="width: 300px; max-width: 300px"
          ></AppTextField>
        </VRow>
        <VBtn @click="$router.push('operations/add/')"
          ><VIcon start icon="tabler-plus" />{{ $t('Add Operation') }}</VBtn
        >
      </VRow>
      <OperationsTable :loading="loading" :operations="operations" :search="searchTerm" />
    </VCol>
  </VRow>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
  roles: ["admin"]
</route>
