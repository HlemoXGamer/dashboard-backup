<script setup>
import { get as getMarketers } from "@/apis/admin/markters";

const marketers = ref([]);
const searchTerm = ref("");
const loading = ref(false);
const _getMarketers = () => {
  loading.value = true;
  getMarketers().then(({ data, meta }) => {
    marketers.value = data.data;
  }).finally(() => {
    loading.value = false;
  });
};

onMounted(() => {
    _getMarketers();
});
</script>

<template>
  <VRow class="mt-4 px-4">
    <VCol style="background-color: rgb(var(--v-theme-surface))" class="rounded">
      <p class="text-h4 pt-3 pb-2 px-3">{{ $t('Marketers') }}</p>
      <VRow class="px-7" align="center" justify="space-between">
        <VRow align="center" justify="center" justify-lg="start">
          <AppTextField
            v-model="searchTerm"
            :placeholder="$t('Search for a Marketer')"
            class="mx-2"
            style="width: 300px; max-width: 300px"
          ></AppTextField>
        </VRow>
        <VBtn @click="$router.push('marketers/add/')"
          ><VIcon start icon="tabler-plus" />{{ $t('Add Marketer') }}</VBtn
        >
      </VRow>
      <MarketersTable :loading="loading" :marketers="marketers" :search="searchTerm" />
    </VCol>
  </VRow>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
  roles: ["admin"]
</route>
