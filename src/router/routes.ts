// 对外暴露配置的路由
// 常量路由
export const constantRoutes = [
    {
        // 登录路由
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'login'
    },
    {
        // 首页路由
        path: '/',
        component: () => import('@/views/home/index.vue'),
        name: 'home'
    },
    {
        // 404路由
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        name: '404'
    },
    {
        // 重定向路由
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'any'
    }
]
