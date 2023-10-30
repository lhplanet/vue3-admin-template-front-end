// 进行axios的二次封装，目的是为了使用请求和响应拦截器

// 引入axios
import axios from "axios";
// 引入element-plus的消息提示框，用于提示错误信息
import { ElMessage } from "element-plus";

// 第一步：利用axios对象的create方法，创建axios实例
// 此时，这个文件里有两个axios
// 一个是默认的axios（上面import的）
// 一个是我们自己创建的axios实例，可以配置一些其他的配置：基础路径、超时时间等
// 且可以添加请求拦截器和响应拦截器
let request = axios.create({
    // 记得在.env.development文件中配置VITE_APP_BASE_API，这里我改为了/api
    // 基础路径上会自动拼接/api
    // （因为我们模拟假接口开头都带有一个/api，所以我们才这么配置，当然也可以没有）
    baseURL: import.meta.env.VITE_APP_BASE_API,
    // 超时时间：发送的请求超过了5秒钟都没有响应，就是失败
    timeout: 5000
})

// 第二步：给axios实例（request）添加请求拦截器
// 请求拦截器
request.interceptors.request.use((config) => {
    // config是请求配置对象，headers是请求头，经常给服务器端携带公共参数，token就是一个公共参数
    // 返回配置对象，否则请求就停在这里发不出去了
    return config;
});

// 第三步：给axios实例（request）添加响应拦截器
// 响应拦截器
request.interceptors.response.use((response) => {
    // 成功的回调
    // 简化返回数据
    return response.data;
}, (error) => {
    // 失败的回调
    // 处理http网络错误
    // 定义一个变量，用于存储网络错误信息
    let msg = '';
    // http状态码
    let status = error.response.status;
    switch (status) {
        case 401:
            msg = "token过期";
            break;
        case 403:
            msg = '无权访问';
            break;
        case 404:
            msg = "请求地址错误";
            break;
        case 500:
            msg = "服务器出现问题";
            break;
        default:
            msg = "网络出现问题";

    }
    // 提示错误信息
    ElMessage({
        type: 'error',
        message: msg
    })
    return Promise.reject(error);
});

// 第四步：对外暴露request
export default request;