import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../components/404.vue"
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
        import("../views/pokemon/Form.vue"),
  },
  {
    path: "/pokemons/edit/:id",
    name: "PokemonEdit",
    component: () =>
        import("../views/pokemon/Form.vue"),
  },
  {
    path: "/pokemons/remove/:id",
    name: "PokemonRemove",
    component: () =>
        import("../views/pokemon/List.vue"),
  },
  {
    path: "/profile",
    name: "ProfileAdd",
    component: () =>
        import("../views/profile/Form.vue"),
  },
  {
    path: "/profile/edit/:id",
    name: "ProfileEdit",
    component: () =>
        import("../views/pokemon/Form.vue"),
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
  {
    path: "/:catchAll(.*)",
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
