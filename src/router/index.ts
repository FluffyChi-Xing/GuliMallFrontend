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
            },
            {
                path: '/home/category',
                name: 'category',
                meta: {
                    title: '分类管理'
                },
                component: () => import('@/views/Category/index.vue')
            },
            {
                path: '/home/spu',
                name: 'spu',
                meta: {
                    title: 'SPU管理'
                },
                component: () => import('@/views/SpuManage/index.vue')
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
