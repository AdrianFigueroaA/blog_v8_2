import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: ['/inicio','/portada','/home']
  },
  {
    path: '/about',
    name: 'About',
    alias: ['/sobremi','/acerca'],
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    alias: ['/contacto','/contactame','/conoceme'] ,
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
    path: '/administrador',
    name: 'Administrador',
    component: () => import(/* webpackChunkName: "administrador" */ '../views/Administrador.vue'),
        children: [
          {
          path: 'avanzado',
          name: 'Avanzado',
          component: () => import(/* webpackChunkName: "avanzado" */ '../views/Avanzado.vue')
          
          },
          {
            path: 'simple',
            name: 'Simple',
            component: () => import(/* webpackChunkName: "simple" */ '../views/Simple.vue')
            
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
