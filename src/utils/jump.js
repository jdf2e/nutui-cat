/*eslint-disable*/
// @ts-ignore: Unreachable code error
import { get } from './index';
import { getQueryString, updateUrlQuery } from './query';
import { isNumber } from './types';
import { isApp } from './env'
import Jomp from './jomp'


let WXAPP_TYPE = 0 // 小程序类型  1：购物小程序，2：京喜小程序
let IS_MP = false // 判断小程序环境
let IS_WQ = /\/wq\//gi.test(window.location.href) // 判断是否wq链接
let IS_JX = /h5\.jingxi\.com\//gi.test(window.location.href) // 判断是否京喜链接

let lock = false // 锁，防止二次点击

let confs = {
  delay: 300, // 跳转延迟事件，用于发送埋点
  before: null, // 跳转前钩子
  after: null // 跳转后钩子
}

// 判断是否小程序环境
Jomp.isMP((value) => {
  if (value) {
    IS_MP = true
    Jomp.wxappType((type) => {
      // 在小程序环境下会触发加载jssdk
      WXAPP_TYPE = type
    })
  }
})

export const Jump = {
  /**
   * 获取普通链接
   *
   * @param {string} url 必填 链接
   * @param {object} extra 拓展参数
   * @returns
   */
   getUrl(url, extra = {}) {
    if (/^openapp/gi.test(url)) {
      return url
    }
    let app, wq, m, mp, jx
    app = _buildSchema(
      Object.assign(
        {
          category: 'jump',
          action: 'to',
          des: 'm',
          url: url.indexOf('http') > -1 ? url : 'https:' + url
        },
        extra
      )
    )
    if (/pro(dev)?.m.jd.com\//g.test(url)) {
      // 匹配运营模式/半开发模式链接
      wq = updateUrlQuery(
        url.replace(/\/mall\/|\/wq\//, '/wq/'),
        'wxAppName',
        'jd'
      )
      jx = url.replace(/pro(dev)?.m.jd.com\/([a-z]*)\//, 'pro.jingxi.com/jx/')
      mp = updateUrlQuery(
        url.replace(/\/mall\/|\/wq\//, '/mini/'),
        'wxAppName',
        'jd'
      )
      // 是否京喜链接
      if (IS_MP && WXAPP_TYPE == 2 && IS_JX) {
        mp = updateUrlQuery(
          url.replace(/pro(dev)?.m.jd.com\/([a-z]*)\//, 'pro.jingxi.com/mini/'),
          'wxAppName',
          'jx'
        )
      }
      mp = `/pages/h5/index?encode_url=${encodeURIComponent(mp)}`
    } else if (IS_JX && /h5\.m\.jd\.com/.test(url)) {
      // 京喜下的开发模式h5
      jx = url.replace(/h5\.m\.jd\.com/, 'h5.jingxi.com')
      mp = updateUrlQuery(jx, 'wxAppName', 'jx')
      mp = `/pages/h5/index?encode_url=${encodeURIComponent(mp)}`
    } else if (/babelDiy\/Zeus/g.test(url)) {
      // 匹配全开发模式链接
      wq = updateUrlQuery(
        url.replace(/\/babelDiy\/Zeus\//, '/wq/dev/'),
        'wxAppName',
        'jd'
      )
      mp = wq
      mp = `/pages/h5/index?encode_url=${encodeURIComponent(mp)}`
    } else if (/sale.jd.com\//g.test(url)) {
      wq = url.replace(/\/app\//, '/wq/').replace(/\/m\//, '/wq/')
      mp = `/pages/h5/index?encode_url=${encodeURIComponent(url)}`
    } else if (
      /\/\/(?:(?:item\.jd\.com\/|(?:(?:m?item(?:\.m)?\.jd\.(?:com)|(?:m|mitem)\.(?:yiyaojd|jkcsjd)\.com)\/product\/)))(\d+)\.html/g.test(
        url
      )
    ) {
      // 匹配商详
      let skuId = /\/\/(?:(?:item\.jd\.com\/|(?:(?:m?item(?:\.m)?\.jd\.(?:com|hk)|(?:m|mitem)\.(?:yiyaojd|jkcsjd)\.com)\/product\/)))(\d+)\.html/g.exec(
        url
      )[1]
      let domain = /\.(com|hk)\//.exec(url)[1]
      wq = `//wqitem.jd.${domain}/item/view?sku=${skuId}`
      mp = `/pages/item/detail/detail?sku=${skuId}`
    } else if (/shop.m.jd.com[\/]?\?shopId/gi.test(url)) {
      // 匹配店铺
      wq = url.replace(
        /shop.m.jd.com[\/]?\?shopId/gi,
        'wqshop.jd.com/mshop/gethomepage?shopId'
      )
      wq = updateUrlQuery(wq, '_fd', 'jdw')
      mp = url.replace(
        /(?:https?:)?\/\/shop.m.jd.com[\/]?\?shopId/gi,
        '/pages/shop/index/index?shopId'
      )
    } else if (/mall.jd.com\/index-/gi.test(url)) {
      // 匹配会场
      mp = `/pages/h5/index?encode_url=${encodeURIComponent(url)}`
    } else {
      wq = url
      mp = `/pages/h5/index?encode_url=${encodeURIComponent(url)}`
    }
    m = url
    return _buildUrl({
      app,
      wq,
      m,
      mp,
      jx
    })
  },
  toUrl(url) {
    gotoLink(this.getUrl(url))
  },
  /**
   * 获取商详页链接
   * @param {string|number} skuId 商品id
   * @param {object} [extra={}] 拓展参数
   */
   getItemDetail(skuId, extra = {}) {
    return _buildUrl({
      app: _buildSchema(
        Object.assign(
          {
            category: 'jump',
            des: 'productDetail',
            skuId: skuId + ''
          },
          extra
        )
      ),
      wq: `//wqitem.jd.com/item/view?sku=${skuId}`,
      m: `//item.m.jd.com/product/${skuId}.html`,
      mp: `/pages/item/detail/detail?sku=${skuId}`
    })
  },
  toItemDetail(skuId, extra = {}) {
    gotoLink(this.getItemDetail(skuId, extra))
  },
  /**
   * 获取店铺链接
   *
   * @param {string|number} shopId 店铺id
   * @param {object} [extra={}] 拓展参数
   * @returns
   */
   getShopUrl(shopId, extra = {}) {
    // 替换链接
    console.log('getShopUrl0 shopId', shopId)
    let reg = /\/\/shop.m.jd.com.*shopId=([0-9]*)/.exec(shopId)
    console.log('getShopUrl0 reg', reg)

    if (reg && reg[1]) {
      shopId = reg[1]
    }
    let regWq = /wqshop.jd.com\/mshop\/gethomepage[\/]?\?shopId=([0-9]*)/.exec(
      shopId
    )
    if (regWq && regWq[1]) {
      shopId = regWq[1]
    }
    console.log('getShopUrl shopId', shopId)
    if (!isNumber(shopId)) {
      return Jump.getUrl(shopId)
    }

    return _buildUrl({
      app: _buildSchema(
        Object.assign(
          {
            category: 'jump',
            des: 'jshopMain',
            sourceType: 'mshop',
            shopId: shopId + ''
          },
          extra
        )
      ),
      // wq: `//sale.jd.com/liteshop/index.html?shopId=${shopId}&sourceType=WX-H5&moduleId=h5-BigSaleActivityVenue&entrance=SinkingActivityVenue&jumptab=bigPro`,
      // m: `//sale.jd.com/liteshop/index.html?shopId=${shopId}&sourceType=M-H5&sourceValue=Mshop&moduleId=h5-BigSaleActivityVenue&entrance=SinkingActivityVenue&jumptab=bigPro`,
      // mp: `/pages/shoplight/pages/index?shopId=${shopId}&sourceType=JDshop&sourceValue=WXshop&moduleId=h5-BigSaleActivityVenue&entrance=SinkingActivityVenue&jumptab=bigPro`
      wq: `//wqshop.jd.com/mshop/gethomepage?shopId=${shopId}&_fd=jdw`,
      m: `//shop.m.jd.com/?shopId=${shopId}`,
      mp: `/pages/shop/index/index?shopId=${shopId}`
    })
  },
  toShop(shopId, extra = {}) {
    console.log('toShop itshopIdem', shopId)
    gotoLink(this.getShopUrl(shopId, extra))
    // openapp.jdmobile://virtual?params={"category":"jump","des":"jshopMain","sourceType":"mshop","shopId":"789371","jumpTab":"bigPro","sourceInfo":{"moduleId":"h5-BigSaleActivityVenue","entrance":"SinkingActivityVenue"%7D,"venderId":"789371"%7D
    // openApp.jdMobile://virtual?params={"category":"jump","des":"jshopMain","shopId":"xxxxx","venderId":"xxxxxx","jumpTab":"bigPro","sourceInfo":{"moduleId":"h5-BigSaleActivityVenue","entrance":"BigSaleActivityVenue"}}；
  },
  /**
   * 获取店铺大促活动页链接
   *
   * @param {string|number} shopId 店铺id
   * @param {object} [extra={}] 拓展参数
   * @returns
   */
  shopBigPro(item, extra = {}) {
    console.log('shopBigPro item', item)
    // 跳大促店铺页
    let ext = {
      jumpTab: 'bigPro',
      sourceInfo: {
        moduleId: 'h5-BigSaleActivityVenue',
        entrance: 'SinkingActivityVenue'
      }
    }
    // let venderId = get('extension.shopInfo.venderId', item)
    let venderId = item
    if (venderId) {
      ext.venderId = venderId
    }
    let bigExt = get('extension.subSku.0.sku', item)
    if (bigExt) {
      ext.bigProExt = { rcmdRelateSkuId: bigExt }
    }
    ext = Object.assign(ext, extra)
    return Jump.toShop(item, ext)
  },
  /**
   * 获取秒杀中心链接
   *
   * @param {object} [extra={}] 拓展参数
   * @returns
   */
  getSeckill(extra = {}) {
    return _buildUrl({
      app: _buildSchema(
        Object.assign(
          {
            category: 'jump',
            des: 'seckill',
            secKillKeyTabIndex: '0'
          },
          extra
        )
      ),
      mp: '/pages/seckill/index/index',
      m: '//ms.m.jd.com/seckill/seckillList'
    })
  },
  toSeckill(extra = {}) {
    gotoLink(this.getSeckill(extra))
  },
  /**
   * 获取领券中心链接
   *
   * @returns
   */
  couponCenter(extra = {}) {
    return _buildUrl({
      app: _buildSchema(
        Object.assign(
          {
            des: 'couponCenter',
            category: 'jump',
            params: {
              needLogin: '0'
            }
          },
          extra
        )
      ),
      m: '//coupon.m.jd.com/center/getCouponCenter.action'
    })
  },
  /**
   * 获取优惠券使用页链接
   *
   * @param {*} batchId 券id
   * @param {*} [extra={}] 拓展参数
   * @returns
   */
  getUseCoupon(batchId, extra = {}) {
    return _buildUrl({
      app: _buildSchema(
        Object.assign(
          {
            sourceValue: '0_productList_0',
            des: 'productList',
            category: 'jump',
            from: 'couponBatch',
            couponId: batchId + '',
            tip: '',
            intel: '28',
            sourceType: 'PCUBE_CHANNEL'
          },
          extra
        )
      ),
      wq: `//wqsou.jd.com/coprsearch/cosearch?coupon_batch=${batchId}`,
      m: `//so.m.jd.com/list/couponSearch.action?couponbatch=${batchId}`,
      mp: `/pages/search/subPackages/coupon/coupon?batch=${batchId}`
    })
  },
  toUseCoupon(batchId, extra = {}) {
    gotoLink(this.getUseCoupon(batchId, extra))
  },
  /**
   * 获取我的优惠券页面链接
   *
   * @param {*} [extra={}] 拓展参数
   * @returns
   */
  getMyCoupon() {
    return _buildUrl({
      app: _buildSchema(
        Object.assign(
          {
            category: 'jump',
            des: 'mycoupon'
          }
        )
      ),
      m: 'https://home.m.jd.com/wallet/coupons.action'
    })
  },
  toMyCoupon() {
    gotoLink(this.getMyCoupon)
  },
  /**
   * 获取东家校园链接
   *
   * @param {string} item 数据源
   * @param {object} [extra={}] 拓展参数
   * @returns
   */
  xiaoyuan(item, extra = {}) {
    let app, m

    // 判断是否有返回url
    if (get('extension.jump.params.url', item)) {
      m = get('extension.jump.params.url', item)
    }
    if (m) {
      let params = {
        themeId: getQueryString('themeId', m),
        babelChannel: getQueryString('babelChannel', m),
        innerLink: decodeURIComponent(getQueryString('innerLink', m)), // 内外联动
        innerIndex: 1
      }
      app = _buildSchema(
        Object.assign(
          {
            category: 'jump',
            des: 'jddjxy'
          },
          params,
          extra
        )
      )
    }
    let openApp = get('extension.jump.openApp', item)
    if (openApp) {
      app = openApp
      m = get('extension.jump.params.url', item) || item.link
    }

    // 修复旧苹果机无法唤起原生页问题
    app = decodeURIComponent(app)

    return _buildUrl({
      app,
      m
    })
  },
  /**
   * 获取直播链接
   *
   * @param {number|string} id 直播id
   * @param {number} skuId 联动商品id
   * @param {object} [extra={}] 拓展参数
   * @returns
   */
  getLive(id, skuId, extra = {}) {
    let mp
    if (WXAPP_TYPE == 1) {
      // 京东购物小程序
      mp = ` https://lives.jd.com/#/${id}?origin=11&appid=jdgw&omitH5Params=1`
      mp = `/pages/h5/index?encode_url=${encodeURIComponent(mp)}`
    } else if (WXAPP_TYPE == 2) {
      // 京喜小程序
      mp = `https://wqs.jd.com/pglive/detail.html?id=${id}`
      mp = `/pages/h5/index?encode_url=${encodeURIComponent(mp)}`
    }
    return _buildUrl({
      app: _buildSchema(
        Object.assign(
          {
            category: 'jump',
            des: 'LivePlayerRoom',
            sourceValue: 'sourceValue_test',
            sourceType: 'sourceType_test',
            id: id + '',
            liveOrigin: 4,
            sku: skuId + '',
            isNeedVideo: true
          },
          extra
        )
      ),
      m: `https://lives.jd.com/#/${id}?origin=4&appid=jdzbhc`,
      mp,
      wq: `//wqs.jd.com/pglive/detail.html?id=${id}`
    })
  },
  toLive(id, skuId, extra) {
    gotoLink(this.getLive(id, skuId, extra))
  },
  /**
   * 获取热搜词链接
   *
   * @param {string} [keyword] 热搜词
   * @param {object} [extra={}] 拓展参数
   * @returns
   */
   getHotWord(keyword = '') {
    return _buildUrl({
      app: _buildSchema(
        Object.assign(
          {
            sourceValue: '0_productList_0',
            sourceType: 'PCUBE_CHANNEL',
            category: 'jump',
            des: 'productList',
            from: 'search',
            keyWord: keyword + ''
          }
        )
      ),
      m: `https://so.m.jd.com/ware/search.action?keyword=${encodeURIComponent(
        keyword
      )}`,
      mp: `/pages/search/list/list?key=${keyword}`
    })
  },
  toHotWord(keyword = '') {
    gotoLink(this.getHotWord(keyword))
  },
  /**
   * 获取搜词页链接
   *
   * @param {string} [showWord=''] 搜索页展示词
   * @param {string} [realWord=showWord] 搜索页实搜词
   * @param {object} [extra={}] 拓展参数
   * @returns
   */
  getSearchPage(showWord = '', realWord = '', extra = {}) {
    realWord = realWord || showWord
    console.log('realWord', realWord)
    return _buildUrl({
      app: _buildSchema(
        Object.assign(
          {
            category: 'jump',
            des: 'search',
            from: 'jdcop',
            showWord: showWord + '',
            realWord: realWord + ''
          },
          extra
        )
      ),
      m: `https://so.m.jd.com/ware/search.action?keyword=${encodeURIComponent(
        realWord
      )}`,
      mp: `/pages/search/list/list?key=${encodeURIComponent(realWord)}`
    })
  },
  toSearchPage(showWord = '', realWord = '') {
    gotoLink(this.getSearchPage(showWord, realWord))
  },
  /**
   * 获取个人购物车链接
   *
   * @param {object} [extra={}] 拓展参数
   * @returns
   */
  getCart(extra = {}) {
    return _buildUrl({
      app: _buildSchema(
        Object.assign(
          {
            category: 'jump',
            des: 'cartB'
          },
          extra
        )
      ),
      m: '//p.m.jd.com/cart/cart.action',
      mp: '/pages/cart/cart/cart'
    })
  },
  toCart(extra = {}) {
    gotoLink(this.getCart(extra))
  },
  /**
   * 获取清单详情页链接
   *
   * @param {*} id 清单id
   * @param {*} [extra={}] 拓展参数
   * @returns
   */
  qingdanDetail(id, extra = {}) {
    return _buildUrl({
      app: _buildSchema(
        Object.assign(
          {
            category: 'jump',
            des: 'inventoryDetail',
            id: id + ''
          },
          extra
        )
      ),
      m: `//h5.m.jd.com/active/youpin/qingdan/index.html?id=${id}`
    })
  },
  /**
   * 获取发现文章详情页链接
   *
   * @param {*} id 文章id
   * @param {*} [extra={}] 拓展参数
   * @returns
   */
  articleDetail(id, extra = {}) {
    return _buildUrl({
      app: _buildSchema(
        Object.assign(
          {
            category: 'jump',
            des: 'faxian_article',
            id: id + ''
          },
          extra
        )
      ),
      m: '//h5.m.jd.com/active/faxian/html/innerpage.html?id=${id}`'
    })
  },
  /**
   * 获取发现好货单品推荐详情页链接
   *
   * @param {*} id 推荐页id
   * @param {*} [extra={}] 拓展参数
   * @returns
   */
  worthbuyDetail(id, extra = {}) {
    return _buildUrl({
      app: _buildSchema(
        Object.assign(
          {
            category: 'jump',
            des: 'worthbuy_detail',
            channel: 'push_bangnizhongcao',
            isInstation: false,
            id: id + '',
            customizationType: '10000'
          },
          extra
        )
      ),
      m: `//h5.m.jd.com/active/jmp/zhidemai/index.html?ad_od=1&id=${id}`
    })
  },
  /**
   * 获取热卖榜链接
   *
   * @param {*} item 热卖榜广告
   */
  getHotRank(item) {
    // 热卖榜单
    let link = updateUrlQuery(
      get('extension.jumpUrl', item),
      'fromName',
      'dacu_huichang'
    )
    if (get('extension.subSku.0.sku', item)) {
      link = updateUrlQuery(link, 'sku', get('extension.subSku.0.sku', item))
    }
    if (/\/wq\//g.test(window.location.href)) {
      // wq链接下添加hideAd
      link = updateUrlQuery(link, 'hideAd', 1)
    }
    // 热卖榜：https://ranking.m.jd.com/comLandingPage/comLandingPage?contentId=XXX&sku=&rankType=10&fromName=wq&hideAd=1
    return link
  },
  /**
   * 获取登陆跳转
   *
   * @param {string} [returnUrl=window.location.href] 跳转返回路径
   * @returns
   */
   toLogin(returnUrl) {
    returnUrl = returnUrl || (window.location.origin + window.location.pathname + window.location.search)
    let url = 'https://plogin.m.jd.com/user/login.action?appid=100'
    url = url + '&returnurl=' + encodeURIComponent(returnUrl)
    if (IS_MP) {
      gotoLink(`/pages/login/index?rurl=${encodeURIComponent(returnUrl)}&bindNavBackType=navigateBack&biz=jdcop`)
    } else {
      gotoLink(url)
    }
  },
  openJdApp(url = location.href, murl = '') {
    if (isApp('jd')) {
      return;
    }
    let urlParam = {
      inteneUrlParams: {
        category: 'jump',
        action: 'to',
        des: 'm',
        url: url || window.location.href
      }
    }
    // $.immediateOpenApp({
    //   inteneUrlParams: urlParam.inteneUrlParams,
    //   NoJumpDownLoadPage: true,
    // })
    $.downloadAppPlugInOpenApp({
      inteneUrlParams: urlParam.inteneUrlParams,
      NoJumpDownLoadPage: true,
    })
  },
  gotoLink
}

function gotoLink(url) {
  console.log('gotoLink url', url)
  // hooks
  window.__handleJump__ && window.__handleJump__(url)

  setTimeout(() => {
    if (IS_MP && /^\/pages\//.test(url)) {
      // 微信小程序环境
      Jomp.goto(url)
    } else {
      location.href = url
    }
  }, confs.delay)
}

/**
 * 【openapp协议及统一跳转协议】
 *  文档：https://cf.jd.com/pages/viewpage.action?pageId=73644612
 * @param {*} name
 * @param {*} params
 * @returns
 */
function _buildSchema(name, params) {
  if (arguments.length == 1) {
    params = name
    name = 'virtual'
  }
  return `openApp.jdMobile://${name}?params=${encodeURIComponent(
    JSON.stringify(params)
  )}`
}

/**
 * 【链接构建】
 *  根据不同环境返回对应链接
 * @param {*} urlopt.app openApp协议链接
 * @param {*} urlopt.wq 微信/手q链接
 * @param {*} urlopt.m 普通链接
 * @param {*} urlopt.mp 小程序链接
 * @returns
 */
function _buildUrl(urlopt) {
  let url = ''
  // 是否京东站内
  if (isApp("jd")) {
    url = urlopt.app
  } else {
    url = urlopt.m
    // 是否wq链接
    if (IS_WQ && urlopt.wq) {
      url = urlopt.wq
    }
    // 是否京喜链接
    if (IS_JX && urlopt.jx) {
      url = urlopt.jx
    }
    // 小程序环境
    if (IS_MP && urlopt.mp) {
      console.log('mp', urlopt.mp)
      url = urlopt.mp
      
    }
  }
  return url || urlopt.m || urlopt.wq // 兜底
}

export default Jump;