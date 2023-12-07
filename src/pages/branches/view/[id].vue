<script setup>
import { show as showBranch } from "@/apis/admin/branches";
import { getUnique as getAreas } from "@/apis/admin/areas";
import {
  getBranchesLog,
  update as updateBranch,
} from '@/apis/admin/branches'
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";
const toast = useToast();
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
// Time Slots
const deliveryNowActive = ref(false);
const laterTodayActive = ref(false);
const preOrderActive = ref(false);

const selectedDate = ref(new Date().toISOString().substr(0, 10)); // default to today's date

const areasData = ref([]);
const branchesLog = ref([]);
const dateDialog = ref(false);
const pickedDate = ref(null);
const loading = ref(false);
const currentTab = ref('view');
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
  time_slots: [],
  order_types: [],
  delivery_types: [],
  slotsForSelectedDay: []
});

const selectedButton = ref("today");
const getButtonVariant = computed(() => {
  return (buttonType) => {
    return selectedButton.value === buttonType ? "elevated" : "tonal";
  };
});
const filterSlotsForSelectedDay = () => {
  if (form.value.time_slots && form.value.time_slots.length > 0) {
    form.value.slotsForSelectedDay = form.value.time_slots.filter(slot => slot.day === selectedDate.value);
  }
};
const branchId = useRoute().params.id;
const _showBranch = async () => {
  const response = await showBranch(branchId);
  const branchData = response.data.data;
  form.value = {
    ...branchData,
    working_days: branchData.days,
    deliveryNowActive,
    laterTodayActive,
    preOrderActive,
    code: 'Wassup',
    email: branchData.user.email,
  };

  getAreas()
    .then(({ data, meta }) => {
      areasData.value = data.data;
    })
};

const getStats = (custom, pickedDate) => {
  loading.value = true;
  if (custom === true) {
    dateDialog.value = false;
    if (userRole == "admin") {
      getBranchesLog(`${selectedButton.value}&branchId=${branchId}${pickedDate !== null ? '&day=' + pickedDate : ''}`).then(({ data }) => {
        branchesLog.value = data.data;
      }).finally(() => {
        loading.value = false;
      })
    }
  } else {
    if (userRole == "admin") {
      getBranchesLog(`${selectedButton.value}&branchId=${branchId}`).then(({ data }) => {
        branchesLog.value = data.data;
      }).finally(() => {
        loading.value = false;
      })
    }
  }
}

const _updateBranch = async () => {
  try {
    await updateBranch(branchId, {
      ...form.value,
      areas: form.value.areas.map((area) => area.id.toString()),
      working_days: form.value.working_days.map((day) => day.id.toString()),
      days: form.value.days.map((day) => day.id.toString()),
      user: form.value.user.id,
    });
    toast.success("Branch updated successfully");
    loading.value = false;
  } catch (err) {
    toast.error(err?.response?.data?.message);
    loading.value = false;
  }
};

const closeDateDialog = () => {
  dateDialog.value = false;
  selectedButton.value = "today";
  pickedDate.value = null;
  getStats(true);
}

const isCustom = (type) => {
  if (type == selectedButton.value && type !== "custom") return;
  selectedButton.value = type;
  setTimeout(() => {
    if (type == "custom") {
      dateDialog.value = true;
    } else {
      getStats(false);
    }
  }, 100)
}

watch(selectedDate, (newDate) => {
  // Filter the time slots based on the selected date
  const filteredSlots = form.value.time_slots.filter(slot => slot.day === newDate) || [];
  form.value.slotsForSelectedDay = filteredSlots;
});

watch(() => [form.value.time_slots, selectedDate.value], () => {
  filterSlotsForSelectedDay();
}, { immediate: true });

onMounted(() => {
  if (userRole === 'admin') {
    _showBranch().then(() => {
      // After fetching branch data, apply the filter
      filterSlotsForSelectedDay();
    });
    // _getBranchesLog();  
    getStats(false);
    const filteredSlots = form.value.time_slots.filter(slot => slot.day === selectedDate) || [];
    form.value.slotsForSelectedDay = filteredSlots;
  }
});

