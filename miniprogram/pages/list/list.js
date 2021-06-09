/**
 * Created by martinby on 2018/4/11.
 */
//加载config配置文件
 
Page({
  //定义页面的arc_list为空,这里给一个空的数组,下面初始化加载的时候,会去给这个arc_list赋值
  data:{
      countlist:[],
  },
  first:function(e){

  },
  //在加载的时候,请求接口,赋值数据
  onLoad:function(){
      let arr = wx.getStorageSync('countlist');
      console.log(arr);
      this.setData({
        countlist:arr,
      })

  }

})