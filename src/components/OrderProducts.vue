<script setup>
import { VDataTable } from "vuetify/labs/VDataTable";
const headers = computed(() => [
  {
    title: "Product Name",
    sortable: false,
    align: "center",
    key: "name_en",
  },
  {
    title: "Quantity",
    sortable: false,
    align: "center",
    key: "quantity",
  },
  {
    title: "Price",
    sortable: false,
    align: "center",
    key: "price",
  },
  {
    title: "Total",
    sortable: false,
    align: "center",
    key: "total",
  },
  {
    title: "Actions",
    sortable: false,
    align: "center",
    key: "actions",
  },
])

const props = defineProps({
  imageError: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <VDataTable :headers="headers" class="pb-5 mt-8">
    <template #item.actions="{ item }">
      <IconBtn v-if="item?.raw?.extra || item?.raw?.flavor" class="position-relative">
        <VIcon icon="tabler-ad-2" @click="$emit('add-extra-flavors', item.raw)" />
        <span
          class="badge position-absolute bg-error"
          >1</span
        >
      </IconBtn>
      <IconBtn v-if="item.raw.has_image == 1" class="position-relative">
        <VIcon icon="tabler-photo-plus" @click="$emit('add-image', item.raw)" />
        <span
          v-if="
            item.raw.quantity !== item.raw.images &&
            item.raw.quantity >= item.raw.images &&
            item.raw.quantity - item.raw.images !== 0
          "
          class="badge position-absolute bg-error"
          >{{ item.raw.quantity - item.raw.images }}</span
        >
      </IconBtn>
      <IconBtn v-if="item.raw.has_note == 1">
        <VIcon
          icon="tabler-clipboard-text"
          @click="$emit('add-note', item.raw)"
        />
      </IconBtn>
      <IconBtn>
        <VIcon icon="mdi-delete-outline" @click="$emit('delete', item.raw)" />
      </IconBtn>
    </template>
  </VDataTable>
</template>

<style lang="scss" scoped>
.badge {
  top: 0 !important;
  right: -5px !important;
  padding: 2px 7px;
  border-radius: 50px;
}
</style>
