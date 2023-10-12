<script setup>
import { get as getBranches } from "@/apis/admin/branches";
import { get as getDays } from "@/apis/admin/days";
import {
  show as showDelivery,
  update as updateDelivery,
} from "@/apis/admin/deliveries";
import {
  emailValidator,
  integerValidator,
  kuwaitValidator,
  requiredValidator,
  betweenValidator,
} from "@validators";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";
import { VForm } from "vuetify/components/VForm";
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const deliveryId = useRoute().params.id;
const branches = ref([]);
const refVForm = ref();
const toast = useToast();
const loading = ref(false);
const days = ref([]);
const working_days = ref([]);
const branch_name = ref("");

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

const _showDelivery = async () => {
  await showDelivery(deliveryId).then((res) => {
    let {
      start,
      end,
      name,
      phone,
      email,
      code,
      working_hour,
      working_days,
      branch_id,
      is_active,
    } = res.data.data;

    form.value = {
      start,
      end,
      name,
      phone,
      email,
      code,
      working_hour,
      working_days,
      branch_id,
      is_active,
    };
  });
};

const _updateDelivery = async () => {
  refVForm.value?.validate().then(async ({ valid: isValid }) => {
    if (isValid) {
      loading.value = true;
      let daysIDS = [];
      days.value.forEach((day) => {
        working_days.value.forEach((working_day) => {
          if (day.name_en == working_day) {
            daysIDS.push(day.id);
          }
        });
      });

      form.value.working_days = daysIDS;
      let branch_id = branches.value.filter(
        (branch) => branch.name_en == branch_name.value,
      )[0].id;
      form.value.branch_id = branch_id;
      try {
        const { data } = await updateDelivery(deliveryId, form.value);
        toast.success("Delivery man updated successfully");
        loading.value = false;
      } catch (err) {
        toast.error(err.response.data.message);
        loading.value = false;
      }
    }
  });
};

const _getBranches = async () => {
  await getBranches().then(({ data, meta }) => {
    branches.value = data.data;
    branch_name.value = branches.value.filter(
      (branch) => branch.id == form.value.branch_id,
    )[0].name_en;
  });
};

const _getDays = async () => {
  await getDays().then(({ data, meta }) => {
    days.value = data.data;
    // form.value.working_days = data.data.map(day => day.name_en)
    working_days.value = data.data.map((day) => day.name_en);
  });
};

onMounted(() => {
  if (userRole == "admin") {
    _showDelivery();
    _getDays();
    _getBranches();
  }
});
</script>
<template>
  <VRow class="mt-4 px-4" justify="space-around">
    <VCol class="pt-0">
      <VForm ref="refVForm" @submit.prevent="_updateDelivery">
        <VCol
          class="px-5 rounded"
          style="background-color: rgb(var(--v-theme-surface))"
        >
          <p class="text-h4 pt-3 pb-2">{{ $t('Update Delivery') }}</p>
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
                style="width: 100%"
                class="ps-3 w-50"
                :rules="[betweenValidator(form.password?.length, 4, 8)]"
                v-model="form.password"
                :label="$t('Password')"
              >
              </AppTextField>
            </VRow>
            <VRow class="mt-10" justify="space-between" align="end">
              <VCombobox
                v-model="working_days"
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
                v-model="branch_name"
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
                <VIcon start icon="tabler-check" />{{ $t('Update') }}
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

<style lang="scss" scoped>
.app-picker-field {
  width: 49%;
}
</style>

<route lang="yaml">
meta:
  requiresAuth: true
  roles: ["admin"]
</route>
