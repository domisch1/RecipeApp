import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "./views/LandingPage.vue";

const routes = [
  { path: "/", component: LandingPage },
  { path: "/signup", component: () => import("./views/SignUp.vue") },
  { path: "/login", component: () => import("./views/Login.vue") },
  { path: "/create", component: () => import("./views/CreateRecipe.vue") },
  { path: "/recipe-list", component: () => import("./views/RecipeList.vue") },
  { path: "/draft", component: () => import("./views/Draft.vue") },
  {
    path: "/shopping-list",
    component: () => import("./views/ShoppingList.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
