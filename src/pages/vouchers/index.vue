<script setup>
import { get as getAdminVouchers } from "@/apis/admin/vouchers";
import { get as getMarkterVouchers } from "@/apis/markter/vouchers";
import { useI18n } from "vue-i18n";
const t = useI18n().t;
const vouchers = ref([]);
const searchTerm = ref("");
const loading = ref(false);
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const _getVouchers = async () => {
  loading.value = true;
  if (userRole == "admin") {
    await getAdminVouchers().then(({ data, meta }) => {
      vouchers.value = data.data;
    });
  } else if (userRole == "markter") {
    await getMarkterVouchers().then(({ data, meta }) => {
      vouchers.value = data.data;
    });
  }

  loading.value = false;
};

onMounted(() => {
  _getVouchers();
});
</script>
<template>
  <VRow class="mt-4 px-4">
    <VCol style="background-color: rgb(var(--v-theme-surface))" class="rounded">
      <p class="text-h4 pt-3 pb-2 px-3">{{ t("Vouchers") }}</p>
      <VRow
        class="ps-lg-1 pe-lg-5 ps-md-1 pe-md-5 ps-sm-1 pe-sm-5 mx-0 w-100"
        align="center"
        justify="space-between"
      >
        <AppTextField
          prepend-inner-icon="tabler-search"
          v-model="searchTerm"
          :placeholder="t('Search for a Voucher')"
          class="mx-lg-2"
          :class="$vuetify.display.xs ? 'w-100' : ''"
          :style="$vuetify.display.xs ? 'width: 100%;' : 'width: 300px;'"
        ></AppTextField>
        <VBtn
          :block="$vuetify.display.xs"
          class="mt-lg-0 mt-md-0 mt-sm-0 mt-3"
          @click="$router.push('vouchers/add/')"
          ><VIcon start icon="tabler-plus" />{{ t("Add Voucher") }}</VBtn
        >
      </VRow>
      <VouchersTable :loading="loading" :vouchers="vouchers" :search="searchTerm" />
    </VCol>
  </VRow>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
  roles: ["admin", "markter"]
</route>
