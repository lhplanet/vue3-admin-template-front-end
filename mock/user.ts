// 用户信息数据
// 此函数执行后会返回一个数组，数组中包含两个对象，每个对象就是一个用户信息（账号）
function createUserList() {
    return [
        {
            // 用户id
            userId: 1,
            // 用户头像
            avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            // 用户名
            username: 'admin',
            // 用户密码
            password: '111111',
            // 用户描述
            desc: '平台管理员',
            // 用户角色
            roles: ['平台管理员'],
            // 用户按钮权限
            buttons: ['cuser.detail'],
            // 用户路由权限
            routes: ['home'],
            // 用户token
            token: 'Admin Token',
        },
        {
            userId: 2,
            avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            username: 'system',
            password: '111111',
            desc: '系统管理员',
            roles: ['系统管理员'],
            buttons: ['cuser.detail', 'cuser.user'],
            routes: ['home'],
            token: 'System Token',
        },
    ]
}

// 对外暴露一个数组，数组中包含两个对象，每个对象就是一个接口
// 一个是用户登录的假接口，一个是获取用户信息的假接口
export default [
    // 用户登录接口
    {
        url: '/api/user/login', // 请求地址
        method: 'post', // 请求方式
        response: ({ body }) => {
            // 获取请求体携带过来的用户名与密码
            const { username, password } = body;
            // 调用获取用户信息函数,用于判断是否有此用户
            // @ts-ignore
            const checkUser = createUserList().find(
                (item) => item.username === username && item.password === password,
            )
            // 没有用户返回失败信息
            if (!checkUser) {
                return { code: 201, data: { message: '账号或者密码不正确' } }
            }
            // 如果有返回成功信息
            const { token } = checkUser
            return { code: 200, data: { token } }
        },
    },
    // 获取用户信息
    {
        url: '/api/user/info',
        method: 'get',
        response: (request) => {
            // 获取请求头携带token
            const token = request.headers.token;
            // 查看用户信息是否包含有次token用户
            // @ts-ignore
            const checkUser = createUserList().find((item) => item.token === token)
            // 没有返回失败的信息
            if (!checkUser) {
                return { code: 201, data: { message: '获取用户信息失败' } }
            }
            // 如果有返回成功信息
            return { code: 200, data: {checkUser} }
        },
    },
]