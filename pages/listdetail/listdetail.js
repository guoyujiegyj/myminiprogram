/*导入数据  */
let data=require("../../data/list-data")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowList:{},
    /* 收藏icon的标识*/
    isSelected:false,
    index:null,
    isMusic:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*options对象默认为空对象，保存页面跳转时传给本页面的值*/
    let index=options.index
    /** 通过index从数据里获取对应index的数据 */
    this.setData({
      nowList:data.list_data[index],
      index
    })
    //页面加载时判断是否有收藏icon的缓存
    let detailStorage=wx.getStorageSync('isSelected')
    //如果没有，设置isSelected为空
    if(!detailStorage){
      wx.setStorageSync('isSelected',{})
    }
    //如果页面刚加载时，index对应的项有缓存，则设置其状态。
    if(detailStorage[index]){
      this.setData({
        isSelected:true
      })
    }
  },
  //收藏icon点击时的处理函数。
  iconHandle(){
    let isSelected=!this.data.isSelected
    this.setData({
      isSelected:isSelected
    })
    /* 收藏成功图标提示*/
    let title=isSelected==true?'收藏成功':'取消收藏'  
    wx.showToast({
      title,
      icon:'success'
    }) 
    /* 将缓存数据保存在本地存储 */

    /**解构赋值，将data的index赋给变量index */
    let {index}=this.data
    wx.getStorage({
      key:'isSelected',
      success:(data)=>{
        //获得缓存数据
        let obj=data.data
        console.log(obj)
        //修改当前index对应的状态
        obj[index]=isSelected
        wx.setStorage({
          key:'isSelected',
          data:obj
        })
      }
    })
    

  },


  //音乐播放处理函数
  musicHandle(){
    //获得数据里的isMusic状态，将其改变
    let isMusic=!this.data.isMusic
    this.setData({
      isMusic
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})