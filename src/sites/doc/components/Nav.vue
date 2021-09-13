<template>
  <div class="doc-nav">
    <ol>
      <li>
        {{ docsData.name }}
      </li>
      <ul>
        <li
          :class="{ active: _package.name == routerPath }"
          v-for="(_package, index) in docsData.packages"
          :key="index"
          @click="toClick"
        >
          <router-link
            v-if="!_package.isLink"
            :to="{name: _package.name.toLowerCase()}"
            :clstag="`pageclick|keycount|Homepage|CAT_Event_${_package.name.toLowerCase()}`"
            >{{ _package.cName }}</router-link
          >
          <a v-else :href="_package.name" target="_blank">{{
            _package.cName
          }}</a>
        </li>
      </ul>
    </ol>
    <ol v-for="(_nav, index) in navData" :key="index">
      <li>{{ _nav.name }}</li>
      <ul>
        <template
          :class="{ active: isActive(_package.name) }"
          v-for="(_package, i) in _nav.packages"
        >
        <!-- {{_package.child}} -->
          <li v-if="_package.show " :key="i" 
            @click="toClick" 
            :class="{ active: _package.name.toLowerCase() == routerPath }"
          >
            <!-- {{_package.name.toLowerCase()}} -->
            <router-link :clstag="`pageclick|keycount|Homepage|CAT_Event_${_package.name}`" @click.native="handleToggle(_package.name.toLowerCase())" v-if="!_package.child" :to="{name: _package.name.toLowerCase()}">
              {{ _package.name }}&nbsp;&nbsp;<b>{{ _package.cName }}</b>
              <span :class="`_${_package.name.toLowerCase()}`" style="display:none;">
                <!-- <nut-icon type="right" size="14px" color="#979797" class="arrow-bottom" style="display:none;"></nut-icon> -->
                <!-- <nut-icon type="right" size="14px" color="#979797" @click="isExpand = !isExpand" :class="isExpand ? 'arrow-bottom' : 'arrow-top'"></nut-icon> -->
                <!-- <nut-icon type="right" size="14px" color="#979797" class="arrow-top"></nut-icon> -->
                <template v-if="isExpand && _package.name.toLowerCase() == name">
                  <nut-icon size="14px" color="#979797" type="right" class="arrow-bottom"></nut-icon>
                </template>
                <template v-else>
                  <nut-icon size="14px" color="#979797" type="right" class="arrow-top"></nut-icon>
                </template>
              </span>
            </router-link>
            
            <ul v-if="_package.show && _package.child" :class="_package.child.toLowerCase() + _package.name.toLowerCase()" style="display:none;">
              <template
                :class="{ active: isActive(_package.name) }"
              >
                <li>
                  <router-link :clstag="`pageclick|keycount|Homepage|CAT_Event_${_package.name}`" :to="{path: '/'+_package.child.toLowerCase()+'/'+_package.name.toLowerCase()}">
                    {{ _package.name }}&nbsp;&nbsp;<b>{{ _package.cName }}</b>
                  </router-link>
                </li>
              </template>
            </ul>
          </li>
        </template>
      </ul>
    </ol>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
// import { currentRoute } from '@/sites/assets/util/ref';
import NutUI from '@nutui/nutui';
NutUI.install(Vue);
import { nav, docs } from '@/config';
@Component
export default class DocNav extends Vue {
  docsData: any = [];
  navData: any = [];
  isExpand: boolean = false;
  routerPath: any = [];
  name: string = '';

  mounted() {
    // console.log('123nav', nav);
    // console.log('123docs', docs);
    this.docsData = docs;
    this.navData = nav;
    this.routerPath = this.$route.name;
  }
  toClick() {
    setTimeout(() => {
       this.routerPath = this.$route.name;
    }, 200)
    
    // console.log('123docs', this.routerPath);
  }

  handleToggle(name) {
    this.isExpand = !this.isExpand;
    this.name = name.toLowerCase();
    const map = ['hall', 'shop', 'rank', 'product'];
    if(!map.includes(name)) {
      return;
    }

    // if((document as any).querySelector(`[class="_${name}"] .arrow-bottom`).style.display === 'none') {
    //   (document as any).querySelector(`[class="_${name}"] .arrow-bottom`).style.display = 'block';
    //   (document as any).querySelector(`[class="_${name}"] .arrow-top`).style.display = 'none';
    // }else {
    //   (document as any).querySelector(`[class="_${name}"] .arrow-bottom`).style.display = 'none';
    //   (document as any).querySelector(`[class="_${name}"] .arrow-top`).style.display = 'block';
    // }

    if(document.querySelector(`[class^="${name}"]`) && (document as any).querySelector(`[class^="${name}"]`).style.display === 'none') {
      this.isExpand = true;
      Array.from(document.querySelectorAll(`[class^="${name}"]`)).forEach(item => {
        (item as any).style.display = 'block';
      })
    } else {
      this.isExpand = false;
      Array.from(document.querySelectorAll(`[class^="${name}"]`)).forEach(item => {
        (item as any).style.display = 'none';
      })
    }
  }
};
</script>

<style lang="scss">
.arrow-top {
  margin-top: 17px;
  // margin-right: -15px;
  transform: rotate(90deg);
}
.arrow-bottom {
  // margin-right: 80px;
  margin-top: 17px;
  transform: rotate(-90deg);
}
._hall,
._shop,
._rank,
._product {
  display: inline-block !important;
  float: right;
  position: relative;
  margin-right: 30px;

  .arrow-bottom,
  .arrow-top {
    position: absolute;
    right: 10px;
  }
}

.doc {
  &-nav {
    position: fixed;
    top: $doc-header-height + 50;
    left: 0;
    bottom: 0;
    z-index: 1;
    background: $white;
    width: 290px;
    border-right: 1px solid #eee;
    overflow: auto;
    padding-left: 35px;
    ol {
      &.introduce {
        padding-left: 5px;
        li {
          cursor: pointer;
          &:hover {
            color: $doc-default-color;
          }
        }
      }
      li {
        // height: 48px;
        line-height: 48px;
        font-size: 14px;
        color: $doc-default-nav-color;
        font-weight: bold;
        position: relative;
        &.active {
          &::before {
            position: absolute;
            content: '';
            left: 5px;
            top: 50%;
            margin-top: -10px;
            width: 10px;
            height: 22px;
            // transform: rotate(90deg);
            background: url('../../assets/images/icon-left.png')
              no-repeat;
            background-size: 100% 100%;
          }
        }
      }
      > ul {
        li {
          padding-left: 29px;
          cursor: pointer;
          &:hover {
            a {
              color: $doc-default-color;
            }
          }
          &.active {
            &::before {
              position: absolute;
              content: '';
              left: 5px;
              top: 50%;
              margin-top: -10px;
              width: 10px;
              height: 22px;
              // transform: rotate(90deg);
              background: url('../../assets/images/icon-left.png')
                no-repeat;
              background-size: 100% 100%;
            }
          }
          a {
            display: block;
            width: 100%;
            &.router-link-active {
              color: $doc-default-color !important;
            }

            &:hover {
              color: $doc-default-color;
              &:visited {
                color: $doc-default-color;
              }
            }
            &:link,
            &:visited {
              color: $title-color;
            }

            height: 100%;
            b {
              font-weight: normal;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>



