<script setup>
import { get as getAdminDeliveries } from "@/apis/admin/deliveries";
import { get as getAgentDeliveries } from "@/apis/agent/deliveries";
import { useRoute } from "vue-router";
import { VDataTable } from "vuetify/labs/VDataTable";
import { useI18n } from "vue-i18n"
const $useI18n = useI18n()
const t = $useI18n.t;

const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const deliveries = ref([]);
const headers = computed(() => {
  let titles = []
  titles.push(
    {
      title: t("Order Number"),
      key: "id",
    }
  )

  if (useRoute().fullPath.includes("/performance")) {
    titles.push(
      {
        title: t("Total"),
        key: "total",
      },
      {
        title: t("Total"),
        key: "total",
      },
      {
        title: t("City"),
        key: "address_city",
      },
      {
        title: t("Created Date"),
        key: "created_date",
        align: "center",
      },
      {
        title: t("Delivery Date"),
        key: "delivery_date",
        align: "center",
      },
      {
        title: t("Pending"),
        key: "created",
        align: "center",
      },
      {
        title: t("In Progress"),
        key: "in_progress",
        align: "center",
      },
      {
        title: t("Ready For Delivery"),
        key: "ready_to_delivery",
        align: "center",
      },
      {
        title: t("On The Way"),
        key: "on_the_way",
        align: "center",
      },
      {
        title: t("Delivered"),
        key: "delivered",
        align: "center",
      },
      {
        title: t("Actions"),
        align: "center",
        sortable: false,
        key: "actions",
      },
    );
  } else {
    titles.push(
      {
        title: "SalesID AX",
        key: "salesId_ax",
      },
      {
        title: t("Total"),
        key: "total",
      },
      {
        title: t("Branch"),
        key: "branch_name",
      },
      {
        title: t("Paid Date"),
        key: "paid_at.day",
        align: "center",
      },
      {
        title: t("Paid Time"),
        key: "paid_at.time",
        align: "center",
      },
      {
        title: t("Delivery Date"),
        key: "delivery_date",
        align: "center",
      },
      {
        title: t("Delivery Time"),
        key: "delivery_time",
        align: "center",
      },
      {
        title: t("Estimated Time"),
        key: "est_time.time",
        align: "center",
      },
      {
        title: t("Estimated Date"),
        key: "est_time.day",
        align: "center",
      },
      {
        title: t("Agent"),
        key: "agent",
      },
      {
        title: t("Status"),
        key: "status",
        sortable: false,
        align: "center",
      },
      {
        title: t("Refund"),
        key: "refund",
      },
      {
        title: t("Order Type"),
        key: "order_type",
        align: "center",
        sortable: false,
      },
      {
        title: t("User Type"),
        key: "user_type",
        align: "center",
        sortable: false,
      },
      {
        title: t("Actions"),
        align: "center",
        sortable: false,
        key: "actions",
      },
    );
  }

  return titles;
})

const _getDelivery = () => {
  if (userRole == "admin") {
    getAdminDeliveries().then(({ data }) => {
      deliveries.value = data.data;
    });
  } else if (userRole == "agent") {
    getAgentDeliveries().then(({ data }) => {
      deliveries.value = data.data;
    });
  }
};

const getStatusTime = (statuses, status) => {
  const filteredStatus = statuses.filter((st) => st.status == status);
  if (filteredStatus.length > 0) {
    return statuses.filter((st) => st.status == status)[0].time;
  } else {
    return 0;
  }
};

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

const emits = defineEmits();
const sortedBy = ref();
const emitSortBy = () => {
  emits("update-sort-by", sortedBy.value);
};
const emitPage = (n) => {
  emits("update-page-n", n);
};

onMounted(() => {
  _getDelivery();
});
</script>

<template>
  <VCard rounded="0" elevation="0" class="px-0 mb-0 pb-5 mt-6 pt-5" :loading="gettingOrders">
    <VDataTable v-model:sort-by="sortedBy" @update:sort-by="emitSortBy" :items="orders" :headers="headers"
      :items-per-page="15">
      <template #item.created_date="{ item }">
        {{ item.raw.created_at.day }}
      </template>
      <template #item.created_time="{ item }">
        {{ item.raw.created_at.time }}
      </template>
      <template #item.delivery_date="{ item }">
        {{ item.raw.delivery_date.day }}
      </template>
      <template #item.delivery_time="{ item }">
        {{ item.raw.delivery_date.time }}
      </template>
      <template #item.created="{ item }">
        {{ getStatusTime(item.raw.order_statuses, "created") }}
      </template>
      <template #item.in_progress="{ item }">
        {{ getStatusTime(item.raw.order_statuses, "in_progress") }}
      </template>
      <template #item.ready_to_delivery="{ item }">
        {{ getStatusTime(item.raw.order_statuses, "ready_to_delivery") }}
      </template>
      <template #item.on_the_way="{ item }">
        {{ getStatusTime(item.raw.order_statuses, "on_the_way") }}
      </template>
      <template #item.delivered="{ item }">
        {{ getStatusTime(item.raw.order_statuses, "delivered") }}
      </template>
      <template #item.status="{ item }">
        <VChip :color="resolveStatusVariant(item.raw.status).color"
          :class="`text-${resolveStatusVariant(item.raw.status).color}`" size="small" class="font-weight-medium">
          {{ resolveStatusVariant(item.raw.status).text }}
        </VChip>
      </template>
      <template #item.actions="{ item }">
        <IconBtn @click="
          $router.currentRoute.value.fullPath.includes('performance')
            ? $router.push(`/performance/details/${item.raw.id}`)
            : $router.push(`orders/${item.raw.id}`)
          ">
          <VIcon icon="mdi-eye" />
        </IconBtn>
      </template>
      <template #item.user_type="{ item }">
        {{ String(item.raw.user_type).replace(/^\w/, c => c.toUpperCase()) }}
        <small>{{ item.raw.creator }}</small>
      </template>
      <template #bottom>
        <VRow class="mt-3 mb-0 pb-0 mx-0" align="center" justify="end">
          <VPagination total-visible="5" v-if="props.meta.total" v-model="props.meta.current_page"
            :length="Math.ceil(props.meta.total / props.meta.per_page)" @update:model-value="emitPage"
            :disabled="props.gettingOrders" />
        </VRow>
      </template>
    </VDataTable>
  </VCard>
</template>
