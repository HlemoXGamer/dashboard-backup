<script setup>
import { integerValidator } from "@/@core/utils/validators";
const refundAmount = ref();
const refundForm = ref();
const orderId = computed(() => {
  return route.params.id;
});
const _refund = () => {
  refundForm.value?.validate().then(async ({ valid: isValid }) => {
    if (isValid) {
      refundLoading.value = true;
      try {
        await reFund({
          refund_amount: refundAmount.value,
          order_id: orderId.value,
        });
        toast.success("Order refunded successfully");
        refundLoading.value = false;
      } catch (err) {
        toast.error(err.response.data.message);
      }
    }
  });
};
</script>
<template>
  <VCol
    class="mt-6 px-5 rounded pb-8 w-100 mx-auto"
    style="background-color: rgb(var(--v-theme-surface))"
  >
    <p class="text-h4 pt-3 mb-3">{{ $t("Refund") }}</p>
    <VCol>
      <VRow justify="space-between" align="center">
        <VForm ref="refundForm" @submit.prevent="_refund" class="w-100">
          <AppTextField
            :rules="[integerValidator]"
            prepend-inner-icon="tabler-coins"
            :placeholder="$t('Refund Amount')"
            style="width: 100%"
            variant="outlined"
            class="flex-grow-1"
            v-model="refundAmount"
          />
          <VBtn
            class="mt-3"
            block
            type="submit"
            :disabled="!refundAmount || order.status == 'created'"
            >{{ $t("Refund") }}
          </VBtn>
        </VForm>
      </VRow>
    </VCol>
  </VCol>
</template>
