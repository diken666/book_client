import { userLogin } from "../../api/api.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(123)
    let _this = this
    wx.login({
      success(res) {
        console.log(res.code)
        _this.login(res.code)
      },
      fail() {
        wx.showToast({
          title: "登录失败",
          icon: "none"
        })
      }
    })
  },

  // 用户登录
  async login(code) {
    let res = await userLogin({
      code
    })
    console.log(res)
  }
})