// 引入项目中全部的全局组件
import SvgIcon from './SvgIcon/index.vue';

// 引入vue的类型定义
import type { App, Component } from 'vue';

// 定义一个对象，存储全部的全局组件
const components: { [name: string]: Component } = { SvgIcon };

// 对外暴露插件对象
export default {
    // 插件对象必须有一个install方法，定义install方法，接收app作为参数
    install(app: App) {
        // 遍历components对象，注册项目全部的全局组件
        Object.keys(components).forEach((key: string) => {
            // 注册为全局组件
            app.component(key, components[key]);
        })
    }
}