<script setup>
import { get as getUsers } from "@/apis/admin/users";

const loading = ref(false);
const users = ref([]);
const searchTerm = ref("");
const _getUsers = () => {
  loading.value = true
  getUsers().then(({ data, meta }) => {
    users.value = data.data;
  }).finally(() => {
    loading.value = false;
  });
};

onMounted(() => {
    _getUsers();
});
</script>

<template>
  <VRow class="mt-4 px-4">
    <VCol style="background-color: rgb(var(--v-theme-surface))" class="rounded">
      <p class="text-h4 pt-3 pb-2 px-3">{{ $t('Users') }}</p>
      <VRow class="px-7 mt-3" align="center" justify="start">
        <VRow align="center" justify="center" justify-lg="start">
          <AppTextField
            v-model="searchTerm"
            :placeholder="$t('Search for a User')"
            class="mx-2"
            style="width: 300px; max-width: 300px"
          ></AppTextField>
        </VRow>
      </VRow>
      <UsersTable :loading="loading" :users="users" :search="searchTerm" />
    </VCol>
  </VRow>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
  roles: ["admin"]
</route>
