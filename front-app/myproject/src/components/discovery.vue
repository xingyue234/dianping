<template>
  <div>
  <h1>推荐</h1>
  </div>
</template>
<script>
export default {
    name:'discovery',
    data(){
      return{

      }
    },
    created(){
       this.$store.commit('update_selectedId','/discovery')  //更新selectedId
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
            console.log(this.info.length);
            this.areaProvince = input;
        },
        provinceSelected: function() {
            // 清除市级和区级列表
            this.showCityList = false;
            this.showDistrictList = false;
            // 清除市级和区级选项
            this.City = false;
            this.District = false;
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
        },
        getDistrictId: function(code, input, index) {
            this.district = code;
            this.District = input;
            // 选择当前添加active
            this.showDistrictList.map(a => a.selected = false);
            this.showDistrictList[index].selected = true;
            // 选取市区选项之后关闭弹层
            this.showChose = false;
            this.areaDistrict = input;
        },
        districtSelected: function() {
            this.showProvince = false;
            this.showCity = false;
            this.showDistrict = true;
        }
    }
}
</script>


<style> 
</style>

