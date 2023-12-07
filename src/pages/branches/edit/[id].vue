<script setup>
import { getUnique as getAreas } from "@/apis/admin/areas";
import {
  show as showBranch,
  update as updateBranch,
} from "@/apis/admin/branches";
import { get as getCities } from "@/apis/admin/cities";
import { get as getDays } from "@/apis/admin/days";
import {
  emailValidator,
  integerValidator,
  kuwaitValidator,
  numericValidator,
  requiredValidator,
} from "@validators";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";
import { VForm } from "vuetify/components/VForm";

const selectedDate = ref(new Date().toISOString().substr(0, 10)); // default to today's date
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const refVForm = ref();
const toast = useToast();
const loading = ref(false);
const daysData = ref([]);
const areasData = ref([]);
const cities = ref([]);
const branchId = useRoute().params.id;
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
  slotsForSelectedDay: [],
});

const _updateBranch = async () => {
  refVForm.value?.validate().then(async ({ valid: isValid }) => {
    if (isValid) {
      loading.value = true;
      try {
        await updateBranch(branchId, {
          ...form.value,
          time_slots: {...form.value.time_slots, ...form.value.slotsForSelectedDay}
        });

        toast.success("Branch updated successfully");
        loading.value = false;
      } catch (err) {
        toast.error(err.response.data.message);
        loading.value = false;
      }
    }
  });
};

// const _getAreas = () => {
//   getAreas().then(({data, meta}) => {
//     areasData.value = data.data;
//   })
// }

const filterSlotsForSelectedDay = () => {
  if (form.value.time_slots && form.value.time_slots.length > 0) {
    form.value.slotsForSelectedDay = form.value.time_slots.filter(slot => slot.day === selectedDate.value);
  }
};  

const _getCities = () => {
  getCities().then(({ data, meta }) => {
    cities.value = data.data;
  });
};

const _getDays = () => {
  getDays().then(({ data, meta }) => {
    daysData.value = data.data;
  });
};

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
      time_slots,
      order_types,
      delivery_types
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
      time_slots,
      order_types,
      delivery_types
    };
    console.log(form.value);
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

watch(selectedDate, (newDate) => {
  // Filter the time slots based on the selected date
  const filteredSlots = form.value.time_slots.filter(slot => slot.day === newDate) || [];
  form.value.slotsForSelectedDay = filteredSlots;
});

watch(() => [form.value.time_slots, selectedDate.value], () => {
  filterSlotsForSelectedDay();
}, { immediate: true });

