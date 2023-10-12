<script setup>
import { get as getAdminCategories, updateSorted } from "@/apis/admin/categories";
import { get as getMarkterCategories } from "@/apis/markter/categories";
import { get as getRestuarantCategories } from "@/apis/restuarant/categories";
import { useToast } from "vue-toastification";

const toast = useToast();
const adminCategories = ref([]);
const markterCategories = ref([]);
const restaurantCategories = ref([]);
const searchTerm = ref("");

const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const loading = ref(false);
const getCategories = async () => {
  loading.value = true;
  if (userRole == "admin") {
    await getAdminCategories().then(({ data, meta }) => {
      adminCategories.value = data.data;
    });
  } else if (userRole == "markter") {
    await getMarkterCategories().then(({ data, meta }) => {
      markterCategories.value = data.data;
    });
  } else {
    await getRestuarantCategories().then(({ data, meta }) => {
      restaurantCategories.value = data.data;
    });
  }
  loading.value = false;
};

const sortedData = ref([]);
const isSorted = ref(false);
const sortedLoading = ref(false);
const setSorted = (value) => {
  isSorted.value = true
}

const setSortedData = (data) => {
  sortedData.value = data;
}

const updateCategories = async () => {
  sortedLoading.value = true;
  await updateSorted({ sorted_category: sortedData.value }).then(({data}) => {
    toast.success("Categories sorting updated successfully")
  }).catch((err) => {
    toast.error(err.response.data.message);
  })
  
  isSorted.value = false;
  sortedLoading.value = false;
}

onMounted(() => {
  getCategories();
});
</script>

<template>
  <VRow class="mt-4 px-4">
    <VCol style="background-color: rgb(var(--v-theme-surface))" class="rounded">
      <p class="text-h4 pt-3 pb-4 px-3">{{ $t('Categories') }}</p>
      <VRow class="px-7" align="center" justify="space-between">
        <VRow align="center" justify="center" justify-lg="start">
          <AppTextField
            prepend-inner-icon="tabler-search"
            v-model="searchTerm"
            :placeholder="$t('Search for a Category')"
            class="mx-2"
            style="width: 300px; max-width: 300px"
          ></AppTextField>
        </VRow>
        <!-- Appears Only In Admin -->
        <VBtn
          v-if="userRole == 'admin' && isSorted"
          color="success"
          class="me-3"
          :loading="sortedLoading"
          @click="updateCategories"
        >
          <VIcon start icon="tabler-check" />Update Categories
        </VBtn>
        <VBtn
          v-if="userRole == 'admin' || userRole == 'markter'"
          @click="$router.push('categories/add/')"
        >
          <VIcon start icon="tabler-plus" />{{ $t('Add Category') }}
        </VBtn>
        <!-- Appears Only In Admin -->
      </VRow>
      <CategoriesTable
        @sorted="setSorted"
        @data="setSortedData"
        :loading="loading"
        v-if="userRole == 'admin'"
        :categories="adminCategories"
        :search="searchTerm"
      />
      <MarketerCategoriesTable
        :loading="loading"
        v-if="userRole == 'markter'"
        :categories="markterCategories"
        :search="searchTerm"
      />
      <RestaurantCategoriesTable
        :loading="loading"
        v-if="userRole == 'restaurant'"
        :categories="restaurantCategories"
        :search="searchTerm"
      />
    </VCol>
  </VRow>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
  roles: ["admin", "restaurant", "markter"]
</route>