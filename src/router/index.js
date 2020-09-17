import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/Contacto.vue')
  },
  {
    path: '/Post/:entrada',
    name: 'Post',
    component: () => import(/* webpackChunkName: "post" */ '../views/Post.vue'),
        children: [
          {
          path: 'comentarios',
          name: 'Comentarios',
          component: () => import(/* webpackChunkName: "comentarios" */ '../views/Comentarios.vue')
          
          },
          ]
  },
    {
      path: '*',
      name:"NotFound",
      component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue'),
      }
      
    
]

const router = new VueRouter({
  routes
})

export default router
