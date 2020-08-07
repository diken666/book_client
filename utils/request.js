import { getStorage, toast } from "./util.js"
const app = getApp()

const request = (url, options) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${app.globalData.host}${url}`,
      method: options.method,
      data: options.method === 'GET' ? options.data : JSON.stringify(options.data),
      header: {
        'Content-Type': 'application/json; charset=UTF-8',
        'token': getStorage("token") || ""
      },
      success(res) {
        if (res.data.code === 1) {
          if (res.data.msg) {
            toast(res.data.msg)
          }
          resolve(res.data)
        } else {
          if (res.data.msg) {
            toast(res.data.msg)
          }
          resolve(res.data)
        }
      },
      fail(error) {
        toast("网络错误")
        // reject(error.data)
      }
    })
  })
}

const get = (url, options = {}) => {
  return request(url, { method: 'GET', data: options })
}

const post = (url, options) => {
  return request(url, { method: 'POST', data: options })
}

const put = (url, options) => {
  return request(url, { method: 'PUT', data: options })
}

// 不能声明DELETE（关键字）
const remove = (url, options) => {
  return request(url, { method: 'DELETE', data: options })
}

module.exports = {
  get,
  post,
  put,
  remove
}