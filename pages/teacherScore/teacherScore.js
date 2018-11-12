// pages/studentScore/studentScore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    semester: [
      { name: "2016年上学期" }, { name: "2016年下学期" }, { name: "2017年上学期" }, { name: "2017年下学期" }, { name: "2018年上学期" }, { name: "2018年下学期" }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  bindDateChange: function (e) {
    console.log(e)
    this.setData({
      date: this.data.semester[e.detail.value].name
    })
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