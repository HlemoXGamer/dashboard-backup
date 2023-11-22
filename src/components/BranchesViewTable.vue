<script setup>
import { VDataTable } from "vuetify/labs/VDataTable";
import { useI18n } from "vue-i18n";
const $useI18n = useI18n();
const t = $useI18n.t;
const headers = computed(() => [
  {
    title: t("Day"),
    key: "day",
  },
  {
    title: t("Time"),
    sortable: false,
    key: "time",
  },
  {
    title: t("Item Name"),
    sortable: false,
    key: "item_name",
  },
  {
    title: t("Action"),
    sortable: false,
    key: "action",
  },{
    title: t("Details"),
    sortable: false,
    key: "details",
  },
]);

const props = defineProps({
  items: {
    type: Array,
    default: [],
  },
});
</script>

<template>
  <VDataTable
    :items="items"
    :headers="headers"
    :items-per-page="15"
    class="pb-5 mt-0"
    title="Branches Log"
  >
  <template #item.action="{item}">
    <VChip
        :color="resolveStatusVariant(item.raw.action).color"
        :class="`text-${resolveStatusVariant(item.raw.action).color}`"
        size="small"
        class="font-weight-medium"
      >
        {{ resolveStatusVariant(item.raw.action).text }}
      </VChip>
  </template>
  </VDataTable>
</template>
