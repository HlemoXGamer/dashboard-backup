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
  isPreValid: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <VDataTable :headers="headers" class="pb-5 mt-8">
    <template #item.actions="{ item }">
      <div class="d-flex flex-wrap justify-center">
        <div v-if="item?.raw?.is_pre === 1 && isPreValid" style="width: fit-content;">
        <IconBtn v-if="item?.raw?.extras?.length || item?.raw?.flavors?.length" class="position-relative" @click="$emit('add-extra-flavors', item.raw)">
          <VIcon icon="tabler-candy" />
        </IconBtn>
        </div>
        <IconBtn v-if="item.raw.has_image == 1" class="position-relative" @click="$emit('add-image', item.raw)">
          <VIcon icon="tabler-photo-plus" />
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
        <IconBtn v-if="item.raw.has_note == 1" @click="$emit('add-note', item.raw)" >
          <VIcon
            icon="tabler-clipboard-text"
          />
        </IconBtn>
        <IconBtn>
          <VIcon icon="mdi-delete-outline" @click="$emit('delete', item.raw)" />
        </IconBtn>
      </div>
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
