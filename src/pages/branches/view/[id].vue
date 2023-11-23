<script setup>
import { show as showBranch } from "@/apis/admin/branches";
import { getUnique as getAreas } from "@/apis/admin/areas";
import { getBranchesLog } from '@/apis/admin/branches'

import { useRoute } from "vue-router";
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const areasData = ref([]);
const branchesLog = ref([]);
const dateDialog = ref(false);
const pickedDate = ref(null);
const loading = ref(false);
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
      days,
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
    // form.value.working_days = days.map((day) => day);
    form.value.email = res.data.data.user.email;

    getAreas()
      .then(({ data, meta }) => {
        areasData.value = data.data;
      })
  });
};

const getStats = (custom, pickedDate) => {
    loading.value = true;
    if(custom === true){
      dateDialog.value = false;
        if(userRole == "admin"){
            getBranchesLog(`${selectedButton.value}&branchId=${branchId}${pickedDate !== null ? '&day=' + pickedDate : ''}`).then(({data}) => {
                branchesLog.value = data.data;
            }).finally(() => {
                loading.value = false;
            })
        }
    }else{
        if(userRole == "admin"){
            getBranchesLog(`${selectedButton.value}&branchId=${branchId}`).then(({data}) => {
              branchesLog.value = data.data;
            }).finally(() => {
                loading.value = false;
            })
        }
    }
}

const closeDateDialog = () => {
  dateDialog.value = false;
  selectedButton.value = "today";
  pickedDate.value = null;
  getStats(true);
}

const isCustom = (type) => {
  if(type == selectedButton.value && type !== "custom") return;
  selectedButton.value = type;
    setTimeout(() => {
        if(type == "custom"){
            dateDialog.value = true;
        }else{
            getStats(false);
        }
    }, 100)
}

onMounted(() => {
  if (userRole === 'admin') {
    _showBranch();
    // _getBranchesLog();  
    getStats(false);
  }
});
</script>
<template>
  <div>
   <BranchesViewDialog @exit="getStats" v-model="dateDialog" @close="closeDateDialog" />
  <VRow class="mt-4 px-4" justify="space-around">
    <VCol class="pt-0">
      <BranchesViewSummary :data="form" :cities="cities" />
      <VRow class="gap-5 pt-16 pl-3 pb-0">
        <VBtn
        :disabled="loading"
          :variant="getButtonVariant('today')"
          @click="isCustom('today')"
          >Today</VBtn
        >
        <VBtn
        :disabled="loading"
          :variant="getButtonVariant('yesterday')"
          @click="isCustom('yesterday')"
          >Yesterday</VBtn
        >
        <VBtn
        :disabled="loading"
          :variant="getButtonVariant('custom')"
          @click="isCustom('custom')"
          >Custom</VBtn
        >
      </VRow>
      <VCol
        class="px-5 rounded mt-10"
        style="background-color: rgb(var(--v-theme-surface))"
      >
        <p class="text-h4 pt-3 pb-0">{{ $t("Branches Log") }}</p>
        <BranchesViewTable :data="branchesLog" :loading="loading" />
      </VCol>
    </VCol>
  </VRow>
</div>
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
