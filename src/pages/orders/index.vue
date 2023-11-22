<script setup>
import { get as getAdminBranches } from "@/apis/admin/branches";
import { get as getAdminDeliveries } from "@/apis/admin/deliveries";
import { get as getAdminOrders } from "@/apis/admin/orders";
import { get as getAgentBranches } from "@/apis/agent/branches";
import { get as getAgentDeliveries } from "@/apis/agent/deliveries";
import { get as getAgentOrders } from "@/apis/agent/orders";
import { get as getRestaurantOrders } from "@/apis/restuarant/orders";
import { get as getOperationOrders } from "@/apis/operation/orders";
import { get as getOperationDeliveries } from "@/apis/operation/deliveries";
import { get as getOperationBranches } from "@/apis/operation/branches";
import { get as getLogisticOrders } from "@/apis/logistics/orders";
import { get as getLogisticDeliveries } from "@/apis/logistics/deliveries";
import { get as getLogisticBranches } from "@/apis/logistics/branches";
import axiosIns from "@/plugins/axios";
import { useToast } from "vue-toastification";
import { useI18n } from "vue-i18n"
const $useI18n = useI18n()
const t = $useI18n.t;
const toast = useToast();
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const deliveries = ref([]);
const deliveryMen = ref([]);
const branches = ref([]);
const orders = ref([]);
const meta = ref();
const gettingOrders = ref(false);
const isFiltered = userRole !== "restaurant" ? ref(true) : ref(false);
const loading = ref(false);
const form = ref({
  searchTerm: "",
  selectedBranch: [],
  selectedStatus: userRole !== "restaurant" ? "paid" : [],
  selectedOrder: [],
  selectedPhone: [],
  selectedDelivery: [],
  selectedDateFrom: [],
  selectedDateTo: [],
});
const restaurantFilters = ref({
  productName: "",
  from: null,
  to: null,
  delivery: null,
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

const sortedBy = ref();
const handlePageUpdate = (n) => {
  gettingOrders.value = true;
    if(isFiltered.value === true){
    const formData = new FormData();
    Object.entries(getFilters().filters).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("page", n)
    formData.append("limit", 15)
    const query = new URLSearchParams(formData).toString()

    gettingOrders.value = true;
    isFiltered.value = true;
  axiosIns.get(`${userRole == 'restaurant' ? '/restaurant-apis' : userRole == 'admin' ? '' : userRole }/orders?${query}`).then(({ data }) => {
    orders.value = data.data;
    meta.value = data.meta;
  }).finally(() => {
    gettingOrders.value = false;
  })
  }else{
    if (userRole == "admin") {
    getAdminOrders({ page: n, limit: 15, sortBy: sortedBy.value })
      .then(({ data }) => {
        orders.value = data.data;
        meta.value = data.meta;
      })
      .finally(() => {
        gettingOrders.value = false;
      });
  } else if (userRole == "agent") {
    getAgentOrders({ page: n, limit: 15, sortBy: sortedBy.value })
      .then(({ data }) => {
        orders.value = data.data;
        meta.value = data.meta;
      })
      .finally(() => {
        gettingOrders.value = false;
      });
  } else if (userRole == "restaurant") {
    getRestaurantOrders({ page: n, limit: 15, sortBy: sortedBy.value })
      .then(({ data }) => {
        orders.value = data.data;
        meta.value = data.meta;
      })
      .finally(() => {
        gettingOrders.value = false;
      });
  } else if (userRole == "operation") {
    getOperationOrders({ page: n, limit: 15, sortBy: sortedBy.value })
      .then(({ data }) => {
        orders.value = data.data;
        meta.value = data.meta;
      })
      .finally(() => {
        gettingOrders.value = false;
      });
  } else if (userRole == "logistic") {
    getLogisticOrders({ page: n, limit: 15, sortBy: sortedBy.value })
      .then(({ data }) => {
        orders.value = data.data;
        meta.value = data.meta;
      })
      .finally(() => {
        gettingOrders.value = false;
      });
  }
  }
};

const handleUpdateSortBy = (data) => {
  sortedBy.value = data;
};

const _getAdminDeliveries = () => {
  getAdminDeliveries().then(({ data, meta }) => {
    deliveries.value = data.data;
  });
};

const _getOperationDeliveries = () => {
  getOperationDeliveries().then(({ data, meta }) => {
    deliveries.value = data.data;
  });
};

const _getLogisticDeliveries = () => {
  getLogisticDeliveries().then(({ data, meta }) => {
    deliveries.value = data.data;
  });
};

const FetchDeliveries = () => {
  axiosIns.get("/restaurant-apis/deliverymen").then((response) => {
    console.log(response.data.data);
    const data = response.data.data;
    data.map((delivery) => {
      deliveryMen.value.push(delivery);
    });
  });
};
const _getAgentDeliveries = () => {
  getAgentDeliveries().then(({ data, meta }) => {
    deliveries.value = data.data;
  });
};

const _getAdminOrders = () => {
  gettingOrders.value = true;
  getAdminOrders({ page: 1, limit: 15, sortBy: sortedBy.value, status: form.value.selectedStatus })
    .then(({ data }) => {
      orders.value = data.data;
      meta.value = data.meta;
    })
    .finally(() => {
      gettingOrders.value = false;
    });
};

const _getOperationOrders = () => {
  gettingOrders.value = true;
  getOperationOrders({ page: 1, limit: 15, sortBy: sortedBy.value, status: form.value.selectedStatus })
    .then(({ data }) => {
      orders.value = data.data;
      meta.value = data.meta;
    })
    .finally(() => {
      gettingOrders.value = false;
    });
};

const _getLogisticOrders = () => {
  gettingOrders.value = true;
  getLogisticOrders({ page: 1, limit: 15, sortBy: sortedBy.value, status: form.value.selectedStatus })
    .then(({ data }) => {
      orders.value = data.data;
      meta.value = data.meta;
    })
    .finally(() => {
      gettingOrders.value = false;
    });
};

const _getAgentOrders = () => {
  gettingOrders.value = true;
  getAgentOrders({ page: 1, limit: 15, sortBy: sortedBy.value, status: form.value.selectedStatus })
    .then(({ data }) => {
      orders.value = data.data;
      meta.value = data.meta;
    })
    .finally(() => {
      gettingOrders.value = false;
    });
};

const _getRestaurantOrders = () => {
  gettingOrders.value = true;
  getRestaurantOrders({ page: 1, limit: 15, sortBy: sortedBy.value })
    .then(({ data }) => {
      orders.value = data.data;
      meta.value = data.meta;
    })
    .finally(() => {
      gettingOrders.value = false;
    });
};

const _getAdminBranches = () => {
  getAdminBranches().then(({ data, meta }) => {
    branches.value = data.data;
  });
};

const _getAgentBranches = () => {
  getAgentBranches().then(({ data, meta }) => {
    branches.value = data.data;
  });
};

const _getOperationBranches = () => {
  getOperationBranches().then(({ data, meta }) => {
    branches.value = data.data;
  });
};

const _getLogisticBranches = () => {
  getLogisticBranches().then(({ data, meta }) => {
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
  if (userRole == "admin") {
    axiosIns
      .get(`/orders?${query}`)
      .then(({ data }) => {
        orders.value = data.data;
        meta.value = data.meta;
      })
      .finally(() => {
        gettingOrders.value = false;
      });
  } else if (userRole == "agent") {
    axiosIns
      .get(`/agent/orders?${query}`)
      .then(({ data }) => {
        orders.value = data.data;
        meta.value = data.meta;
      })
      .finally(() => {
        gettingOrders.value = false;
      });
  } else if (userRole == "operation") {
    axiosIns
      .get(`/operation/orders?${query}`)
      .then(({ data }) => {
        orders.value = data.data;
        meta.value = data.meta;
      })
      .finally(() => {
        gettingOrders.value = false;
      });
  } else if (userRole == "logistic") {
    axiosIns
      .get(`/logistic/orders?${query}`)
      .then(({ data }) => {
        orders.value = data.data;
        meta.value = data.meta;
      })
      .finally(() => {
        gettingOrders.value = false;
      });
  } else if (userRole == "restaurant") {
    axiosIns
      .get(`/restaurant-apis/orders?${query}`)
      .then(({ data }) => {
        orders.value = data.data;
        meta.value = data.meta;
      })
      .finally(() => {
        gettingOrders.value = false;
      });
  }
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
  if (userRole == "admin") {
    getAdminOrders({ page: 1, limit: 15, sortBy: sortedBy.value })
      .then(({ data }) => {
        orders.value = data.data;
        meta.value = data.meta;
      })
      .finally(() => {
        gettingOrders.value = false;
      });
  } else if (userRole == "agent") {
    getAgentOrders({ page: 1, limit: 15, sortBy: sortedBy.value })
      .then(({ data }) => {
        orders.value = data.data;
        meta.value = data.meta;
      })
      .finally(() => {
        gettingOrders.value = false;
      });
  } else if (userRole == "restaurant") {
    getRestaurantOrders({ page: 1, limit: 15, sortBy: sortedBy.value })
      .then(({ data }) => {
        orders.value = data.data;
        meta.value = data.meta;
      })
      .finally(() => {
        gettingOrders.value = false;
      });
  } else if (userRole == "logistic") {
    getLogisticOrders({ page: 1, limit: 15, sortBy: sortedBy.value })
      .then(({ data }) => {
        orders.value = data.data;
        meta.value = data.meta;
      })
      .finally(() => {
        gettingOrders.value = false;
      });
  }
};

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
//     form.value.selectedDelivery !== "" &&
//     form.value.selectedDelivery.length == undefined
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

//   if (restaurantFilters.value.productName !== "") {
//     excelFilters.productName = restaurantFilters.value.productName;
//   }

//   if (
//     restaurantFilters.value.to !== "" &&
//     restaurantFilters.value.to !== null &&
//     restaurantFilters.value.to.length > 0
//   ) {
//     excelFilters.to = restaurantFilters.value.to;
//   }

//   if (
//     restaurantFilters.value.from !== "" &&
//     restaurantFilters.value.from !== null &&
//     restaurantFilters.value.from.length > 0
//   ) {
//     excelFilters.from = restaurantFilters.value.from;
//   }

//   if (
//     restaurantFilters.value.delivery !== "" &&
//     restaurantFilters.value.delivery !== null
//   ) {
//     excelFilters.delivery = restaurantFilters.value.delivery;
//   }

//   loading.value = true;
//   // if(Object.keys(form.value).includes("status") && form.value.status == "delivered" && ( Object.keys(form.value).includes("from") || Object.keys(form.value).includes("to") )){
//   //   if(form.value.from){
//   //     excelFilters.deliveredFrom = form.value.from;
//   //   }
//   //   if(form.value.to){
//   //     excelFilters.deliveredTo = form.value.to;
//   //   }
//   // }
//   if (userRole == "admin") {
//     const query = new URLSearchParams(excelFilters).toString();
//     axiosIns
//       .get(`/export-delivery?${query}`, { responseType: "arraybuffer" })
//       .then((res) => {
//         const blob = new Blob([res.data], { type: "application/vnd.ms-excel" });
//         const url = window.URL.createObjectURL(blob);
//         const link = document.createElement("a");
//         link.href = url;
//         link.setAttribute("download", "orders-report.xlsx");
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//         loading.value = false;
//       });
//   } else if (userRole == "restaurant") {
//     const query = new URLSearchParams(excelFilters).toString();
//     axiosIns
//       .get(`restaurant-apis/export-delivery?${query}`, {
//         responseType: "arraybuffer",
//       })
//       .then((res) => {
//         const blob = new Blob([res.data], { type: "application/vnd.ms-excel" });
//         const url = window.URL.createObjectURL(blob);
//         const link = document.createElement("a");
//         link.href = url;
//         link.setAttribute("download", "orders-report.xls");
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//         loading.value = false;
//       });
//   } else if (userRole == "agent") {
//     const query = new URLSearchParams(excelFilters).toString();
//     axiosIns
//       .get(`/agent/export-delivery?${query}`, { responseType: "arraybuffer" })
//       .then((res) => {
//         const blob = new Blob([res.data], { type: "application/vnd.ms-excel" });
//         const url = window.URL.createObjectURL(blob);
//         const link = document.createElement("a");
//         link.href = url;
//         link.setAttribute("download", "orders-report.xls");
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//         loading.value = false;
//       });
//   }
// };
// const applyFilter = () => {
//   axiosIns
//     .get("/restaurant-apis/orders", {
//       params: restaurantFilters.value,
//     })
//     .then((response) => {
//       orders.value = response.data.data;
//       toast.success("Search Applied");
//     })
//     .catch((error) => {
//       toast.error("Something Went Wrong", error.message);
//     });
// };
// const clearFiltersRestaurant = () => {
//   axiosIns
//     .get("/restaurant-apis/orders")
//     .then((response) => {
//       orders.value = response.data.data;
//       toast.success("Reset Applied");
//     })
//     .catch((error) => {
//       toast.error("Something Went Wrong", error.message);
//     });
//   restaurantFilters.value = {
//     per_page: 15,
//     page: 1,
//     productName: "",
//     city: null,
//     areas: null,
//     status: null,
//     from: null,
//     to: null,
//     delivery: null,
//     branch: null,
//     sortBy: [],
//     desc: [],
//   };
// };
const filters = computed(() => {
  return Object.keys(getFilters().filters);
});

onMounted(() => {
  if (userRole == "admin") {
    _getAdminDeliveries();
    _getAdminBranches();
    _getAdminOrders();
  } else if (userRole == "agent") {
    _getAgentDeliveries();
    _getAgentOrders();
    _getAgentBranches();
  } else if (userRole == "restaurant") {
    FetchDeliveries();
    _getRestaurantOrders();
  } else if (userRole == "operation") {
    _getOperationOrders();
    _getOperationDeliveries();
    _getOperationBranches();
  } else if (userRole == "logistic") {
    _getLogisticOrders();
    _getLogisticDeliveries();
    _getLogisticBranches();
  }
});
</script>

<template>
  <VRow class="mt-4 px-4">
    <VCol style="background-color: rgb(var(--v-theme-surface))" class="rounded">
      <VRow
        class="pe-4 pt-3 ps-4"
        align="center"
        justify="space-between"
        v-if="userRole == 'admin' || userRole == 'agent'"
      >
        <p class="text-h4 pt-3 pb-2 px-3">{{ $t("All Orders") }}</p>
        <VSpacer />
        <VRow align="center" justify="end" class="mx-0 my-0">
          <VBtn
            v-if="userRole == 'admin'"
            :block="$vuetify.display.xs"
            class="mt-lg-0 mt-md-0 mt-sm-0 mt-3"
            @click="$router.push('orders/create/')"
            ><VIcon start icon="tabler-plus" />{{ $t("Create Order") }}</VBtn
          >
          <!-- <VBtn
            color="success"
            :block="$vuetify.display.xs"
            class="mt-lg-0 mt-md-0 mt-sm-0 mt-3 ms-3"
            :loading="loading"
            @click="exportExcel"
            ><VIcon start icon="tabler-upload" />{{ $t("Export Excel") }}</VBtn> -->
        </VRow>
      </VRow>
      <VRow
        v-if="
          userRole == 'admin' ||
          userRole == 'agent' ||
          userRole == 'operation' ||
          userRole == 'logistic'
        "
        :class="$vuetify.display.xs ? 'flex-column' : ''"
      >
        <VCol cols="12" class="pe-0 v-col-sm-12 v-col-md-10 v-col-lg-10">
          <VRow
            class="ps-lg-1 pe-lg-0 ps-md-1 pe-md-0 ps-sm-1 pe-sm-0 mx-0 w-100 mt-5 pe-0"
            align="center"
            justify="space-between"
          >
            <AppTextField
              prepend-inner-icon="tabler-package"
              v-model="form.searchTerm"
              :placeholder="t('Search by Name')"
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
              :placeholder="t('Select a Branch')"
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
              :placeholder="t('Select a Status')"
              class="mx-2 flex-grow-1"
              :class="$vuetify.display.xs ? 'w-100' : ''"
              :style="$vuetify.display.xs ? 'width: 100%;' : ''"
            />
            <AppTextField
              prepend-inner-icon="tabler-number"
              v-model="form.selectedOrder"
              :placeholder="t('Search by Order Number')"
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
              :placeholder="t('Search by Phone')"
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
              :placeholder="t('Select a Delivery')"
              class="mx-2 flex-grow-1"
              :class="$vuetify.display.xs ? 'w-100' : ''"
              :style="$vuetify.display.xs ? 'width: 100%;' : ''"
            />
            <AppDateTimePicker
              v-model="form.selectedDateFrom"
              :placeholder="t('From')"
              class="mx-2 flex-grow-1"
              :class="$vuetify.display.xs ? 'w-100' : ''"
              :style="$vuetify.display.xs ? 'width: 100%;' : ''"
            ></AppDateTimePicker>
            <AppDateTimePicker
              v-model="form.selectedDateTo"
              :placeholder="t('To')"
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
      <VRow
        v-if="userRole == 'restaurant'"
        class="mx-0 py-0 px-5 mt-3 mb-5"
        align="center"
      >
        <p class="text-h4 pt-0 pb-0 px-0 mx-0 my-0">{{ $t("All Orders") }}</p>
        <VSpacer />
        <VBtn
          :block="$vuetify.display.xs"
          class="mt-lg-0 mt-md-0 mt-sm-0 mt-3 me-3"
          @click="$router.push('orders/create/')"
          ><VIcon start icon="tabler-plus" />{{ $t('Create Order') }}</VBtn
        >
        <!-- <VBtn
          color="success"
          :block="$vuetify.display.xs"
          class="mt-lg-0 mt-md-0 mt-sm-0 mt-3 ms-0"
          :loading="loading"
          @click="exportExcel"
          ><VIcon start icon="tabler-upload" />{{ $t('Export Excel') }}</VBtn> -->
      </VRow>
      <VRow
        v-if="orders && userRole == 'restaurant'"
        id="order-list"
        class="px-5 py-0 mx-0 my-0"
      >
      <VCol cols="12" class="pe-0 px-0 py-0 v-col-sm-12 v-col-md-10 v-col-lg-10 mx-0 my-0">

        <VRow no-gutters>
          <div class="me-3 d-flex gap-3">
          <!-- 👉 Search  -->
          <div class="order-list-filter my-1">
            <AppTextField
              prepend-inner-icon="tabler-package"
              v-model="form.searchTerm"
              :placeholder="t('Search By Name')"
              density="compact"
            />
          </div>
          <!-- 👉 Select Delivery -->
          <div class="order-list-filter my-1">
            <AppSelect
              prepend-inner-icon="tabler-truck-delivery"
              v-model="form.selectedDelivery"
              :placeholder="$t('Select a Delivery')"
              clear-icon="tabler-x"
              single-line
              :items="deliveryMen"
              item-value="id"
              item-title="name"
            />
          </div>
          <!-- 👉 Pick A Date -->
          <AppDateTimePicker
            v-model="form.selectedDateFrom"
            prepend-inner-icon="tabler-calendar"
            :placeholder="t('From')"
            style="width: 150px"
            class="my-1"
          />
          <AppDateTimePicker
            v-model="form.selectedDateTo"
            prepend-inner-icon="tabler-calendar"
            :placeholder="t('To')"
            style="width: 150px"
            class="my-1"
          />
        </div>
        <VRow no-gutters class="my-1">
        <AppTextField
          style="width: 250px"
          prepend-inner-icon="tabler-number"
          v-model="form.selectedOrder"
          :placeholder="t('Search by Order Number')"
          density="compact"
        />
      </VRow>
        </VRow>
        </VCol>
        <VCol cols="12" class="px-0 py-0 v-col-sm-12 v-col-md-2 v-col-lg-2 mx-0 my-0">

        <div class="d-flex align-center my-0 flex-column">
          <VBtn
            class="me-0"
            variant="tonal"
            color="warning"
            block
            prepend-icon="tabler-x"
            :disabled="gettingOrders || !isFiltered"
            @click="clearFilters()"
          >
            {{ $t('Reset') }}
          </VBtn>
          <VBtn 
          class="mt-2"
          block
          :disabled="!filters.length || gettingOrders"
          @click="search(getFilters().filters)"> {{ $t('Search') }} </VBtn>
        </div>
        </VCol>
      </VRow>
      <OrdersTable
        v-if="userRole == 'admin'"
        :gettingOrders="gettingOrders"
        :meta="meta"
        :orders="orders"
        :filters="getFilters()"
        @update-sort-by="handleUpdateSortBy"
        @update-page-n="handlePageUpdate"
      />
      <AgentOrdersTable
        v-if="userRole == 'agent'"
        :gettingOrders="gettingOrders"
        :meta="meta"
        :orders="orders"
        :filters="getFilters()"
        @update-sort-by="handleUpdateSortBy"
        @update-page-n="handlePageUpdate"
      />
      <OperationOrdersTable
        v-if="userRole == 'operation'"
        :gettingOrders="gettingOrders"
        :meta="meta"
        :orders="orders"
        :filters="getFilters()"
        @update-sort-by="handleUpdateSortBy"
        @update-page-n="handlePageUpdate"
      />
      <LogisticsOrdersTable
        v-if="userRole == 'logistic'"
        :gettingOrders="gettingOrders"
        :meta="meta"
        :orders="orders"
        :filters="getFilters()"
        @update-sort-by="handleUpdateSortBy"
        @update-page-n="handlePageUpdate"
      />
      <RestuarantOrdersTable
        :gettingOrders="gettingOrders"
        :meta="meta"
        :orders="orders"
        :filters="getFilters()"
        @update-sort-by="handleUpdateSortBy"
        @update-page-n="handlePageUpdate"
        v-if="userRole == 'restaurant'" />
    </VCol>
  </VRow>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
  roles: ["admin", "restaurant", "agent", "operation", "logistic"]
</route>

<style lang="scss">
#order-list {
  .order-list-actions {
    inline-size: 8rem;
  }
  .order-list-filter {
    inline-size: 12rem;
  }
}
</style>
