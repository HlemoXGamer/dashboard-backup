<script setup>
import { useSkins } from "@core/composable/useSkins";
import { useThemeConfig } from "@core/composable/useThemeConfig";
import { useRoute } from "vue-router";
// @layouts plugin
import { AppContentLayoutNav } from "@layouts/enums";
const { isAppRtl } = useThemeConfig();

const DefaultLayoutWithHorizontalNav = defineAsyncComponent(() =>
  import("./components/DefaultLayoutWithHorizontalNav.vue"),
);
const DefaultLayoutWithVerticalNav = defineAsyncComponent(() =>
  import("./components/DefaultLayoutWithVerticalNav.vue"),
);
const { width: windowWidth } = useWindowSize();
const { appContentLayoutNav, switchToVerticalNavOnLtOverlayNavBreakpoint } =
  useThemeConfig();

// Remove below composable usage if you are not using horizontal nav layout in your app
switchToVerticalNavOnLtOverlayNavBreakpoint(windowWidth);
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const route = useRoute();
const { layoutAttrs, injectSkinClasses } = useSkins();

injectSkinClasses();

// Margin For Notification Sidebar in Restaurant
const shouldRenderLayout = computed(() => {
  return (
    !route.path.includes("orders") &&
    !route.params.id &&
    userRole == "restaurant"
  );
});

const marginStyle = computed(() => {
  if (isAppRtl.value) {
    return shouldRenderLayout.value ? "margin-left: 300px;" : "";
  } else {
    return shouldRenderLayout.value ? "margin-right: 300px;" : "";

  }
});

</script>

<template>
  <template v-if="appContentLayoutNav === AppContentLayoutNav.Vertical">
    <DefaultLayoutWithVerticalNav v-bind="layoutAttrs" :style="marginStyle" />
  </template>
  <template v-else>
    <DefaultLayoutWithHorizontalNav v-bind="layoutAttrs" />
  </template>
</template>

<style lang="scss">
// As we are using `layouts` plugin we need its styles to be imported
@use "@layouts/styles/default-layout";
</style>
