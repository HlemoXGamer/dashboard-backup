<script setup>
import { VDataTable } from "vuetify/labs/VDataTable";
import { useI18n } from "vue-i18n"
const $useI18n = useI18n()
const t = $useI18n.t;

const headers = computed(() =>[
  {
    title: t("Order ID"),
    key: "id",
    width: '200px'
  },
  // {
  //   title: t("Date"),
  //   sortable: false,
  //   key: "date",
  //   width: '200px'
  // },
  // {
  //   title: t("Time"),
  //   sortable: false,
  //   key: "time",
  //   width: '200px'
  // },
  {
    title: t("Branch"),
    sortable: false,
    key: "branch",
    width: '200px'
  },
  {
    title: t("Product"),
    sortable: false,
    key: "first_product",
    width: '200px'
  },
  {
    title: t("Total Amount"),
    sortable: false,
    key: "total_amount",
    width: '200px'
  },
  {
    title: t("Status"),
    sortable: false,
    key: "status",
    width: '200px'
  },
  {
    title: t("Delivery Name"),
    sortable: false,
    key: "delivery_name",
    width: '200px'
  },
  {
    title: t("Agent"),
    sortable: false,
    key: "agent_name",
    width: '200px'
  },
  {
    title: t("Area"),
    sortable: false,
    key: "area",
    width: '200px'
  },
  // {
  //   title: t("Created"),
  //   sortable: false,
  //   key: "created_at",
  //   width: '200px'
  // },
    {
    title: t("Paid Date"),
    sortable: false,
    key: "paid_at",
    width: '200px'
  },
  {
    title: t("In Progress"),
    sortable: false,
    key: "in_progress",
    width: '200px'
  },
  {
    title: t("Ready For Delivery"),
    sortable: false,
    key: "ready_for_delivery",
    width: '200px'
  },
  {
    title: t("On The Way"),
    sortable: false,
    key: "on_the_way",
    width: '200px'
  },
  {
    title: t("Estimated Time"),
    sortable: false,
    key: "est_time",
    width: '200px'
  },
  {
    title: t("Delivered"),
    sortable: false,
    key: "delivered_at",
    width: '200px'
  },
  // {
  //   title: t("Cancelled"),
  //   sortable: false,
  //   key: "canceled_at",
  //   width: '200px'
  // },
  {
    title: t("Payment Method"),
    sortable: false,
    key: "payment_method",
    width: '200px'
  },
  {
    title: t("Customer Name"),
    sortable: false,
    key: "customer_name",
    width: '200px'
  },
  {
    title: t("Phone Number"),
    sortable: false,
    key: "customer_phone",
    width: '200px'
  },
  {
    title: t("Customer Email"),
    sortable: false,
    key: "customer_email",
    width: '200px'
  },
  {
    title: t("User Type"),
    key: "user_type",
    align: "center",
    sortable: false,
  },
  {
    title: t("Order Type"),
    key: "order_type",
    align: "center",
    sortable: false,
  }
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
    <VDataTable
      v-model:sort-by="sortedBy"
      @update:sort-by="emitSortBy"
      :items="reports"
      :headers="headers"
      :items-per-page="15"
    >
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
      <template #item.user_type="{ item }">
        {{ String(item.raw.user_type).replace(/^\w/, c => c.toUpperCase()) }}
        <small>{{ item.raw.creator }}</small>
      </template>
    <template #bottom>
      <VRow class="mt-3 mb-0 pb-0 mx-0" align="center" justify="end">
        <VPagination
          total-visible="5"
          v-if="props.meta.total"
          v-model="props.meta.current_page"
          :length="Math.ceil(props.meta.total / props.meta.per_page)"
          @update:model-value="emitPage"
          :disabled="props.gettingReports"
          :size="35"
        >
        </VPagination>
      </VRow>
    </template>
  </VDataTable>
  </VCard>
</template>
