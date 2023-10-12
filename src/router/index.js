import { setupLayouts } from "virtual:generated-layouts";
import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages";
import { isUserLoggedIn } from "./utils";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...setupLayouts(routes)],
});

router.beforeEach((to, from, next) => {
  const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
  if (!isUserLoggedIn() && to.fullPath !== "/") {
    router.push("/");
  } else if (isUserLoggedIn() && to.fullPath == "/") {
    router.push("/home");
  } else {
    if (
      to.meta.requiresAuth &&
      (!userRole || !to.meta.roles.includes(userRole))
    ) {
      next("/404?Unauthorized");
    } else {
      next();
    }
  }
});

// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
export default router;
