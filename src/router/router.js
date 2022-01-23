import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home'
import Cv from '../pages/Cv'
import Contact from '../pages/Contact'
import Aboute from '../pages/Aboute'
import Portfolio from '../pages/Portfolio'

const routes = [
  {
    path: '/mypage',
    redirect: '/',
  },
  {
    path: '/',
    Name: 'Home',
    component: Home
  },
  {
    path: '/cv',
    Name: 'Cv',
    component: Cv
  },
  {
    path: '/portfolio',
    Name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/aboute',
    Name: 'Aboute',
    component: Aboute
  },
  {
    path: '/contact',
    Name: 'Contact',
    component: Contact
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
