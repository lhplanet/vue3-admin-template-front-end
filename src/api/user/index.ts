// 统一管理项目中用户相关的接口

// 导入封装好的axios实例
import request from '@/utils/request.ts'
// 导入接口的ts数据类型
import type { loginForm, loginResponseData, userInfoResponseData } from "@/api/user/type.ts";

// 统一管理接口
enum API {
    LOGIN_URL = '/user/login',
    USER_INFO_URL = '/user/info'
}

// 暴露请求方法
// 登录接口方法
export const reqLogin = (data:loginForm) => request.post<any,loginResponseData>(API.LOGIN_URL, data);
// 获取用户信息接口方法
export const reqUserInfo = () => request.get<any,userInfoResponseData>(API.USER_INFO_URL);