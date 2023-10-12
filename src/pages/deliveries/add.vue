<script setup>
import { get as getBranches } from "@/apis/admin/branches";
import { get as getDays } from "@/apis/admin/days";
import { create as addDelivery } from "@/apis/admin/deliveries";
import {
  emailValidator,
  integerValidator,
  kuwaitValidator,
  requiredValidator,
  betweenValidator,
} from "@validators";
import { useToast } from "vue-toastification";
import { VForm } from "vuetify/components/VForm";
const branches = ref([]);
const refVForm = ref();

const _getBranches = () => {
  getBranches().then(({ data, meta }) => {
    branches.value = data.data;
  });
};

const toast = useToast();
const loading = ref(false);
const days = ref([]);
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const form = ref({
  start: "",
  end: "",
  name: "",
  phone: "",
  email: "",
  password: "",
  code: "",
  working_hour: null,
  working_days: [],
  is_active: 0,
  branch_id: null,
});

const _addDelivery = async () => {
  refVForm.value?.validate().then(async ({ valid: isValid }) => {
    if (isValid) {
      loading.value = true;
      let working_days = [];
      days.value.forEach((day) => {
        form.value.working_days.forEach((working_day) => {
          if (day.name_en == working_day) {
            working_days.push(day.id);
          }
        });
      });
      form.value.working_days = working_days;

      let branch_id = branches.value.filter(
        (branch) => branch.name_en == form.value.branch_id,
      )[0].id;
      form.value.branch_id = branch_id;

      try {
        await addDelivery(form.value);
        toast.success("Delivery man added successfully");
        loading.value = false;
      } catch (err) {
        toast.error(err.response.data.message);
        loading.value = false;
      }
    }
  });
};

const _getDays = () => {
  getDays().then(({ data, meta }) => {
    days.value = data.data;
  });
};

onMounted(() => {
  if (userRole == "admin") {
    _getDays();
    _getBranches();
  }
});
</script>
<template>
  <VRow class="mt-4 px-4" justify="space-around">
    <VCol class="pt-0">
      <VForm ref="refVForm" @submit.prevent="_addDelivery">
        <VCol
          class="px-5 rounded"
          style="background-color: rgb(var(--v-theme-surface))"
        >
          <p class="text-h4 pt-3 pb-2">{{ $t('Add Delivery') }}</p>
          <VCol>
            <VRow justify="space-between" align="start">
              <AppTextField
                :rules="[requiredValidator]"
                style="width: 100%"
                class="pe-3 w-50"
                v-model="form.name"
                :label="$t('Name')"
              ></AppTextField>
              <AppTextField
                :rules="[requiredValidator, integerValidator, kuwaitValidator]"
                style="width: 100%"
                class="ps-3 w-50"
                v-model="form.phone"
                :label="$t('Phone Number')"
              >
              </AppTextField>
            </VRow>
            <VRow class="mt-10" justify="space-between" align="start">
              <AppTextField
                :rules="[requiredValidator, emailValidator]"
                style="width: 100%"
                class="pe-3 w-50"
                v-model="form.email"
                :label="$t('Email')"
              >
              </AppTextField>
              <AppTextField
                :rules="[
                  requiredValidator,
                  betweenValidator(form.password?.length, 4, 8),
                ]"
                style="width: 100%"
                class="ps-3 w-50"
                v-model="form.password"
                :label="$t('Password')"
              >
              </AppTextField>
            </VRow>
            <VRow class="mt-10" justify="space-between" align="end">
              <VCombobox
                v-model="form.working_days"
                multiple
                :rules="[requiredValidator]"
                style="width: 100%"
                class="pe-3 w-50"
                :items="days.map((day) => day.name_en)"
                variant="outlined"
                :label="$t('Working Days')"
              />
              <AppDateTimePicker
                :rules="[requiredValidator]"
                v-model="form.start"
                :label="$t('Start Working Hours')"
                class="ps-3 flex-grow-0"
                :config="{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: 'H:i',
                }"
              />
            </VRow>
            <VRow class="mt-10" justify="space-between" align="end">
              <AppDateTimePicker
                :rules="[requiredValidator]"
                v-model="form.end"
                :label="$t('End Working Hours')"
                class="pe-3 flex-grow-0"
                :config="{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: 'H:i',
                }"
              />
              <VCombobox
                v-model="form.branch_id"
                :rules="[requiredValidator]"
                style="width: 100%"
                class="w-50 ps-3 flex-grow-0"
                :items="branches.map((branch) => branch.name_en)"
                variant="outlined"
                :label="$t('Branch')"
              />
            </VRow>
            <VRow class="pb-4 mt-8 px-3 mt-10" align="center" justify="center">
              <VBtn
                :block="$vuetify.display.xs"
                color="primary"
                class="px-12"
                :loading="loading"
                type="submit"
              >
                <VIcon start icon="tabler-check" />{{ $t('Add') }}
              </VBtn>
              <VSwitch
                class="ml-7"
                v-model="form.is_active"
                :false-value="0"
                :true-value="1"
                :inset="false"
                :label="$t('Active')"
              />
            </VRow>
          </VCol>
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
