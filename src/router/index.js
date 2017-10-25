import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Travel from '@/components/Travel'
import Transaction from '@/components/Transaction'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/travel',
      name: 'Travel',
      component: Travel
    },
    {
      path: '/transaction',
      name: 'Transaction',
      component: Transaction
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
