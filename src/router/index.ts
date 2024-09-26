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
            },
            {
                path: '/home/admin',
                name: 'admin',
                meta: {
                    title: '个人中心'
                },
                component: () => import('@/views/AdminCenter/index.vue')
            },
            {
                path: '/home/platform',
                name: 'platform',
                component: () => import('@/views/PlatformArguments/index.vue'),
                children: [
                    {
                        path: '/home/platform/category',
                        name: 'platformCategory',
                        meta: {
                            title: '平台分类'
                        },
                        component: () => import('@/views/PlatformArguments/_component/PlatformCategory.vue')
                    },
                    {
                        path: '/home/platform/specification',
                        name: 'orderSpecification',
                        meta: {
                            title: '规格参数'
                        },
                        component: () => import('@/views/OrderManagement/_components/SpecificationParams.vue')
                    }
                ]
            },
            {
                path: '/home/order',
                name: 'order',
                component: () => import('@/views/OrderManagement/index.vue'),
                children: [
                    {
                        path: '/home/order/manage',
                        name: 'orderManage',
                        component: () => import('@/views/OrderManagement/_components/OrderManage.vue'),
                        meta: {
                            title: '订单管理'
                        }
                    }
                ]
            },
            {
                path: '/home/setting',
                name: 'sysSetting',
                component: () => import('@/views/SystemSetting/index.vue'),
                children: [
                    {
                        path: '/home/setting/menu',
                        name: 'menuSetting',
                        meta: {
                            title: '菜单管理',
                        },
                        component: () => import('@/views/SystemSetting/_component/MenuSetting.vue')
                    },
                    {
                        path: '/home/setting/role',
                        name: 'settingName',
                        meta: {
                            title: '角色管理'
                        },
                        component: () => import('@/views/SystemSetting/RoleManage/index.vue')
                    }
                ]
            }
        ]
    },
      {
          path: '/login',
          name: 'login',
          component: () => import('@/views/LoginPage/index.vue'),
          meta: {
              title: '登录'
          }
      },
      {
          path: '/loading',
          name: 'loading',
          meta: {
              title: '加载中'
          },
          component: () => import('@/layout/LoadingPage.vue')
      }
  ]
})


router.beforeEach((to) => {
    NProgress.start()
    // 解决首页路由重定向问题
    if (to.path === '/') {
        return '/home/dashboard'
    }
    // 解决平台分类路由重定向问题
    if (to.path === '/home/platform') {
        return '/home/platform/category'
    }
    // 解决订单管理路由重定向问题
    if (to.path === '/home/order') {
        return '/home/order/manage'
    }
    // 解决系统管理首页重定向问题
    if (to.path === '/home/setting') {
        return '/home/setting/menu'
    }
    if (to.meta.title) {
        document.title = to.meta.title as string
    }
})

router.afterEach(() => {
    NProgress.done()
})

export default router
