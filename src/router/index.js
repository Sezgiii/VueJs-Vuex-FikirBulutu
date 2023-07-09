import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { projectAuth } from '@/firebase/config'

const authControl =(to,from,next)=>{
  let user = projectAuth.currentUser;

  if(!user){
    next({name:"Home"})
  }else{
    next();
  }

}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hakkimizda',
    name: 'Hakkimizda',
    component: () => import('../views/Hakkimizda.vue')
  },
  {
    path: '/fikirler',
    name: 'Fikirler',
    component: () => import('../views/Fikirler.vue'),
    beforeEnter: authControl
  },
  {
    path: '/ekle',
    name: 'Ekle',
    component: () => import('../views/Ekle.vue'),
    beforeEnter: authControl
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
