import {createRouter, createWebHashHistory} from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'layout',
      component: () => import('@/layout/index.vue'),
        children: [
            {
                path: '/home/dashboard',
                name: 'dashboard',
                component: () => import('@/views/DashBoard/index.vue'),
                meta: {
                    title: '仪表盘'
                }
            }
        ]
    }
  ]
})


router.beforeEach((to) => {
    NProgress.start()
    // 解决首页路由重定向问题
    if (to.path === '/') {
        return '/home/dashboard'
    }
    if (to.meta.title) {
        document.title = to.meta.title as string
    }
})

router.afterEach(() => {
    NProgress.done()
})

export default router
