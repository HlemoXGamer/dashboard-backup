<script setup>
import { show as showAdmin } from "@/apis/admin/vouchers";
import { show as showMarkter } from "@/apis/markter/vouchers";
import { useRoute } from "vue-router";
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const voucherId = useRoute().params.id;
const form = ref({
  v_name: "",
  v_code: "",
  v_prefix: null,
  v_description_ar: "",
  v_description_en: "",
  v_limit: "",
  v_min_total: "",
  v_amount: "",
  v_type: "",
  v_time_period_start: "",
  v_time_period_end: "",
  v_date_period_start: "",
  v_date_period_end: "",
  v_is_active: 0,
  v_usage: "",
});
const _getVoucher = async () => {
  if (userRole == 'admin') {
    await showAdmin(voucherId).then((res) => {
    let {
      v_name,
      v_code,
      v_prefix,
      v_description_ar,
      v_description_en,
      v_limit,
      v_min_total,
      v_amount,
      v_type,
      v_type_name,
      v_time_period_start,
      v_time_period_end,
      v_date_period_start,
      v_date_period_end,
      v_is_active,
      v_orders,
      v_usage,
    } = res.data.data;

    form.value = {
      v_name,
      v_code,
      v_prefix,
      v_description_ar,
      v_description_en,
      v_limit,
      v_min_total,
      v_amount,
      v_type,
      v_type_name,
      v_time_period_start,
      v_time_period_end,
      v_date_period_start,
      v_date_period_end,
      v_is_active,
      v_orders,
      v_usage,
    };
  });
  }
  else if (userRole == 'markter') {
    await showMarkter(voucherId).then((res) => {
    let {
      v_name,
      v_code,
      v_prefix,
      v_description_ar,
      v_description_en,
      v_limit,
      v_min_total,
      v_amount,
      v_type,
      v_type_name,
      v_time_period_start,
      v_time_period_end,
      v_date_period_start,
      v_date_period_end,
      v_is_active,
      v_orders,
      v_usage,
    } = res.data.data;

    form.value = {
      v_name,
      v_code,
      v_prefix,
      v_description_ar,
      v_description_en,
      v_limit,
      v_min_total,
      v_amount,
      v_type,
      v_type_name,
      v_time_period_start,
      v_time_period_end,
      v_date_period_start,
      v_date_period_end,
      v_is_active,
      v_orders,
      v_usage,
    };
  });
  }
};

onMounted(() => {
    _getVoucher();
});
</script>
<template>
  <VRow class="mt-4 px-4" justify="space-around">
    <VCol class="pt-0">
      <VoucherSummary :data="form" />
      <VCol
        class="px-5 rounded mt-10"
        style="background-color: rgb(var(--v-theme-surface))"
      >
        <p class="text-h4 pt-3 pb-2">{{ $t('Orders') }}</p>
        <VouchersOrdersTable :items="form.v_orders" />
      </VCol>
    </VCol>
  </VRow>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
  roles: ["admin", "markter"]
</route>

<style lang="scss" scoped>
.app-picker-field {
  width: 49%;
}
</style>
