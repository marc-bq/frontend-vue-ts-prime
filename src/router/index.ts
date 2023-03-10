import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Home from "../views/Home/Home.vue";
import Administration from "../views/Administration/Administration.vue";
import Users from "../views/Administration/Users.vue";
import { useMainStore } from "../store";
import Welcome from "../views/Home/Welcome.vue";
const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    meta: { requiresAuth: true },
    children: [
      { path: "", redirect: "/home/welcome" },
      {
        path: "/home",
        name: "Home",
        component: Home,
        meta: { requiresAuth: true },
        children: [
          {
            path: "welcome",
            component: Welcome,
            meta: { requiresAuth: true },
          },
        ],
      },

      {
        path: "/admin",
        name: "Admin",
        component: Administration,
        children: [
          {
            path: "users",
            component: Users,
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const store = useMainStore();
  // eslint-disable-next-line no-unused-vars
  const token = store.userToken;

  if (requiresAuth) {
    try {
      const isValid = true; //Replace with a tokenValidation function
      if (isValid) next();
      else next("/");
    } catch (error) {
      next("/");
    }
  } else {
    next();
  }
});
export default router;
