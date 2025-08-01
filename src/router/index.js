import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Academic from '@/views/Academic.vue';
import Blog from '@/views/blogs/Blog.vue';
import Illusion from '@/views/illusions/Illusions.vue';

const routes = [
  { path: '/', component: Home },        
  { path: '/academic', component: Academic },
  { path: '/blog', name:'Blog', component: Blog },
  {
    path: '/blog/moist-memory', 
    name: 'MoistMemory',
    component: () => import('@/views/blogs/MoistMemory.vue')
  },
  {path: '/illusion', name:'Illusion', component: Illusion },
    {
    path: '/illusion/light-flash', 
    name: 'LightFlash',
    component: () => import('@/views/illusions/LightFlash.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;