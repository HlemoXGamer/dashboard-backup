<script setup>
import { getServiceCost, setServiceCost } from "@/apis/admin/branches";
import { requiredValidator } from "@validators";
import { useToast } from "vue-toastification";
import { VForm } from "vuetify/components/VForm";

const toast = useToast();
const loading = ref(false);
const form = ref({ delivery_cost: "", minimum_charge: "" });
const refVForm = ref();
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const _getServiceCost = async () => {
  await getServiceCost().then((res) => {
    let { delivery_cost, minimum_charge } = res.data.data;

    form.value = {
      delivery_cost,
      minimum_charge,
    };
  });
};

const _updateServiceCost = async () => {
  refVForm.value?.validate().then(async ({ valid: isValid }) => {
    if (isValid) {
      loading.value = true;
      try {
        await setServiceCost(form.value);
        loading.value = false;
        toast.success("Service cost updated successfully");
      } catch (err) {
        toast.error(err.response.data.message);
        loading.value = false;
      }
    }
  });
};

onMounted(() => {
  if (userRole == "admin") {
    _getServiceCost();
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
        <p class="text-h4 pt-3 pb-2">{{ $t("Update Service Cost") }}</p>
        <VForm ref="refVForm" @submit.prevent="_updateServiceCost">
          <VCol>
            <VRow justify="space-between" align="start">
              <AppTextField
                :rules="[requiredValidator]"
                style="width: 100%"
                class="pe-3 w-50"
                v-model="form.delivery_cost"
                :label="$t('Delivery Cost')"
              ></AppTextField>
              <AppTextField
                :rules="[requiredValidator]"
                style="width: 100%"
                class="ps-3 w-50"
                v-model="form.minimum_charge"
                :label="$t('Minimum Charge')"
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
              <VIcon start icon="tabler-check" />{{ $t("Update") }}
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
