<script setup>
const prop = defineProps({
  name: {
    type: String,
    default: "",
  },
  areas: {
    type: Array,
    default: [],
  },
});
</script>

<template>
  <VDialog width="500">
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        {{ prop.name }}
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Branch Areas">
      <VCardText>
        <VRow class="px-3 py-4" align="center" justify="center">
          <VBtn class="my-2 mx-3" v-for="area in prop.areas">
            {{ area.name }}
          </VBtn>
        </VRow>
      </VCardText>
    </VCard>
  </VDialog>
</template>
