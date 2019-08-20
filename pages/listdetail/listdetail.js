/*导入数据  */
let data=require("../../data/list-data")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowList:{},
    /* 收藏icon的表示*/
    isSelected:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*options对象默认为空对象，保存页面跳转时传给本页面的值*/
    let index=options.index
    /** 通过index从数据里获取对应index的数据 */
    this.setData({
      nowList:data.list_data[index]
    })
  },
  //收藏icon点击时的处理函数。
  iconHandle(){
    let isSelected=!this.data.isSelected
    this.setData({
      isSelected:isSelected
    })
    /* 收藏成功图标提示*/
    let title=isSelected==true?'取消收藏':'收藏成功'  
    wx.showToast({
      title,
      icon:'success'
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