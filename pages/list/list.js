/**引入外部data数据 ，模拟数据库*/
let datas = require('../../data/list-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      
       listArr:datas.list_data
    })
  },
  /* 轮播图的点击事件 */
  lbToDetail(e){
    let index=e.target.dataset.index
    wx.navigateTo({
      url:"/pages/listdetail/listdetail?index="+index
    })
  },
  toListdetail(e){
    /* e对象可以获取点击时传来的数据，包括index，我们需要index。*/
    let index=e.currentTarget.dataset.index
  
    /** 页面跳转*/
    wx.navigateTo({
      /** 页面跳转时传递参数index。*/
      url:"/pages/listdetail/listdetail?index="+index
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