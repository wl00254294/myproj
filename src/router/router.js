  
import Vue from 'vue';
import Router from 'vue-router';
import About from '../views/about.vue';
import About2 from '../views/about2.vue';
import About3 from '../views/about3.vue';
import About4 from '../views/about4.vue';
import About5 from '../views/about5.vue';
import Initial from '../views/initial.vue';

Vue.use(Router);
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path:'/',
        name: 'init',
        component: Initial,
        meta: {
          layout: 'default'
        }
      },
      {
        path: '/about1',
        name: 'about1',
        component: About,
        meta: {
          layout: 'default'
        }
      },
      {
        path: '/about2',
        name: 'about2',
        component: About2,
        meta: {
          layout: 'default'
        }
      },
      {
        path: '/about3',
        name: 'about3',
        component: About3,
        meta: {
          layout: 'default'
        }       
      },     
      {
        path: '/about4',
        name: 'about4',
        component: About4,
        meta: {
          layout: 'default'
        }       
      },
      {
        path: '/about5',
        name: 'about5',
        component: About5,
        meta: {
          layout: 'default'
        }       
      }        
    ]
  })


