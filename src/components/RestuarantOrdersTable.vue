<script setup>
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
const headers = computed(() => [
  {
    title: t("Order Number"),
    key: "id",
  },
  // {
  //   title: t("SalesId AX"),
  //   key: "salesId_ax",
  // },
  {
    title: t("Product"),
    key: "products",
  },
  {
    title: t("Paid At"),
    key: "paid_at"
  },
  // {
  //   title: t("Quantity"),
  //   key: "quantity",
  // },
  {
    title: t("Delivery Date"),
    key: "delivery_date"
  },
  {
    title: t("Status"),
    key: "status",
    sortable: false,
    align: "center",
  },
  {
    title: t("Actions"),
    key: "actions",
    sortable: false,
    align: "center",
  },
])

const resolveStatusVariant = (status) => {
  if (status == "created") {
    return {
      color: "warning",
      text: t("Created"),
    };
  } else if (status == "ready_for_delivery") {
    return {
      color: "#2FE9D0",
      text: t("Ready For Delivery"),
    };
  } else if (status == "in_progress") {
    return {
      color: "#E9982F",
      text: t("In Progress"),
    };
  } else if (status == "cancelled") {
    return {
      color: "danger",
      text: t("Cancelled"),
    };
  } else if (status == "on_the_way") {
    return {
      color: "grey lighten-3 black--text",
      text: t("On The Way"),
    };
  } else if (status == "paid") {
    return {
      color: "success",
      text: t("Paid"),
    };
  } else if (status == "delivered") {
    return {
      color: "blue-lighten-1",
      text: t("Delivered"),
    };
  }
};

const emits = defineEmits();
const sortedBy = ref();
const emitSortBy = () => {
  emits("update-sort-by", sortedBy.value);
};
const emitPage = (n) => {
  emits("update-page-n", n);
};

const props = defineProps({
  filters: {
    type: Object,
    default: {},
  },
  orders: {
    type: Array,
    default: [],
  },
  meta: {
    type: Object,
    default: {},
  },
  gettingOrders: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <VCard rounded="0" elevation="0" class="px-0 mb-0 pb-5 mt-6 pt-5" :loading="gettingOrders">
  <VDataTable
    v-model:sort-by="sortedBy"
    @update:sort-by="emitSortBy"
    :items="orders"
    :headers="headers"
    :items-per-page="15"
  >
    <template #item.salesId_ax="{ item }">
      {{ item.raw.salesId_ax?? "" }}
    </template>

    <template #item.products="{ item }">
      {{ item.raw.products.length > 0 ? item.raw.products[0][langIdentifier] : "" }}
    </template>


    <template #item.status="{ item }">
        <VChip
          :color="resolveStatusVariant(item.raw.status).color"
          :class="`text-${resolveStatusVariant(item.raw.status).color}`"
          size="small"
          class="font-weight-medium"
        >
          {{ resolveStatusVariant(item.raw.status).text }}
        </VChip>
      </template>

    <template #item.actions="{ item }">
      <VBtn :to="`/orders/${item.raw.id}`">{{ $t('View Details') }}</VBtn>
    </template>


    <template #bottom>
      <VRow class="mt-3 mb-0 pb-0 mx-0" align="center" justify="end">
        <VPagination
          total-visible="5"
          v-if="props.meta.total"
          v-model="props.meta.current_page"
          :length="Math.ceil(props.meta.total / props.meta.per_page)"
          @update:model-value="emitPage"
          :disabled="props.gettingOrders"
        />
      </VRow>
    </template>
  </VDataTable>
  </VCard>
</template>
