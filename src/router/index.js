import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookDetails from '../views/BookDetails.vue'
import EditEntry from '../views/EditEntry.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/book-details',
    name: 'book-details',
    component: BookDetails
  },
  {
    path: '/edit-entry',
    name: 'edit-entry',
    component: EditEntry
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
