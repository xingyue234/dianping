<template>
  <div>
    <nav-bar title="收获地址"></nav-bar>
    <ul  class="edit-main">
      <li class="address-li">
            <router-link to="/user/edit/choseAdress" class="to-chose-address">
              <span class="address-title">
                {{selectedAddress}}
              </span>
              <span class="address-val">
              </span>
            </router-link>
      </li>
      <li>
            <span>详细地址</span>
            <input type="text" placeholder="请输入街道，楼牌号等" class="adress-detail" v-model="detailAddress"> 
      </li>
      <li>
            <mt-button type="primary" size="large" @click="confirmAdress" >保存收获地址</mt-button>
      </li>
    </ul>
  </div>
</template>
<script>
import navBar from './navBar';

export default {
  name:'editAddress',
  data(){
    return{
        detailAddress:''
    }
  },
  components:{
    navBar
  },
  computed:{
   selectedAddress(){
      let address = this.$store.getters.get_selectedAddress;
      return address ? address : '所在地区';
    },
    Address(){
      return this.selectedAddress + this.detailAddress;
    }
  },
  methods:{
      //确定地址并上传
      confirmAdress(){
        let testVal = this.selectedAddress.trim();
         if( testVal == '' || testVal == '所在地区' ){
              this.$toast({
                  message: '请选择所在地区',
                  duration: 1000
               });
              return;
         }
         if(this.detailAddress.trim() == ''){
            this.$toast({
                  message: '请输入详细地址',
                  duration: 1000
            });
            return;
         }
          this.$store.dispatch('editUserData',{
            $http:this.$http,
            data:{
               shippingAddress:this.Address
            }
         }).then((res)=>{
            if(!res.data.code){
               //修改成功
               this.$toast({
                  message: '修改成功！',
                  duration: 1000
               });
               setTimeout(()=>{
                 this.$router.push('/user/edit');
               },1000)
            }else{
              //修改失败
               this.$toast({
                  message: res.data.message,
                  duration: 1000
               });
            }
         })
      }
  }
}
</script>
<style scoped>
.edit-main{
  margin-top: 1rem;
  height: 7.45rem;
  width: 100%;
  color: #232326;
}
.edit-main li{
   display: flex;
   display: -webkit-flex;
   -webkit-box-pack: justify;
   -webkit-justify-content: space-between;
   justify-content: space-between;
   -webkit-box-align: center;
   align-items: center;
   height: 1.5rem;
   border-bottom:1px solid #f8f8f8;
   padding: 0 .375rem;
   line-height: 1.5rem;
   position: relative;
   background: #fff;
}
.edit-main .address-li{
  margin-top: .25rem;
}
.to-chose-address{
  display: block;
  width: 100%;
  color: #232326;
}
.adress-detail{
   width:74%;
   height: 1.5rem;
   border-bottom:1px solid #f8f8f8;
   line-height: 1.5rem;
   box-sizing: border-box;
   position: relative;
   background: #fff;
   outline: none;
   border: none;
   font-size:.65rem;
}
.edit-main li:last-child{
  padding: 0;
}
.mint-button{
    font-size: .65rem;
    height: 1.1rem;
}
.mint-button{
  
}
</style>

