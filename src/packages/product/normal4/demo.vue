<template>
  <div class="demo">
    <h2>类型：normal-4</h2>
    <p class="type">适用场景：一行多个商品布局，上下结构的常规类型，支持一行三个、一行三个半等。</p>
    <div class="demo-product demo-1">
      <nutcat-row type="flex" gutter="2">
        <nutcat-col :span="8" v-for="(item, index) in data1" :key="index">
          <nutcat-product
            :data="[item, params]"
            col="3"
            type="normal-4"
          >
            <template slot="tag">
              <nutcat-tag class="sub-tag" type="red-light">噱头标签</nutcat-tag>
            </template>
            <nutcat-tag class="sub-tag tl" type="red-gradient">
              <nutcat-icon class="sub-icon" type="crown"></nutcat-icon>
              数码销量TOP1
            </nutcat-tag>
          </nutcat-product>
        </nutcat-col>
      </nutcat-row>
    </div>
    <div class="demo-product demo-s1">
      <nutcat-row type="flex" gutter="1" scrollX>
        <nutcat-col :span="8" v-for="(item, index) in data2" :key="index">
          <nutcat-product
            :data="[item, params]"
            col="3"
            type="normal-4"
          >
            <template slot="tag">
              <nutcat-tag class="sub-tag" type="red-light">噱头标签</nutcat-tag>
            </template>
            <nutcat-tag class="sub-tag tl" type="red-gradient">
              <nutcat-icon class="sub-icon" type="crown"></nutcat-icon>
              数码销量TOP1
            </nutcat-tag>
          </nutcat-product>
        </nutcat-col>
      </nutcat-row>
    </div>
    <!-- <div class="demo-product">
      <nutcat-row type="flex" gutter="1" scrollX>
        <nutcat-col :span="6" v-for="(item, index) in data3" :key="index">
          <nutcat-product
            :data="[item, {cLinePrice: ['false']}]"
            nameRow="1"
            pricePre="预估到手价"
            col="4"
            type="normal-4"
          >
          </nutcat-product>
        </nutcat-col>
      </nutcat-row>
    </div> -->
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('product');
// import data from './data.js';
export default createDemo({
  data() {
    return {
      data1: [
        {
          name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
          pPrice: '199',
          linePrice: '499',
          image:
            'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
        },
        {
          name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
          pPrice: '199',
          linePrice: '499',
          image:
            'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
        },
        {
          name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
          pPrice: '199',
          linePrice: '499',
          image:
            'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
        }
      ],
      data2: [
        {
          name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
          pPrice: '199',
          linePrice: '499',
          image:
            'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
        },
        {
          name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
          pPrice: '199',
          linePrice: '499',
          image:
            'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
        },
        {
          name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
          pPrice: '199',
          linePrice: '499',
          image:
            'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
        },
        {
          name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
          pPrice: '199',
          linePrice: '499',
          image:
            'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
        }
      ],
      data3: [
        {
          name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
          pPrice: '199',
          image:
            'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
        },
        {
          name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
          pPrice: '199',
          image:
            'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
        },
        {
          name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
          pPrice: '199',
          image:
            'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
        },
        {
          name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
          pPrice: '199',
          image:
            'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
        }
      ],
      params: {
        cDesc: false
      }
    };
  },
  mounted() {
  }
});
</script>

<style lang="scss" scoped>
#app {
  .demo {
    padding-left: 9px;
    padding-right: 9px;
  }
  .demo-product {
    margin-bottom: 5px;
    overflow: hidden;
    .top-tag {
      border-radius: 0 0 4px 0;
    }
    /deep/ .nutcat-tag-fire {
      border-radius: 0 0 8px 0;
    }
  }
}
.demo-1 {
  .nutcat-product {
    /deep/.line-price {
      color: #8c8c8c;
      text-decoration: none;
    }
  }
}
.demo-s1 {
  /deep/ .nutcat-col {
    width: 108px;
  }
}
</style>
