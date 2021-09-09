<template>
  <div class="demo">
    <h2>类型：normal-5</h2>
    <p class="type">适用场景：一行多个会场布局，白底图和内容区域上下布局。支持一行三个、一行三个半、一行四个等。</p>
    <div class="demo-hall">
      <nutcat-row type="flex" gutter="2">
        <nutcat-col :span="8" v-for="(item, index) in data1" :key="index">
          <nutcat-hall
            :data="[item, params1]"
            imgHeight="76"
            col="3"
            type="normal-5"
          >
          </nutcat-hall>
        </nutcat-col>
      </nutcat-row>
    </div>
    <div class="demo-hall demo2">
      <nutcat-row  type="flex" gutter="2">
        <nutcat-col :span="8" v-for="(item, index) in data2" :key="index">
          <nutcat-hall
            :data="[item, params2]"
            imgHeight="76"
            col="3"
            type="normal-5"
          >
          </nutcat-hall>
        </nutcat-col>
      </nutcat-row>
    </div>
    <div class="demo-hall demo3">
      <nutcat-row type="flex" gutter="1">
        <nutcat-col :span="6" v-for="(item, index) in data3" :key="index">
          <nutcat-hall
            :data="[item, params1]"
            imgWidth="71"
            imgHeight="71"
            col="4"
            type="normal-5"
          >
          </nutcat-hall>
        </nutcat-col>
      </nutcat-row>
    </div>
    <div class="demo-hall demo4">
      <nutcat-row type="flex" gutter="1">
        <nutcat-col :span="6" v-for="(item, index) in data4" :key="index">
          <nutcat-hall
            :data="[item, params2]"
            imgWidth="71"
            imgHeight="71"
            col="4"
            type="normal-5"
          >
          </nutcat-hall>
        </nutcat-col>
      </nutcat-row>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('hall');
// import data from '../data.js';
export default createDemo({
  data() {
    return {
      data1: [
        {
          name: '标签会场名称1',
          pictureUrl:
            'https://img14.360buyimg.com/imagetools/jfs/t1/190503/1/12334/15210/60e7c21dE404032f7/394580425417d196.png'
        },
        {
          name: '标签会场名称1',
          pictureUrl:
            'https://img14.360buyimg.com/imagetools/jfs/t1/190503/1/12334/15210/60e7c21dE404032f7/394580425417d196.png'
        },
        {
          name: '标签会场名称1',
          pictureUrl:
            'https://img14.360buyimg.com/imagetools/jfs/t1/190503/1/12334/15210/60e7c21dE404032f7/394580425417d196.png'
        }
      ],
      data2: [
        {
          name: '标签会场名称',
          desc: '满199减100',
          pictureUrl:
            'https://img14.360buyimg.com/imagetools/jfs/t1/190503/1/12334/15210/60e7c21dE404032f7/394580425417d196.png'
        },
        {
          name: '标签会场名称',
          desc: '满199减100',
          pictureUrl:
            'https://img14.360buyimg.com/imagetools/jfs/t1/190503/1/12334/15210/60e7c21dE404032f7/394580425417d196.png'
        },
        {
          name: '标签会场名称',
          desc: '满199减100',
          pictureUrl:
            'https://img14.360buyimg.com/imagetools/jfs/t1/190503/1/12334/15210/60e7c21dE404032f7/394580425417d196.png'
        }
      ],
      data3: [
        {
          name: '会场名称',
          pictureUrl:
            'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
        },
        {
          name: '会场名称',
          pictureUrl:
            'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
        },
        {
          name: '会场名称',
          pictureUrl:
            'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
        },
        {
          name: '会场名称',
          pictureUrl:
            'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
        }
      ],
      data4: [
        {
          name: '会场名称',
          desc: '满199减100',
          pictureUrl:
            'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
        },
        {
          name: '会场名称',
          desc: '满199减100',
          pictureUrl:
            'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
        },
        {
          name: '会场名称',
          desc: '满199减100',
          pictureUrl:
            'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
        },
        {
          name: '会场名称',
          desc: '满199减100',
          pictureUrl:
            'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
        }
      ],
      params1: {
        cImage: ['pictureUrl'],
        cDesc: false
      },
      params2: {
        cImage: ['pictureUrl']
      }
    }
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
  .demo-hall {
    margin-bottom: 5px;
  }
}
</style>
