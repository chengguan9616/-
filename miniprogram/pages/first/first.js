/**
 * Created by martinby on 2018/4/11.
 */
//加载config配置文件
 
Page({
    //定义页面的arc_list为空,这里给一个空的数组,下面初始化加载的时候,会去给这个arc_list赋值
    data:{
        arc_list:[],
    },
    first:function(e){
      let temp = e.currentTarget.dataset.cap;
      wx.setStorageSync('temp', temp);
      let name = wx.getStorageSync('loginIF');
      console.log(name);
      if(name == false){
        wx.navigateTo({
            url: '/pages/infro/infro',
          })
      }else{
        wx.navigateTo({
          url: '/pages/detail/detail',
        })
      }

    },
    //在加载的时候,请求接口,赋值数据
    onLoad:function(){
        var that = this
        //请求接口
        wx.request({
            url:"http://localhost:8085/fabulist",//配置文件中定义的首页接口
            method: 'get',
            header:{
                'Content-Type':'application/json'
            },
            success:function(res){
                //请求成功后的回调
                console.log(res)
                if(res.data){
                    //赋值
                    that.setData({
                        arc_list:res.data,
                    })
 
                }else{
                    console.log("获取失败");
                }
            }
 
 
        })
 
 
    }
 
})