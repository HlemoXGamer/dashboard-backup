<script setup>
import { remove } from "@/apis/admin/operations";
import { useToast } from "vue-toastification";
import { VDataTable } from "vuetify/labs/VDataTable";
import { useI18n } from "vue-i18n"
const $useI18n = useI18n()
const t = $useI18n.t;

const operationData = ref([]);
const loadingDialog = ref(false);
const toast = useToast();
const deleteDialog = ref(false);
const headers = computed(() => [
  {
    title: t("Name"),
    key: "name",
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
    key: "actions",
  },
])

const resolveStatusVariant = (status) => {
  if (parseInt(status) !== 0) {
    return {
      color: "success",
      text: "Active",
    };
  } else {
    if (parseInt(status) === 0) {
      return {
        color: "secondary",
        text: "Disabled",
      };
    }
  }
};

const customFilter = (value, search, item, key) => {
  if (item.raw.name.toLowerCase().includes(search.toLowerCase())) {
    return item.raw.name.toLowerCase().includes(search.toLowerCase());
  }
  return false;
};

let currentOperationData = {};
const _deleteDialog = (product) => {
  currentOperationData = product;
  operationData.value = JSON.stringify(product);
  operationData.value = JSON.parse(operationData.value);
  deleteDialog.value = true;
};

const deleteOperation = async () => {
  loadingDialog.value = true;
  try {
    await remove(operationData.value);
    props.operations.splice(props.operations.indexOf(currentOperationData), 1);
    toast.success("Operation deleted successfully");
    loadingDialog.value = false;
    deleteDialog.value = false;
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

const props = defineProps({
  operations: {
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

    <VCard title="Delete Operation">
      <VCardText> Are you sure that you want to delete this Operation? </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="deleteDialog = false"
          :disabled="loadingDialog"
        >
          Cancel
        </VBtn>
        <VBtn @click="deleteOperation()" :loading="loadingDialog"> Delete </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

<VCard elevation="0" rounded="0" class="px-0 mb-0 pb-5 mt-10 pt-2" :loading="loading">
  <VDataTable
    :items="operations"
    :headers="headers"
    :search="search"
    :items-per-page="15"
    :custom-filter="customFilter"
  >
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        :class="`text-${resolveStatusVariant(item.status).color}`"
        size="small"
        class="font-weight-medium"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>

    <template #item.actions="{ item }">
      <div class="d-flex gap-1">
        <IconBtn @click="$router.push(`operations/edit/${item.raw.id}`)">
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
