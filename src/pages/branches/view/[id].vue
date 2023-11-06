<script setup>
import { show as showBranch } from "@/apis/admin/branches";
import { getUnique as getAreas } from "@/apis/admin/areas";

import { useRoute } from "vue-router";
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const voucherId = useRoute().params.id;
const areasData = ref([]);

const form = ref({
  start: "",
  end: "",
  name_en: "",
  name_ar: "",
  phone_no: "",
  city_id: null,
  areas: [],
  street_name: "",
  building_no: "",
  email: "",
  password: "",
  est_time: "",
  delivery_fee: 0.5,
  code: "",
  working_days: [],
  is_active: 0,
});

const selectedButton = ref("today");
const getButtonVariant = computed(() => {
  return (buttonType) => {
    return selectedButton.value === buttonType ? "elevated" : "tonal";
  };
});
const branchId = useRoute().params.id;
const _showBranch = async () => {
  await showBranch(branchId).then((res) => {
    let {
      start,
      end,
      name_en,
      name_ar,
      phone_no,
      areas,
      city_id,
      street_name,
      building_no,
      email,
      password,
      est_time,
      delivery_fee,
      code,
      days,
      is_active,
    } = res.data.data;

    form.value = {
      start,
      end,
      name_en,
      name_ar,
      phone_no,
      areas,
      city_id,
      street_name,
      building_no,
      email,
      password,
      est_time,
      delivery_fee,
      code,
      is_active,
    };
    form.value.working_days = days.map((day) => day.id);
    form.value.email = res.data.data.user.email;

    getAreas()
      .then(({ data, meta }) => {
        areasData.value = data.data;
        form.value.areas.forEach((area) => {
          areasData.value.push(area);
        });
      })
      .finally(() => {
        form.value.areas = form.value.areas.map((area) => area.id);
      });
  });
};

onMounted(() => {
  _showBranch();
});
</script>
<template>
  <VRow class="mt-4 px-4" justify="space-around">
    <VCol class="pt-0">
      <BranchesViewSummary :data="form" />
      <VRow class="gap-5 pt-16 pl-3 pb-0">
        <VBtn
          :variant="getButtonVariant('today')"
          @click="selectedButton = 'today'"
          >Today</VBtn
        >
        <VBtn
          :variant="getButtonVariant('yesterday')"
          @click="selectedButton = 'yesterday'"
          >Yesterday</VBtn
        >
        <VBtn
          :variant="getButtonVariant('custom')"
          @click="selectedButton = 'custom'"
          >Custom</VBtn
        >
      </VRow>
      <VCol
        class="px-5 rounded mt-10"
        style="background-color: rgb(var(--v-theme-surface))"
      >
        <p class="text-h4 pt-3 pb-2">{{ $t("Branches Log") }}</p>
        <BranchesViewTable :items="form.v_orders" />
      </VCol>
    </VCol>
  </VRow>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
  roles: ["admin"]
</route>

<style lang="scss" scoped>
.app-picker-field {
  width: 49%;
}
</style>
