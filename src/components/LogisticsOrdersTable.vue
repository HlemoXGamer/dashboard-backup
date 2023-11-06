<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable';
import { useI18n } from "vue-i18n"
const $useI18n = useI18n()
const t = $useI18n.t;
const headers = computed(() =>[
  {
    title: t('Order Number'),
    key: 'id',
  },
  // {
  //   title: t('SalesID AX'),
  //   sortable: false,
  //   key: 'salesId_ax',
  // },
  {
    title: t('Total'),
    sortable: false,
    key: 'total',
  },
  {
    title: t('Branch'),
    sortable: false,
    key: 'branch_name',
  },
  {
    title: t('Paid Date'),
    sortable: true,
    key: 'paid_at',
    align: "center"
  },
  {
    title: t('Delivery Date'),
    sortable: false,
    key: 'delivery_date',
    align: "center"
  },
  {
    title: t('Order Type'),
    key: 'order_type',
    sortable: false,
    align: "center"
  },
  {
    title: t('Estimtaion Time'),
    key: 'est_time',
    sortable: false,
    align: "center"
  },
  {
    title: t('Status'),
    key: 'status',
    sortable: false,
    align: "center"
  },
  {
    title: t('Actions'),
    align: "center",
    sortable: false,
    key: 'actions',
  },
])

const resolveStatusVariant = status => {
  if (status == "created") {
    return {
      color: "warning",
      text: t("Created")
    }
  } else if (status == "ready_for_delivery") {
    return {
      color: "#2FE9D0",
      text: t("Ready For delivery")
    }
  } else if (status == "in_progress") {
    return {
      color: "#E9982F",
      text: t("In Progress")
    }
  } else if (status == "cancelled") {
    return {
      color: "danger",
      text: t("Cancelled")
    }
  } else if (status == "on_the_way") {
    return {
      color: "grey lighten-3 black--text",
      text: t("On The Way")
    }
  }else if(status == "paid"){
    return {
      color: "success",
      text: t("Paid")
    }
  }else if(status == "delivered"){
    return {
      color: "blue-lighten-1",
      text: t("Delivered")
    }
  }
}


const props = defineProps({
  filters: {
    type: Object,
    default: {}
  },
  orders: {
    type: Array,
    default: []
  },
  meta: {
    type: Object,
    default: {}
  },
  gettingOrders: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits();
const sortedBy = ref();
const emitSortBy = () => {
  emits('update-sort-by', sortedBy.value);
};
const emitPage = (n) => {
  emits('update-page-n', n);
};

</script>

<template>
<VCard rounded="0" elevation="0" class="px-0 mb-0 pb-5 mt-6 pt-5" :loading="gettingOrders">
  <VDataTable v-model:sort-by="sortedBy" @update:sort-by="emitSortBy" :items="orders" :headers="headers" :items-per-page="15">
    <template #item.status="{ item }">
      <VChip :color="resolveStatusVariant(item.raw.status).color"
        :class="`text-${resolveStatusVariant(item.raw.status).color}`" size="small" class="font-weight-medium">
        {{ resolveStatusVariant(item.raw.status).text }}
      </VChip>
    </template>
    <template #item.est_time="{ item }">
      {{ item.raw.est_time }}
    </template>
    <template #item.actions="{ item }">
      <IconBtn @click="$router.currentRoute.value.fullPath.includes('/agent') ? $router.push(`/agent/${item.raw.id}`) : $router.push(`/orders/${item.raw.id}`)">
        <VIcon icon="mdi-eye" />
      </IconBtn>
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
              :size="35"
            >
          </VPagination>
        </VRow>
    </template>
  </VDataTable>
</VCard>
</template>
