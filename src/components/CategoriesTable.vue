<script setup>
import { remove } from "@/apis/admin/categories";
import { useToast } from "vue-toastification";
import { VDataTable } from "vuetify/labs/VDataTable";
import Sortable from 'sortablejs';
import { updateSorted } from "@/apis/admin/categories"
const sortableBody = ref();
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
      text: t("Active"),
    };
  } else {
    if (parseInt(status) === 0) {
      return {
        color: "secondary",
        text: t("Disabled"),
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
    prop.categories.splice(prop.categories.indexOf(currentCategoryData), 1);
    toast.success("Category deleted successfully");
    loadingDialog.value = false;
    deleteDialog.value = false;
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

const prop = defineProps({
  categories: {
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

const emit = defineEmits([
  "sorted",
  "data"
]);

const pagination = ref({
  itemsPerPage: 15,
  page: 1
})

let allCats;
const newCats = ref([]);

const currentPageItems = computed(() => {
    const start = (pagination.value.page - 1) * pagination.value.itemsPerPage;
    const end = start + pagination.value.itemsPerPage;
    newCats.value = prop.categories;
    allCats = JSON.parse(JSON.stringify(prop.categories));
    return newCats.value.slice(start, end);
});

onMounted(() => {
  const el = document.getElementsByTagName("tbody")[0];
  new Sortable.create(el, {
      onEnd(event) {
        const newIndex = event.newIndex;
        const oldIndex = event.oldIndex;
        const movedItem = currentPageItems.value[oldIndex];
        
        allCats.splice(oldIndex, 1);
        allCats.splice(newIndex, 0, movedItem);
        
        newCats.value.splice(oldIndex, 1);
        newCats.value.splice(newIndex, 0, movedItem);

        let newArray = [];

        newCats.value.forEach((cat, index) => {
          newArray.push({
            category_id: cat.id,
            position: index
          })
        })

        emit("sorted", true);
        emit("data", newArray)
    }
  });
})

</script>

<template>
  <!-- DELETE DIALOG -->

  <VDialog v-model="deleteDialog" persistent class="v-dialog-sm">
    <DialogCloseBtn @click="deleteDialog = !deleteDialog" />

    <VCard title="Delete Category">
      <VCardText>
        {{ $t('Are you sure that you want to delete this Category?') }}
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="deleteDialog = false"
          :disabled="loadingDialog"
        >
          {{ $t('Cancel') }}
        </VBtn>
        <VBtn @click="deleteCategory()" :loading="loadingDialog"> {{ $t('Delete') }} </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
<VCard elevation="0" rounded="0" class="px-0 mb-0 pb-5 mt-10 pt-2" :loading="loading">
  <VDataTable :custom-filter="customFilter" :search="search" :headers="headers" :items="currentPageItems" v-model:page="pagination.page" v-model:items-per-page="pagination.itemsPerPage" ref="sortableBody">
    <template #item.status="{ item }">
      <VChip :color="resolveStatusVariant(item.raw.is_active).color" :class="`text-${resolveStatusVariant(item.raw.is_active).color}`"
        size="small" class="font-weight-medium">
        {{ resolveStatusVariant(item.raw.is_active).text }}
      </VChip>
    </template>
    <template #item.actions="{ item }">
      <div class="d-flex gap-1">
        <IconBtn @click="$router.push(`categories/edit/${item.raw.id}`)">
          <VIcon icon="mdi-pencil-outline" />
        </IconBtn>
        <IconBtn>
          <VIcon icon="mdi-delete-outline"  @click="_deleteDialog(item.value)" />
        </IconBtn>
      </div>
    </template>
  </VDataTable>
</VCard>
</template>
