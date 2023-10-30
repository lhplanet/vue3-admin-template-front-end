// 通过vue-router插件实现模板路由配置
import { createRouter, createWebHashHistory } from "vue-router";
import { constantRoutes } from "./routes";

// 创建路由器
let router = createRouter({
    // 路由模式：hash模式
    history: createWebHashHistory(),
    // 路由地址
    routes: constantRoutes,
    // 路由跳转后滚动条位置（滚动行为）
    scrollBehavior() {
        return {
            top: 0,
            left: 0
        }
    }
});

export default router;