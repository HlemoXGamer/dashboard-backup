<script setup>
import { remove as removeExtraFlavor } from "@/apis/admin/extra-flavors";
import { useToast } from "vue-toastification";
import { VDataTable } from "vuetify/labs/VDataTable";
import { useI18n } from "vue-i18n"
import { computed } from "vue";

const $useI18n = useI18n();
const t = $useI18n.t
const langIdentifier = computed(() => {
    if ($useI18n.locale.value === 'en') {
      return 'name';
    } else if ($useI18n.locale.value === 'ar') {
      return 'name';
    }
  });
  
const extraFlavorData = ref([]);
const loadingDialog = ref(false);
const toast = useToast();
const deleteDialog = ref(false);
const headers = computed(() => [
  {
    title: t("Name"),
    key: langIdentifier,
  },
  {
    title: t("Type"),
    key: 'type',
  },
  {
    title: t("Price"),
    key: 'price',
  },
  {
    title: t("Actions"),
    sortable: false,
    key: "actions",
  },
]);

const customFilter = (value, search, item, key) => {
  const term = search;
  if (item.raw.name.toLowerCase().includes(term.toLowerCase())) {
    return item.raw.name.toLowerCase().includes(term.toLowerCase());
  }
  return false;
};

let currentExtraFlavorData = {};

const _deleteDialog = (extraFlavor) => {
  currentExtraFlavorData = extraFlavor;
  extraFlavorData.value = JSON.stringify(extraFlavor);
  extraFlavorData.value = JSON.parse(extraFlavorData.value);
  deleteDialog.value = true;
};

const deleteExtraFlavor = async () => {
  loadingDialog.value = true;
  try {
    await removeExtraFlavor(extraFlavorData.value);
    props.extra_flavors.splice(props.extra_flavors.indexOf(currentExtraFlavorData), 1);
    toast.success("Extra/Flavor deleted successfully");
    loadingDialog.value = false;
    deleteDialog.value = false;
  } catch (err) {
    toast.error("Something Went Wrong");
    deleteDialog.value = false;
  }
};

const props = defineProps({
  extra_flavors: {
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
  <!-- DELETE DIALOG -->

  <VDialog v-model="deleteDialog" persistent class="v-dialog-sm">
    <DialogCloseBtn @click="deleteDialog = !deleteDialog" />

    <VCard title="Delete Extra/Flavor">
      <VCardText> {{ $t("Are you sure that you want to delete this Extra Or Flavor?") }} </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="deleteDialog = false"
          :disabled="loadingDialog"
        >
          {{ $t("Cancel") }}
        </VBtn>
        <VBtn @click="deleteExtraFlavor" :loading="loadingDialog"> {{ $t("Delete") }} </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
  <VCard elevation="0" rounded="0" class="px-0 mb-0 pb-5 mt-10 pt-2" :loading="loading">
  <VDataTable
    :items="props.extra_flavors"
    :headers="headers"
    :search="props.search"
    :custom-filter="customFilter"
    :items-per-page="15"
  >
    <template #item.actions="{ item }">
      <div class="d-flex gap-1">
        <IconBtn @click="$router.push(`extra-flavors/edit/${item.raw.id}`)">
          <VIcon icon="mdi-pencil-outline" />
        </IconBtn>
        <IconBtn>
          <VIcon icon="mdi-delete-outline" @click="_deleteDialog(item.value)" />
        </IconBtn>
      </div>
    </template>
  </VDataTable>
  </VCard>
</template>
