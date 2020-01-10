import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import Body from '../views/Body.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/:status?',
    name: 'Body',
    component: Body,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
