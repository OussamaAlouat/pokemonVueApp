import PokemonHome from '@/views/PokemonHome.vue';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: PokemonHome,
  },
  {
    path: '/detail/:id',
    name: 'DetailView',
    component: () => import('@/views/PokemonDetailView.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
