<script setup>
import { get as getBranches } from "@/apis/agent/branches";
import { get as getDeliveries } from "@/apis/agent/deliveries";
import { getMyOrders as getOrders } from "@/apis/agent/orders";
import axiosIns from "@/plugins/axios";
import { useI18n } from "vue-i18n"
const $useI18n = useI18n()
const t = $useI18n.t;
const deliveries = ref([]);

const branches = ref([]);
const meta = ref();
const gettingOrders = ref(false);
const isFiltered = ref(true);
const orders = ref([]);
const loading = ref(false);
const form = ref({
  searchTerm: "",
  selectedBranch: [],
  selectedStatus: "paid",
  selectedOrder: [],
  selectedPhone: [],
  selectedDelivery: [],
  selectedDateFrom: [],
  selectedDateTo: [],
});
const statuses = ref([
  { name: t("Created"), value: "created" },
  { name: t("Paid"), value: "paid" },
  { name: t("In Progress"), value: "in_progress" },
  { name: t("Ready For Delivery"), value: "ready_for_delivery" },
  { name: t("On The Way"), value: "on_the_way" },
  { name: t("Delivered"), value: "delivered" },
  { name: t("Cancelled"), value: "cancelled" },
]);
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const sortedBy = ref();
const handlePageUpdate = (n) => {
  gettingOrders.value = true;
  if (isFiltered.value === true) {
    const formData = new FormData();
    Object.entries(getFilters().filters).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("page", n);
    formData.append("limit", 15);
    const query = new URLSearchParams(formData).toString();
    gettingOrders.value = true;
    isFiltered.value = true;
    axiosIns
      .get(`/agent/my-orders?${query}`)
      .then(({ data }) => {
        orders.value = data.data;
        meta.value = data.meta;
      })
      .finally(() => {
        gettingOrders.value = false;
      });
  } else {
    getOrders({ page: n, limit: 15, sortBy: sortedBy.value })
      .then(({ data }) => {
        orders.value = data.data;
        meta.value = data.meta;
      })
      .finally(() => {
        gettingOrders.value = false;
      });
  }
};

const handleUpdateSortBy = (data) => {
  sortedBy.value = data;
};

const _getDeliveries = () => {
  getDeliveries().then(({ data, meta }) => {
    deliveries.value = data.data;
  });
};

const _getOrders = () => {
  gettingOrders.value = true;
  getOrders({ page: 1, limit: 15, sortBy: sortedBy.value, status: form.value.selectedStatus })
    .then(({ data }) => {
      orders.value = data.data;
      meta.value = data.meta;
    })
    .finally(() => {
      gettingOrders.value = false;
    });
};

const _getBranches = () => {
  getBranches().then(({ data, meta }) => {
    branches.value = data.data;
  });
};

const getFilters = () => {
  let filters = {};

  if (form.value.searchTerm !== "") {
    filters.productName = form.value.searchTerm;
  }

  if (
    form.value.selectedBranch !== "" &&
    form.value.selectedBranch.length == undefined
  ) {
    filters.branch = form.value.selectedBranch;
  }

  if (form.value.selectedStatus !== "" && form.value.selectedStatus.length) {
    filters.status = form.value.selectedStatus;
  }

  if (form.value.selectedOrder !== "" && form.value.selectedOrder.length) {
    filters.orderId = form.value.selectedOrder;
  }

  if (form.value.selectedPhone !== "" && form.value.selectedPhone.length) {
    filters.phone = form.value.selectedPhone;
  }

  if (
    form.value.selectedDelivery !== "" &&
    form.value.selectedDelivery.length == undefined
  ) {
    filters.delivery = form.value.selectedDelivery;
  }

  if (
    form.value.selectedDateFrom !== "" &&
    form.value.selectedDateFrom !== null &&
    form.value.selectedDateFrom.length > 0
  ) {
    filters.from = form.value.selectedDateFrom;
  }

  if (
    form.value.selectedDateTo !== "" &&
    form.value.selectedDateTo !== null &&
    form.value.selectedDateTo.length > 0
  ) {
    filters.to = form.value.selectedDateTo;
  }
  return { filters };
};

const search = (filters) => {
  const formData = new FormData();
  Object.entries(filters).forEach(([key, value]) => {
    formData.append(key, value);
  });
  formData.append("page", 1);
  formData.append("limit", 15);
  // if(Object.keys(filters).includes("status") && filters.status == "delivered" && ( Object.keys(filters).includes("from") || Object.keys(filters).includes("to") )){
  //   if(filters.from){
  //     formData.append("deliveredFrom", filters.from);
  //   }
  //   if(filters.to){
  //     formData.append("deliveredTo", filters.to);
  //   }
  // }
  const query = new URLSearchParams(formData).toString();
  gettingOrders.value = true;
  isFiltered.value = true;
  axiosIns
    .get(`/agent/my-orders?${query}`)
    .then(({ data }) => {
      orders.value = data.data;
      meta.value = data.meta;
    })
    .finally(() => {
      gettingOrders.value = false;
    });
};

