import { createRouter, createWebHistory } from 'vue-router';
import WidgetPerwaktu from '../components/WidgetPerwaktu.vue';
import WidgetFoto from '../components/WidgetFoto.vue';
import BatuGuntingKertas from '../components/BatuGuntingKertas.vue';
import WidgetCuaca from '../components/WidgetCuaca.vue';
import WidgetLokasi from '../components/WidgetLokasi.vue';

const routes = [
  { path: '/timer', component: WidgetPerwaktu },
  { path: '/foto', component: WidgetFoto },
  { path: '/rpsgame', component: BatuGuntingKertas },
  { path: '/lokasi', component: WidgetLokasi },
  { path: '/cuaca', component: WidgetCuaca },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
