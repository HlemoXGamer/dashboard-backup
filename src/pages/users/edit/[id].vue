<script setup>
import { show, updateUser } from "@/apis/admin/users";
import {
  emailValidator,
  kuwaitValidator,
  requiredValidator,
  betweenValidator,
} from "@validators";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";
import { VForm } from "vuetify/components/VForm";
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const toast = useToast();
const loading = ref(false);
const userId = useRoute().params.id;
const form = ref({
  user_id: 0,
  name: "",
  phone: "",
  email: "",
  new_password: "",
  password_confirmation: "",
});
const refVForm = ref();

const _getUser = async () => {
  await show(userId).then((res) => {
    let { name, phone, email } = res.data.data;

    form.value = {
      user_id: userId,
      name,
      phone,
      email,
    };
  });
};

const _updateUser = async () => {
  refVForm.value?.validate().then(async ({ valid: isValid }) => {
    if (isValid) {
      loading.value = true;
      try {
        await updateUser(form.value);
        loading.value = false;
        toast.success("User updated successfully");
      } catch (err) {
        toast.error(err.response.data.message);
        loading.value = false;
      }
    }
  });
};

onMounted(() => {
  if (userRole == "admin") {
    _getUser();
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
        <p class="text-h4 pt-3 pb-2">{{ $t('Update User') }}</p>
        <VForm ref="refVForm" @submit.prevent="_updateUser">
          <VCol>
            <VRow justify="space-between" align="start">
              <AppTextField
                :rules="[requiredValidator]"
                disabled
                style="width: 100%"
                class="pe-3 w-50"
                v-model="form.name"
                :label="$t('Name')"
              ></AppTextField>
              <AppTextField
                :rules="[requiredValidator, kuwaitValidator]"
                disabled
                style="width: 100%"
                class="ps-3 w-50"
                v-model="form.phone"
                :label="$t('Phone Number')"
              ></AppTextField>
            </VRow>
            <VRow class="mt-10" justify="space-between" align="start">
              <AppTextField
                :rules="[requiredValidator, emailValidator]"
                disabled
                style="width: 100%"
                class="pe-3 w-50"
                v-model="form.email"
                :label="$t('Email')"
              ></AppTextField>
              <AppTextField
                :rules="[
                  requiredValidator,
                  betweenValidator(form.new_password?.length, 4, 8),
                ]"
                style="width: 100%"
                class="ps-3 w-50"
                v-model="form.new_password"
                :label="$t('Password')"
              ></AppTextField>
            </VRow>
            <VRow class="mt-10" justify="space-between" align="start">
              <AppTextField
                :rules="[
                  requiredValidator,
                  betweenValidator(form.password_confirmation?.length, 4, 8),
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
