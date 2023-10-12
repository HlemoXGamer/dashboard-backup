<script setup>
const props = defineProps({
  order: {
    type: Object,
    default: {},
  },
});
</script>
<template>
  <VCol
    class="mt-7 px-5 rounded pb-6"
    style="background-color: rgb(var(--v-theme-surface))"
  >
    <VRow class="px-4 pt-3" align="center" justify="space-between">
      <p class="text-h4 pt-3 mb-4">{{ $t('Address Details') }}</p>
      <VChip size="default" label color="primary">
        {{ props.order.branch_name }}
      </VChip>
    </VRow>
    <VCol>
      <p class="text-h6 pt-3 mb-0">
        {{ $t('Customer Name') }} : {{ props.order.customer_name }}
      </p>
      <p class="text-h6 pt-3 mb-0">
        {{ props.order.address_city }} , {{ props.order.address_area_name }}
      </p>
      <p class="text-h6 pt-3 mb-0">
        {{ $t('Building Number') }} {{ props.order.address_building_no }}, {{ $t('Floor') }}
        {{ props.order.address_floor }}, {{ $t('Apartment') }}
        {{ props.order.address_apartment }}
      </p>
      <p class="text-h6 pt-3 mb-0">{{ $t('Block Number') }} {{ props.order.block_no }}</p>
      <p class="text-h6 pt-3 mb-0">
        {{ $t('Phone Number') }} : {{ props.order.address_phone }}
      </p>
    </VCol>
  </VCol>
</template>
