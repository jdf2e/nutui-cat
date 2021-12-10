<template>
  <div class="demo">
    <h2>预告商品</h2>

    <NutRow>
      <nutcat-col :span="8" v-for="(item, index) in data6" :key="index">
       
          <NutProduct
            rowType="flex"
            gutter="2"
            :data="[item,{cName: ['name'],cImage:['image'],cPrice:['price']}]"
            iconType=""
            pricePre='预告价'
            nameRow="2"
            col="3"
            type="normal-4"
            :bottomOperate='bottomOperate'
          >
          </NutProduct>
      </nutcat-col>
    </NutRow>

      

      

      <h2>预约商品</h2>

      <NutRow>
        <nutcat-col :span="8" v-for="(item, index) in data6" :key="index">
            <NutProduct
                rowType="flex"
                gutter="2"
                :data="[item,{cName: ['name'],cImage:['image'],cPrice:['price']}]"
                iconType=""
                pricePre='预告价'
                nameRow="2"
                col="3"
                type="normal-4"
                :bottomOperate='bottomOperate1'
                linePricePre='京东价'
              >
              <NutTag class="top-tag tl" type="red-gradient">满199减100</NutTag>
            </NutProduct>
        </nutcat-col>
      </NutRow>
      

      <!-- <h2>预售商品</h2>
      <NutProductadvance></NutProductadvance> -->
  </div>
</template>
    
<script>
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('productadvance');
export default createDemo({
  props: {},
  data() {
    return {
      data6:[{
          name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
          price: '199',
          linePrice: '499',
          image:
            'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
        },
        {
          name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
          price: '199',
          linePrice: '499',
          image:
            'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
        },
        {
          name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
          price: '199',
          linePrice: '499',
          image:
            'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
        }],
      bottomOperate:{
        desc:'提醒我',
        click:(data)=>{
          console.log('跳转详情',data)
        }
      },
      bottomOperate1:{
        desc:'去预约',
        position:'right',
        renderIcon:(h)=>{
          return h('NutIcon',{
            props:{
              color:"#ffffff", 
              type:"arrow-full"
            }
          });
        },
        click:(data)=>{
          console.log('跳转详情',data)
        }
      }
    };
  }
});
</script>
    
<style lang="scss" scoped>
.nutcat-productadvance {
}
</style>
  