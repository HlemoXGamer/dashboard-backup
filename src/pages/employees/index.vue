<script setup>
import { get as getEmployees } from "@/apis/admin/employees";
const employees = ref([]);
const searchTerm = ref("");
const loading = ref(false);
const _getEmployees = () => {
  loading.value = true;
  getEmployees().then(({ data, meta }) => {
    employees.value = data.data;
  }).finally(() => {
    loading.value = false;
  });
};

onMounted(() => {
    _getEmployees();
});
</script>
<template>
  <VRow class="mt-4 px-4">
    <VCol style="background-color: rgb(var(--v-theme-surface))" class="rounded">
      <p class="text-h4 pt-3 pb-2 px-3">{{ $t('Employees') }}</p>
      <VRow
        class="ps-lg-1 pe-lg-5 ps-md-1 pe-md-5 ps-sm-1 pe-sm-5 mx-0 w-100"
        align="center"
        justify="space-between"
      >
        <AppTextField
          prepend-inner-icon="tabler-search"
          v-model="searchTerm"
          :placeholder="$t('Search for an Employee')"
          class="mx-lg-2"
          :class="$vuetify.display.xs ? 'w-100' : ''"
          :style="$vuetify.display.xs ? 'width: 100%;' : 'width: 300px;'"
        ></AppTextField>
        <VBtn
          :block="$vuetify.display.xs"
          class="mt-lg-0 mt-md-0 mt-sm-0 mt-3"
          @click="$router.push('employees/add/')"
          ><VIcon start icon="tabler-plus" />{{ $t('Add Employee') }}</VBtn
        >
      </VRow>
      <EmployeesTable :loading="loading" :employees="employees" :search="searchTerm" />
    </VCol>
  </VRow>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
  roles: ["admin"]
</route>
