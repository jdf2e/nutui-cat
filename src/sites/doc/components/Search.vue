<template>
  <div class="search-box">
    <input
      type="text"
      class="search-input"
      placeholder="在 Cat 中搜索"
      v-model="searchVal"
      @blur="onblur"
      @keyup="choseList"
    />
    <ul class="search-list" v-show="searchList.length > 0">
      <li
        :class="searchCurName == item.name ? 'cur' : ''"
        @click="checklist(item)"
        v-for="(item, index) in searchList"
        :key="index"
      >
        <router-link :to="item.name.toLowerCase()">
          {{ item.name }}
          <span>{{ item.cName }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { nav } from '@/config.js';
@Component({
  components: {
    Search
  }
})
export default class Search extends Vue {
  nav: any = nav;
  navList: any = [];
  searchIndex: number = 0;
  searchCurName: string = '';
  searchList: any = [];
  searchVal: string = '';
  searchCName: string = '';
  mounted() {
    // console.log('nav', nav);
    this.nav.forEach((item) => {
      item.packages.forEach((value) => {
        if(!value.child)
        this.navList.push(value);
      });
      // console.log('search', this.navList);
    });
  };
  @Watch('searchVal')
  onSearchVal(val: any, oldVal: any){
    if(val) {
      this.searchList = this.navList.filter((item) => {
        if (item.show === false) return false;
        // console.log('item', item);
        const rx = new RegExp(val, 'gi');
        return rx.test(item.name + ' ' + item.cName + '' + item.desc);
      });
      // console.log('rx2', this.searchList.length, this.searchList);
    } else {
      this.searchCName = '';
      this.searchIndex = 0;
      this.searchList = [];
    }
  }
  onblur() {
    setTimeout(() => {
      this.searchList = [];
      this.searchVal = '';
    }, 200);
  };
  checklist() {
    this.searchVal = '';
    this.searchCurName = '';
    this.searchIndex = 0;
  };
  choseList = (e) => {
    let searchIndex = this.searchIndex;
    if (e.keyCode == 40) {
      searchIndex++;
    }
    if (e.keyCode == 38) {
      searchIndex--;
    }
    if (searchIndex < 0) {
      searchIndex = 0;
    }
    const searchList = this.searchList;
    if (searchList.length > 0) {
      const cName = searchList[searchIndex] && searchList[searchIndex].name;
      if (cName) {
        this.searchCurName = cName;
        this.searchIndex = searchIndex;
        if (e.keyCode == 13) {
          this.$router.push({
            path: '/' + searchList[searchIndex].name
          });
          this.searchCurName = '';
          this.searchIndex = 0;
          this.searchVal = '';
        }
      }
    }
  };
};
</script>
<style lang="scss">
.search-box {
  position: relative;
  min-width: 300px;
  height: 22px;
  line-height: 22px;
  .search-input {
    height: 22px;
    padding-left: 42px;
    font-size: 14px;
    vertical-align: middle;
    background-color: transparent;
    background-image: url('../../assets/images/input-search.png');
    background-repeat: no-repeat;
    font-size: 14px;
    color: #fff;
    &:focus {
      outline: none;
    }
  }
}
.search-list {
  background: #fff;
  position: absolute;
  width: 300px;
  list-style: none;
  border: 1px solid #f2f2f2;
  z-index: 99999;
  top: 27px;
  padding: 0;
  li {
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    a {
      display: inline-block;
      box-sizing: border-box;
      width: 100%;
      padding-left: 40px;
      text-decoration: none;
      color: #666;
    }
    &:hover {
      // background: #6096ff;
      color: #fa2c19;
      a {
        color: #fa2c19;
      }
    }
  }
  .cur {
    background: #fa2c19;
    color: #fff;
    &:hover {
      color: #fff;
      font-weight: bold;
      a {
        color: #fff;
      }
    }
    a {
      color: #fff;
    }
  }
}
</style>
