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
  data: {
    type: Array,
    default: [],
  },
  loading: {
    type: Boolean,
    default: false
  }
});

// onMounted(() => {
//   console.log('Branches Log', props.items);
// });
// watch(() => props.items, (newVal) => {
//   console.log('Updated Branches Log', newVal);
// }, { deep: true });
</script>

<template>
  <VCard rounded="lg" class="pb-0 px-0" variant="flat" :loading="loading">
    <VCardText class="pa-0">
        <VDataTable
          :items="data"
          :headers="headers"
          :items-per-page="15"
          class="pb-5 mt-0"
          title="Branches Log"
        />
    </VCardText>
  </VCard>
</template>
