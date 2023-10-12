<script setup>
import { avatarText } from "@/@core/utils/formatters";
import { useToast } from "vue-toastification";
import router from "@/router";
import { Howler, Howl } from "howler";
import { useNotificationStore } from "@/store/notification";
const userRole = JSON.parse(localStorage.getItem("userDara"))?.type
const route = useRoute();
const toast = useToast();

const userData = JSON.parse(localStorage.getItem("userData"));

const logout = () => {
  toast.success("Logged out");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userData");
  Howler.stop();
  useNotificationStore().RESET_PUSHER();
  router.push(route.query.to ? String(route.query.to) : "/");
};
</script>

<template>
  <VBadge
    dot
    location="bottom right"
    offset-x="3"
    offset-y="3"
    bordered
    color="success"
  >
    <VAvatar class="cursor-pointer" color="primary" variant="tonal">
      <span>{{ avatarText(userData.name) }}</span>

      <!-- SECTION Menu -->
      <VMenu activator="parent" width="230" location="bottom end" offset="14px">
        <VList>
          <!-- 👉 User Avatar & Name -->
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VBadge
                  dot
                  location="bottom right"
                  offset-x="3"
                  offset-y="3"
                  color="success"
                >
                  <VAvatar color="primary" variant="tonal">
                    <span>{{ avatarText(userData.name) }}</span>
                  </VAvatar>
                </VBadge>
              </VListItemAction>
            </template>

            <VListItemTitle class="font-weight-semibold">
              {{ userData.name }}
            </VListItemTitle>
            <VListItemSubtitle>{{ userData.type }}</VListItemSubtitle>
          </VListItem>

          <VDivider class="my-2" />

          <!-- 👉 Logout -->
          <VListItem @click="logout">
            <template #prepend>
              <VIcon class="me-2" icon="tabler-logout" size="22" />
            </template>

            <VListItemTitle>{{ $t("logout") }}</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>
