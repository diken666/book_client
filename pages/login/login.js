import { userLogin, createCircle} from "../../api/api.js"
import { setStorage, toast } from "../../utils/util.js"

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    code: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    wx.login({
      success(res) {
        _this.code = res.code
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
  async login(name, avatar) {
    let res = await userLogin({
      code: this.code,
      name,
      avatar
    })
    console.log(res)
  },

  // 授权获取用户头像和昵称
  getUserInfo(e) {
    console.log(e)
    let userInfo = e.detail.userInfo
    if (userInfo) {
      setStorage("userInfo", userInfo)
      setStorage("token", this.code)
      this.login(userInfo.nickName, userInfo.avatarUrl)
    } else {
      toast("授权失败")
    }
  },

  // 创建圈子
  async createMyCircle() {
    let res = await createCircle({
      circle_name: "test",
      circle_avatar: "testAvatar"
    })
    console.log(res)
  }
})