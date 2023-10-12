<script setup>
import { get as getAdminDeliveries } from "@/apis/admin/deliveries";
import { get as getAgentDeliveries } from "@/apis/agent/deliveries";
import { VDataTable } from 'vuetify/labs/VDataTable';
const deliveries = ref([]);
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;

const headers = computed(() => [
  {
    title: t('Order Number'),
    key: 'id',
  },
  {
    title: t('SalesID AX'),
    sortable: false,
    key: 'salesId_ax',
  },
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
    title: t('Created Date'),
    sortable: false,
    key: 'created_at',
    align: "center"
  },
  {
    title: t('Delivery Date'),
    sortable: false,
    key: 'delivery_date',
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

const _getDelivery = () => {
  if (userRole == 'admin')
  {
    getAdminDeliveries().then(({ data }) => {
      deliveries.value = data.data;
    });
  }
  else if (userRole == 'agent')
  {
    getAgentDeliveries().then(({ data }) => {
    deliveries.value = data.data;
  });
  }

};

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


// const filteredOrders = computed(() => {
//   let orders = props.orders;
//   if(String(props.filters.term).length > 0 && props.filters.term !== null){
//     orders = orders.filter(order => String(order.customer_name).toLowerCase().includes(props.filters.term.toLowerCase()));
//   };

//   if(String(props.filters.branch).length > 0 && props.filters.branch !== null){
//     orders = orders.filter(order => String(order.branch_name).toLowerCase().includes(String(props.filters.branch).toLowerCase()));
//   }

//   if(String(props.filters.status).length > 0 && props.filters.status !== null){
//     orders = orders.filter(order => String(order.status).toLowerCase().includes(String(props.filters.status).toLowerCase()));
//   }

//   if(String(props.filters.order_number).length > 0 && props.filters.order_number !== null){
//     orders = orders.filter(order => String(order.id) == props.filters.order_number);
//   }

//   if(String(props.filters.phone).length > 0 && props.filters.phone !== null){
//     orders = orders.filter(order => String(order.address_phone).includes(props.filters.phone));
//   }

//   if(String(props.filters.delivery).length > 0 && props.filters.delivery !== null){
//     if(deliveries.value.filter(delivery => String(delivery.name).toLowerCase() == String(props.filters.delivery).toLowerCase()).length > 0){
//       orders = orders.filter(order => order.delivery_man_id == deliveries.value.filter(delivery => String(delivery.name).toLowerCase() == String(props.filters.delivery).toLowerCase())[0].id);
//     }
//   }

//   if(String(props.filters.date_from).length > 0 && props.filters.date_from !== null){
//     orders = orders.filter(order => new Date(String(order.created_at).split(" ")[0]) >= new Date(props.filters.date_from));
//   }

//   if(String(props.filters.date_to).length > 0 && props.filters.date_to !== null){
//     orders = orders.filter(order => new Date(String(order.delivery_date).split(" ")[0]) <= new Date(props.filters.date_to));
//   }

//   return orders;

// })

const emits = defineEmits();
const sortedBy = ref();
const emitSortBy = () => {
  emits('update-sort-by', sortedBy.value);
};
const emitPage = (n) => {
  emits('update-page-n', n);
};

onMounted(() => {
  _getDelivery();
})

</script>

<template>
  <VDataTable v-model:sort-by="sortedBy" @update:sort-by="emitSortBy" :items="orders" :headers="headers" :items-per-page="15" class="pb-5 mt-10">
    <template #item.status="{ item }">
      <VChip :color="resolveStatusVariant(item.raw.status).color"
        :class="`text-${resolveStatusVariant(item.raw.status).color}`" size="small" class="font-weight-medium">
        {{ resolveStatusVariant(item.raw.status).text }}
      </VChip>
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
</template>
