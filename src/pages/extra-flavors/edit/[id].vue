<script setup>
import { show, update } from "@/apis/admin/extra-flavors";
import { requiredValidator } from "@validators";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";
import { VForm } from "vuetify/components/VForm";

const toast = useToast();
const loading = ref(false);
const extraFlavorId = useRoute().params.id;
const form = ref({ name: "", type: "", price: 0, code: "", });
const refVForm = ref();
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;

const isFlavor = computed(() => form.value.type === "flavor");

const _getExtraFlavor = async () => {
  await show(extraFlavorId).then((res) => {
    let { name, type, price } = res.data.data;

    form.value = {
      name,
      type,
      price,
    };
  });
};

const _updateExtraFlavor = async () => {
  refVForm.value?.validate().then(async ({ valid: isValid }) => {
    if (isValid) {
      loading.value = true;
      try {
        await update(extraFlavorId, form.value);
        loading.value = false;
        toast.success("Extra-Flavor updated successfully");
      } catch (err) {
        toast.error(err.response.data.message);
        loading.value = false;
      }
    }
  });
};

onMounted(() => {
  if (userRole == "admin") {
    _getExtraFlavor();
  }
});
</script>
<template>
  <VRow class="mt-4 px-4" justify="space-around">
    <VCol class="pt-0">
      <VCol class="px-5 rounded" style="background-color: rgb(var(--v-theme-surface))">
        <p class="text-h4 pt-3 pb-2">{{ $t('Update Extra-Flavor') }}</p>
        <VForm ref="refVForm" @submit.prevent="_updateExtraFlavor">
          <VCol>
            <VRow justify="space-between" align="end">
              <VCol>
                <AppTextField :rules="[requiredValidator]" style="width: 100%" class="pe-3" v-model="form.code"
                  label="Code"></AppTextField>
              </VCol>
              <VCol>
                <AppTextField :rules="[requiredValidator]" style="width: 100%" class="pe-3" v-model="form.name"
                  label="Name"></AppTextField>
              </VCol>
              <VCol>
                <VSelect v-model="form.type" :items="[
                  {
                    name: 'Extra',
                    value: 'extra'
                  },
                  {
                    name: 'Flavor',
                    value: 'flavor'
                  },
                ]" :rules="[requiredValidator]" item-title="name" item-value="value"
                  style="width: 100%; align-self: flex-end;" label="Type"></VSelect>
              </VCol>
              <VCol>
                <AppTextField :rules="[requiredValidator, integerValidator]" style="width: 100%" class="pe-3"
                  v-model="form.price" label="Price" :disabled="isFlavor"></AppTextField>
              </VCol>
            </VRow>
          </VCol>
          <VRow class="pb-6 mt-8 px-3" align="center" justify="center">
            <VBtn :block="$vuetify.display.xs" color="primary" class="px-12" :loading="loading" type="submit">
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
