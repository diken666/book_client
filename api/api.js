import req from "../utils/request.js"

// 测试
export const getTest = () => req.get('/stest')

// 用户登陆
export const userLogin = (params) => req.post("/wxlogin", params)

// 创建圈子
export const createCircle = (params) => req.post("/create-circle", params)
