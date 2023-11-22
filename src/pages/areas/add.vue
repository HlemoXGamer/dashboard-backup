<script setup>
import { create } from "@/apis/admin/areas";
import { requiredValidator } from "@validators";
import { useToast } from "vue-toastification";
import { VForm } from "vuetify/components/VForm";
const toast = useToast();
const loading = ref(false);
const form = ref({ name_en: "", name_ar: "", city_id: 1 });
const refVForm = ref();
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
import router from "@/router";

const _addArea = async () => {
  refVForm.value?.validate().then(async ({ valid: isValid }) => {
    if (isValid) {
      loading.value = true;
      try {
        await create(form.value);
        loading.value = false;
        toast.success("Area Added successfully");
        router.back();
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
        <p class="text-h4 pt-3 pb-2">{{ $t('Add Area') }}</p>
        <VForm ref="refVForm" @submit.prevent="_addArea">
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
          </VCol>
          <VRow class="pb-6 mt-8 px-3" align="center" justify="center">
            <VBtn
              :block="$vuetify.display.xs"
              color="primary"
              class="px-12"
              :loading="loading"
              type="submit"
            >
              <VIcon start icon="tabler-check" />{{ $t('Add') }}
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
