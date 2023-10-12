<script setup>
import { get as getAdminBranches } from "@/apis/admin/branches";
import { get as getAdminDeliveries } from "@/apis/admin/deliveries";
import {
  show as adminOrder,
  updateBranch as updateBranchAdmin,
} from "@/apis/admin/orders";

import { get as getAgentBranches } from "@/apis/agent/branches";
import { get as getAgentDeliveries } from "@/apis/agent/deliveries";
import {
  show as agentOrder,
  updateBranch as updateBranchAgent,
} from "@/apis/agent/orders";

import { get as getRestuarantDeliveries } from "@/apis/restuarant/deliveries";
import { show as restaurantOrder } from "@/apis/restuarant/orders";

import {
  show as operationOrder,
  updateBranch as updateOperationBranch,
} from "@/apis/operation/orders";
import { get as getOperationBranches } from "@/apis/operation/branches";
import { get as getOperationDeliveries } from "@/apis/operation/deliveries";

import {
  show as logisticOrder,
  updateBranch as updateLogisticBranch,
} from "@/apis/logistics/orders";
import { get as getLogisticBranches } from "@/apis/logistics/branches";
import { get as getLogisticDeliveries } from "@/apis/logistics/deliveries";

import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";
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
let route = useRoute();
const toast = useToast();

const dialog = ref(false),
  branchLoading = ref(false);

const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const branchData = ref([]);
const orderId = computed(() => {
  return route.params.id;
});

watch(
  () => route.params.id,
  (currentValue, oldValue) => {
    _getOrder();
  },
);

const order = ref([]),
  branches = ref([]);
const currentBranch = ref(null),
  currentStatus = ref(null),
  deliveries = ref([]),
  currentDelivery = ref(null);
const currentTime = ref(null),
  start = ref(null),
  end = ref(null),
  timeKey = ref(0);

const _getOrder = async () => {
  if (userRole == "admin" && orderId.value != undefined) {
    await adminOrder(orderId.value).then((res) => {
      order.value = res.data.data;
      currentBranch.value = res.data.data.branch_id;
      currentStatus.value = res.data.data.status;
      currentDelivery.value = res.data.data.delivery_man_id;
      currentTime.value = res.data.data.est_time.time;
    });
  } else if (userRole == "agent" && orderId.value != undefined) {
    await agentOrder(orderId.value).then((res) => {
      order.value = res.data.data;
      currentBranch.value = res.data.data.branch_id;
      currentStatus.value = res.data.data.status;
      currentDelivery.value = res.data.data.delivery_man_id;
      currentTime.value = res.data.data.est_time.time;
    });
  } else if (userRole == "restaurant" && orderId.value != undefined) {
    await restaurantOrder(orderId.value).then((res) => {
      order.value = res.data.data;
      currentBranch.value = res.data.data.branch_id;
      currentStatus.value = res.data.data.status;
      currentDelivery.value = res.data.data.delivery_man_id;
      currentTime.value = res.data.data.est_time.time;
    });
  } else if (userRole == "operation" && orderId.value != undefined) {
    await operationOrder(orderId.value).then((res) => {
      order.value = res.data.data;
      currentBranch.value = res.data.data.branch_id;
      currentStatus.value = res.data.data.status;
      currentDelivery.value = res.data.data.delivery_man_id;
      currentTime.value = res.data.data.est_time.time;
    });
  } else if (userRole == "logistic" && orderId.value != undefined) {
    await logisticOrder(orderId.value).then((res) => {
      order.value = res.data.data;
      currentBranch.value = res.data.data.branch_id;
      currentStatus.value = res.data.data.status;
      currentDelivery.value = res.data.data.delivery_man_id;
      currentTime.value = res.data.data.est_time.time;
    });
  }
};

const _getAdminBranches = async () => {
  await getAdminBranches().then(({ data }) => {
    branches.value = data.data.filter((branch) => branch.is_active === 1);
    branchData.value = branches.value.find(
      (branch) => branch.id === currentBranch.value,
    );
    start.value = new Date().toTimeString().slice(0, 5);
    end.value = branchData.value.end;
    timeKey.value += 1;
  });
};

const _getOperationBranches = async () => {
  await getOperationBranches().then(({ data }) => {
    branches.value = data.data.filter((branch) => branch.is_active === 1);
    branchData.value = branches.value.find(
      (branch) => branch.id === currentBranch.value,
    );
    start.value = new Date().toTimeString().slice(0, 5);
    end.value = branchData.value.end;
    timeKey.value += 1;
  });
};

