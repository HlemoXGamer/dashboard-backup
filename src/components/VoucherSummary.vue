<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});
</script>
<template>
  <VCard rounded="lg" class="pb-6 px-0" variant="flat">
    <VCardText>
      <p class="text-h4 py-1 mb-3">{{ $t('Voucher Details') }}</p>
      <VRow class="px-2 mt-3">
        <AppTextField
          readonly
          :label="$t('Code')"
          class="mx-4 flex-grow-1"
          v-model="data.v_code"
        ></AppTextField>
        <AppTextField
          readonly
          :label="$t('Name')"
          class="mx-4 flex-grow-1"
          v-model="data.v_name"
        ></AppTextField>
        <AppTextField
          readonly
          :label="$t('Type')"
          class="mx-4 flex-grow-1"
          v-model="data.v_type_name"
        ></AppTextField>
      </VRow>
      <VRow class="px-2 mt-7">
        <AppTextField
          readonly
          :label="$t('Amount')"
          class="mx-4 flex-grow-1"
          v-model="data.v_amount"
        ></AppTextField>
        <AppTextField
          readonly
          :label="$t('Usage')"
          class="mx-4 flex-grow-1"
          v-model="data.v_usage"
        ></AppTextField>
        <AppTextField
          readonly
          :label="$t('Limit')"
          class="mx-4 flex-grow-1"
          v-model="data.v_limit"
        ></AppTextField>
      </VRow>
    </VCardText>
  </VCard>
</template>
