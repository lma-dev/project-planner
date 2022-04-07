import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProject from '../views/AddProject.vue'


const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addProject',
    name: 'addProject',
    component: AddProject
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,

})

export default router