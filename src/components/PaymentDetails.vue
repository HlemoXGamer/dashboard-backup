<script setup>
const props = defineProps({
  paymentMethod: {
    type: String,
    default: "",
  },
  total: {
    default: "",
  },
  subtotal: {
    default: "",
  },
  newtotal: {
    default: "",
  },
  discountType: {
    default: "",
  },
  discountRate: {
    default: "",
  },
  deliveryCost: {
    default: "",
  },
});
const discounts = { "fixed" : "KWD", "percentage": "%" };
</script>

<template>
  <VCol
    class="px-5 rounded pb-10 w-100 mx-auto"
    style="background-color: rgb(var(--v-theme-surface))"
  >
    <p class="text-h4 pt-3 mb-3">{{ $t('Payment Details') }}</p>
    <VCol>
      <VRow class="mt-0">
        <VCard
          class="w-100 px-2 py-2"
          variant="tonal"
          :color="$vuetify.theme.current.dark ? '#B3BFFFFF' : 'primary'"
        >
          <VCardText>
            <VRow align="center" justify="space-between">
              <p class="mb-2">{{ $t('Payment Method') }}</p>
              <p class="mb-2">{{ paymentMethod }}</p>
            </VRow>

            <VRow>
              <VDivider
                :color="$vuetify.theme.current.dark ? '#B3BFFFFF' : 'primary'"
              ></VDivider>
            </VRow>

            <VRow align="center" justify="space-between" class="mt-5">
              <p class="mb-2">{{ $t('Subtotal') }}</p>
              <p class="mb-2">{{ subtotal }} KWD</p>
            </VRow>

            <VRow>
              <VDivider
                :color="$vuetify.theme.current.dark ? '#B3BFFFFF' : 'primary'"
              ></VDivider>
            </VRow>

            <VRow
              v-if="discountRate"
              align="center"
              justify="space-between"
              class="mt-5"
            >
              <p class="mb-2">{{ $t('Discount rate') }}</p>
              <p class="mb-2">
                {{
                  discountRate !== 0
                    ? discountRate + discounts[discountType]
                    : "Free Delivery"
                }}
              </p>
            </VRow>

            <VRow v-if="discountRate">
              <VDivider
                :color="$vuetify.theme.current.dark ? '#B3BFFFFF' : 'primary'"
              ></VDivider>
            </VRow>

            <VRow align="center" justify="space-between" class="mt-5">
              <p class="mb-2">{{ $t('Deliver Cost') }}</p>
              <p class="mb-2">{{ deliveryCost }} KWD</p>
            </VRow>

            <VRow>
              <VDivider
                :color="$vuetify.theme.current.dark ? '#B3BFFFFF' : 'primary'"
              ></VDivider>
            </VRow>

            <VRow align="center" justify="space-between" class="mt-5">
              <p class="mb-2">{{ $t('Total') }}</p>
              <p class="mb-2">{{ total }} KWD</p>
            </VRow>

            <VRow v-if="newtotal">
              <VDivider
                :color="$vuetify.theme.current.dark ? '#B3BFFFFF' : 'primary'"
              ></VDivider>
            </VRow>
            <VRow
              v-if="newtotal"
              align="center"
              justify="space-between"
              class="mt-5"
            >
              <p class="mb-0">{{ $t('New Total') }}</p>
              <p class="mb-0">{{ Number(newtotal).toFixed(2) }} KWD</p>
            </VRow>
          </VCardText>
        </VCard>
      </VRow>
    </VCol>
  </VCol>
</template>
