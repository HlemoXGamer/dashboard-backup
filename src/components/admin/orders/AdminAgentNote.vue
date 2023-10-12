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
    <p class="text-h4 pt-3 mb-1">{{ $t('Agent Note') }}</p>
    <VCol>
      <p
        class="text-h5 pt-0 mb-0"
        :class="order.agent_note !== '' ? 'text-left' : 'text-center'"
      >
        {{
          order.agent_note !== "" ? order.agent_note : "There is no agent note!"
        }}
      </p>
    </VCol>
  </VCol>
</template>
