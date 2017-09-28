<template>
  <div class="hello">
    <nav-bar title="注册页"></nav-bar>
    <form action="" class="form-box">
      <mt-field label="用户名"  placeholder="用户名（3-20个字符之间）" v-model="field.username"></mt-field>
      <mt-field label="密码" placeholder="密码（不少于3个字符）" type="password" v-model="field.password"></mt-field>
      <mt-field label="邮箱" placeholder="邮箱" type="email" v-model="field.email"></mt-field>
      <mt-field label="手机号" placeholder="手机" type="tel" v-model="field.phone"></mt-field>
      <mt-field label="生日" placeholder="生日" type="date" v-model="field.birthday"></mt-field>
      <mt-button type="primary"  size="large" @touchstart.native="submit" class="register">注册</mt-button>
    </form>
  </div>
</template>

<script>
import navBar from './navBar';
export default {
  name: 'reg',
  data () {
    return {
      field:{
        username:'',
        email:'',
        password:'',
        phone:'',
        birthday:'',
      }
    }
  },
  created(){
    this.$store.commit('update_selectedId','/newhome')  //更新selectedId
  },
  components:{
    navBar:navBar
  },
  methods:{
    submit(){
         this.$store.dispatch('register',{
            $http:this.$http,
            data:{
            username: this.field.username,
            password: this.field.password,
            repassword: this.field.password
            }
         }).then((res)=>{
             if(!res.data.code){
               //注册成功
               this.$toast({
                message: '恭喜！注册成功！',
                duration: 1000
               });
               setTimeout(()=>{
                 this.$router.push('/user/login');
               },1000); //1s后跳转至登陆页面
               
              this.$store.commit('update_users_data',{
                          _id:res.data._id,
                          username:res.data.username
              }) //更新当前登录信息
              console.log(this.$store.getters.App_users,'所有注册的用户');
             }else{
               //注册失败
               this.$toast({
                  message: res.data.message,
                  duration: 1000
               });
               
             }
         })
    }
},



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.form-box{
  margin-top: 1rem;
}
div.mint-cell-wrapper{
      background-size: 120% 0px;
}
.form-box .mint-cell-wrapper{
  padding-left: .5rem;
}
.register{
  margin-top: .45rem;
}
.mint-cell-wrapper{
   font-size: .65rem;
   line-height: 2rem;
}
</style>
