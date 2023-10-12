<script setup>
import { useNotificationStore } from "@/store/notification";
import { useThemeConfig } from "@core/composable/useThemeConfig";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";

const router = useRouter();
const route = useRoute();
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;

const isNavDrawerOpen = ref(true);
const { isLessThanOverlayNavBreakpoint } = useThemeConfig();
const { width: windowWidth } = useWindowSize();

const items = computed(() => {
  return useNotificationStore().$state.items.filter(
    (item) => item.o_status == "paid"
  );
});

const HandleOrderDetails = (order) => {
  const index = items.value.indexOf(order);
  if (index != -1) {
    items.value.splice(index, 1);
  }
  router.push(`./orders/${order.order_id}`);
};
</script>

<template>
  <template
    v-if="
      !isLessThanOverlayNavBreakpoint(windowWidth) &&
      !route.path.includes('orders') &&
      !route.params.id &&
      userRole == 'restaurant'
    "
  >
    <VBtn
      icon
      size="small"
      class="app-customizer-toggler rounded-s-lg rounded-0"
      style="z-index: 1001"
      @click="isNavDrawerOpen = true"
    >
      <VIcon size="22" icon="tabler-chef-hat" />
    </VBtn>

    <VNavigationDrawer
      location="end"
      width="300"
      class="app-customizer"
      permanent
      :absolute="false"
    >
      <!-- 👉 Header -->
      <div class="customizer-heading d-flex align-center justify-space-between">
        <div>
          <h6 class="text-h6">ORDER TRACKER</h6>
          <span class="text-body-1">Make Sure To Finish All Orders</span>
        </div>
      </div>

      <VDivider />
      <!-- 👉 Body -->
      <PerfectScrollbar tag="ul" :options="{ wheelPropagation: false }">
        <div>
          <VAlert
            v-for="(order, index) in items"
            color="success"
            class="mb-5 mt-5 Alert"
            @click="HandleOrderDetails(order)"
            style="cursor: pointer; width: calc(100% - 20px); margin: auto"
          >
            <h2 style="color: #fff" class="ma-0 pa-0">
              <VIcon icon="tabler-chef-hat" />
              Order #{{ order.order_id }}
            </h2>
            <h3 style="color: #fff; text-align: center">Need An Action</h3>
          </VAlert>
        </div>
      </PerfectScrollbar>
    </VNavigationDrawer>
  </template>
</template>

<style lang="scss">
.app-customizer {
  .customizer-section {
    padding: 1.25rem;
  }

  .customizer-heading {
    padding-block: 0.875rem;
    padding-inline: 1.25rem;
  }

  .v-navigation-drawer__content {
    display: flex;
    flex-direction: column;
  }
}

.app-customizer-toggler {
  position: fixed !important;
  inset-block-start: 50%;
  inset-inline-end: 0;
}
</style>
