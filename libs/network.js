//获取open_id
var open_id;


//公共地址
var commonurl = "http://132.232.227.45:8080/Wuti/";


//不需要检测open_id的接口
var detectionport = [];

/**
 * url 请求地址
 * success 成功的回调
 * fail 失败的回调
 */


function GET(url, success, fail, openid) {
  var trueurl = url;
  wx.request({
    url: commonurl + trueurl,
    header: {
      'Content-Type': 'application/json',
    },
    success: function(res) {
      success(res);
    },
    fail: function(res) {
      fail(res);
    }
  });
}

/**
 * url 请求地址
 * success 成功的回调
 * fail 失败的回调
 */
function POST(url, data, success, fail, openid) {
  console.log(openid)
  var trueurl = url;
  wx.request({
    url: commonurl + trueurl,
    header: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    method: 'POST',
    data: data,
    success: function (res) {
      success(res);
    },
    fail: function (res) {
      fail(res);
    }
  });

}

/**
 * url 请求地址
 * success 成功的回调
 * fail 失败的回调
 */
function GETJSON(url, data, success, fail, openid) {
  console.log(open_id)
  var trueurl = url;
  wx.request({
    url: commonurl + trueurl,
    header: {
      'Content-Type': 'application/json',
      'open_id': open_id,
      'shop_id': shop_id
    },
    data: data,
    success: function (res) {
      success(res);
    },
    fail: function (res) {
      fail(res);
    }
  });

}


function throttle(fn, gapTime) {
  if (gapTime == null || gapTime == undefined) {
    gapTime = 1500
  }

  let _lastTime = null

  // 返回新的函数
  return function() {
    let _nowTime = +new Date()
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn.apply(this, arguments) //将this和参数传给原函数
      _lastTime = _nowTime
    }
  }
}
module.exports = {
  GET: GET,
  POST: POST,
  GETJSON: GETJSON,
  throttle: throttle
}