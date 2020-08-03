import req from "../utils/request.js"

// 用户登陆
export const userLogin = (params) => req.post("/wxlogin", params)

// 测试
export const getTest = () => req.get('/stest')