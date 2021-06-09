//index.js
//获取应用实例
const app = getApp()
 
Page({
  data: {
    username: '',
    password: ''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow: function () {
    // 生命周期函数--监听页面显示
    wx.hideTabBar({})
  },
  onLoad: function () {
   
  },
 
 
  // 获取输入账号 
  usernameInput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
 
  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  register:function(){
    wx.navigateTo({
      url: '/pages/register/register'
    })
  },
  // 登录处理
  login: function () {
    var that = this;
    if (this.data.username.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '账号或密码不能为空',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.request({
        url: "http://localhost:8085/login", // 仅为示例，并非真实的接口地址
        method: 'post',
        data: {
          username: that.data.username,
          password: that.data.password
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        success(res) {
          wx.setStorageSync('loginIF', true)
          console.log(res);
          if (res.data.code == "OK") {
            var unitName = res.data.username;
            console.log(unitName);
            wx.setStorageSync('unitName', unitName);
            wx.switchTab({
              url: '/pages/first/first'
            })
            
            // wx.navigateTo({
            //   url: '/pages/index/index',
            // })
          }else if(res.data.code == "2"){
            // wx.showToast({
            //   title: res.data.infrom,
            //   icon: 'none',
            //   duration: 2000
            // })
            wx.navigateTo({
              url: '/pages/register/register'
            })


          }else {
            wx.showToast({
              title: res.data,
              icon: 'none',
              duration: 2000
            })
          }
        }
      })
    }
  }
})
 