const clearFilters = () => {
  isFiltered.value = false;

  form.value = {
    searchTerm: "",
    selectedBranch: [],
    selectedStatus: [],
    selectedOrder: [],
    selectedPhone: [],
    selectedDelivery: [],
    selectedDateFrom: [],
    selectedDateTo: [],
  };

  gettingOrders.value = true;
  getOrders({ page: 1, limit: 15, sortBy: sortedBy.value })
    .then(({ data }) => {
      orders.value = data.data;
      meta.value = data.meta;
    })
    .finally(() => {
      gettingOrders.value = false;
    });
};

const filters = computed(() => {
  return Object.keys(getFilters().filters);
});

// const exportExcel = () => {
//   let excelFilters = {};
//   if (sortedBy.value !== undefined && sortedBy.value.length > 0) {
//     excelFilters[
//       "sortBy[]"
//     ] = `${sortedBy.value[0].order}-${sortedBy.value[0].key}`;
//   }

//   if (form.value.searchTerm !== "" && form.value.searchTerm !== null) {
//     excelFilters.productName = form.value.searchTerm;
//   }

//   if (
//     form.value.selectedBranch !== "" &&
//     form.value.selectedBranch.length == undefined
//   ) {
//     excelFilters.branch = form.value.selectedBranch;
//   }

//   if (
//     form.value.selectedStatus !== "" &&
//     form.value.selectedStatus !== null &&
//     form.value.selectedStatus.length > 0
//   ) {
//     excelFilters.status = form.value.selectedStatus;
//   }

//   if (
//     form.value.selectedOrder !== "" &&
//     form.value.selectedOrder !== null &&
//     form.value.selectedOrder.length > 0
//   ) {
//     excelFilters.orderId = form.value.selectedOrder;
//   }

//   if (
//     form.value.selectedPhone !== "" &&
//     form.value.selectedPhone !== null &&
//     form.value.selectedPhone.length > 0
//   ) {
//     excelFilters.phone = form.value.selectedPhone;
//   }

//   if (
//     form.value.selectedBranch !== "" &&
//     form.value.selectedBranch.length == undefined
//   ) {
//     excelFilters.delivery = form.value.selectedDelivery;
//   }

//   if (
//     form.value.selectedDateFrom !== "" &&
//     form.value.selectedDateFrom !== null &&
//     form.value.selectedDateFrom.length > 0
//   ) {
//     excelFilters.from = form.value.selectedDateFrom;
//   }

//   if (
//     form.value.selectedDateTo !== "" &&
//     form.value.selectedDateTo !== null &&
//     form.value.selectedDateTo.length > 0
//   ) {
//     excelFilters.to = form.value.selectedDateTo;
//   }
//   // if(Object.keys(form.value).includes("status") && form.value.status == "delivered" && ( Object.keys(form.value).includes("from") || Object.keys(form.value).includes("to") )){
//   //   if(form.value.from){
//   //     excelFilters.deliveredFrom = form.value.from;
//   //   }
//   //   if(form.value.to){
//   //     excelFilters.deliveredTo = form.value.to;
//   //   }
//   // }
//   const query = new URLSearchParams(excelFilters).toString();
//   loading.value = true;
//   axiosIns
//     .get(`/agent/export-mydelivery?${query}`, { responseType: "arraybuffer" })
//     .then((res) => {
//       const blob = new Blob([res.data], { type: "application/vnd.ms-excel" });
//       const url = window.URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.setAttribute("download", "my-orders-report.xls");
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       loading.value = false;
//     });
// };

onMounted(() => {
  if (userRole == "agent") {
    _getDeliveries();
    _getOrders();
    _getBranches();
  }
});
</script>