const _getLogisticBranches = async () => {
  await getLogisticBranches().then(({ data }) => {
    branches.value = data.data.filter((branch) => branch.is_active === 1);
    branchData.value = branches.value.find(
      (branch) => branch.id === currentBranch.value,
    );
    start.value = new Date().toTimeString().slice(0, 5);
    end.value = branchData.value.end;
    timeKey.value += 1;
  });
};

const _getAgentBranches = async () => {
  await getAgentBranches().then(({ data }) => {
    branches.value = data.data.filter((branch) => branch.is_active === 1);
    branchData.value = branches.value.find(
      (branch) => branch.id === currentBranch.value,
    );
    start.value = new Date().toTimeString().slice(0, 5);
    end.value = branchData.value.end;
    timeKey.value += 1;
  });
};

const _getAdminDeliveries = async () => {
  await getAdminDeliveries().then((res) => {
    deliveries.value = res.data.data;
  });
};

const _getAgentDeliveries = async () => {
  await getAgentDeliveries().then((res) => {
    deliveries.value = res.data.data;
  });
};

const _getRestuarantDeliveries = async () => {
  await getRestuarantDeliveries().then((res) => {
    deliveries.value = res.data.data;
  });
};

const _getOperationDeliveries = async () => {
  await getOperationDeliveries().then((res) => {
    deliveries.value = res.data.data;
  });
};

const _getLogisticDeliveries = async () => {
  await getLogisticDeliveries().then((res) => {
    deliveries.value = res.data.data;
  });
};

const _setBranch = async () => {
  branchLoading.value = true;
  try {
    if (userRole == "admin") {
      await updateBranchAdmin({
        order_id: orderId.value,
        branch_id: currentBranch.value,
      });
    } else if (userRole == "agent") {
      await updateBranchAgent({
        order_id: orderId.value,
        branch_id: currentBranch.value,
      });
    } else if (userRole == "operation") {
      await updateOperationBranch({
        order_id: orderId.value,
        branch_id: currentBranch.value,
      });
    } else if (userRole == "logistic") {
      await updateLogisticBranch({
        order_id: orderId.value,
        branch_id: currentBranch.value,
      });
    }

    toast.success("Order Branch updated successfully");
    branchLoading.value = false;
  } catch (err) {
    toast.error(err.response.data.message);
    branchLoading.value = false;
  }
};

const branchDisabled = ref(false);
const handleStatusUpdate = (status) => {
  if(status == "delivered"){
    branchDisabled.value = true;
  }
}

