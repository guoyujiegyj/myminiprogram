/*导入数据  */
let data=require("../../data/list-data")
//获取全局app实例
const appInstance = getApp()

Page({
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
    console.log(appInstance)
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
    //页面再次进入时，判断音乐是否在播放
    if(appInstance.musicData.isPlay==true && appInstance.musicData.pageIndex==this.data.index){
      //如果正在播放，则修改isMusic的状态，以便让切换正确的图标。 
      this.setData({
         isMusic:true
       }) 
    }
    //监听音乐播放函数
    wx.onBackgroundAudioPlay(()=>{
      
      this.setData({
        isMusic:true
        
      })
      //修改app.js里的值。
      appInstance.musicData.isPlay=true
      appInstance.musicData.pageIndex=this.data.index
    })
    //监听音乐暂停函数
    wx.onBackgroundAudioPause(()=>{
      this.setData({
        isMusic:false
      })
      //修改app.js里的值。
      appInstance.musicData.isPlay=false
    })  
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
    if(isMusic){
      //获得当前index
      let {index}=this.data
      let {title}=this.data.nowList
      //获得当前音乐路径
      let musicUrl=data.list_data[index].musicUrl

      wx.playBackgroundAudio({
        dataUrl:musicUrl,
        title
      })
    }else{
      wx.pauseBackgroundAudio()
    }
  },
  //分享处理函数
  shareHandle(){
    console.log('jack')
    wx.showActionSheet({
      itemList:['分享到朋友圈','分享到QQ空间','分享到我的好友']
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