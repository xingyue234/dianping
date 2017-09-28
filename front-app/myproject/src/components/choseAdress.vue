<template>
  <div>
     <nav-bar title="选择地址"></nav-bar>

      <!-- 居住地址三级联动选项 -->
    <section class="showChose" v-show="true" :style="'height:'+ boxheight">
          <section class="address">
            <section class="title">
              <div :class="{area:true,selecteddiv:!Province}" @click="provinceSelected()">
                 {{Province?Province:'请选择'}}
              </div>
              <div :class="{area:true,selecteddiv:!City}" @click="citySelected()" v-if="Province" >
                 {{City?City:'请选择'}}
              </div>
              <div :class="{area:true,selecteddiv:!District}" @click="districtSelected()" v-if="City">
                 {{District?District:'请选择'}}
              </div>
            </section>
            <div class="con">
              <ul v-if="showProvince">
               <li class="addList" v-for="(v,k) in info"
                   @click="getProvinceId(v.id, v.name, k)"
                   :class="{'active':v.selected}">{{v.name}}
                   <span v-if="v.selected"></span></li>
              </ul>
              <ul v-if="showCity">
                <li class="addList" v-for="(v,k) in showCityList"
                   @click="getCityId(v.id, v.name, k)"
                   :class="{'active':v.selected}">{{v.name}}
                   <span v-if="v.selected"></span></li>
              </ul>
               <ul v-if="showDistrict">
                 <li class="addList" v-for="(v,k) in showDistrictList"
                   @click="getDistrictId(v.id, v.name, k)"
                   :class="{'active':v.selected}">{{v.name}}
                   <span v-if="v.selected"></span></li>
               </ul>
            </div>
    </section>
  </section>
  </div>
</template>
<script>
import navBar from './navBar';
import provinces from "../assets/provinces";
export default {
  name:'choseAdress',
  components:{
    navBar,
  },
  data(){
    return{
      //三级联动菜单
      personAddress:'',
      pageTitle: '居住地址',
      District: '',
      Province: '',
      City: '',
      address: '',
      showProvince: true,
      showCity: false,
      showDistrict: false,
      showCityList: false,
      showDistrictList: false,
      province: 5,
      city: 3,
      district: 57,
      GetProvinceId: 2,
      areaProvince: '',
      areaCity: '',
      areaDistrict: '',
      // v-for循环判断是否为当前
      selected: false,
      info:provinces,
    }
  },
  methods:{
      // 三级联动菜单
      //返回city 或者 district 对象
      _filter(add, name, code) {
            let result = [];
            for (let i = 0; i < add.length; i++) {
                if (code == add[i].id) {
                    result = add[i][name];
                }
            }
            return result;  
      },
      getProvinceId: function(code, input, index) {  //id,name,index
            this.province = code; //id
            this.Province = input; //name
            this.showProvince = false;
            this.showCity = true;
            this.showDistrict = false;
            this.showCityList = this._filter(this.info, 'city', this.province);
            // 点击选择当前
            this.info.map(a => a.selected = false);
            //console.log(this.info,'info');
            this.info[index].selected = true;
            this.areaProvince = input;
        },
        provinceSelected: function() {
            // 清除市级和区级列表
            this.showCityList = false;
            this.showDistrictList = false;
            // 清除市级和区级选项
            this.City = false;
            this.District = false;
            this.Province = false;
            // 选项页面的切换
            this.showProvince = true;
            this.showCity = false;
            this.showDistrict = false;
        },
        getCityId: function(code, input, index) {
            this.city = code;
            this.City = input;
            this.showProvince = false;
            this.showCity = false;
            this.showDistrict = true;
            this.showDistrictList = this._filter(this.showCityList, 'district', this.city);
            // 选择当前添加active
            this.showCityList.map(a => a.selected = false);
            this.showCityList[index].selected = true;
            this.areaCity = input;
        },
        citySelected: function() {
            this.showProvince = false;
            this.showCity = true;
            this.showDistrict = false;

            // 清除区级和市级选项选项
            this.City = false;
            this.District = false;

            // 清除区级列表
            this.showDistrictList = false;
        },
        getDistrictId: function(code, input, index) {
            this.district = code;
            this.District = input;
            // 选择当前添加active
            this.showDistrictList.map(a => a.selected = false);
            this.showDistrictList[index].selected = true;
            this.areaDistrict = input;

            //确定并跳转
            //console.log(this.District,this.City,this.Province);
            this.$store.commit('update_selectedAddress',this.Province+this.City+this.District)
            this.$router.push('/user/edit/editAddress');
        },
        districtSelected: function() {
            this.showProvince = false;
            this.showCity = false;
            this.showDistrict = true;
        }
  },
  created(){
    
  },
  computed:{
   boxheight(){
      return (window.innerHeight - 40 - 44) + 'px';
   },
   conheight(){
       return (window.innerHeight - 40 - 44 - 44) + 'px';
   }
  }
}
</script>

<style>

/*三级联动菜单*/
.showChose {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 1rem;
        left: 0;
        z-index: 55555;
        background: #fff;
    }
    .address {
        width: 100%;
        height: 100%;
    }
    .address ul{
      box-sizing: border-box;
      width: 100%;
    }
   .address .con{
      width: 100%;
      height: 100%;
      overflow: auto;
      background: #fff;
      position: relative;
      z-index: 999999999999;
    }
    .title{
        overflow: hidden;
    }
    .title h4 {
        line-height: .45rem;
        font-weight: normal;
        color: #999;
    }
    .title span {
        margin: 1rem 0px 0 5rem;
        font-size: .9rem;
        line-height: .25rem;
        color: red;
    }
    .area {
        width: 25%;
        float: left;
        font-size: .65rem;
        height: 1.5rem;
        line-height: 1.5rem;
        text-align: center;
        color: #333;
        position: relative;
    }
    .addList {
        height: 1.5rem;
        line-height: 1.5rem;
        padding-left: .8rem;
        position: relative;
        overflow: hidden;
    }
    .addList::after{
        content: '';
        width: 100%;
        height: 1px;
        position: absolute;
        border-bottom: 1px solid #e3e5e9;
        left: 0;
        bottom: 0;
        transform: scaleY(0.5);
        -webkit-transform: scaleY(0.5);
    }
    address .title .active {
        color: #f23030;
        border-bottom: 1px solid #0071B8;
    }
    .address ul .active {
        color: #f23030;
    }
    .addList span {
        display: inline-block;
        margin-left: .375rem;
        background: url(../assets/new-address-pic.png);
        background-size: 5rem 5rem;
        background-position: 0 -100px;
        width: .3rem;
        height: .2rem;
    }
    .title .selecteddiv{
        color:#f23030;
    }
   .title .selecteddiv::after{
        width: 60%;
        height: 1px;
        border-bottom: 2px solid #f23030;
        position: absolute;
        bottom: 1px;
        left: 50%;
        content: '';
        margin-left: -30%;
    }
</style>


