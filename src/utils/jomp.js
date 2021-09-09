/* eslint-disable */

const JD_SDK = '//wq.360buyimg.com/js/common/dest/wq.wxapi.ext.1919a8631a.js'
const REPORT_SDK = '//wq.360buyimg.com/js/common/dest/wq.jshop.report.min.js'

let loaded = false
let loading = false
export const Jomp = {
  /**
    * 判断是否微信小程序环境
    * @param {Function} callback 回调函数
    */
  isMP(callback) {
    let _isMp = () => {
      return window.__wxjs_environment === 'miniprogram'
    }
    if (/micromessenger/i.test(navigator.userAgent) && (!window.WeixinJSBridge || !window.WeixinJSBridge.invoke)) {
      document.addEventListener('WeixinJSBridgeReady', function () {
        callback(_isMp())
      }, false)
    } else {
      callback(_isMp())
    }
  },
  /**
    * 判断微信小程序类型，0：默认，此时没取到wxapp_type，可认为是默认购物小程序，1：购物小程序，2：拼购小程序，3：开普勒小程序
    * @param {Function} callback 回调函数
    */
  wxappType(callback) {
    if (window.JD && window.JD.wxappext) {
      callback(window.JD.wxappext.getWxappType())
    } else {
      console.log('>>>> JD微信sdk 未引入, 开始引入')
      this.loadSDK().then(() => {
        callback(window.JD.wxappext.getWxappType())
      })
    }
  },
  /**
    * 小程序环境下上报pv
    * @param {Function} callback 回调函数
    */
  reportPV() {
    this.isMP((res) => {
      res && loadScript(REPORT_SDK)
    })
  },
  /**
    * 跳转路径
    *
    * @param {*} url
    */
  goto(url, method = 'navigateTo') {
    if (window.JD && window.JD.wxappext) {
      console.log('goto', url)
      window.JD.wxappext.goto(url, method)
    } else {
      console.log('>>>> JD微信sdk 未引入, 开始引入',  url)
      this.loadSDK().then(() => {
        window.JD.wxappext.goto(url, method)
      })
    }
  },
  /**
    * 跳转登陆
    *
    * @param {String} returnUrl 回调链接
    * @param {string} [biz='jdcop']
    */
  toLogin(returnUrl, biz = 'jdcop') {
    this.goto(`/pages/login/index?rurl=${encodeURIComponent(returnUrl)}&bindNavBackType=navigateBack&biz=${biz}`)
  },
  /**
    * 跳转商详
    * @param {Number} skuId 必需
    */
  toItemDetail(skuId) {
    this.goto(`/pages/item/detail/detail?sku=${skuId}`)
  },
  /**
    * 跳转店铺
    * @param {Number} shopId 必需
    */
  toShop(shopId) {
    this.goto(`/pages/shop/index/index?venderId=${shopId}`)
  },
  /**
    * 跳充值中心
    * @param {Number} index 可选，0为话费充值，1为流星充值
    */
  toRecharge(index) {
    this.goto(`/pages/recharge/index?index=${index || 0}`)
  },
  /**
    * 跳转H5页面
    * @param {String} url 必需，地址
    * @param {String} EA_PTAG 业务参数及数据埋点（用于业务追踪）参考：https://cf.jd.com/pages/viewpage.action?pageId=159759920
    */
  toUrl(url, EA_PTAG) {
    this.goto(`/pages/h5/index?encode_url=${encodeURIComponent(url)}&EA_PTAG=${EA_PTAG}`)
  },
  /**
    * 跳拼购频道
    */
  toPingou() {
    this.goto('/pages/item/pingou/pingou')
  },
  /**
    * 跳订单列表
    */
  toOrderList() {
    this.goto('/pages/order/list/list')
  },
  /**
    * 跳订单详情
    * @param {Number} orderId 必需，订单ID
    */
  toOrderDetail(orderId) {
    this.goto(`/pages/order/detail/detail?id=${orderId}`)
  },
  /**
    * 跳我的优惠券
    */
  toMyCoupon() {
    this.goto('/pages/my/coupon/coupon')
  },
  /**
    * 跳个人中心
    */
  toMyHome() {
    this.goto('/pages/my/index/index')
  },
  /**
    * 跳购物圈
    */
  toGwq() {
    this.goto('/pages/gwq/index')
  },
  /**
    * 跳领券中心
    */
  toCoupon() {
    this.goto('/pages/coupon/index')
  },
  /**
    * 跳首页
    */
  toHome() {
    this.goto('pages/index/index')
  },
  /**
    * 跳购物车
    */
  toCart() {
    this.goto('pages/cart/cart/index')
  },
  /**
    * 跳购物车
    */
  toSeckill() {
    this.goto('pages/seckill/index/index')
  },
  /**
    * 跳搜索页
    * @param {String} key 必需，关键词
    */
  toSearch() {
    this.goto(`pages/search/list/list?key=${key}`)
  },
  /**
    * 过滤小程序的分享链接的参数
    * @param {String} url 过滤的目标链接
    * @param {Array} query 需要保存的参数集 ['key1', 'key2', ,]
    */
  shareUrlFilter(url, query) {
    let arr = url.split('?')
    let queries = arr[1] ? arr[1].split('&') : []
    let reg = new RegExp('(^|,)(' + query.join('|') + ')(,|$)')
    queries = queries.filter(item => {
      return reg.test(item.split('=')[0])
    })
    return arr[0] + (queries.length ? ('?' + queries.join('&')) : '')
  },
  /**
    * 初始化微信小程序下的分享配置，即右上角的分享配置
    * @param {Object} options
    */
  initShare(options, query) {
    const _initShare = () => {
      let url = options.url
      if (query) {
        url = this.shareUrlFilter(options.url, query)
      }
      url = url + (/\?/.test(url) ? '&from=appcc' : '?from=appcc')

      const shareData = {
        snsset: true,
        type: 'share',
        url: url,
        title: options.title || '',
        img: options.shareimgurl || options.img,
        imgurl: options.shareimgurl || options.img,
        pageurl: window.location.href
      }
      // console.log('设置小程序分享信息:', shareData)
      wx.miniProgram.postMessage({
        data: shareData,
        success(res) {
          console.log('微信小程序分享配置成功', res)
        },
        fail(res) {
          console.log('微信小程序分享配置失败：', res)
        },
        cancel(res) {
          console.log('微信小程序分享配置取消：', res)
        }
      })
    }

    const fn = () => {
      window.JD.wxappext.wxReady((r) => {
        if (r == 0) {
          _initShare()
        } else {
          console.log('微信sdk 加载失败：', r)
        }
      })
    }

    if (window.JD && window.JD.wxappext) {
      fn()
    } else {
      console.log('>>>> JD微信sdk 未引入, 开始引入')
      this.loadSDK().then(() => {
        fn()
      })
    }
  },
  /**
    * 跳小程序公共分享页
    * @param {Object} options
    * {
      sharebtnptag     分享给好友按钮ptag            可以为空
      posterbtnptag    生成海报按钮ptag              可以为空
      pvptag           分享页面pv ptag              可以为空
      atmosimgurl      氛围图url （size：670*470）   不能为空，需要encode
      bgimg            分享页背景图url               可以为空，需要encode
      sharetitle       分享title                    不能为空，需要encode
      shareurl         分享出去的H5 url              不能为空，需要encode
      shareimgurl      分享图片url                   不能为空，图片长宽比是 5:4，需要encode
      shareposter      是否需要生成海报                0 不需要   1 需要 默认不需要
      postertitle      海报标题                      可以为空，默认取sharetitle，需要encode
      posterdesc       海报描述                      不能为空，需要encode
      posterimgurl     海报图片，size：550*500        不能为空，需要encode
      saveposterptag   生成海报按钮ptag               可以为空
      noneBtnBg        1   按钮区域不需背景 0 需要背景 默认为1，当shareposter为0时生效
      sharebtnbg       分享按钮样式（background-image值） 默认：linear-gradient(-135deg, #F2140C 0%, #F2270C 70%, #F24D0C 100%) 。
    * }
    * @param {Array} query 可选，如需要过滤分享链接的参数，可传入['key1', 'key2',,,]，即保留key1,key2,,其他删除
    */
  toShare(options, query) {
    const _toShare = () => {
      let nameReg = /^(sharebtnptag|posterbtnptag|pvptag|bgimg|shareposter|postertitle|posterimgurl|saveposterptag|noneBtnBg|sharebtnbg)$/
      let params = []
      let url = options.url;
      try {
        if (query) {
          url = this.shareUrlFilter(options.url, query)
        }
        url = url + (/\?/.test(url) ? '&from=appcc' : '?from=appcc')
        params.push(
          'shareurl=' + encodeURIComponent(url),
          'sharetitle=' + encodeURIComponent(options.title || ''),
          'shareimgurl=' + encodeURIComponent(options.shareimgurl || options.img),
          'atmosimgurl=' + encodeURIComponent(options.atmosimgurl || options.img)
        )
        if (options.content || options.desc) params.push('posterdesc=' + encodeURIComponent(options.content || options.desc))
        for (let name in options) {
          if (nameReg.test(name)) {
            params.push(name + '=' + encodeURIComponent(options.hasOwnProperty(name) ? options[name] : ''))
          }
        }

        window.JD.wxappext.goto(`/pages/h5share/index/index?${params.join('&')}`, 'navigateTo')
      } catch (err) {
        console.error('分享中间页配置参数错误', err)
      }
    }

    const fn = () => {
      window.JD.wxappext.wxReady((r) => {
        if (r == 0) {
          _toShare()
        } else {
          console.log('微信sdk 加载失败：', r)
        }
      })
    }

    if (window.JD && window.JD.wxappext) {
      fn()
    } else {
      console.log('>>>> JD微信sdk 未引入, 开始引入')
      this.loadSDK().then(() => {
        fn()
      })
    }
  },
  /**
   * 加载jd_sdk
   *
   * @returns
   */
  loadSDK() {
    if (window.JD && window.JD.wxappext) {
      loaded = true
    }
    return new Promise((resolve) => {
      if (loaded) {
        resolve()
      } else {
        if (loading) return // 防止重复引入
        loading = true
        loadScript(JD_SDK).then(() => {
          loading = false
          console.log('>>>> JD微信sdk 引入成功')
          resolve()
        }, () => {
          loading = false
        })
      }
    })
  },
  /**
     * 初始化预约，查询预约信息
     * http://legos.wq.jd.com/portal/api/index#/detail?id=32284&parent=1191&root=1008
     * retcode 13 :未登录，活动结束不展示
     */
  initReminder() {
    return jsonp('https://wq.jd.com/bases/yuyuelist/getactivelist', {
      timeout
    }).then(response => {
      let { retCode, retMsg, activeList } = response
      if (retCode == "0") {
        return activeList.reduce((prev, value) => {
          prev[value.activeId] = true
          return prev
        }, {})
      } else {
        return { retCode: retCode, retMsg: retMsg }
      }

    })
  },
  /**
   * 小程序预约 https://cf.jd.com/pages/viewpage.action?pageId=187187705
   * http://legos.wq.jd.com/portal/api/index#/detail?id=32172&parent=1191&root=1008
   * activeId:活动id，必传
      activeType:2普通活动，3商品活动，必传
      skuId:商品活动必传 普通活动不要传，否则会报错
      wxpushtype:微信非小程序环境下必传，201京东购物公众号订阅消息(京东购物h5环境)，202京喜公众号模板消息(京喜购物h5环境)，

      对接人：邹波
   */
  addRemind(data, beta = false) {
    let functionId = '/activev1'
    let activeId = data.id
    // 请求参
    let params = {
      activeId: activeId,
      activeType: data.activeType || "2",
      t: +new Date()
    }

    return jsonp(beta ? apiMpBateBase + functionId : apiMpBase + functionId, params, {
      timeout
    }).then(response => {
      let { retCode, list, templateId } = response;
      console.log(">>> 预约请求", response)
      if (retCode == "13") {
        //未登录
        this.toLogin(location.href);
      } else if (retCode == "0") {
        //bizCode:    10002参数错误（主要是商品活动的sku与activeId不匹配）10003redis出错，10004活动不存在或过期，10005活动未开始，10006活动已结束 10007重复预约，11预约成功
        //retcode:全局返回码，10001传参非法  10002参数错误  13未登录

        if (list[0].bizCode == "11") {
          //预约成功

          let url = location.href.indexOf("?") != -1 ?
            location.href + "&activeId=" + activeId + "&templateId=" + templateId
            : location.href + "?activeId=" + activeId + "&templateId=" + templateId

          //去授权
          this.goto(
            "/pages/h5subscribe/index?templateId=" +
            templateId +
            "&rurl=" +
            encodeURIComponent(url),
            "redirectTo"
          );
        } else {
          //预约失败
          return {
            id: activeId,
            appointed: false
          }
        }
      } else {
        return response
      }
      return response
    })
  },
  deleteRemind(data, beta = false) {
    let functionId = '/activecancelv1'
    let activeId = data.id
    // 请求参
    let params = {
      activeId: activeId,
      activeType: data.activeType || "2",
      t: +new Date()
    }

    return jsonp(beta ? apiMpBateBase + functionId : apiMpBase + functionId, params, {
      timeout
    }).then(response => {
      console.log(">>> 取消预约请求", response)

      let { retCode, list } = response;
      if (retCode == "0") {
        if (list[0].bizCode == "12") {
          //取消预约成功
          return {
            id: activeId,
            appointed: true
          }
        } else {
          //取消预约失败
          return {
            id: activeId,
            appointed: false
          }
        }
      } else {
        return response
      }

    })
  },
  //订阅消息授权结果上报
  remindReport(data = [], beta = false) {
    let functionId = '/wxauthreport'
    // 请求参
    let params = Object.assign({
      t: +new Date()
    }, data)

    return jsonp(beta ? apiMpBateBase + functionId : apiMpBase + functionId, params, {
      timeout
    }).then(response => {
      return response
    })
  }
}

// 小程序自动引入sdk
Jomp.isMP((res) => {
  res && Jomp.loadSDK()
})

function loadScript(url) {
  return new Promise((resolve, reject) => {
    let body = document.getElementsByTagName('body')[0]
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    script.onload = resolve
    script.onerror = reject
    body.appendChild(script)
  })
}

export default Jomp
