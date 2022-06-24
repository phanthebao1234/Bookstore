import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/client/home.vue";
// import { app } from "@/configs/firebase";
// import { getAuth } from "firebase/auth";

// const requireAuth = (to, from, next) => {
//   console.log("app:", app);
//   const auth = getAuth();
//   const user = auth.currentUser;
//   // if (!user) next({ name: "login", params: {} });
//   // next();
//   console.log("before enter router:", user);
// };

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/client/about.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/client/register.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/client/products.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/client/login.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/client/profile.vue"),
    // beforeEnter: requireAuth(),
  },
  {
    path: "/logout",
    name: "logout",
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/client/logout.vue"),
  },
  {
    path: "/carts",
    name: "carts",
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/client/carts.vue"),
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/client/detail.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/admin/products.vue"),
  },
  {
    path: "/admin/users",
    name: "users",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/admin/user.vue"),
  },
  {
    path: "/admin/updateproduct",
    name: "updateproduct",
    component: () =>
      import(
        /* webpackChunkName: "admin" */ "../views/admin/updateproduct.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
