<script setup>
import { get as getDiscounts } from "@/apis/admin/discounts";
import { show, update } from "@/apis/admin/employees";
import router from "@/router";
import {
  betweenValidator,
  emailValidator,
  integerValidator,
  kuwaitValidator,
  requiredValidator,
} from "@validators";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";
import { VForm } from "vuetify/components/VForm";

const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const toast = useToast();
const loading = ref(false);
const employeeId = useRoute().params.id;
const form = ref({
  employee_name: "",
  employee_phone: "",
  employee_email: "",
  employee_position: "",
  employee_code: "",
  discount_rate: "",
  discount_type: "",
});
const refVForm = ref();
const discountTypes = ref();
// const noAmount = ref(false);

const _getEmployee = async () => {
  await show(employeeId).then((res) => {
    let {
      employee_name,
      employee_phone,
      employee_email,
      employee_position,
      employee_code,
      discount_rate,
      discount_type,
    } = res.data.data;

    form.value = {
      employee_name,
      employee_phone,
      employee_email,
      employee_position,
      employee_code,
      discount_rate,
      discount_type,
    };

    form.value.discount_type = form.value.discount_type.id;

    // if(form.value.v_type_name == "free_delivevery"){
    //   form.value.v_amount = 0;
    //   noAmount.value = true;
    // }
  });
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
  form.value.employee_code = `${randomNumber}`;
};

const _getDiscounts = async () => {
  try {
    const { data } = await getDiscounts();
    discountTypes.value = data.data;
  } catch (err) {
    toast.error(err);
  }
};

const _updateEmployee = async () => {
  refVForm.value?.validate().then(async ({ valid: isValid }) => {
    if (isValid) {
      loading.value = true;
      try {
        await update(employeeId, form.value);
        loading.value = false;
        toast.success("Employee updated successfully");
        router.back();
      } catch (err) {
        toast.error(err.response.data.message);
        loading.value = false;
      }
    }
  });
};

// const _isFreeDelivery = () => {
//   setTimeout(() => {
//     if(form.value.v_type_name == "free_delivevery"){
//       noAmount.value = true;
//       form.value.v_amount = 0;
//   }else{
//     noAmount.value = false;
//     form.value.v_amount = "";
//   }
//   }, 500);
// }

onMounted(() => {
  if (userRole == "admin") {
    _getEmployee();
    _getDiscounts();
  }
});
</script>
<template>
  <VRow class="mt-4 px-4" justify="space-around">
    <VCol class="pt-0">
      <VCol
        class="px-5 rounded"
        style="background-color: rgb(var(--v-theme-surface))"
      >
        <p class="text-h4 pt-3 pb-2">{{ $t('Update Employee') }}</p>
        <VForm ref="refVForm" @submit.prevent="_updateEmployee" class="w-100">
          <VCol>
            <VRow justify="space-between" align="start">
              <AppTextField
                prepend-inner-icon="tabler-writing"
                :rules="[requiredValidator]"
                style="width: 100%"
                class="pe-3 w-50"
                v-model="form.employee_name"
                :label="$t('Name')"
              ></AppTextField>
              <AppTextField
                prepend-inner-icon="tabler-phone"
                :rules="[requiredValidator, integerValidator, kuwaitValidator]"
                style="width: 100%"
                class="pe-3 w-50"
                v-model="form.employee_phone"
                :label="$t('Phone Number')"
              ></AppTextField>
            </VRow>
            <VRow class="mt-10" justify="space-between" align="start">
              <AppTextField
                prepend-inner-icon="tabler-user-question"
                :rules="[requiredValidator]"
                style="width: 100%"
                class="pe-3 w-50"
                v-model="form.employee_position"
                :label="$t('Employee Position')"
              ></AppTextField>
              <AppTextField
                prepend-inner-icon="tabler-at"
                :rules="[requiredValidator, emailValidator]"
                style="width: 100%"
                class="pe-3 w-50"
                v-model="form.employee_email"
                :label="$t('Email')"
              ></AppTextField>
            </VRow>
            <VRow class="mt-10" justify="space-between" align="start">
              <AppCombobox
                disabled
                prepend-inner-icon="tabler-discount-2"
                :rules="[requiredValidator]"
                style="width: 100%"
                class="pe-3 w-50"
                v-model="form.discount_type"
                :label="$t('Select Type')"
                :items="discountTypes"
                item-value="id"
                item-title="name"
                :return-object="false"
              ></AppCombobox>
              <AppTextField
                prepend-inner-icon="tabler-coins"
                :rules="[
                  requiredValidator,
                  betweenValidator(form.discount_rate, 1, 50),
                ]"
                style="width: 100%"
                class="ps-0 w-50"
                v-model="form.discount_rate"
                :label="$t('Discount Rate')"
              ></AppTextField>
            </VRow>
            <VRow class="mt-10" justify="start" align="end">
              <AppTextField
                :rules="[requiredValidator]"
                :class="$vuetify.display.xs ? 'w-100 mt-2' : 'flex-grow-0'"
                :style="$vuetify.display.xs ? 'width: 100%' : 'width: 140px'"
                v-model="form.employee_code"
                :label="$t('Employee Code')"
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
