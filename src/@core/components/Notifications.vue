<script setup>
import { useRouter } from "vue-router";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
const router = useRouter();
const props = defineProps({
  notifications: {
    type: Array,
    required: true,
  },
  total: {
    type: Number,
    required: true,
    default: 0,
  },
  badgeProps: {
    type: null,
    required: false,
    default: undefined,
  },
  location: {
    type: null,
    required: false,
    default: "bottom end",
  },
});

const resolveStatus = (status, order) => {
  if (status == "created") {
    return {
      text: `New Order is added #${order}`,
    };
  } else if (status == "ready_for_delivery") {
    return {
      text: `Order #${order} is Ready for delivery`,
    };
  } else if (status == "in_progress") {
    return {
      text: `Order #${order} is In Progress`,
    };
  } else if (status == "cancelled") {
    return {
      text: `Order #${order} is cancelled`,
    };
  } else if (status == "on_the_way") {
    return {
      text: `Order #${order} is On The Way`,
    };
  } else {
    return {
      text: `Order #${order} is ${status}`,
    };
  }
};

const emit = defineEmits(["click:notification"]);

const go = (id) => {
  router.replace(`/orders/${id}`);
};
</script>

<template>
  <IconBtn
    id="notification-btn position-relative"
    @click="$emit('click:notification')"
  >
    <span
      class="notification-badge position-absolute bg-error"
      v-if="props.total !== 0"
      >{{ props.total }}</span
    >
    <VIcon size="26" icon="tabler-bell" />

    <VMenu
      activator="parent"
      width="380px"
      :location="props.location"
      offset="14px"
      :close-on-content-click="false"
    >
      <VCard class="d-flex flex-column">
        <!-- 👉 Header -->
        <VCardItem class="notification-section">
          <VCardTitle class="text-lg"> {{ $t("notifications") }} </VCardTitle>
        </VCardItem>

        <VDivider />

        <!-- 👉 Notifications list -->
        <PerfectScrollbar
          :options="{ wheelPropagation: false }"
          style="max-block-size: 23.75rem"
        >
          <VList class="notification-list rounded-0 py-0">
            <template
              v-for="(notification, index) in props.notifications"
              :key="notification.id"
            >
              <VDivider v-if="index > 0" />
              <VListItem
                link
                lines="one"
                min-height="66px"
                class="list-item-hover-class"
                @click="go(notification.order_id)"
              >
                <!-- Slot: Prepend -->
                <!-- Handles Avatar: Image, Icon, Text -->
                <template #prepend>
                  <VListItemAction start>
                    <VAvatar size="40" variant="tonal">
                      <span v-if="notification.order_id">{{
                        notification.order_id
                      }}</span>
                    </VAvatar>
                  </VListItemAction>
                </template>

                <VListItemTitle>#{{ notification.order_id }}</VListItemTitle>
                <VListItemSubtitle>{{
                  resolveStatus(notification.status, notification.order_id).text
                }}</VListItemSubtitle>
                <span class="text-xs text-disabled">{{
                  notification.time
                }}</span>
              </VListItem>
            </template>

            <VListItem
              v-show="!props.notifications.length"
              class="text-center text-medium-emphasis"
              style="block-size: 56px"
            >
              <VListItemTitle>No Notification Found!</VListItemTitle>
            </VListItem>
          </VList>
        </PerfectScrollbar>

        <VDivider />
      </VCard>
    </VMenu>
  </IconBtn>
</template>

<style lang="scss">
.notification-section {
  padding: 14px !important;
}

.notification-footer {
  padding: 6px !important;
}

.list-item-hover-class {
  .visible-in-hover {
    display: none;
  }

  &:hover {
    .visible-in-hover {
      display: block;
    }
  }
}

.notification-list.v-list {
  .v-list-item {
    border-radius: 0 !important;
    margin: 0 !important;
  }
}

// Badge Style Override for Notification Badge
.notification-badge {
  top: 0px !important;
  right: -5px !important;
  padding: 2px 5px;
  border-radius: 50px;
  z-index: 100 !important;
}
</style>
