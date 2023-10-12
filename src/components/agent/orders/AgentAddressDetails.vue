<script setup>
import { kuwaitValidator, numericValidator, requiredValidator } from "@/@core/utils/validators";
import { useToast } from 'vue-toastification'
import { useRoute } from 'vue-router';
import { update } from '@/apis/agent/orders'

const route = useRoute()
const orderId = route.params.id;
const toast = useToast();
const addressForm = ref();
const addressLoading = ref(false);
const props = defineProps({
  areas: {
    type: Array,
    default: [],
  },
  order: {
    type: Object,
    default: {},
  },
});

const form = ref({
  address_apartment: props.order.address_apartment,
  address_building_no: props.order.address_building_no,
  address_phone: props.order.address_phone,
  address_street_name: props.order.address_street_name,
  address_floor: props.order.address_floor,
  block_no: props.order.block_no,
});

const _updateOrderAddress = async () => {
  addressForm.value?.validate().then(async ({ valid: isValid }) => {
    if (isValid) {
      addressLoading.value = true;
      try {
        await update(orderId, form.value);
        toast.success("Order updated successfully");
        addressLoading.value = false;
      } catch (err) {
        toast.error(err.response.data.message);
        addressLoading.value = false;
      }
    }
  });
};
</script>
<template>
  <VCol
    class="mt-7 px-2 rounded pb-2"
    style="background-color: rgb(var(--v-theme-surface))"
  >
    <VRow class="px-6 pt-3" align="center" justify="space-between">
      <p class="text-h4 pt-3 mb-4">{{ $t('Address Details') }}</p>
      <VSpacer />
      <VChip size="default" label class="me-3" color="success">
        {{ order.address_area }}
      </VChip>
      <VChip size="default" label color="primary">
        {{ order.branch_name }}
      </VChip>
    </VRow>
    <VCol>
      <VCol>
        <VForm ref="addressForm" @submit.prevent="_updateOrderAddress">
          <VRow justify="space-between" align="start">
            <AppTextField
              prepend-inner-icon="tabler-phone"
              :label="$t('Phone Number')"
              :rules="[requiredValidator, kuwaitValidator, numericValidator]"
              placeholder="Phone Number"
              class="flex-grow-1 mx-2 my-1"
              v-model="form.address_phone"
            >
            </AppTextField>
            <AppTextField
              prepend-inner-icon="tabler-container"
              :label="$t('Building Number')"
              :rules="[requiredValidator]"
              placeholder="Building Number"
              class="flex-grow-1 mx-2 my-1"
              v-model="form.address_building_no"
            >
            </AppTextField>
          </VRow>
          <VRow justify="space-between" align="start" class="mt-6">
            <AppTextField
              prepend-inner-icon="tabler-stairs"
              placeholder="Floor"
              :label="$t('Floor')"
              :rules="[requiredValidator]"
              class="flex-grow-1 mx-2 my-1"
              v-model="form.address_floor"
            >
            </AppTextField>
            <AppTextField
              prepend-inner-icon="tabler-window"
              :label="$t('Apartment')"
              :rules="[requiredValidator]"
              placeholder="Apartment"
              class="flex-grow-1 mx-2 my-1"
              v-model="form.address_apartment"
            >
            </AppTextField>
          </VRow>
          <VRow justify="space-between" align="start" class="mt-6">
            <AppTextField
              prepend-inner-icon="tabler-road"
              placeholder="Street Name"
              :rules="[requiredValidator]"
              :label="$t('Street Name')"
              class="flex-grow-1 mx-2 my-1"
              v-model="form.address_street_name"
            ></AppTextField>
            <AppTextField
              prepend-inner-icon="tabler-number"
              :rules="[requiredValidator]"
              :label="$t('Block Number')"
              placeholder="Block Number"
              class="flex-grow-1 mx-2 my-1"
              v-model="form.block_no"
            ></AppTextField>
          </VRow>
          <VBtn class="mt-7" block type="submit" :loading="addressLoading">
            <VIcon icon="tabler-check"></VIcon> {{ $t('Update') }}
          </VBtn>
        </VForm>
      </VCol>
    </VCol>
  </VCol>
</template>
