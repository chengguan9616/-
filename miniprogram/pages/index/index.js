// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    vip:true,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息
    
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onReady: function(){
    // console.log(userInfo.nickName)
  },
func1(){
  let name = wx.getStorageSync('loginIF');
  if(name == false){
    wx.navigateTo({
        url: '/pages/infro/infro',
      })
  }else{
    wx.navigateTo({
      url: '/pages/list/list'
    })
  }


},
func2(){
  let name = wx.getStorageSync('loginIF');
  if(name == false){
    wx.navigateTo({
        url: '/pages/infro/infro',
      })
  }else{
    wx.navigateTo({
      url: '/pages/fabu/fabu'
    })
  }
},
func5(){
  wx.switchTab({
    url: '/pages/safe/safe'
  })
},
func4(){
  wx.switchTab({
    url: '/pages/first/first'
  })
},
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        wx.setStorage({
          userInfo: userInfo.nickName,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    
    console.log(e.detail.userInfo)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
