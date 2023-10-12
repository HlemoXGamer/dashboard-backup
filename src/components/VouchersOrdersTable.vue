<script setup>
import { VDataTable } from "vuetify/labs/VDataTable";
import { useI18n } from "vue-i18n"
const $useI18n = useI18n()
const t = $useI18n.t;
const headers = computed(() => [
  {
    title: t("Order ID"),
    key: "o_id",
  },
  {
    title: t("Name"),
    sortable: false,
    key: "c_name",
  },
  {
    title: t("Area"),
    sortable: false,
    key: "o_area",
  },
  {
    title: t("Branch"),
    sortable: false,
    key: "o_branch",
  },
  {
    title: t("Before Total"),
    key: "o_be_total",
  },
  {
    title: t("After Total"),
    key: "o_af_total",
  },
  {
    title: t("Actions"),
    sortable: false,
    key: "actions",
    align: "center",
  },
])
</script>

<template>
  <VDataTable :headers="headers" :items-per-page="15" class="pb-5 mt-0">
    <template #item.actions="{ item }">
      <IconBtn @click="$router.push(`/orders/${item.raw.o_id}`)">
        <VIcon icon="mdi-eye" />
      </IconBtn>
    </template>
  </VDataTable>
</template>
