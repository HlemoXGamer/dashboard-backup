<script setup>
import { get as getAgents } from "@/apis/admin/agents";

const agents = ref([]);
const searchTerm = ref("");
const loading = ref(false);
const _getAgents = () => {
  loading.value = true;
  getAgents().then(({ data, meta }) => {
    agents.value = data.data;
  }).finally(() => {
    loading.value = false;
  });
};

onMounted(() => {
    _getAgents();
});
</script>

<template>
  <VRow class="mt-4 px-4">
    <VCol style="background-color: rgb(var(--v-theme-surface))" class="rounded">
      <p class="text-h4 pt-3 pb-2 px-3">{{ $t('Agents') }}</p>
      <VRow class="px-7" align="center" justify="space-between">
        <VRow align="center" justify="center" justify-lg="start">
          <AppTextField
            v-model="searchTerm"
            :placeholder="$t('Search for an Agent')"
            class="mx-2"
            style="width: 300px; max-width: 300px"
          ></AppTextField>
        </VRow>
        <VBtn @click="$router.push('agents/add/')"
          ><VIcon start icon="tabler-plus" />{{ $t('Add Agent') }}</VBtn
        >
      </VRow>
      <AgentsTable :loading="loading" :agents="agents" :search="searchTerm" />
    </VCol>
  </VRow>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
  roles: ["admin"]
</route>
