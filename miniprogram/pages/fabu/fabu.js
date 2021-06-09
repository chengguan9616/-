//index.js
//获取应用实例
const app = getApp()
 
Page({
  data: {
    username:'',
    name: '',
    time: '',
    about:'',
    pay:'',
    detail:""
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
  Name: function (e) {
    this.setData({
     name: e.detail.value
    })
  },
  Time: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  // 获取输入密码 
  About: function (e) {
    this.setData({
      about: e.detail.value
    })
  },
  Pay: function (e) {
    this.setData({
      pay: e.detail.value
    })
  },
  Detail:function(e){
    this.setData({
      detail: e.detail.value
    })
  },
  register:function(){
    wx.navigateTo({
      url: '/pages/register/register'
    })
  },
  // 登录处理
  login: function () {
    console.log(that);
    var that = this;
    if (this.data.name.length == 0 || this.data.about.length == 0) {
      wx.showToast({
        title: '不能为空',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.getStorage({
              key:'unitName',
              success:function(res){
                that.setData({
                  username:res.data
                })
              }
            })
    console.log(that);
        
      wx.request({
        url: "http://localhost:8085/fabulist", // 仅为示例，并非真实的接口地址
        method: 'post',
        data: {
         username:that.data.username,
         name: that.data.name,
         time: that.data.time,
         about: that.data.about,
         pay: that.data.pay,
         detail:that.data.detail
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        success(res) {
          console.log(res);
          if (res.data.code == "OK") {
            wx.switchTab({
              url: '/pages/index/index',
            })
          }else if(res.data.code == "2"){
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
 