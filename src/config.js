module.exports = {
  "header": [
    {
      "name": "intro",
      "cName": "指南",
      "path": "/intro"
    },
    // {
    //   "name": "intro",
    //   "cName": "组件",
    //   "path": "/intro"
    // },
    {
      "name": "demo",
      "cName": "示例",
      "path": "/"
    },
    {
      "name": "examples",
      "cName": "模板",
      "path": "/examples"
    }
  ],
  "docs": {
    "name": "指南",
    "packages": [
      {
        "name": "intro",
        "cName": "介绍",
        "show": true
      },
      {
        "name": "start",
        "cName": "快速上手",
        "show": true
      },
      {
        "name": "usage",
        "cName": "进阶使用",
        "show": true
      },
      {
        "name": "data",
        "cName": "数据配置",
        "show": true
      }
    ]
  },
  "nav": [
    {
      "name": "原子组件",
      "packages": [
        {
          "name": "Text",
          "sort": 1,
          "cName": "文本组件",
          "type": "component",
          "show": true,
          "desc": "",
          "author": ""
        },
        {
          "name": "Image",
          "sort": 1,
          "cName": "图片组件",
          "type": "component",
          "show": true,
          "desc": "",
          "author": ""
        },
        {
          "name": "Icon",
          "sort": 1,
          "cName": "图标组件",
          "type": "component",
          "show": true,
          "desc": "",
          "author": ""
        },
        {
          "name": "Tag",
          "sort": 1,
          "cName": "标签组件",
          "type": "component",
          "show": true,
          "desc": "",
          "author": ""
        },
        {
          "name": "Button",
          "sort": 1,
          "cName": "按钮组件",
          "type": "component",
          "show": true,
          "desc": "",
          "author": ""
        },
        {
          "version": "1.0.0",
          "name": "Price",
          "type": "component",
          "cName": "价格",
          "desc": "价格组件",
          "sort": 6,
          "show": true,
          "author": "guoxiaoxiao"
        },
        {
          "version": "1.0.0",

          "name": "Cart",
          "type": "component",
          "cName": "购物车",
          "desc": "1",
          "sort": 7,
          "show": true,
          "author": "guoxiaoxiao8"
        },
      ]
    },
    {
      "name": "布局组件",
      "packages": [
        {
          "name": "Layout",
          "sort": 2,
          "cName": "布局",
          "type": "component",
          "show": true,
          "desc": "",
          "author": ""
        }
      ]
    },
    {
      "name": "会场组件",
      "packages": [
        {
          "name": "Hall",
          "sort": 3,
          "cName": "普通会场",
          "type": "component",
          "show": true,
          "desc": "",
          "author": "ailululu",
          "father": true
        },
        {
          "name": "Normal1",
          "sort": 1,
          "cName": "普通类型一",
          "type": "component",
          "show": true,
          "desc": "普通会场1",
          "author": "",
          "child": "hall"
        },
        {
          "version": "1.0.0",
          "name": "Normal2",
          "type": "component",
          "cName": "普通类型二",
          "desc": "普通会场2",
          "sort": 2,
          "show": true,
          "author": "",
          "child": "hall"
        },
        {
          "version": "1.0.0",
          "name": "Normal3",
          "type": "component",
          "cName": "普通类型三",
          "desc": "普通会场3",
          "sort": 3,
          "show": true,
          "author": "",
          "child": "hall"
        },
        {
          "version": "1.0.0",
          "name": "Normal4",
          "type": "component",
          "cName": "普通类型四",
          "desc": "普通会场4",
          "sort": 4,
          "show": true,
          "author": "",
          "child": "hall"
        },
        {
          "name": "Normal5",
          "sort": 5,
          "cName": "普通类型五",
          "type": "component",
          "show": true,
          "desc": "普通会场5",
          "author": "",
          "child": "hall"
        },
        {
          "version": "1.0.0",
          "name": "Normal6",
          "type": "component",
          "cName": "普通类型六",
          "desc": "普通会场6",
          "sort": 6,
          "show": true,
          "author": "",
          "child": "hall"
        },
        {
          "version": "1.0.0",
          "name": "Normal7",
          "type": "component",
          "cName": "普通类型七",
          "desc": "普通会场7",
          "sort": 7,
          "show": true,
          "author": "ailululu",
          "child": "hall"
        },
        {
          "version": "1.0.0",
          "name": "Normal8",
          "type": "component",
          "cName": "普通类型八",
          "desc": "普通会场8",
          "sort": 8,
          "show": true,
          "author": "ailululu",
          "child": "hall"
        },
        {
          "version": "1.0.0",
          "name": "Free",
          "type": "component",
          "cName": "自定义类型",
          "desc": "会场组件自定义类型",
          "sort": 9,
          "show": true,
          "author": "ailululu",
          "child": "hall"
        },
        {
          "version": "1.0.0",
          "name": "HallCapsule",
          "type": "component",
          "cName": "胶囊词",
          "desc": "胶囊词",
          "sort": 3,
          "show": true,
          "author": "yangjinjun3"
        }
      ]
    },
    {
      "name": "店铺组件",
      "packages": [
        {
          "name": "Shop",
          "sort": 4,
          "cName": "普通店铺",
          "type": "component",
          "show": true,
          "desc": "",
          "author": "ailululu",
          "father": true
        },
        {
          "name": "Normal1",
          "sort": 1,
          "cName": "普通类型一",
          "type": "component",
          "show": true,
          "desc": "普通店铺1",
          "author": "ailululu",
          "child": "shop"
        },
        {
          "name": "Normal2",
          "sort": 2,
          "cName": "普通类型二",
          "type": "component",
          "show": true,
          "desc": "普通店铺2",
          "author": "",
          "child": "shop"
        },
        {
          "name": "Normal3",
          "sort": 3,
          "cName": "普通类型三",
          "type": "component",
          "show": true,
          "desc": "普通店铺2",
          "author": "",
          "child": "shop"
        },
        {
          "name": "Normal4",
          "sort": 4,
          "cName": "普通类型四",
          "type": "component",
          "show": true,
          "desc": "普通店铺4",
          "author": "",
          "child": "shop"
        },
        {
          "name": "Normal5",
          "sort": 5,
          "cName": "普通类型五",
          "type": "component",
          "show": true,
          "desc": "普通店铺5",
          "author": "",
          "child": "shop"
        },
        {
          "name": "Normal6",
          "sort": 6,
          "cName": "普通类型六",
          "type": "component",
          "show": true,
          "desc": "普通店铺6",
          "author": "",
          "child": "shop"
        },
        {
          "name": "Lbs",
          "sort": 7,
          "cName": "LBS类型",
          "type": "component",
          "show": true,
          "desc": "LBS店铺",
          "author": "",
          "child": "shop"
        },
        {
          "name": "Feed1",
          "sort": 8,
          "cName": "feed类型一",
          "type": "component",
          "show": true,
          "desc": "feed店铺1",
          "author": "",
          "child": "shop"
        }
      ]
    },
    {
      "name": "榜单组件",
      "packages": [
        {
          "name": "Rank",
          "sort": 5,
          "cName": "普通榜单",
          "type": "component",
          "show": true,
          "desc": "",
          "author": "",
          "father": true
        },
        {
          "version": "1.0.0",
          "name": "Normal1",
          "type": "component",
          "cName": "普通类型一",
          "desc": "普通类型一",
          "show": true,
          "author": "ailululu",
          "child": "rank"
        },
        {
          "version": "1.0.0",
          "name": "Normal2",
          "type": "component",
          "cName": "普通类型二",
          "desc": "普通类型二",
          "show": true,
          "author": "ailululu",
          "child": "rank"
        },
        {
          "version": "1.0.0",
          "name": "Normal3",
          "type": "component",
          "cName": "普通类型三",
          "desc": "普通类型三",
          "show": true,
          "author": "ailululu",
          "child": "rank"
        },
        {
          "version": "1.0.0",
          "name": "Normal4",
          "type": "component",
          "cName": "普通类型四",
          "desc": "普通类型四",
          "show": true,
          "author": "ailululu",
          "child": "rank"
        },
        {
          "version": "1.0.0",
          "name": "Feed1",
          "type": "component",
          "cName": "Feed类型一",
          "desc": "Feed类型一",
          "show": true,
          "author": "ailululu",
          "child": "rank"
        }
      ]
    },
    {
      "name": "直播组件",
      "packages": [
        {
          "name": "Live",
          "sort": 6,
          "cName": "普通直播",
          "type": "component",
          "show": true,
          "desc": "",
          "author": "jingfubo",
          // "father": true
        }
      ]
    },
    {
      "name": "视频组件",
      "packages": [
        {
          "name": "Video",
          "sort": 7,
          "cName": "普通视频",
          "type": "component",
          "show": true,
          "desc": "",
          "author": "",
          // "father": true
        }
      ]
    },
    {
      "name": "商品组件",
      "packages": [
        {
          "name": "Product",
          "sort": 8,
          "cName": "普通商品",
          "type": "component",
          "show": true,
          "desc": "",
          "author": "",
          "father": true
        },
        {
          "version": "1.0.0",
          "name": "Normal1",
          "type": "component",
          "cName": "普通类型一",
          "desc": "普通商品1",
          "show": true,
          "author": "ailululu",
          "child": "product"
        },
        {
          "version": "1.0.0",
          "name": "Normal2",
          "type": "component",
          "cName": "普通类型二",
          "desc": "普通商品2",
          "show": true,
          "author": "ailululu",
          "child": "product"
        },
        {
          "version": "1.0.0",
          "name": "Normal3",
          "type": "component",
          "cName": "普通类型三",
          "desc": "普通商品3",
          "show": true,
          "author": "ailululu",
          "child": "product"
        },
        {
          "version": "1.0.0",
          "name": "Normal4",
          "type": "component",
          "cName": "普通类型四",
          "desc": "普通商品4",
          "show": true,
          "author": "ailululu",
          "child": "product"
        },
        {
          "version": "1.0.0",
          "name": "Normal5",
          "type": "component",
          "cName": "普通类型五",
          "desc": "普通商品5",
          "show": true,
          "author": "ailululu",
          "child": "product"
        },
        {
          "version": "1.0.0",
          "name": "Normal6",
          "type": "component",
          "cName": "普通类型六",
          "desc": "普通商品6",
          "show": true,
          "author": "ailululu",
          "child": "product"
        },
        {
          "version": "1.0.0",
          "name": "Heart",
          "type": "component",
          "cName": "心跳曲线类型",
          "desc": "心跳曲线类型",
          "show": true,
          "author": "ailululu",
          "child": "product"
        },
        {
          "version": "1.0.0",
          "name": "Fold",
          "type": "component",
          "cName": "心跳折线类型",
          "desc": "心跳折线类型",
          "show": true,
          "author": "ailululu",
          "child": "product"
        },
        {
          "version": "1.0.0",
          "name": "FeedShop",
          "type": "component",
          "cName": "商品+店铺类型",
          "desc": "商品+店铺类型",
          "show": true,
          "author": "ailululu",
          "child": "product"
        },
        {
          "version": "1.0.0",
          "name": "ProductLimit",
          "type": "component",
          "cName": "抢购商品",
          "desc": "抢购商品",
          "sort": 8,
          "show": true,
          "author": "yangxiaolu"
        },
        {
          "version": "1.0.0",
          "name": "ProductAdvance",
          "type": "component",
          "cName": "预售商品",
          "desc": "预约/预售/预告商品",
          "sort": 8,
          "show": true,
          "author": "yangxiaolu"
        }
      ]
    },
    {
      "name": "优惠券组件",
      "packages": [
        {
          "name": "Coupon",
          "sort": 9,
          "cName": "普通优惠券",
          "type": "component",
          "show": true,
          "desc": "",
          "author": ""
        },
        {
          "name": "JtCoupon",
          "sort": 9,
          "cName": "京贴+PLUS",
          "type": "component",
          "show": true,
          "desc": "",
          "author": ""
        },
        {
          "name": "ShareCoupon",
          "sort": 9,
          "cName": "分享领券",
          "type": "component",
          "show": true,
          "desc": "",
          "author": ""
        }
      ]
    },
    {
      "name": "展示组件",
      "packages": [
        {
          "version": "1.0.0",
          "name": "Progress",
          "type": "component",
          "cName": "进度条",
          "desc": "展示操作或任务的当前进度",
          "sort": 10,
          "show": true,
          "author": "yangxiaolu3"
        },
        {
          "version": "1.0.0",
          "name": "NoticeBar",
          "type": "component",
          "cName": "利益点滚动",
          "desc": "走马灯纵向滚动",
          "sort": 10,
          "show": true,
          "author": "yangxiaolu"
        },
        {
          "version": "1.0.0",
          "name": "Barrage",
          "type": "component",
          "cName": "弹幕组件",
          "desc": "视频弹幕组件",
          "sort": 10,
          "show": true,
          "author": "Ymm0008"
        },
        {
          "version": "1.0.0",
          "name": "CountDown",
          "type": "component",
          "cName": "倒计时",
          "desc": "倒计时",
          "sort": 10,
          "show": true,
          "author": "yangxiaolu"
        },
        {
          "version": "1.0.0",
          "name": "TaskList",
          "type": "component",
          "cName": "任务列表",
          "desc": "任务列表",
          "sort": 10,
          "show": true,
          "author": "yangxiaolu"
        },
        {
          "version": "1.0.0",
          "name": "ShowMore",
          "type": "component",
          "cName": "查看更多",
          "desc": "点击展开更多",
          "sort": 10,
          "show": true,
          "author": ""
        },
        {
          "version": "1.0.0",
          "name": "Loading",
          "type": "component",
          "cName": "加载",
          "desc": "加载状态渲染",
          "sort": 10,
          "show": true,
          "author": "zhangyu1344"
        },
        {
          "version": "1.0.0",
          "name": "HeartCurve",
          "type": "component",
          "cName": "心跳曲线",
          "desc": "心跳曲线",
          "sort": 8,
          "show": true,
          "author": "yangxiaolu3"
        }
      ]
    },
    {
      "name": "轮播模块",
      "packages": [
        {
          "name": "FollowSwipe",
          "sort": 11,
          "cName": "跟随滚动",
          "type": "component",
          "show": true,
          "desc": "",
          "author": "zhangyu1344"
        },
        {
          "version": "1.0.0",
          "name": "ArcRolling",
          "type": "component",
          "cName": "弧形滚动",
          "desc": "异形滚动组件",
          "sort": 11,
          "show": true,
          "author": "Ymm0008"
        },
        {
          "version": "1.0.0",
          "name": "StarBrand",
          "type": "component",
          "cName": "三级联动",
          "desc": "明星品牌",
          "sort": 11,
          "show": true,
          "author": "Ymm0008"
        }
      ]
    },
    {
      "name": "导航组件",
      "packages": [
        {
          "version": "1.0.0",
          "name": "Tab",
          "type": "component",
          "cName": "页签组件",
          "desc": "页签组件",
          "sort": 12,
          "show": true,
          "author": "yangxiaolu"
        },
        {
          "version": "1.0.0",
          "name": "Nav",
          "type": "component",
          "cName": "楼层导航",
          "desc": "楼层导航",
          "sort": 12,
          "show": true,
          "author": "ailululu"
        },
        {
          "version": "1.0.0",
          "name": "NavLeft",
          "type": "component",
          "cName": "左侧导航",
          "desc": "左侧导航",
          "sort": 12,
          "show": true,
          "author": "ailululu"
        },
        {
          "version": "1.0.0",
          "name": "Bottom",
          "type": "component",
          "cName": "底部导航",
          "desc": "底部导航组件",
          "sort": 12,
          "show": true,
          "author": "ailululu"
        },
        {
          "version": "1.0.0",
          "name": "BackTop",
          "type": "component",
          "cName": "返回顶部",
          "desc": "返回顶部组件",
          "sort": 12,
          "show": true,
          "author": "ailululu"
        }
      ]
    }
  ]
};