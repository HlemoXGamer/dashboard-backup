<script setup>
import { useNotificationStore } from "@/store/notification";
import { LocalNotifications } from "@capacitor/local-notifications";
const items = computed(() => {
  return useNotificationStore().$state.items;
});
const total = computed(() => {
  return useNotificationStore().$state.total;
});
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;

const handleNotificationClick = () => {
  if (userRole == "restaurant" || userRole == "admin") {
    useNotificationStore().getNotifications(userRole);
    useNotificationStore().updateNotifications(userRole);
    useNotificationStore().SET_TOTAL(0);
  }
};

onMounted(async () => {
  if (userRole == "restaurant" || userRole == "admin") {
    await LocalNotifications.requestPermissions();
    useNotificationStore().getNotifications(userRole);
  }
});
</script>

<template>
  <Notifications
    :notifications="items"
    :total="total"
    @click:notification="handleNotificationClick"
  />
</template>
