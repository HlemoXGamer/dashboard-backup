<script setup>
import { get as getBranches } from "@/apis/admin/branches";
import { get as getDeliveries } from "@/apis/admin/deliveries";
import { get as getAreas } from "@/apis/admin/areas";
import { get as getAgents } from "@/apis/admin/agents"
import { getProductsCustomizeReport as getProductsCustomizeReportAdmin } from "@/apis/admin/products"
import { get as getCategories } from "@/apis/admin/categories"
import { getCustomReports } from "@/apis/admin/stats"
import { get as getOperationBranches } from "@/apis/operation/branches";
import { get as getOperationDeliveries } from "@/apis/operation/deliveries";
import { get as getOperationAreas } from "@/apis/operation/areas";
import { get as getOperationAgents } from "@/apis/operation/agents"
import { getProductsCustomizeReport as getProductsCustomizeReportOperation } from "@/apis/operation/products"
import { get as getOperationCategories } from "@/apis/operation/categories"
import { getCustomReports as getOperationCustomReports } from "@/apis/operation/stats"
import { get as getLogisticBranches } from "@/apis/logistics/branches";
import { get as getLogisticDeliveries } from "@/apis/logistics/deliveries";
import { get as getLogisticAreas } from "@/apis/logistics/areas";
import { get as getLogisticAgents } from "@/apis/logistics/agents"
import { getProductsCustomizeReport as getProductsCustomizeReportLogistic } from "@/apis/logistics/products"
import { get as getLogisticCategories } from "@/apis/logistics/categories"
import { getCustomReports as getLogisticCustomReports } from "@/apis/logistics/stats"
import { get as getFinanceBranches } from "@/apis/finances/branches";
import { get as getFinanceDeliveries } from "@/apis/finances/deliveries";
import { get as getFinanceAreas } from "@/apis/finances/areas";
import { get as getFinanceAgents } from "@/apis/finances/agents"
import { getProductsCustomizeReport as getProductsCustomizeReportFinance } from "@/apis/finances/products"
import { get as getFinanceCategories } from "@/apis/finances/categories"
import { getCustomReports as getFinanceCustomReports } from "@/apis/finances/stats"
import { get as getAgentBranches } from "@/apis/agent/branches";
import { get as getAgentDeliveries } from "@/apis/agent/deliveries";
import { get as getAgentAreas } from "@/apis/agent/areas";
import { get as getAgentAgents } from "@/apis/agent/agents"
import { getProductsCustomizeReport as getProductsCustomizeReportAgent } from "@/apis/agent/products"
import { get as getAgentCategories } from "@/apis/agent/categories"
import { getCustomReports as getAgentCustomReports } from "@/apis/agent/stats"
import axiosIns from "@/plugins/axios";
import { useI18n } from "vue-i18n"
const $useI18n = useI18n()
const t = $useI18n.t;
const userRole = JSON.parse(localStorage.getItem("userData")).type;

const langIdentifier = computed(() => {
  if ($useI18n.locale.value === 'en') {
    return 'name_en';
  } else if ($useI18n.locale.value === 'ar') {
    return 'name_ar';
  }
});
const deliveries = ref([]);
const categories = ref([]);
const branches = ref([]);
const products = ref([]);
const reports = ref([]);
const agents = ref([]);
const areas = ref([]);
const meta = ref();
const gettingReports = ref(false);
const isFiltered = ref(false);
const loading = ref(false);
const currentTab = ref("reports");
const form = ref({
  branch: [],
  status: [],
  delivery: [],
  from: [],
  to: [],
  agent: [],
  area: [],
  payment: [],
  category: [],
  product: [],
  orderId: ""
});
const isAllProductsSelected = computed(() => { return form.value.product.length == products.value.length });
const statuses = ref([
  { name: t("Created"), value: "created" },
  { name: t("Paid"), value: "paid" },
  { name: t("In Progress"), value: "in_progress" },
  { name: t("Ready For Delivery"), value: "ready_for_delivery" },
  { name: t("On The Way"), value: "on_the_way" },
  { name: t("Delivered"), value: "delivered" },
  { name: t("Cancelled"), value: "cancelled" },
]);
const paymentMethods = ref([
  {
    name: "Knet", value: "knet"
  },
  {
    name: "Bookey", value: "bookey"
  },
  {
    name: "Credit Card", value: "credit_card"
  }
])

