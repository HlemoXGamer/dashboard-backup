<script setup>
import { VDataTable } from "vuetify/labs/VDataTable";
import { useI18n } from "vue-i18n";
const $useI18n = useI18n();
const t = $useI18n.t;
const resolveStatusVariant = (status) => {
  if (status === 'activate') {
    return {
      color: "success",
      text: t("Activate"),
    };
  } else {
    if (status === 'deactivate') {
      return {
        color: "secondary",
        text: t("Deactivate"),
      };
    }
  }
};
const headers = computed(() => [
  {
    title: t("Branch"),
    key: "branch_id",
  },
  {
    title: t("Description"),
    sortable: false,
    key: "details",
  },
  {
    title: t("Changed At"),
    sortable: false,
    key: "updated_at",
  },
  {
    title: t("Status"),
    sortable: false,
    key: "action",
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
