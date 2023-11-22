<script setup>
import { getUnique as getAreas } from "@/apis/admin/areas";
import { create as addBranch } from "@/apis/admin/branches";
import { get as getCities } from "@/apis/admin/cities";
import { get as getDays } from "@/apis/admin/days";
import {
  emailValidator,
  integerValidator,
  kuwaitValidator,
  numericValidator,
  requiredValidator,
  betweenValidator
} from "@validators";
import { useToast } from "vue-toastification";
import { VForm } from "vuetify/components/VForm";
import router from "@/router";

const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const refVForm = ref();
const toast = useToast();
const loading = ref(false);
const days = ref([]);
const areas = ref([]);
const cities = ref([]);

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
  is_active: 1,
});

const _addBranch = async () => {
  refVForm.value?.validate().then(async ({ valid: isValid }) => {
    if (isValid) {
      loading.value = true;
      try {
        await addBranch(form.value);
        toast.success("Branch added successfully");
        loading.value = false;
        router.back()
      } catch (err) {
        toast.error(err.response.data.message);
        loading.value = false;
      }
    }
  });
};

const _getAreas = () => {
  getAreas().then(({ data, meta }) => {
    areas.value = data.data;
  });
};

const _getCities = () => {
  getCities().then(({ data, meta }) => {
    cities.value = data.data;
  });
};

const _getDays = () => {
  getDays().then(({ data, meta }) => {
    days.value = data.data;
  });
};

onMounted(() => {
  if (userRole == "admin") {
    _getCities();
    _getAreas();
    _getDays();
  }
});
</script>
<template>
  <VRow class="mt-4 px-4" justify="space-around">
    <VCol class="pt-0">
      <VForm ref="refVForm" @submit.prevent="_addBranch">
        <VCol
          class="px-5 rounded pb-10"
          style="background-color: rgb(var(--v-theme-surface))"
        >
          <p class="text-h4 pt-3 pb-2">Add Branch</p>
          <VCol>
            <VRow justify="space-between" align="start">
              <AppTextField
                :rules="[requiredValidator]"
                style="width: 100%"
                class="pe-3 w-50"
                v-model="form.name_en"
                label="Name"
              ></AppTextField>
              <AppTextField
                :rules="[requiredValidator]"
                style="width: 100%"
                class="ps-3 w-50 text-right"
                dir="rtl"
                v-model="form.name_ar"
                label="الاسم"
              ></AppTextField>
            </VRow>
            <VRow class="mt-10" justify="space-between" align="start">
              <AppTextField
                :rules="[requiredValidator, integerValidator, kuwaitValidator]"
                style="width: 100%"
                class="pe-3 w-50"
                v-model="form.phone_no"
                label="Phone Number"
              >
              </AppTextField>
              <AppTextField
                :rules="[requiredValidator, emailValidator]"
                style="width: 100%"
                class="ps-3 w-50"
                v-model="form.email"
                label="Email"
              >
              </AppTextField>
            </VRow>
            <VRow class="mt-10" justify="space-between" align="end">
              <AppTextField
                :rules="[requiredValidator, betweenValidator(form.password.length, 4, 8)]"
                style="width: 100%"
                class="pe-3 w-50"
                v-model="form.password"
                label="Password"
              >
              </AppTextField>
              <VCombobox
                v-model="form.working_days"
                multiple
                :rules="[requiredValidator]"
                style="width: 100%"
                class="ps-3 w-50"
                :items="days"
                :return-object="false"
                item-value="id"
                item-title="name"
                variant="outlined"
                label="Working Days"
              />
            </VRow>
            <VRow class="mt-10" justify="space-between" align="start">
              <AppDateTimePicker
                v-model="form.start"
                label="Start Working Hours"
                class="pe-3 flex-grow-0"
                :config="{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: 'H:i',
                }"
              />
              <AppDateTimePicker
                v-model="form.end"
                label="End Working Hours"
                class="ps-3 flex-grow-0"
                :config="{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: 'H:i',
                }"
              />
            </VRow>
            <VRow class="mt-10" justify="space-between" align="start">
              <AppTextField
                :rules="[requiredValidator, numericValidator]"
                style="width: 100%"
                class="pe-3 w-50"
                v-model="form.est_time"
                label="Estimate Time"
              >
              </AppTextField>
              <AppTextField
                :rules="[requiredValidator]"
                style="width: 100%"
                class="ps-3 w-50"
                v-model="form.code"
                label="Branch Code"
              >
              </AppTextField>
            </VRow>
          </VCol>
        </VCol>

        <VCol
          class="mt-10 px-5 rounded"
          style="background-color: rgb(var(--v-theme-surface))"
        >
          <p class="text-h4 pt-3 pb-2">Address</p>
          <VCol>
            <VRow justify="space-between" align="start">
              <VCombobox
                v-model="form.city_id"
                :rules="[requiredValidator]"
                :items="cities"
                item-value="id"
                item-title="name"
                :return-object="false"
                style="width: 100%"
                variant="outlined"
                label="Cities"
                class="flex-grow-1 pe-3 my-2 w-50"
              />
              <VCombobox
                v-model="form.areas"
                multiple
                :rules="[requiredValidator]"
                :disabled="!form.city_id"
                :items="areas"
                item-value="id"
                item-title="name"
                :return-object="false"
                style="width: 100%"
                variant="outlined"
                label="Areas"
                class="flex-grow-1 my-2 ps-3 w-50"
              />
            </VRow>
            <VRow class="mt-10" justify="space-between" align="start">
              <AppTextField
                :rules="[requiredValidator]"
                style="width: 100%"
                class="pe-3 w-50"
                v-model="form.street_name"
                label="Street Name"
              ></AppTextField>
              <AppTextField
                :rules="[requiredValidator]"
                style="width: 100%"
                class="ps-3 w-50"
                v-model="form.building_no"
                label="Building Number"
              ></AppTextField>
            </VRow>
          </VCol>
          <VRow class="pb-6 mt-8 px-3" align="center" justify="center">
            <VBtn
              :block="$vuetify.display.xs"
              color="primary"
              class="px-12"
              :loading="loading"
              type="submit"
            >
              <VIcon start icon="tabler-check" />Add
            </VBtn>
            <VSwitch
              class="ml-7"
              v-model="form.is_active"
              :false-value="0"
              :true-value="1"
              :inset="false"
              label="Active"
            />
          </VRow>
        </VCol>
      </VForm>
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
