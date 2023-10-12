<script setup>
import { show, update } from "@/apis/admin/finances";
import {
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
const financeId = useRoute().params.id;
const form = ref({ name: "", phone: "", email: "" });
const refVForm = ref();

const _getOperation = async () => {
  await show(financeId).then((res) => {
    let { name, phone, email } = res.data.data;

    form.value = {
      name,
      phone,
      email,
    };
  });
};

const _updateFinance = async () => {
  refVForm.value?.validate().then(async ({ valid: isValid }) => {
    if (isValid) {
      loading.value = true;
      try {
        await update(financeId, form.value);
        loading.value = false;
        toast.success("Finance updated successfully");
      } catch (err) {
        toast.error(err.response.data.message);
        loading.value = false;
      }
    }
  });
};

onMounted(() => {
  if (userRole == "admin") {
    _getOperation();
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
        <p class="text-h4 pt-3 pb-2">{{ $t('Update Finance') }}</p>
        <VForm ref="refVForm" @submit.prevent="_updateFinance">
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
