<script setup>
import { get as getAdminCategories } from "@/apis/admin/categories";
import { get as getAdminProducts } from "@/apis/admin/products";

import { get as getMarkterCategories } from "@/apis/markter/categories";
import { get as getMarkterProducts } from "@/apis/markter/products";
import { useI18n } from "vue-i18n";
const t = useI18n().t;
const currentTab = ref("products")
const selectedCategory = ref([]);
const categories = ref([]);
const products = ref([]);
const closedProducts = ref([]);
const closedSelectedCategory = ref([]);
const closedSearchTerm = ref("");
const searchTerm = ref("");
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const loading = ref(false);
const getProducts = async () => {
  loading.value = true;
  if (userRole == "admin") {
    await getAdminProducts().then(({ data, meta }) => {
      products.value = data.data;
    });
  } else if (userRole == "markter") {
    await getMarkterProducts().then(({ data, meta }) => {
      products.value = data.data;
    });
  }
  closedProducts.value = products.value.filter(product => product.is_active === 0);
  loading.value = false;
};

const _getCategories = () => {
  if (userRole == "admin") {
    getAdminCategories().then(({ data, meta }) => {
      categories.value = data.data;
    });
  } else if (userRole == "markter") {
    getMarkterCategories().then(({ data, meta }) => {
      categories.value = data.data;
    });
  }
};

const getSearchTerm = (closed = false) => {
  let filters = { term: "", category: "" };
  if(closed){
    if (closedSearchTerm.value !== "" && closedSearchTerm.value !== null) {
      filters.term = closedSearchTerm.value;
    }
    if (closedSelectedCategory.value !== "" && closedSelectedCategory.value !== null) {
      filters.category = closedSelectedCategory.value;
    }
  }else{
    if (searchTerm.value !== "" && searchTerm.value !== null) {
      filters.term = searchTerm.value;
    }
    if (selectedCategory.value !== "" && selectedCategory.value !== null) {
      filters.category = selectedCategory.value;
    }
  }
  return filters;
};

onMounted(() => {
  getProducts();
  _getCategories();
});
</script>
<template>
  <div>
    <VRow class="mx-0 my-0">
      <VTabs v-model="currentTab" class="mx-auto v-tabs-pill">
        <VTab value="products">{{ $t('Products') }}</VTab>
        <VTab value="closed_products">{{ $t('Closed Products') }}</VTab>
      </VTabs>
      <VSpacer />
    </VRow>
    <VWindow v-model="currentTab">
      <VWindowItem value="products">
        <VRow class="mt-4 px-4">
          <VCol style="background-color: rgb(var(--v-theme-surface))" class="rounded">
            <p class="text-h4 pt-3 pb-2 px-3">{{ t("Products") }}</p>
            <VRow class="px-7" align="center" justify="space-between">
              <VRow align="center" justify="center" justify-lg="start">
                <AppTextField
                  prepend-inner-icon="tabler-search"
                  v-model="searchTerm"
                  :placeholder="$t('Search for a Product')"
                  class="mx-2"
                  style="width: 300px; max-width: 300px"
                ></AppTextField>
                <VCombobox
                  prepend-inner-icon="tabler-bookmark"
                  multiple
                  :placeholder="$t('Select a Category')"
                  v-model="selectedCategory"
                  class="flex-grow-0 mx-2 mt-2 mt-lg-0 mt-md-0 mt-sm-0"
                  :items="categories"
                  item-title="name_en"
                  item-value="id"
                  style="width: 300px"
                  :return-object="false"
                />
              </VRow>
              <VBtn @click="$router.push('/products/add/')"
                ><VIcon start icon="tabler-plus" />{{ $t('Add Product') }}</VBtn
              >
            </VRow>
            <ProductsTable :loading="loading" :products="products" :searchTerm="getSearchTerm()" />
          </VCol>
        </VRow>
      </VWindowItem>
      <VWindowItem value="closed_products">
        <VCol style="background-color: rgb(var(--v-theme-surface))" class="rounded mt-4">
            <p class="text-h4 pt-3 pb-0 px-3">{{ t("Closed Products") }}</p>
            <VRow align="center" justify="center" justify-lg="start" class="mx-0 my-0 px-0 py-0">
                <AppTextField
                  prepend-inner-icon="tabler-search"
                  v-model="closedSearchTerm"
                  :placeholder="$t('Search for a Product')"
                  class="mx-2"
                  style="width: 300px; max-width: 300px"
                ></AppTextField>
                <VCombobox
                  prepend-inner-icon="tabler-bookmark"
                  multiple
                  :placeholder="$t('Select a Category')"
                  v-model="closedSelectedCategory"
                  class="flex-grow-0 mx-2 mt-2 mt-lg-0 mt-md-0 mt-sm-0"
                  :items="categories"
                  item-title="name_en"
                  item-value="id"
                  style="width: 300px"
                  :return-object="false"
                />
              </VRow>
            <ProductsTable closed :loading="loading" :products="closedProducts" :searchTerm="getSearchTerm(true)" />
        </VCol>
      </VWindowItem>
    </VWindow>
</div>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
  roles: ["admin", "markter"]
</route>
