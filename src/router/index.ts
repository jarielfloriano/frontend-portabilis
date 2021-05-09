import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Dashboard",
    component: Home
  },
  {
    path: "/pokemons",
    name: "PokemonList",
    component: () =>
        import("../views/pokemon/List.vue"),
  },
  {
    path: "/pokemons/add",
    name: "PokemonAdd",
    component: () =>
        import("../views/pokemon/List.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
