// pages/studentLogin/studentLogin.js、
var network = require("../../libs/network.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Id:"",
    PassWord:"",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  login: function() {
    network.POST('student/login', { Id: this.data.Id, PassWord: this.data.PassWord, InType:'1'},
      (res) => {
        console.log(res)
        wx.navigateTo({
          url: '../schoolperformance/schoolperformance',
        })
      }, (res) => {
        console.log(res);
      })

  
  },
  bindKeyId(e){
      this.setData({
        Id: e.detail.value
      })
  },
  bindKeyPassword(e) {
    this.setData({
      PassWord: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})