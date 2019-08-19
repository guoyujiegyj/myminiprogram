
//注册页面
Page({
  data:{
    userInfo:null,
    isshow:true
  },
  onLoad(){
      //查看用户是否授权：
      wx.getSetting({
        success: (res) => {
          // console.log(res)
          if (res.authSetting['scope.userInfo']) {
            //用户如果授权，则需要通过修改isshow将隐藏的标签显示出来，
            this.setData({
              isshow: false
            })
          }
          else {
            console.log("请授权")
          }
        }
      }),
    //调用方法。
    this.getUserInfo()
  },
  bindGetUserInfo(data) {
    //判断用户点击的是允许还是拒绝
    if(data.detail.rawData){
      //如果是，则调用方法重新获取用户信息刷新页面。否则需要用户手动刷新页面。
      this.getUserInfo()
    }
  },
  //获取用户信息。
  getUserInfo(){
    // 已经授权，可以直接调用 getUserInfo 获取头像昵称
    wx.getUserInfo({
      //如果没有设置用户授权，则执行fail方法。
      success: (res) => {
        // console.log(res.userInfo)
        //用户授权了，修改data数据。
        this.setData({
          userInfo: res.userInfo
        })
      }
    })
  },

})
