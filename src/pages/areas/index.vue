<script setup>
import { get as getAreas } from "@/apis/admin/areas";
const areasData = ref([]);
const searchTerm = ref("");
const loading = ref(false);

const _getAreas = () => {
  loading.value = true;
  getAreas().then(({ data, meta }) => {
    areasData.value = data.data;
  }).finally(() => {
    loading.value = false;
  });
};

onMounted(() => {
    _getAreas();
});
</script>

<template>
  <VRow class="mt-4 px-4">
    <VCol style="background-color: rgb(var(--v-theme-surface))" class="rounded">
      <p class="text-h4 pt-3 pb-2 px-3">{{ $t("Areas") }}</p>
      <VRow
        class="ps-lg-1 pe-lg-5 ps-md-1 pe-md-5 ps-sm-1 pe-sm-5 mx-0 w-100"
        align="center"
        justify="space-between"
      >
        <AppTextField
          v-model="searchTerm"
          :placeholder="$t('Search for an Area')"
          class="mx-lg-2"
          :class="$vuetify.display.xs ? 'w-100' : ''"
          :style="$vuetify.display.xs ? 'width: 100%;' : 'width: 300px;'"
        ></AppTextField>
        <VBtn
          :block="$vuetify.display.xs"
          class="mt-lg-0 mt-md-0 mt-sm-0 mt-3"
          @click="$router.push('areas/add/')"
          ><VIcon start icon="tabler-plus" />{{ $t("Add Area") }}</VBtn
        >
      </VRow>
      <AreasTable :loading="loading" :areas="areasData" :search="searchTerm" />
    </VCol>
  </VRow>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
  roles: ["admin"]
</route>
