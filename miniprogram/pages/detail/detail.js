/**
 * Created by martinby on 2018/4/11.
 */
//加载config配置文件
 
Page({
  //定义页面的arc_list为空,这里给一个空的数组,下面初始化加载的时候,会去给这个arc_list赋值
  data:{
      arc_list:{},
      disabled: false,
      login:"参加"
  },
  setDisabled: function (content) {
    this.setData({
      disabled: !this.data.disabled,
      login:content
    })
  },
  onLoad:function(){
    let that = this;
  },
  count:function(){
    let that = this
    let name = wx.getStorageSync('temp');
     wx.request({
       url: "http://localhost:8085/about", // 仅为示例，并非真实的接口地址
       data: {
        name:name,
      },
       method: 'post',
       header: {
         'content-type': 'application/x-www-form-urlencoded' // 默认值
       },
       success(res) {
          console.log(res);
          if(res.data.code == "1"){
            let arr = wx.getStorageSync('countlist');
            console.log(arr)
            arr.push(res.data);
            wx.setStorageSync('countlist',arr);
            that.setDisabled("已参加");
            wx.switchTab({
              url: '/pages/index/index',
            })
          }else{
            that.setDisabled("人数已满");
            wx.switchTab({
              url: '/pages/first/first',
            })
          }
       }
     })
  },
  //在加载的时候,请求接口,赋值数据
  onLoad:function(){
      //请求接口
      
         var that = this
         let name = wx.getStorageSync('temp');
         console.log(name)
          wx.request({
            url: "http://localhost:8085/detail", // 仅为示例，并非真实的接口地址
            method: 'post',
            data: {
              name:name,
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded' // 默认值
            },
            success(res) {
                that.setData({
                  arc_list:res.data,
               })
            }
          })
        
      


  }

})