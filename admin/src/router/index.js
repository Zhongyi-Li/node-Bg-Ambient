import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Main.vue'
import creaOrder from '../views/createOrder.vue'
import orderList from '../views/orderList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/order',
    children: [
      { path: '/order', component: creaOrder },
      { path: '/order/:id', component: creaOrder, props: true },
      { path: '/orderList', component: orderList }
    ]
  },
]

const router = new VueRouter({
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router