import { createRouter, createWebHistory } from 'vue-router'
import UserAuth from '../components//UserAuth.vue'
import HomeView from '../views/HomeView.vue'
import MyProjects from '../components/MyProjects.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/myprojects',
      name: 'myprojects',
      component: MyProjects
    },
    {
      path: '/userauth',
      name: 'userauth',
      component: UserAuth
    },
  ]
})

export default router
