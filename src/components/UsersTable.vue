<script setup>
import { useToast } from "vue-toastification";
import { VDataTable } from "vuetify/labs/VDataTable";
const userData = ref([]);
const loadingDialog = ref(false);
const toast = useToast();
import { useI18n } from "vue-i18n"
const $useI18n = useI18n()
const t = $useI18n.t;

const headers = computed(() => [
  {
    title: t("Name"),
    key: "name",
  },
  {
    title: t("Email"),
    key: "email",
  },
  {
    title: t("Phone Number"),
    key: "phone",
  },
  {
    title: t("Created Date"),
    key: "created_at",
  },
  {
    title: t("Actions"),
    sortable: false,
    align: "center",
    key: "actions",
  },
])

const customFilter = (value, search, item, key) => {
  if (item.raw.name.toLowerCase().includes(search.toLowerCase())) {
    return item.raw.name.toLowerCase().includes(search.toLowerCase());
  }
  return false;
};

const props = defineProps({
  users: {
    type: Array,
    default: [],
  },
  search: {
    type: String,
    default: "",
  },
  loading: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
    <VCard elevation="0" rounded="0" class="px-0 mb-0 pb-5 mt-10 pt-2" :loading="loading">
  <VDataTable
    :items="users"
    :headers="headers"
    :search="search"
    :items-per-page="15"
    :custom-filter="customFilter"
  >
    <template #item.actions="{ item }">
      <IconBtn @click="$router.push(`users/edit/${item.raw.id}`)">
        <VIcon icon="mdi-pencil-outline" />
      </IconBtn>
    </template>
  </VDataTable>
  </VCard>
</template>
