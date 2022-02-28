import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/components/Layout/Layout'
import RestaurantPage from '@/pages/Restaurant/Restaurant'
import AddRestaurantPage from '@/pages/Customers/AddRestaurant'
import CustomersPage from '@/pages/Customers/Customers'
import StatisticsPage from '@/pages/Statistics/Statistics'
import AnalyticsPage from '@/pages/Dashboard/Dashboard'
import HomePage from '@/pages/HomePage/HomePage'
import { authService } from './services/auth'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/app',
    name: 'Layout',
    component: Layout,
    meta: {
      requiresAuth: true,
      },
    children: [
          {
            path: 'dashboard',
            name: 'AnalyticsPage',
            component: AnalyticsPage
          },
          {
            path: 'restaurant',
            name: 'RestaurantPage',
            component: RestaurantPage,
            alias: '/addrestaurant'
          },
          {
            path: 'customers',
            name: 'CustomersPage',
            component: CustomersPage
          },
          {
            path: 'statistics',
            name: 'StatisticsPage',
            component: StatisticsPage
          },
      ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if(requiresAuth){
      authService.getUser().then(user=>{
        if(!user){
          next('/');
        }
        else{
          next()
        }
      })
    }
    else{
      next()
    }
});



export default router