<template>
  <VRow class="mt-4 px-4">
    <VCol style="background-color: rgb(var(--v-theme-surface))" class="rounded">
      <VRow class="pe-4 pt-3 ps-4" align="center" justify="space-between">
        <p class="text-h4 pt-3 pb-2 px-3">{{ $t('My Orders') }}</p>
        <VSpacer />
        <VRow align="center" justify="end" class="mx-0 my-0">
          <VBtn
            :block="$vuetify.display.xs"
            class="mt-lg-0 mt-md-0 mt-sm-0 mt-3"
            @click="$router.push('my-orders/create/')"
            ><VIcon start icon="tabler-plus" />{{ $t('Create Order') }}</VBtn
          >
          <!-- <VBtn
            color="success"
            :block="$vuetify.display.xs"
            class="mt-lg-0 mt-md-0 mt-sm-0 mt-3 ms-3"
            :loading="loading"
            @click="exportExcel"
            ><VIcon start icon="tabler-upload" />{{ $t('Export Excel') }}</VBtn
          > -->
        </VRow>
      </VRow>
      <VRow :class="$vuetify.display.xs ? 'flex-column' : ''">
        <VCol cols="12" class="pe-0 v-col-sm-12 v-col-md-10 v-col-lg-10">
          <VRow
            class="ps-lg-1 pe-lg-0 ps-md-1 pe-md-0 ps-sm-1 pe-sm-0 mx-0 w-100 mt-5 pe-0"
            align="center"
            justify="space-between"
          >
            <AppTextField
              prepend-inner-icon="tabler-package"
              v-model="form.searchTerm"
              :placeholder='$t("Search by Name")'
              class="mx-2 flex-grow-1"
              :class="$vuetify.display.xs ? 'w-100' : ''"
              :style="$vuetify.display.xs ? 'width: 100%;' : ''"
            ></AppTextField>
            <VSelect
              prepend-inner-icon="tabler-building-store"
              v-model="form.selectedBranch"
              :items="branches"
              item-title="name_en"
              :return-object="false"
              item-value="id"
              :placeholder='$t("Select a Branch")'
              class="mx-2 flex-grow-1"
              :class="$vuetify.display.xs ? 'w-100' : ''"
              :style="$vuetify.display.xs ? 'width: 100%;' : ''"
            />
            <VSelect
              prepend-inner-icon="tabler-activity-heartbeat"
              v-model="form.selectedStatus"
              :items="statuses"
              item-title="name"
              item-value="value"
              :placeholder='$t("Select a Status")'
              class="mx-2 flex-grow-1"
              :class="$vuetify.display.xs ? 'w-100' : ''"
              :style="$vuetify.display.xs ? 'width: 100%;' : ''"
            />
            <AppTextField
              prepend-inner-icon="tabler-number"
              v-model="form.selectedOrder"
              :placeholder='$t("Search by Order Number")'
              class="mx-2 flex-grow-1"
              :class="$vuetify.display.xs ? 'w-100' : ''"
              :style="$vuetify.display.xs ? 'width: 100%;' : ''"
            ></AppTextField>
          </VRow>
          <VRow
            class="ps-lg-1 pe-lg-0 ps-md-1 pe-md-0 ps-sm-1 pe-sm-0 mx-0 w-100 mt-8 pe-0"
            align="center"
            justify="space-between"
          >
            <AppTextField
              prepend-inner-icon="tabler-phone"
              v-model="form.selectedPhone"
              :placeholder='$t("Search by Phone")'
              class="mx-2 flex-grow-1"
              :class="$vuetify.display.xs ? 'w-100' : ''"
              :style="$vuetify.display.xs ? 'width: 100%;' : ''"
            ></AppTextField>
            <VSelect
              prepend-inner-icon="tabler-truck-delivery"
              v-model="form.selectedDelivery"
              :items="deliveries"
              item-value="id"
              item-title="name"
              :return-object="false"
              :placeholder='$t("Select a Delivery")'
              class="mx-2 flex-grow-1"
              :class="$vuetify.display.xs ? 'w-100' : ''"
              :style="$vuetify.display.xs ? 'width: 100%;' : ''"
            />
            <AppDateTimePicker
              prepend-inner-icon="tabler-calendar"
              v-model="form.selectedDateFrom"
              :placeholder="$t('From')"
              class="mx-2 flex-grow-1"
              :class="$vuetify.display.xs ? 'w-100' : ''"
              :style="$vuetify.display.xs ? 'width: 100%;' : ''"
            ></AppDateTimePicker>
            <AppDateTimePicker
              prepend-inner-icon="tabler-calendar"
              v-model="form.selectedDateTo"
              :placeholder="$t('To')"
              class="mx-2 flex-grow-1"
              :class="$vuetify.display.xs ? 'w-100' : ''"
              :style="$vuetify.display.xs ? 'width: 100%;' : ''"
            ></AppDateTimePicker>
          </VRow>
        </VCol>
        <VCol cols="12" class="mt-5 v-col-sm-12 v-col-md-2 v-col-lg-2">
          <VBtn
            class="mx-0"
            block
            variant="tonal"
            color="warning"
            prepend-icon="tabler-x"
            @click="clearFilters"
            :disabled="gettingOrders || !isFiltered"
          >
            {{ $t('Reset') }}
          </VBtn>
          <VBtn
            class="mx-0 mt-5"
            block
            variant="tonal"
            color="success"
            prepend-icon="tabler-search"
            @click="search(getFilters().filters)"
            :disabled="!filters.length || gettingOrders"
          >
            {{ $t('Search') }}
          </VBtn>
        </VCol>
      </VRow>
      <AgentOrdersTable
        :gettingOrders="gettingOrders"
        :meta="meta"
        :orders="orders"
        :filters="getFilters()"
        @update-sort-by="handleUpdateSortBy"
        @update-page-n="handlePageUpdate"
      />
    </VCol>
  </VRow>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
  roles: ["agent"]
</route>
