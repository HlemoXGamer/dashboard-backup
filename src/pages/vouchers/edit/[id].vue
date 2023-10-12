<script setup>
import { get as getAdminDiscounts } from "@/apis/admin/discounts";
import { show as adminShow, update as updateShow } from "@/apis/admin/vouchers";

import { get as getMarkterDiscounts } from "@/apis/markter/discounts";
import {
  show as markterShow,
  update as markterUpdate,
} from "@/apis/markter/vouchers";

import router from "@/router";
import { integerValidator, requiredValidator } from "@validators";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";
import { VForm } from "vuetify/components/VForm";
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const toast = useToast();
const loading = ref(false);
const voucherId = useRoute().params.id;
const form = ref({});
const refVForm = ref();
const discountTypes = ref([]);
const noAmount = ref(false);

const _getVoucher = async () => {
  if (userRole == "admin") {
    await adminShow(voucherId).then((res) => {
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
      };

      if (form.value.v_type_name == "free_delivevery") {
        form.value.v_amount = 0;
        noAmount.value = true;
      }
    });
  } else if (userRole == "markter") {
    await markterShow(voucherId).then((res) => {
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
      };

      if (form.value.v_type_name == "free_delivevery") {
        form.value.v_amount = 0;
        noAmount.value = true;
      }
    });
  }
};

const generateRandomNumber = (length) => {
  const characters = "0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
};

const generateUniqueCode = () => {
  const randomNumber = generateRandomNumber(4); // 4-digit random number
  let prefixCode = form.value.v_prefix == null ? "" : form.value.v_prefix;
  form.value.v_code = prefixCode + `${randomNumber}`;
};

const _getDiscounts = async () => {
  try {
    const { data } =
      userRole == "admin"
        ? await getAdminDiscounts()
        : await getMarkterDiscounts();
    discountTypes.value = data.data.map((discount) => discount.name);
  } catch (err) {
    toast.error(err);
  }
};

const _updateVoucher = async () => {
  refVForm.value?.validate().then(async ({ valid: isValid }) => {
    if (isValid) {
      loading.value = true;
      try {
        userRole == "admin"
          ? await updateShow(voucherId, form.value)
          : await markterUpdate(voucherId, form.value);
        loading.value = false;
        toast.success("Voucher updated successfully");
      } catch (err) {
        toast.error(err.response.data.message);
        loading.value = false;
      }
    }
  });
};

const _isFreeDelivery = () => {
  setTimeout(() => {
    if (form.value.v_type_name == "free_delivevery") {
      noAmount.value = true;
      form.value.v_amount = 0;
      form.value.v_type = 3;
    } else if (form.value.v_type_name == "fixed") {
      noAmount.value = false;
      form.value.v_amount = "";
      form.value.v_type = 2;
    } else if (form.value.v_type_name == "percentage") {
      noAmount.value = false;
      form.value.v_amount = "";
      form.value.v_type = 1;
    }
  }, 500);
};