onMounted(() => {
  _getOrder();
  if (userRole == "admin") {
    _getAdminBranches();
    _getAdminDeliveries();
  } else if (userRole == "agent") {
    _getAgentBranches();
    _getAgentDeliveries();
  } else if (userRole == "restaurant") {
    _getRestuarantDeliveries();
  } else if (userRole == "operation") {
    _getOperationBranches();
    _getOperationDeliveries();
  } else if (userRole == "logistic") {
    _getLogisticBranches();
    _getLogisticDeliveries();
  }
});
</script>
<template>
  <div :key="order.id">
    <VRow class="mt-4 px-2" justify="space-around">
      <VCol class="pt-0" cols="12">
        <VRow align="center" justify="space-between" class="mx-0 my-0">
          <p class="text-h3 pt-3 pb-0 mb-3 text-left">#{{ order.id }}</p>
          <strong
            class="text-h5 pt-3 pb-0 mb-3 text-right"
            v-if="order.delivery_date"
            >{{ $t('Delivery Date') }}:
            {{
              userRole == "operation" || userRole == "logistic"
                ? order?.delivery_date
                : userRole == "agent" ? order.delivery_date : order.delivery_date?.day
            }}
            {{
              userRole !== "operation" && userRole !== "logistic" && userRole !== "agent" && userRole !== 'restaurant'
                ? "|" + order.delivery_date?.time
                : ""
            }}
            {{ 
              userRole === 'restaurant' ? order.delivery_date : ''
            }}  
          </strong>
        </VRow>
      </VCol>
      <VCol class="pt-0" :cols="$vuetify.display.smAndDown ? 12 : 8">
        <OrderDetails :products="order.products" />

        <!-- Admin Address Details -->
        <AdminAddressDetails v-if="userRole == 'admin'" :order="order" />

        <!-- Operation Address Details -->
        <OperationAddressDetails
          v-if="userRole == 'operation'"
          :order="order"
        />

        <!-- Agent Address Details -->
        <AgentAddressDetails v-if="userRole == 'agent'" :order="order" />

        <!-- Logistics Address Details -->
        <LogisticsAddressDetails v-if="userRole == 'logistic'" :order="order" />

        <!-- Restaurant Address Details -->
        <RestaurantAddressDetails
          v-if="userRole == 'restaurant'"
          :order="order"
        />
        <VCol
          class="mt-7 px-5 rounded pb-6"
          style="background-color: rgb(var(--v-theme-surface))"
        >
          <p class="text-h4 pt-3 mb-1">{{ $t('Customer Review') }}</p>
          <VCol>
            <p
              class="text-h5 pt-0 mb-0"
              :class="order.review !== null ? 'text-left' : 'text-center'"
            >
              {{ order.complain !== null ? order.complain : "No Reviews Yet!" }}
            </p>
          </VCol>
        </VCol>

        <VCol
          class="mt-7 px-5 rounded pb-6"
          style="background-color: rgb(var(--v-theme-surface))"
        >
          <p class="text-h4 pt-3 mb-1">{{ $t('Customer Complaint') }}</p>
          <VCol>
            <p
              class="text-h5 pt-0 mb-0"
              :class="order.complain !== null ? 'text-left' : 'text-center'"
            >
              {{
                order.complain !== null ? order.complain : "No Complains Yet!"
              }}
            </p>
          </VCol>
        </VCol>

        <!-- Admin Agent Note -->
        <AdminAgentNote v-if="userRole == 'admin'" :order="order" />
      </VCol>

      <VCol class="pt-0" :cols="$vuetify.display.smAndDown ? 12 : 4">
        <PaymentDetails
          :total="order.total"
          :paymentMethod="order.payment_method"
          :subtotal="order.sub_total"
          :newtotal="order?.new_total"
          :discountType="order?.discount_type"
          :discountRate="order?.discount_rate"
          :deliveryCost="order?.delivery_cost"
        />

        <VCol
          class="mt-6 px-5 rounded pb-9 w-100 mx-auto"
          style="background-color: rgb(var(--v-theme-surface))"
          v-if="
            userRole == 'admin' ||
            userRole == 'agent' ||
            userRole == 'operation' ||
            userRole == 'logistic'
          "
        >
          <p class="text-h4 pt-3 mb-3">{{ $t('Branch') }}</p>
          <VCol>
            <VRow justify="space-between" align="center">
              <VSelect
                :disabled="branchDisabled"
                :items="branches"
                item-value="id"
                :item-title="langIdentifier"
                v-model="currentBranch"
                prepend-inner-icon="tabler-building-store"
                placeholder="Select a Branch"
                :label="$t('Branch')"
                style="width: 100%"
                variant="outlined"
              />
              <VBtn
                :disabled="branchDisabled"
                class="mt-3"
                :loading="branchLoading"
                block
                @click="_setBranch"
                >{{ $t('Update') }}</VBtn
              >
            </VRow>
          </VCol>
        </VCol>

        <!-- Admin Order Status-->
        <AdminOrderStatus
          v-if="userRole == 'admin'"
          :deliveries="deliveries"
          :order="order"
          :start="start"
          :end="end"
          :key="timeKey"
        />

        <!-- Agent Order Status -->
        <AgentOrderStatus
          v-if="userRole == 'agent'"
          :deliveries="deliveries"
          :order="order"
          :start="start"
          :end="end"
          :key="timeKey"
        />

        <!-- Restaurant Order Status -->
        <RestaurantOrderStatus
          v-if="userRole == 'restaurant'"
          :order="order"
          :start="start"
          :end="end"
          :key="timeKey"
        />

        <!-- Operation Order Status -->
        <OperationOrderStatus
          v-if="userRole == 'operation'"
          :deliveries="deliveries"
          :order="order"
          :start="start"
          :end="end"
          :key="timeKey"
        />

        <!-- Logistics Order Status -->
        <LogisticsOrderStatus
          v-if="userRole == 'logistic'"
          :deliveries="deliveries"
          :order="order"
          :start="start"
          :end="end"
          :key="timeKey"
          @status="handleStatusUpdate"
        />

        <!-- Admin Refund -->
        <AdminRefund v-if="userRole == 'admin'" />
      </VCol>
      <OrderHistory v-if="userRole == 'admin' || userRole == 'logistic' || userRole == 'operation'" />
    </VRow>
  </div>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
  roles: ["admin", "restaurant", "agent", "operation", "logistic"]
</route>

<style lang="scss" scoped>
.app-picker-field {
  width: 49%;
}
</style>
