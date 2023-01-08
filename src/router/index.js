import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Persons from '../views/Persons.vue'
import PersonInfos from '@/views/PersonInfos'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/Persons',
    name: 'Person',
    component: Persons
  },
  {
    path: '/PersonInfos/:id',
    name: 'PersonInfos',
    component: PersonInfos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
