<script setup>
import { create } from "@/apis/admin/operations";
import {
  emailValidator,
  kuwaitValidator,
  requiredValidator,
  lengthValidator,
  betweenValidator,
} from "@validators";
import { useToast } from "vue-toastification";
import { VForm } from "vuetify/components/VForm";

const toast = useToast();
const loading = ref(false);
const form = ref({
  name: "",
  phone: "",
  email: "",
  password: "",
  password_confirmation: "",
});
const refVForm = ref();
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const _addOperation = async () => {
  refVForm.value?.validate().then(async ({ valid: isValid }) => {
    if (isValid) {
      loading.value = true;
      try {
        await create(form.value);
        loading.value = false;
        toast.success("Operation created successfully");
      } catch (err) {
        toast.error(err.response.data.message);
        loading.value = false;
      }
    }
  });
};
</script>
<template>
  <VRow class="mt-4 px-4" justify="space-around">
    <VCol class="pt-0">
      <VCol
        class="px-5 rounded"
        style="background-color: rgb(var(--v-theme-surface))"
      >
        <p class="text-h4 pt-3 pb-2">{{ $t('Add Operation') }}</p>
        <VForm ref="refVForm" @submit.prevent="_addOperation">
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
              ></AppTextField>
            </VRow>
            <VRow class="mt-10" justify="space-between" align="start">
              <AppTextField
                :rules="[requiredValidator, emailValidator]"
                style="width: 100%"
                class="pe-3 w-50"
                v-model="form.email"
                :label="$t('Email')"
              ></AppTextField>
              <AppTextField
                :rules="[
                  requiredValidator,
                  betweenValidator(form.password.length, 4, 8),
                ]"
                style="width: 100%"
                class="ps-3 w-50"
                v-model="form.password"
                :label="$t('Password')"
              ></AppTextField>
            </VRow>
            <VRow class="mt-10" justify="space-between" align="start">
              <AppTextField
                :rules="[
                  requiredValidator,
                  betweenValidator(form.password_confirmation.length, 4, 8),
                ]"
                style="width: 100%"
                class="pe-3 w-50"
                v-model="form.password_confirmation"
                :label="$t('Confirm Password')"
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
              <VIcon start icon="tabler-plus" />{{ $t('Add') }}
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
