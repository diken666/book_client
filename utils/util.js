const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 提示
const toast = (msg, during) => {
  wx.showToast({
    title: msg,
    icon: "none",
    during: during || 1500
  })
}

// 存储
const setStorage = (key, data) => {
  console.log(122)
  try {
    wx.setStorageSync(key, data)
  } catch (e) {
    toast("存储失败")
  }
  wx.setStorageSync(key, data)
}

const getStorage = (key) => {
  try {
    return wx.getStorageSync(key)
  } catch (e) {
    toast("获取失败")
    return null
  }
}

module.exports = {
  formatTime: formatTime,
  setStorage,
  getStorage,
  toast
}