const sortedBy = ref();
const handlePageUpdate = (n) => {
  gettingReports.value = true;
  if (isFiltered.value === true) {
    const formData = new FormData();
    const filters = getFilters().filters;
    if(Object.keys(filters).includes("status") && ( Object.keys(filters).includes("from") || Object.keys(filters).includes("to") )){
    filters.status.forEach(status => {
      let statusName = snakeToCamel(status);
      if(filters.from){
        formData.append(`${statusName}From`, filters.from)
      }
      if(filters.to){
        formData.append(`${statusName}To`, filters.to)
      }
    })
      delete filters?.status
      delete filters?.from
      delete filters?.to
    }
    if(isAllProductsSelected.value == true){
      delete filters.product;
      formData.append("allProducts", "");
    }
    Object.entries(filters).forEach(([key, value]) => {
      formData.append(key, value);
    });
    
    formData.append("page", n)
    formData.append("limit", 15)
    const query = new URLSearchParams(formData).toString()

    gettingReports.value = true;
    isFiltered.value = true;
    
    if(userRole == "admin"){
      _getReports(getCustomReports, query);
    }else if(userRole == "agent"){
      _getReports(getAgentCustomReports, query);
    }else if(userRole == "finance"){
      _getReports(getFinanceCustomReports, query);
    }
    else if(userRole == "logistic"){
      _getReports(getLogisticCustomReports, query);
    }
    else if(userRole == "operation"){
      _getReports(getOperationCustomReports, query);
    }
  } else {
    const query = new URLSearchParams({ page: n, limit: 15, sortBy: sortedBy.value ?? "" }).toString();
    if(userRole == "admin"){
      _getReports(getCustomReports, query);
    }else if(userRole == "agent"){
      _getReports(getAgentCustomReports, query);
    }else if(userRole == "finance"){
      _getReports(getFinanceCustomReports, query);
    }
    else if(userRole == "logistic"){
      _getReports(getLogisticCustomReports, query);
    }
    else if(userRole == "operation"){
      _getReports(getOperationCustomReports, query);
    }
  }
};

const handleUpdateSortBy = (data) => {
  sortedBy.value = data;
};

const _getDeliveries = (callFunction) => {
  callFunction().then(({ data }) => {
    deliveries.value = data.data;
  });
};

const _getAreas = (callFunction) => {
  callFunction().then(({ data }) => {
    areas.value = data.data;
  });
};

const _getAgents = (callFunction) => {
  callFunction().then(({ data }) => {
    agents.value = data.data;
  })
}

const _getReports = (callFunction, query = "") => {
  gettingReports.value = true;
  callFunction(query).then(({ data }) => {
    meta.value = data.meta;
    reports.value = data.data;
  }).finally(() => {
    gettingReports.value = false;
  })
};

const _getBranches = (callFunction) => {
  callFunction().then(({ data }) => {
    branches.value = data.data;
  });
};

const _getCategories = (callFunction) => {
  callFunction().then(({ data }) => {
    categories.value = data.data;
  });
};

const _getProducts = (callFunction) => {
  callFunction().then(({ data }) => {
    products.value = data.data;
  });
};

const getFilters = () => {
  let filters = {};
  Object.entries(form.value).forEach(([key, value]) => {
    if(value !== null && value.length){
      filters[key] = value;
    }
  })
  return { filters };
};


const selectAllProducts = () => {
  if(form.value.product.length == products.value.length){
    // isAllProductsSelected.value = false;
    form.value.product = [];
  }else{
    let allProducts = products.value.map(product => product.id).filter(id => !form.value.product.includes(id));
    form.value.product.push(...allProducts);
    // isAllProductsSelected.value = true;
  }
}

const snakeToCamel = (snakeCaseString) => {
    return snakeCaseString.replace(/_([a-z])/g, function (match, group) {
        return group.toUpperCase();
    });
}

const search = (filters) => {
  const formData = new FormData();
  formData.append("page", 1);
  formData.append("limit", 15);
  if(Object.keys(filters).includes("status") && ( Object.keys(filters).includes("from") || Object.keys(filters).includes("to") )){
    filters.status.forEach(status => {
      let statusName = snakeToCamel(status);
      if(filters.from){
        formData.append(`${statusName}From`, filters.from)
      }
      if(filters.to){
        formData.append(`${statusName}To`, filters.to)
      }
    })
      delete filters?.status
      delete filters?.from
      delete filters?.to
    }
  if(isAllProductsSelected.value == true){
    delete filters.product;
    formData.append("allProducts", "");
  }
  Object.entries(filters).forEach(([key, value]) => {
    formData.append(key, value);
  });
  const query = new URLSearchParams(formData).toString();
  gettingReports.value = true;
  isFiltered.value = true;

  if(userRole == "admin"){
      _getReports(getCustomReports, query);
    }else if(userRole == "agent"){
      _getReports(getAgentCustomReports, query);
    }else if(userRole == "finance"){
      _getReports(getFinanceCustomReports, query);
    }
    else if(userRole == "logistic"){
      _getReports(getLogisticCustomReports, query);
    }
    else if(userRole == "operation"){
      _getReports(getOperationCustomReports, query);
    }
};

