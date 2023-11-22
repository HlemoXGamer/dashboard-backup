<script setup>
import { create } from "@/apis/admin/extra-flavors";
import { requiredValidator, integerValidator } from "@validators";

import { useToast } from "vue-toastification";
import { VForm } from "vuetify/components/VForm";
const toast = useToast();
const loading = ref(false);
const form = ref({ name: "", type: "", price: 0, code: '', });
const refVForm = ref();
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
import router from "@/router";

const isFlavor = computed(() => { 
  if(form.value.type === "flavor"){
    form.value.price = 0;
  }
  return form.value.type === "flavor" 
});

const _addExtraFlavor = async () => {
  refVForm.value?.validate().then(async ({ valid: isValid }) => {
    if (isValid) {
      loading.value = true;
      try {
        if (form.value.type === "flavor") {
          form.value.price = 0;
        }
        await create(form.value);
        loading.value = false;
        toast.success("Extra-Flavor Added successfully");
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
        <p class="text-h4 pt-3 pb-2">{{ $t('Add Extra-Flavor') }}</p>
        <VForm ref="refVForm" @submit.prevent="_addExtraFlavor">
          <VCol>
            <VRow justify="space-between" align="end">
              <VCol>
                <AppTextField
                  :rules="[requiredValidator]"
                  style="width: 100%"
                  class="pe-3"
                  v-model="form.name"
                  label="Name"
                ></AppTextField>
              </VCol>
              <VCol>
                <VSelect
                  v-model="form.type"
                  :items="[
                    {
                      name: 'Extra',
                      value: 'extra'
                    },
                    {
                      name: 'Flavor',
                      value: 'flavor'
                    },
                  ]"
                  :rules="[requiredValidator]"
                  item-title="name"
                  item-value="value"
                  style="width: 100%; align-self: flex-end;"
                  label="Type"
                ></VSelect>
              </VCol>
              <VCol>
                <AppTextField
                  :rules="[requiredValidator, integerValidator]"
                  style="width: 100%"
                  class="pe-3"
                  v-model="form.price"
                  label="Price"
                  :disabled="isFlavor"
                ></AppTextField>
              </VCol>
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
