<template>
  <div>
    <div class="header">
      <nav-bar title="登录页"></nav-bar>
      <div class="avator">
        <img src="../assets/sg20.jpg" alt="">
      </div>
    </div>
    <div class="login">
      <mt-field label="用户名"  placeholder="用户名" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="密码" type="password" v-model="password"></mt-field>
      <div class="pre-info"   @touchstart="isChecked" >
        <a href="javascript:;" :class="{selected:checked}">
          <icon name="check-square-o" class="check-btn"></icon>
        </a>
        <span>下次自动登录</span>
      </div>
      <mt-button type="primary" size="large" @click="submit" class="login-btn">登录</mt-button>
    </div>
    <div class="tips">
     <router-link to="/user/reg" class="to-reg">立即注册</router-link>
    </div>
  </div>
</template>

<script>
import navBar from './navBar';
export default {
  name:'login',
  data(){
    return {
      username:'',
      password:'',
      checked: this.$store.getters.get_isPreCookie
    }
  },
  components:{
    navBar
  },
  created(){
     this.$store.commit('update_selectedId','/newhome')  //更新selectedId
  },
  methods:{
     submit(){
          this.$store.dispatch('login',{
            $http:this.$http,
            data:{
              username:this.username,
              password:this.password
            }
          }).then((res)=>{
            if(!res.data.code){
               this.$toast({
                  message: '登录成功！',
                  duration: 1000
               });
               this.$store.commit('update_currentUser',{
                     _id:res.data._id,
                     username:res.data.username
               });
               this.$router.push('/newhome'); //跳转至个人中心
               
            }else{
              this.$toast({
                  message: res.data.message,
                  duration: 1000
               });
            }
          })
     },
     isChecked(){
        this.checked = !this.checked;
        this.$store.commit('update_isPreCookie',this.checked);
     }

  }

}
</script>
<style>
.mint-toast-text{
  font-size: .65rem;
}
.tips{
  float: right;
  margin: .25rem .25rem 0 0;
}

.login-btn{
  margin-top: .75rem;
}
input{
  font-family: Helvetica, sans-serif;
  font-size: 0.8em;
}
.pre-info{
  margin: .25rem 0 0 .2rem;
  height: .5rem;
  position: relative;
  z-index: 222222;
}
.mint-button{
   font-size: .65rem;
   height: 1.25rem;
}

.pre-info a,
.pre-info span,
.pre-info svg
{
  display: inline-block;
  vertical-align: middle;
}
.pre-info a{
  width: .5rem;
  height: .5rem;
  text-align: center;
  line-height: .5rem;
}
.pre-info a svg{
  color: #ccc;
  transform: scale(1.2);
}
a.selected svg{
    color: black;
}

.header .avator{
   width: 100%;
   height: 3rem;
   margin-top: .95rem;
   background: #26a2ff;
   text-align: center;
}
.header .avator img{
  border-radius: 50%;
  width: 1.25rem;
  height:1.25rem;
  margin-top: .625rem;
}
.to-reg{
  color: #000;
}
.mint-cell{
  line-height: 1.2rem;
}
.login .mint-cell-wrapper{
  padding-left: .5rem;
}
.mint-field .mint-cell-title{
  width:2.625rem;
}
.mint-cell-wrapper{
   font-size: .65rem;
   line-height: 2rem;
}
.mint-header{
    font-size: .65rem;
    line-height: 1rem;
    height:1.25rem;
}
.mintui{
  font-size: .65rem;
}
</style>