onMounted(() => {
  _getVoucher();
  _getDiscounts();
});
</script>
<template>
  <VRow class="mt-4 px-4" justify="space-around">
    <VCol class="pt-0">
      <VCol
        class="px-5 rounded"
        style="background-color: rgb(var(--v-theme-surface))"
      >
        <p class="text-h4 pt-3 pb-2">{{ $t('Update Voucher') }}</p>
        <VForm ref="refVForm" @submit.prevent="_updateVoucher" class="w-100">
          <VCol>
            <VRow justify="space-between" align="start">
              <AppTextField
                prepend-inner-icon="tabler-writing"
                :rules="[requiredValidator]"
                style="width: 100%"
                class="pe-3 w-50"
                v-model="form.v_name"
                :label="$t('Name')"
              ></AppTextField>
              <AppTextField
                prepend-inner-icon="tabler-coins"
                :rules="[requiredValidator]"
                :disabled="noAmount"
                style="width: 100%"
                class="ps-3 w-50"
                v-model="form.v_amount"
                :label="$t('Amount')"
              ></AppTextField>
            </VRow>
            <VRow class="mt-10" justify="space-between" align="start">
              <AppTextarea
                :rules="[requiredValidator]"
                style="width: 100%"
                class="pe-3 w-50"
                v-model="form.v_description_en"
                label="Description"
              >
              </AppTextarea>
              <AppTextarea
                :rules="[requiredValidator]"
                style="width: 100%"
                class="ps-3 w-50 text-right"
                dir="rtl"
                v-model="form.v_description_ar"
                label="الوصف"
              >
              </AppTextarea>
            </VRow>
            <VRow class="mt-10" justify="space-between" align="start">
              <AppCombobox
                prepend-inner-icon="tabler-discount-2"
                @update:model-value="_isFreeDelivery"
                :rules="[requiredValidator]"
                style="width: 100%"
                class="pe-3 w-50"
                v-model="form.v_type_name"
                :label="$t('Select Type')"
                :items="discountTypes"
              ></AppCombobox>
              <AppTextField
                prepend-inner-icon="tabler-coins"
                :rules="[requiredValidator]"
                style="width: 100%"
                class="ps-3 w-50"
                v-model="form.v_min_total"
                :label="$t('Minimum Total')"
              >
              </AppTextField>
            </VRow>
            <VRow class="mt-10" justify="space-between" align="start">
              <VRow
                style="width: 50%; max-width: 50%"
                class="w-50 pe-3 ms-0 my-0"
                align="center"
                justify="center"
              >
                <AppTextField
                  prepend-inner-icon="tabler-forbid"
                  :rules="[requiredValidator, integerValidator]"
                  class="w-100"
                  style="width: 100%"
                  v-model="form.v_limit"
                  :label="$t('Limit')"
                ></AppTextField>
              </VRow>
              <VRow
                style="width: 50%; max-width: 50%"
                class="me-0 ps-3 my-0 flex-grow-1"
                align="center"
                justify="center"
              >
                <AppDateTimePicker
                  prepend-inner-icon="tabler-calendar"
                  v-model="form.v_date_period_start"
                  :label="$t('Start Date')"
                />
              </VRow>
            </VRow>
            <VRow class="mt-10" justify="space-between" align="start">
              <VRow
                class="me-3 ms-0 my-0 flex-grow-1"
                align="center"
                justify="center"
              >
                <AppDateTimePicker
                  prepend-inner-icon="tabler-calendar"
                  v-model="form.v_date_period_end"
                  :label="$t('End Date')"
                />
              </VRow>
              <VRow
                class="me-0 ms-3 my-0 flex-grow-1"
                align="center"
                justify="center"
              >
                <AppDateTimePicker
                  prepend-inner-icon="tabler-clock"
                  v-model="form.v_time_period_start"
                  :label="$t('Start Time')"
                  :config="{
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: 'H:i',
                  }"
                />
              </VRow>
            </VRow>
            <VRow class="mt-10" justify="space-between" align="start">
              <VRow
                class="me-3 ms-0 my-0 flex-grow-1"
                align="center"
                justify="center"
              >
                <AppDateTimePicker
                  prepend-inner-icon="tabler-clock"
                  v-model="form.v_time_period_end"
                  :label="$t('End Time')"
                  class="w-50 pe-3"
                  :config="{
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: 'H:i',
                  }"
                />
              </VRow>
            </VRow>
            <VRow class="mt-10" justify="start" align="end">
              <AppTextField
                prepend-inner-icon="tabler-key"
                :class="$vuetify.display.xs ? 'w-100 me-0' : 'flex-grow-0 me-2'"
                :style="$vuetify.display.xs ? 'width: 100%' : 'width: 140px'"
                v-model="form.v_prefix"
                :label="$t('Prefix')"
              >
              </AppTextField>
              <AppTextField
                :rules="[requiredValidator]"
                readonly
                :class="$vuetify.display.xs ? 'w-100 mt-2' : 'flex-grow-0'"
                :style="$vuetify.display.xs ? 'width: 100%' : 'width: 140px'"
                v-model="form.v_code"
                :label="$t('Voucher Code')"
              >
              </AppTextField>
              <VRow
                align="center"
                class="mx-0 my-0"
                justify="center"
                justify-lg="start"
                justify-md="start"
                justify-sm="center"
              >
                <VBtn
                  :block="$vuetify.display.xs"
                  :class="[
                    $vuetify.display.xs ? 'mt-2' : 'mx-2 mt-0',
                    $vuetify.display.sm ? 'mt-2' : '',
                  ]"
                  @click="generateUniqueCode()"
                >
                  <VIcon start icon="tabler-reload" />{{ $t('Generate') }}
                </VBtn>
                <VSwitch
                  class="ml-7"
                  v-model="form.v_is_active"
                  :false-value="0"
                  :true-value="1"
                  :inset="false"
                  :label="$t('Active')"
                  :class="$vuetify.display.xs ? 'mt-3' : ''"
                />
              </VRow>
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
              <VIcon start icon="tabler-check" />{{ $t('Update') }}
            </VBtn>
          </VRow>
        </VForm>
      </VCol>
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
  roles: ["admin", "markter"]
</route>
