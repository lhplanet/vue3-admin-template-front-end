import { createApp } from 'vue'
import App from '@/App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 获取应用实例对象
const app = createApp(App)

// @ts-ignore 忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 安装element-plus插件
app.use(ElementPlus, {
    // element-plus国际化配置
    locale: zhCn
})

// 导入svg插件配置
import 'virtual:svg-icons-register'

// 引入自定义插件对象：注册整个项目的全局组件
import globalComponent from '@/components/index';
// 安装自定义插件对象
app.use(globalComponent);

// 引入路由
import router from './router'
// 注册路由
app.use(router)

// 引入模板的全局样式
import '@/styles/index.scss'

// 将应用挂载到挂载点上
app.mount('#app')
