<script setup>
import { VDataTable } from "vuetify/labs/VDataTable";
import { useI18n } from "vue-i18n";
const $useI18n = useI18n();
const t = $useI18n.t;
const headers = computed(() => [
  {
    title: t("Day"),
    key: "o_id",
  },
  {
    title: t("Time"),
    sortable: false,
    key: "c_name",
  },
  {
    title: t("Item Name"),
    sortable: false,
    key: "o_area",
  },
  {
    title: t("Status"),
    sortable: false,
    key: "o_branch",
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
  />
</template>