</script>
<template>
  <div>
    <BranchesViewDialog @exit="getStats" v-model="dateDialog" @close="closeDateDialog" />
    <VRow class="mt-4 px-4" justify="space-around">
      <VCol class="pt-0">
        <VCol class="py-5">
          <VTabs v-model="currentTab" class="v-tabs-pill">
            <VTab value="view">Update Branch</VTab>
            <VTab value="slots">Update Slots</VTab>
          </VTabs>
        </VCol>
        <VWindow v-model="currentTab">
          <VWindowItem value="view">
            <BranchesViewSummary :data="form" :cities="cities" />
            <VRow class="gap-5 pt-16 pl-3 pb-0">
              <VBtn :disabled="loading" :variant="getButtonVariant('today')" @click="isCustom('today')">Today</VBtn>
              <VBtn :disabled="loading" :variant="getButtonVariant('yesterday')" @click="isCustom('yesterday')">Yesterday
              </VBtn>
              <VBtn :disabled="loading" :variant="getButtonVariant('custom')" @click="isCustom('custom')">Custom</VBtn>
            </VRow>
            <VCol class="px-5 rounded mt-10" style="background-color: rgb(var(--v-theme-surface))">
              <p class="text-h4 pt-3 pb-0">{{ $t("Branches Log") }}</p>
              <BranchesViewTable :data="branchesLog" :loading="loading" />
            </VCol>
          </VWindowItem>
          <VWindowItem value="slots">
            <VCard rounded="lg" class="pb-6 px-0 mb-10" variant="flat">
              <VCardText>
                <VRow>
                  <VCol>
                    <p class="text-h3 py-1 mb-3">Order Type</p>
                  </VCol>
                </VRow>
                <VRow class="order-types">
                  <VCol v-for="orderType in form.order_types" :key="orderType.id" class="d-flex"
                    style="justify-content: center; align-items: center; gap: 20px">
                    <VBtn :disabled="!orderType.status">{{ orderType.name }}</VBtn>
                    <VSwitch v-model="orderType.status" :inset="false" :true-value="1" :false-value="0" readonly />
                  </VCol>
                </VRow>
              </VCardText>
            </VCard>

            <VCard rounded="lg" class="pb-6 px-0" variant="flat">
              <VCardText>
                <VRow style="display: flex; justify-content: space-between; align-items: center;">
                  <VCol>
                    <p class="text-h3 py-1 mb-3">Branch Slots</p>
                  </VCol>
                  <VCol>
                    <AppDateTimePicker v-model="selectedDate" :config="{
                      minDate: new Date().toISOString().substr(0, 10),
                      maxDate: new Date(new Date().setDate(new Date().getDate() + 6)).toISOString().substr(0, 10),
                    }" />
                  </VCol>
                </VRow>
                <VRow>
                  <VCol class="text-center">
                    <p class="text-h4 py-1 mb-3">Size</p>
                  </VCol>
                  <VCol class="text-center">
                    <p class="text-h4 py-1 mb-3">Time</p>
                  </VCol>
                  <VCol class="text-center">
                    <p class="text-h4 py-1 mb-3">Status</p>
                  </VCol>
                </VRow>

                <!-- Iterate On Mocked Data -->
                <VRow v-for="(slot, index) in form.slotsForSelectedDay" :key="index" class="mb-2">
                  <VCol class="text-center">
                    <AppTextField v-model="slot.capacity" readonly />
                  </VCol>
                  <VCol class="text-center d-flex" style="">
                    <AppDateTimePicker :config="{
                      enableTime: true,
                      noCalendar: true,
                      dateFormat: 'H:i',
                    }" :value="slot.from" prepend-inner-icon="tabler-calendar" class="flex-grow-1 mx-2 my-1"
                      :disabled="true" />
                    <AppDateTimePicker :config="{
                      enableTime: true,
                      noCalendar: true,
                      dateFormat: 'H:i',
                    }" :value="slot.to" prepend-inner-icon="tabler-calendar" class="flex-grow-1 mx-2 my-1"
                      :disabled="true" />
                  </VCol>
                  <VCol class="text-center d-flex" style="justify-content: center; align-items: center;">
                    <VSwitch v-model="slot.status" :inset="false" :false-value="0" :true-value="1" readonly />
                  </VCol>
                </VRow>
                <VRow class="delivery-types">
                  <VCol v-for="deliveryType in form.delivery_types" :key="deliveryType.id" class="d-flex"
                    style="justify-content: center; align-items: center; gap: 20px">
                    <VBtn :disabled="!deliveryType.status">{{ deliveryType.name }}</VBtn>
                    <VSwitch v-model="deliveryType.status" :inset="false" :true-value="1" :false-value="0" readonly />
                  </VCol>
                </VRow>
              </VCardText>
            </VCard>
          </VWindowItem>
        </VWindow>
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