const clearFilters = () => {
  isFiltered.value = false;
  // isAllProductsSelected.value = false;
  form.value = {
    branch: [],
    status: [],
    delivery: [],
    from: [],
    to: [],
    agent: [],
    area: [],
    payment: [],
    category: [],
    product: []
  };

  if(userRole == "admin"){
      _getReports(getCustomReports);
    }else if(userRole == "agent"){
      _getReports(getAgentCustomReports);
    }else if(userRole == "finance"){
      _getReports(getFinanceCustomReports);
    }
    else if(userRole == "logistic"){
      _getReports(getLogisticCustomReports);
    }
    else if(userRole == "operation"){
      _getReports(getOperationCustomReports);
    }
};

const exportExcel = () => {
  let excelFilters = {};
  if (sortedBy.value !== undefined && sortedBy.value.length > 0) {
    excelFilters[
      "sortBy[]"
    ] = `${sortedBy.value[0].order}-${sortedBy.value[0].key}`;
  }
  
  const filters = getFilters().filters; // Access filters object

  Object.entries(filters).forEach(([key, value]) => {
    excelFilters[key] = value;
  })

  if(Object.keys(excelFilters).includes("status") && ( Object.keys(excelFilters).includes("from") || Object.keys(excelFilters).includes("to") )){
    excelFilters.status.forEach(status => {
      let statusName = snakeToCamel(status);
      if(excelFilters.from){
        excelFilters[`${statusName}From`] = excelFilters.from;
      }
      if(excelFilters.to){
        excelFilters[`${statusName}To`] = excelFilters.to;
      }
    })
      delete excelFilters?.status
      delete excelFilters?.from
      delete excelFilters?.to
    }
    if(isAllProductsSelected.value == true){
      delete excelFilters.product;
      excelFilters["allProducts"] = "";
    }

  loading.value = true;
  const query = new URLSearchParams(excelFilters).toString();
  axiosIns
    .get(`${userRole !== "admin" ? `/${userRole}` : ""}/stats/custom?export${query.length ? '&' + query : query}`, { responseType: "arraybuffer" })
    .then((res) => {
      const blob = new Blob([res.data], { type: "application/vnd.ms-excel" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "custom-report.xlsx");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).finally(() => {
      loading.value = false;
    });
};
const filters = computed(() => {
  return Object.keys(getFilters().filters);
});
const hasProducts = computed(() => {
  return (Object.keys(getFilters().filters).includes("product") || Object.keys(getFilters().filters).includes("category")) && isFiltered.value === true && gettingReports.value === false;
})

onMounted(() => {
  if(userRole == "admin"){
    _getReports(getCustomReports);
    _getAreas(getAreas);
    _getBranches(getBranches);
    _getDeliveries(getDeliveries);
    _getAgents(getAgents);
    _getProducts(getProductsCustomizeReportAdmin);
    _getCategories(getCategories);
  }else if(userRole == "finance"){
    _getReports(getFinanceCustomReports);
    _getAreas(getFinanceAreas);
    _getBranches(getFinanceBranches);
    _getDeliveries(getFinanceDeliveries);
    _getAgents(getFinanceAgents);
    _getProducts(getProductsCustomizeReportFinance);
    _getCategories(getFinanceCategories);
  }else if(userRole == "operation"){
    _getReports(getOperationCustomReports);
    _getAreas(getOperationAreas);
    _getBranches(getOperationBranches);
    _getDeliveries(getOperationDeliveries);
    _getAgents(getOperationAgents);
    _getProducts(getProductsCustomizeReportOperation);
    _getCategories(getOperationCategories);
  }else if(userRole == "logistic"){
    _getReports(getLogisticCustomReports);
    _getAreas(getLogisticAreas);
    _getBranches(getLogisticBranches);
    _getDeliveries(getLogisticDeliveries);
    _getAgents(getLogisticAgents);
    _getProducts(getProductsCustomizeReportLogistic);
    _getCategories(getLogisticCategories);
  }else if(userRole == "agent"){
    _getReports(getAgentCustomReports);
    _getAreas(getAgentAreas);
    _getBranches(getAgentBranches);
    _getDeliveries(getAgentDeliveries);
    _getAgents(getAgentAgents);
    _getProducts(getProductsCustomizeReportAgent);
    _getCategories(getAgentCategories);
  }
});
</script>

<template>
  <div>
    <VRow class="mx-0 my-0">
      <VTabs v-model="currentTab" class="mx-auto v-tabs-pill">
        <VTab value="customized">{{ $t('cutomized') }}</VTab>
        <VTab value="layouts">{{ $t('layouts') }}</VTab>
      </VTabs>
      <VSpacer />
      <VBtn prepend-icon="tabler-upload" color="success" class="mr-3" @click="exportExcel" :loading="loading">{{
        $t('Export Excel') }}</VBtn>
    </VRow>

    <VWindow v-model="currentTab">
      <VWindowItem value="customized" class="py-7">
        <VCol style="background-color: rgb(var(--v-theme-surface));" class="rounded pb-5">
          <p class="text-h4 pt-3 pb-0 mb-3 px-3">{{ $t('Customized Reports') }}</p>
          <VRow :class="{ 'flex-column': $vuetify.display.xs }">
            <VCol cols="12" class="pe-0 v-col-sm-12 v-col-md-10 v-col-lg-10">
              <VRow class="ps-lg-1 pe-lg-0 ps-md-1 pe-md-0 ps-sm-1 pe-sm-0 mx-0 w-100 mt-0 pe-0" align="center"
                justify="space-between">
                <VCombobox prepend-inner-icon="tabler-building-store" multiple v-model="form.branch" :items="branches"
                  :item-title="langIdentifier" :return-object="false" item-value="id" :placeholder="$t('Select a Branch')"
                  class="mx-2 flex-grow-1" :class="{ 'w-100 mt-3': $vuetify.display.xs, 'my-2': !$vuetify.display.xs}"
                  :style="$vuetify.display.xs ? 'width: 100%;' : ''" />
                <VCombobox prepend-inner-icon="tabler-building-store" multiple v-model="form.area" :items="areas"
                  item-title="name_en" :return-object="false" item-value="name_en" :placeholder="$t('Select an Area')"
                  class="mx-2 flex-grow-1" :class="{ 'w-100 mt-3': $vuetify.display.xs, 'my-2': !$vuetify.display.xs}"
                  :style="$vuetify.display.xs ? 'width: 100%;' : ''" />
                <VCombobox prepend-inner-icon="tabler-activity-heartbeat" multiple v-model="form.status" :items="statuses"
                  item-title="name" item-value="value" :return-object="false" :placeholder="$t('Select a Status')" class="mx-2 flex-grow-1"
                  :class="{ 'w-100 mt-3': $vuetify.display.xs, 'my-2': !$vuetify.display.xs}" :style="$vuetify.display.xs ? 'width: 100%;' : ''" />
                <VCombobox prepend-inner-icon="tabler-activity-heartbeat" 
                  :return-object="false"
                  multiple
                  v-model="form.payment"
                  :items="paymentMethods" item-title="name" item-value="value"
                  :placeholder="$t('Select a Payment Method')" class="mx-2 flex-grow-1"
                  :class="{ 'w-100 mt-3': $vuetify.display.xs, 'my-2': !$vuetify.display.xs}" :style="$vuetify.display.xs ? 'width: 100%;' : ''" />
              </VRow>
              <VRow class="ps-lg-1 pe-lg-0 ps-md-1 pe-md-0 ps-sm-1 pe-sm-0 mx-0 w-100 mt-3 pe-0" align="center"
                justify="space-between">
                <VCombobox prepend-inner-icon="tabler-user" v-model="form.agent" multiple :items="agents" item-value="id"
                  item-title="name" :return-object="false" :placeholder="$t('Select an Agent')" class="mx-2 flex-grow-1"
                  :class="{ 'w-100 mt-3': $vuetify.display.xs, 'my-2': !$vuetify.display.xs}" :style="$vuetify.display.xs ? 'width: 100%;' : ''" />
                <VCombobox prepend-inner-icon="tabler-truck-delivery" multiple v-model="form.delivery" :items="deliveries"
                  item-value="id" item-title="name" :return-object="false" :placeholder="$t('Select a Delivery')"
                  class="mx-2 flex-grow-1" :class="{ 'w-100 mt-3': $vuetify.display.xs, 'my-2': !$vuetify.display.xs}"
                  :style="$vuetify.display.xs ? 'width: 100%;' : ''" />
                <AppDateTimePicker v-model="form.from" :placeholder="$t('From')" class="mx-2 flex-grow-1"
                  :class="{ 'w-100 mt-3': $vuetify.display.xs, 'my-2': !$vuetify.display.xs}" :style="$vuetify.display.xs ? 'width: 100%;' : ''">
                </AppDateTimePicker>
                <AppDateTimePicker v-model="form.to" :placeholder="$t('To')" class="mx-2 flex-grow-1"
                  :class="{ 'w-100 mt-3': $vuetify.display.xs, 'my-2': !$vuetify.display.xs}" :style="$vuetify.display.xs ? 'width: 100%;' : ''">
                </AppDateTimePicker>
              </VRow>
              <VRow class="ps-lg-1 pe-lg-0 ps-md-1 pe-md-0 ps-sm-1 pe-sm-0 mx-0 w-100 mt-3 pe-0" align="center"
                justify="space-between">
                <VCombobox prepend-inner-icon="tabler-package" v-model="form.product" multiple :items="products" item-value="id"
                  item-title="name_en" :return-object="false" :placeholder="$t('Select a Product')" class="mx-2 flex-grow-1 products"
                  :class="{ 'w-100 mt-3': $vuetify.display.xs, 'my-2': !$vuetify.display.xs}" :style="$vuetify.display.xs ? 'width: 100%;' : ''">
                  <template #prepend-item>
                    <VBtn v-if="!isAllProductsSelected" block elevation="0" text color="transparent" @click="selectAllProducts">
                      {{ $t("Select All") }}
                    </VBtn>
                    <VBtn v-if="isAllProductsSelected" block elevation="0" text color="transparent" @click="selectAllProducts">
                      {{ $t("Unselect All") }}
                    </VBtn>
                  </template>
                </VCombobox>
                <VCombobox prepend-inner-icon="tabler-bookmark" multiple v-model="form.category" :items="categories"
                  item-value="id" item-title="name_en" :return-object="false" :placeholder="$t('Select a Category')"
                  class="mx-2 flex-grow-1" :class="{ 'w-100 mt-3': $vuetify.display.xs, 'my-2': !$vuetify.display.xs}"
                  :style="$vuetify.display.xs ? 'width: 100%;' : ''" />
                  <AppTextField placeholder="Order Number" prepend-inner-icon="tabler-number" class="flex-grow-1" v-model="form.orderId"/>
              </VRow>
            </VCol>
            <VCol cols="12" class="mt-2 v-col-sm-12 v-col-md-2 v-col-lg-2">
              <VBtn class="mx-0" block variant="tonal" color="warning" prepend-icon="tabler-x" @click="clearFilters"
                :disabled="gettingReports || !isFiltered">
                {{ $t('Reset') }}
              </VBtn>
              <VBtn class="mx-0 mt-5" block variant="tonal" color="success" prepend-icon="tabler-search"
                @click="search(getFilters().filters)" :disabled="!filters.length || gettingReports">
                {{ $t('Search') }}
              </VBtn>
            </VCol>
          </VRow>

          <CustomizedReportsTable :hasProducts="hasProducts" :gettingReports="gettingReports" :meta="meta" :reports="reports" :filters="getFilters()"
            @update-sort-by="handleUpdateSortBy" @update-page-n="handlePageUpdate" />
        </VCol>
      </VWindowItem>

      <VWindowItem value="layouts" class="py-7">
        <VCol style="background-color: rgb(var(--v-theme-surface));" class="rounded pb-5">
          <p class="text-h4 pt-3 pb-0 mb-3 px-3">{{ $t('layouts_reports') }}</p>
          <LayoutsReportsTable :hasProducts="hasProducts" :gettingReports="gettingReports" :meta="meta" :reports="reports" :filters="getFilters()"
            @update-sort-by="handleUpdateSortBy" @update-page-n="handlePageUpdate" />
        </VCol>
      </VWindowItem>
    </VWindow>
  </div>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
  roles: ["admin", "logistic", "operation", "finance", "agent"]
</route>
<style lang="scss" scoped>

  :deep(.products){
    .v-field__input{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex-wrap: nowrap;
    }
  }

</style>
