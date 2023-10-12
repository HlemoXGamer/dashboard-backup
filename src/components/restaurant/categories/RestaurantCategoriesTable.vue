<script setup>
import { VDataTable } from "vuetify/labs/VDataTable";
import axios from "@/plugins/axios";
import { useToast } from "vue-toastification";
const toast = useToast();
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
  {
    title: t("Activation"),
    key: "activation",
  },
])

const customFilter = (value, search, item, key) => {
  if (item.raw.name_en.toLowerCase().includes(search.toLowerCase())) {
    return item.raw.name_en.toLowerCase().includes(search.toLowerCase());
  }
  return false;
};

const UpdateProducts = (id, status_counter) => {
  console.log(id);
  console.log(status_counter);
  axios
    .post("/restaurant-apis/update/products", {
      category_id: id,
      status: status_counter > 0 ? 1 : 0,
    })
    .then((response) => {
      toast.success("Category updated successfully");
    })
    .catch((error) => {
      toast.error("Something Went Wrong", error.message);
    });
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
  loading: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <VCard elevation="0" rounded="0" class="px-0 mb-0 pb-5 mt-10 pt-2" :loading="loading">
  <VDataTable
    :items="categories"
    :headers="headers"
    :search="search"
    :items-per-page="15"
    :custom-filter="customFilter"
  >
    <!-- Trending Header -->
    <template #column.trending>
      <VIcon size="22" icon="tabler-trending-up" />
    </template>

    <!-- Name -->
    <template #item.id="{ item }">
      {{ item.id }}
    </template>

    <!-- Total -->
    <template #item.quantity="{ item }"> ${{ item.quantity }} </template>

    <!-- Date -->
    <template #item.date="{ item }">
      {{ item.created_at }}
    </template>

    <!-- Actions -->
    <template #item.actions="{ item }">
      <IconBtn :to="`/categories/${item.raw.id}`">
        <VIcon icon="tabler-eye" />
      </IconBtn>
    </template>

    <!-- Activation -->
    <template #item.activation="{ item }">
      <VSwitch
        v-model="item.raw.status_counter"
        :false-value="0"
        :true-value="
          item.raw.status_counter === 0 ? 1 : item.raw.status_counter
        "
        @change="UpdateProducts(item.raw.id, item.raw.status_counter)"
        ref="switchActive"
      />
    </template>
  </VDataTable>
</VCard>
</template>