onMounted(() => {
  if (userRole == "admin") {
    _getCities();
    _getDays();
    _showBranch().then(() => {
      // After fetching branch data, apply the filter
      filterSlotsForSelectedDay();
    });
  }
});
</script>
<template>
  <div>
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
            <VForm ref="refVForm" @submit.prevent="_updateBranch">
              <VCol class="px-5 rounded pb-10" style="background-color: rgb(var(--v-theme-surface))">
                <p class="text-h4 pt-3 pb-2">Update Branch</p>
                <VCol>
                  <VRow justify="space-between" align="start">
                    <AppTextField :rules="[requiredValidator]" style="width: 100%" class="pe-3 w-50"
                      v-model="form.name_en" label="Name"></AppTextField>
                    <AppTextField :rules="[requiredValidator]" style="width: 100%" class="ps-3 w-50 text-right" dir="rtl"
                      v-model="form.name_ar" label="الاسم"></AppTextField>
                  </VRow>
                  <VRow class="mt-10" justify="space-between" align="start">
                    <AppTextField :rules="[requiredValidator, integerValidator, kuwaitValidator]" style="width: 100%"
                      class="pe-3 w-50" v-model="form.phone_no" label="Phone Number">
                    </AppTextField>
                    <AppTextField :rules="[requiredValidator, emailValidator]" style="width: 100%" class="ps-3 w-50"
                      v-model="form.email" label="Email">
                    </AppTextField>
                  </VRow>
                  <VRow class="mt-10" justify="space-between" align="end">
                    <VCombobox v-model="form.working_days" multiple :rules="[requiredValidator]" style="width: 100%"
                      class="pe-3 w-50" :items="daysData" variant="outlined" label="Working Days" item-value="id"
                      item-title="name" :return-object="false" />
                    <AppDateTimePicker v-model="form.start" label="Start Working Hours" class="ps-3 flex-grow-0" :config="{
                      enableTime: true,
                      noCalendar: true,
                      dateFormat: 'H:i',
                    }" />
                  </VRow>
                  <VRow class="mt-10" justify="space-between" align="start">
                    <AppDateTimePicker v-model="form.end" label="End Working Hours" class="pe-3 flex-grow-0" :config="{
                      enableTime: true,
                      noCalendar: true,
                      dateFormat: 'H:i',
                    }" />
                    <AppTextField :rules="[requiredValidator, numericValidator]" style="width: 100%" class="ps-3 w-50"
                      v-model="form.est_time" label="Estimate Time">
                    </AppTextField>
                  </VRow>
                  <VRow class="mt-10" justify="space-between" align="start">
                    <AppTextField :rules="[requiredValidator]" style="width: 100%" class="pe-3 w-50" v-model="form.code"
                      label="Branch Code">
                    </AppTextField>
                  </VRow>
                </VCol>
              </VCol>

              <VCol class="mt-10 px-5 rounded" style="background-color: rgb(var(--v-theme-surface))">
                <p class="text-h4 pt-3 pb-2">Address</p>
                <VCol>
                  <VRow justify="space-between" align="start">
                    <VCombobox v-model="form.city_id" :rules="[requiredValidator]" :items="cities" item-value="id"
                      item-title="name" style="width: 100%" variant="outlined" label="Cities"
                      class="flex-grow-1 pe-3 my-2 w-50" :return-object="false" />
                    <VCombobox v-model="form.areas" multiple :rules="[requiredValidator]" :disabled="!form.city_id"
                      :items="areasData" style="width: 100%" variant="outlined" label="Areas"
                      class="flex-grow-1 my-2 ps-3 w-50" :return-object="false" item-value="id" item-title="name"
                      clearable />
                  </VRow>
                  <VRow class="mt-10" justify="space-between" align="start">
                    <AppTextField :rules="[requiredValidator]" style="width: 100%" class="pe-3 w-50"
                      v-model="form.street_name" label="Street Name"></AppTextField>
                    <AppTextField :rules="[requiredValidator]" style="width: 100%" class="ps-3 w-50"
                      v-model="form.building_no" label="Building Number"></AppTextField>
                  </VRow>
                </VCol>
                <VRow class="pb-6 mt-8 px-3" align="center" justify="center">
                  <VBtn :block="$vuetify.display.xs" color="primary" class="px-12" :loading="loading" type="submit">
                    <VIcon start icon="tabler-check" />Update
                  </VBtn>
                  <VSwitch class="ml-7" v-model="form.is_active" :false-value="0" :true-value="1" :inset="false"
                    label="Active" />
                </VRow>
              </VCol>
            </VForm>
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
                    <VSwitch v-model="orderType.status" :inset="false" :true-value="1" :false-value="0" />
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
                    <AppTextField v-model="slot.capacity" />
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
                    <VSwitch v-model="slot.status" :inset="false" :false-value="0" :true-value="1" />
                  </VCol>
                </VRow>
                <VRow class="delivery-types">
                  <VCol v-for="deliveryType in form.delivery_types" :key="deliveryType.id" class="d-flex"
                    style="justify-content: center; align-items: center; gap: 20px">
                    <VBtn :disabled="!deliveryType.status">{{ deliveryType.name }}</VBtn>
                    <VSwitch v-model="deliveryType.status" :inset="false" :true-value="1" :false-value="0" />
                  </VCol>
                </VRow>
              </VCardText>

              <VRow>
                <VCol class="mr-10" style="display: flex; justify-content: flex-end; align-items: center;">
                  <VBtn @click="_updateBranch">Save Changes</VBtn>
                </VCol>
              </VRow>
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
