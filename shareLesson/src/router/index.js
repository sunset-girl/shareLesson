import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const home = () => import('@/views/home/index')
const expends = () => import('@/views/carbon/expends')
const free = () => import('@/views/carbon/free')
const lessonOrder = () => import('@/views/carbon/lessonOrder')
const present = () => import('@/views/carbon/present')
const login = () => import('@/views/carbon/login')
const order = () => import('@/views/carbon/order')
const yujia = () => import('@/views/carbon/yujia')
const phone = () => import('@/views/carbon/phone')
const register = () => import('@/views/carbon/register')
const softy = () => import('@/views/carbon/softy')
const classOder = () => import('@/views/carbon/classOder')
const kongbai = () => import('@/views/carbon/kongbai')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/',
          name: '首页',
          component: home
        }
      ]
    },
    {
      path: '/',
      name: 'expends',
      component: expends,
      children: [
        {
          path: '/carbon/expends',
          name: '消费',
          component: expends
        }
      ]
    },
    {
      path: '/',
      name: 'free',
      component: free,
      children: [
        {
          path: '/carbon/free',
          name: '免费',
          component: free
        }
      ]
    },
    {
      path: '/',
      name: 'lessonOrder',
      component: lessonOrder,
      children: [
        {
          path: '/carbon/lessonOrder',
          name: '课程订单',
          component: lessonOrder
        }
      ]
    },
    {
      path: '/',
      name: 'present',
      component: present,
      children: [
        {
          path: '/carbon/present',
          name: '礼物',
          component: present
        }
      ]
    },
    {
      path: '/',
      name: 'order',
      component: order,
      children: [
        {
          path: '/carbon/order',
          name: '订单',
          component: order
        }
      ]
    },
    {
      path: '/',
      name: 'yujia',
      component: yujia,
      children: [
        {
          path: '/carbon/yujia',
          name: '瑜伽',
          component: yujia
        }
      ]
    },
    {
      path: '/',
      name: 'phone',
      component: phone,
      children: [
        {
          path: '/carbon/phone',
          name: '手机注册',
          component: phone
        }
      ]
    },
    {
      path: '/',
      name: 'register',
      component: register,
      children: [
        {
          path: '/carbon/register',
          name: '输入密码',
          component: register
        }
      ]
    },
    {
      path: '/',
      name: 'softy',
      component: softy,
      children: [
        {
          path: '/carbon/softy',
          name: '温馨提示',
          component: softy
        }
      ]
    },
    {
      path: '/',
      name: 'login',
      component: login,
      children: [
        {
          path: '/carbon/login',
          name: '登录页面',
          component: login
        }
      ]
    },
    {
      path: '/',
      name: 'classOder',
      component: classOder,
      children: [
        {
          path: '/carbon/classOder',
          name: '课程订单',
          component: classOder
        }
      ]
    },
    {
      path: '/',
      name: 'kongbai',
      component: kongbai,
      children: [
        {
          path: '/carbon/kongbai',
          name: '空白页面',
          component: kongbai
        }
      ]
    }
  ]
})
