//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    username:"",
    circles: [{
      latitude: '40.007153',
      longitude: '116.491081',
      color: '#FF0000DD',
      fillColor: '#7cb5ec88',
      radius: 400,
      strokeWidth: 2
    }],
    motto: 'Hello World111',
    userInfo: {},
    //默认未获取地址
    hasLocation:false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    let name = wx.getStorageSync('unitName');
    that.setData({
      username:name
    })
    wx.getLocation({

      success: function(res){
        // success
        console.log(res)
        that.setData({
          hasLocation:true,
          location:{
            longitude: res.longitude,
            latitude:res.latitude
          }
        })
        wx.request({
          url: "http://localhost:8085/safe", // 仅为示例，并非真实的接口地址
          method: 'post',
          data: {
            username: that.data.username,
            longitude:that.data.location.longitude,
            latitude:that.data.location.latitude
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },
          success(res) {
            console.log(res);
           
          }
        })

      }
    })
  },
  //获取经纬度
  getLocation:function(e){
    console.log(e)
    wx.makePhoneCall({
      phoneNumber: "110",
      success:function(){
        console.log('拨打成功')
      },
      fail:function(){
        console.log('拨打失败')
       
      }
    });
   

 

  },
  //根据经纬度在地图上显示
  openLocation:function(e){
    console.log("openLocation"+e)
    var value=e.detail.value
    wx.openLocation({
      longitude: Number(value.longitude),
      latitude: Number(value.latitude)
    })
  },
  //选择位置位置
  chooseLocation:function(e){
    console.log(e)
    var that=this
    wx.chooseLocation({
          success: function(res){
            // success
            console.log(res)
            that.setData({
              hasLocation:true,
              location:{
                longitude:res.longitude,
                latitude:res.latitude
              }
            })
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
  }
})
