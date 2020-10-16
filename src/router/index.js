import Vue from 'vue'
import VueRouter from 'vue-router'
import cart from '../views/cart/cart.vue'
import home from '../views/home/home.vue'
import category from '../views/category/category.vue'
import profile from '../views/profile/profile.vue'
import detail from '../views/detail/detail.vue'


Vue.use(VueRouter)

  const routes = [
    {
      path:'',
      redirect:'/home',
      component: home
    },
    {
      path:'/home',
      name:'home',
      component: home
    },
    {
      path:'/category',
      name:'category',
      component: category
    },
    {
      path:'/cart',
      component: cart
    },
    {
      path:'/profile',
      name:'profile',
      component: profile
    },
    {
      path:'/detail',
      name:'detail',
      component: detail
    }
]

const router = new VueRouter({
  routes
})

export default router
