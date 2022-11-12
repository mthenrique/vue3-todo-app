import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import User from '../pages/User.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/user',
    name: 'User',
    component: User,
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router