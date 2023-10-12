<script setup>
import { remove } from "@/apis/markter/categories";
import { useToast } from "vue-toastification";
import { VDataTable } from "vuetify/labs/VDataTable";
import { useI18n } from "vue-i18n"
const $useI18n = useI18n()
const t = $useI18n.t;

const langIdentifier = computed(() => {
    if ($useI18n.locale.value === 'en') {
      return 'name_en';
    } else if ($useI18n.locale.value === 'ar') {
      return 'name_ar';
    }
});

const categoryData = ref([]);
const loadingDialog = ref(false);
const toast = useToast();
const deleteDialog = ref(false);
const headers = computed(() => [
  {
    title: t("Name"),
    key: langIdentifier,
  },
  {
    title: t("Number Of Items"),
    key: "products_count",
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
  if (item.raw.name_en.toLowerCase().includes(search.toLowerCase())) {
    return item.raw.name_en.toLowerCase().includes(search.toLowerCase());
  }
  return false;
};

let currentCategoryData = {};
const _deleteDialog = (product) => {
  currentCategoryData = product;
  categoryData.value = JSON.stringify(product);
  categoryData.value = JSON.parse(categoryData.value);
  deleteDialog.value = true;
};

const deleteCategory = async () => {
  loadingDialog.value = true;
  try {
    await remove(categoryData.value);
    props.categories.splice(props.categories.indexOf(currentCategoryData), 1);
    toast.success("Category deleted successfully");
    loadingDialog.value = false;
    deleteDialog.value = false;
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

const props = defineProps({
  categories: {
    type: Array,
    default: [],
  },
  search: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <!-- DELETE DIALOG -->

  <VDialog v-model="deleteDialog" persistent class="v-dialog-sm">
    <DialogCloseBtn @click="deleteDialog = !deleteDialog" />

    <VCard title="Delete Category">
      <VCardText>
        Are you sure that you want to delete this Category?
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="deleteDialog = false"
          :disabled="loadingDialog"
        >
          Cancel
        </VBtn>
        <VBtn @click="deleteCategory()" :loading="loadingDialog"> Delete </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <VDataTable
    :items="categories"
    :headers="headers"
    :search="search"
    :items-per-page="15"
    :custom-filter="customFilter"
    class="pb-5 mt-10"
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
        <IconBtn @click="$router.push(`categories/edit/${item.raw.id}`)">
          <VIcon icon="mdi-pencil-outline" />
        </IconBtn>
        <IconBtn>
          <VIcon icon="mdi-delete-outline" @click="_deleteDialog(item.value)" />
        </IconBtn>
      </div>
    </template>
  </VDataTable>
</template>
