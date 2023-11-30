<script setup>
import { VDataTable } from "vuetify/labs/VDataTable";
import { useI18n } from "vue-i18n"
const $useI18n = useI18n()
const t = $useI18n.t;

const headers = computed(() => 
    [
      {
        title: t("Order ID"),
        key: "id",
        width: '200px'
      },
      {
        title: t("Branch"),
        sortable: false,
        key: "branch",
        width: '200px'
      },
      {
        title: t("Area"),
        sortable: false,
        key: "area",
        width: '200px'
      },
      {
        title: t("Product"),
        sortable: false,
        key: "first_product",
        width: '200px'
      },
      {
        title: t("Price"),
        sortable: false,
        key: "price",
        width: '200px'
      },
      {
        title: t("Quantity"),
        sortable: false,
        key: "quantity",
        width: '200px'
      },
      {
        title: t("Total Amount"),
        sortable: false,
        key: "total_amount",
        width: '200px'
      },
      {
        title: t("Created By"),
        sortable: false,
        key: "created_by",
        width: '200px'
      }
    ]
)

const props = defineProps({
  filters: {
    type: Object,
    default: {},
  },
  reports: {
    type: Array,
    default: [],
  },
  meta: {
    type: Object,
    default: {},
  },
  gettingReports: {
    type: Boolean,
    default: false,
  },
  hasProducts: {
    type: Boolean,
    default: false
  }
});


const emits = defineEmits();
const sortedBy = ref();
const emitSortBy = () => {
  emits("update-sort-by", sortedBy.value);
};
const emitPage = (n) => {
  emits("update-page-n", n);
};

onMounted(() => {
});
</script>

<template>
  <VCard elevation="0" class="px-0 mb-0 pb-0 mt-5 pt-3" :loading="gettingReports">
    <VDataTable v-model:sort-by="sortedBy" @update:sort-by="emitSortBy" :items="reports" :headers="headers"
      :items-per-page="15">
      <template #bottom>
        <VRow class="mt-3 mb-0 pb-0 mx-0" align="center" justify="end">
          <VPagination total-visible="5" v-if="props.meta.total" v-model="props.meta.current_page"
            :length="Math.ceil(props.meta.total / props.meta.per_page)" @update:model-value="emitPage"
            :disabled="props.gettingReports" :size="35">
          </VPagination>
        </VRow>
      </template>
    </VDataTable>
  </VCard>
</template>
