<script setup>
import { remove as adminRemove } from "@/apis/admin/products";
import { remove as markterRemove } from "@/apis/markter/products";
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
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const productData = ref([]);
const loadingDialog = ref(false);
const toast = useToast();
const deleteDialog = ref(false);
const headers = computed(() =>[
  {
    title: t("Product Code"),
    key: "code",
  },
  {
    title: t("Product Name"),
    key: langIdentifier,
  },
  {
    title: t("Price"),
    key: "price",
  },
  {
    title: t("Status"),
    key: "is_active",
  },
  {
    title: t("Created Date"),
    key: "created_at",
  },
  {
    title: t("Actions"),
    key: "actions",
    sortable: false,
    align: "center"
  },
  {
    title: t("id"),
    key: "id",
    align: " d-none",
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

let currentProductData = {};
const _deleteDialog = (product) => {
  console.log(product);
  currentProductData = product;
  productData.value = JSON.stringify(product);
  productData.value = JSON.parse(productData.value);
  deleteDialog.value = true;
};

const deleteProduct = async () => {
  loadingDialog.value = true;
  try {
    userRole == "admin"
      ? await adminRemove(productData.value.id)
      : await markterRemove(productData.value.id);
    props.products.splice(props.products.indexOf(currentProductData), 1);
    toast.success("Product deleted successfully");
    loadingDialog.value = false;
    deleteDialog.value = false;
  } catch (err) {
    toast.error(err?.response?.data?.message);
  }
};

const props = defineProps({
  products: {
    type: Array,
    default: [],
  },
  searchTerm: {
    type: Object,
    default: { term: "", category: "" },
  },
  loading: {
    type: Boolean,
    default: false
  },
  closed: {
    type: Boolean,
    default: false
  }
});

const filteredProducts = () => {
  let products = props.products;
  let category = props.searchTerm.category;
  let term = props.searchTerm.term;

  if (String(term).length > 0 && term !== null) {
    products = products.filter((product) =>
      String(product.name_en).toLowerCase().includes(term.toLowerCase()),
    );
  }

  if (String(category).length > 0 && category !== null) {
    products = products.filter((product) =>
      category.some((s_cat) =>
        product.categories.map((cat) => cat.id).includes(s_cat),
      ),
    );
  }

  return products;
};
</script>

<template>
  <!-- DELETE DIALOG -->

  <VDialog v-model="deleteDialog" persistent class="v-dialog-sm">
    <DialogCloseBtn @click="deleteDialog = !deleteDialog" />

    <VCard title="Delete Product">
      <VCardText>
        {{ $t('Are you sure that you want to delete this Product?') }}
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
        <VBtn @click="deleteProduct()" :loading="loadingDialog"> {{ $t('Delete') }} </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <VCard elevation="0" rounded="0" class="px-0 mb-0 pb-5 pt-2" :class="{ 'mt-6': closed, 'mt-10': !closed }" :loading="loading">
  <VDataTable
    :items="filteredProducts()"
    :headers="headers"
    :items-per-page="15"
  >
    <template #item.is_active="{ item }">
      <VChip
        :color="resolveStatusVariant(item.raw.is_active).color"
        :class="`text-${resolveStatusVariant(item.raw.is_active).color}`"
        size="small"
        class="font-weight-medium"
      >
        {{ resolveStatusVariant(item.raw.is_active).text }}
      </VChip>
    </template>

    <template #item.actions="{ item }">
      <div :class="{ 'd-flex gap-1': !closed }">
        <IconBtn @click="$router.push(`/products/edit/${item.raw.id}`)">
          <VIcon icon="mdi-pencil-outline" />
        </IconBtn>
        <IconBtn v-if="!closed">
          <VIcon icon="mdi-delete-outline" @click="_deleteDialog(item.raw)" />
        </IconBtn>
      </div>
    </template>
  </VDataTable>
  </VCard>
</template>
