<template>
  <div id="new-home">
    <nav-bar title="我的点评"></nav-bar>
    <div class="container">
            <div class="con-header">
            <router-link to="/user/edit">
              <div class="user-box-pa">
                <div class="user-box">
                 <span class="user">
                <a href="javascript:;" class="upload-img">
                  <img :src="host+Avatar" v-if="Avatar" alt="">
                </a>
                <h4>{{ username }}</h4>
                
              </span>
              <span class="header-msg">
                <span class="user-admin">
                 账户管理 
                </span>
              </span>
              </div>
              </div>
            </router-link>
          <div class="nav">
                <router-link to="">
                  <div>
                    0
                  </div><span>
                    关注的商品
                  </span>
                  
                  </router-link><router-link to="">
                      <div>
                        0
                      </div>
                      <span>
                        关注的商户
                      </span>
                    </router-link><router-link to="">
                        <div>
                          0
                        </div>
                        <span>
                          我的收藏
                        </span>
                      </router-link>
          </div>
    </div>
    <div class="main">
      <router-link to="">
        <div class="my-item cl">
          <div class="fl">
            <span class="my-dp-icon"></span>
            <span class="my-dp-con">我的订单</span>
          </div>
          <div class="fr">
            <span class="my-dp-all-order">全部订单</span>
            <span class="my-dp-arrow">
               <icon name="angle-right"></icon>
            </span>
          </div>
        </div>
      </router-link>
      </div>
        </div>
   
    
  </div>
</template>
<script>
import navBar from './navBar';
export default {
  name:'newHome',
  data(){
    return{
      host:'http://localhost:8888/',
      username:'',
    }
  },
  created(){
    this.$store.commit('update_selectedId','/newhome')  //更新selectedId

    let currentU = this.$store.getters.get_currentUser.username;
     //console.log(currentU);
    if(currentU){
      this.username = currentU;
    }else{
      this.$router.push('/user/login');
    }
    //更新用户头像
    this.$store.dispatch('getuploadAvatar',{
          $http:this.$http
    });
    //获取用户资料
    this.$store.dispatch('getUserData',{
      $http:this.$http
    });
  },
  components:{
    navBar
  },
  computed:{
    Avatar(){
      console.log(this.$store.getters.get_avatar);
      return this.$store.getters.get_avatar;
    }
  },
  methods:{
       
  }

}
</script>

<style lang="css">
.cl:after{
  content: '';
  display: block;
  clear: both;
}
.container{
  width: 100%;
  margin-top:.95rem;
  width: 100%;
  padding-bottom: .25rem;
  font-size: .65rem;
  color: white
}
.container h4,.container a{
}

.con-header{
    width: 100%;
    overflow: hidden;
    background: #fff;
    height: 4.675rem;
}
.user-box{
  overflow: hidden;
  padding: .35rem;
  margin: 0 .375rem .25rem .1rem;
  position: relative;
  height: 1.725rem;
}

.user .upload-img{
    display: inline-block;
    width: 1.375rem;
    height: 1.375rem;
    border-radius: 50%;
    position: relative;
    vertical-align: middle;
    margin-left: .25rem;
    border: none;
    margin-top: .35rem;
    background: #ccc;
}
.upload-img input{
  position: absolute;
  width: 1.375rem;
  height: 1.375rem;
  font-size: 5rem;
  z-index: 44;
}
.upload-img img{
    max-width: 1.375rem;
    max-height: 1.375rem;
    border-radius: 50%;
    position: absolute;
    z-index: 1;
    border: none;
}
.user  h4{
    position: absolute;
    top: .8rem;
    left: 2.2rem;
    margin: 0;
    font-size: .65rem;
}
.user{
 float: left;
 overflow: hidden;
}
.user-admin{
float: right;
}

.user-icon{
  position: absolute;
  right: 0;
  top: 0;
}
.user-icon,
.user-admin{
  display: inline-block;
  vertical-align: middle;
}
.nav{
  overflow: hidden;
  position: absolute;
  z-index: 222;
  width: 100%;
  
}
.nav a{
  width: 32.9%;
  box-sizing:border-box;
  display: inline-block;
  margin-right: .05rem;
  text-align: center;
  color: #232326;
  height: 2rem;
  line-height: 1rem;
  background: #fff;

}
.nav a span{
  display: block;
}
.nav a:last-child{
  margin-right: 0;
}
.header-msg{
  position: absolute;
  right: 0;
  top: .9rem
}
.header-msg span{
  display: inline-block;
  vertical-align: middle;
}
.header-msg .user-admin{
    margin-right: .375rem;
}
.main{
  margin-top: .25rem;
  color: black;
  overflow: hidden;
  height: 1.4rem;
  padding: 0 .25rem;
  background: #fff;
  line-height: 1.4rem;
}
.main a{
  display: block;
  overflow: hidden;
}
.fl{
  float: left;
}
.fr{
  float: right;
}

.my-item span{
  display: inline-block;
  vertical-align: middle;
}
.my-item .my-dp-icon{
    width: .375rem;
}
.my-dp-con{
  color: #232326;
}
.my-dp-all-order{
    color: #848689;
    margin-right: .1rem;
}


.my-dp-arrow{
  height: 100%;
  line-height: 100%;
}
.my-dp-arrow svg{
    color: #848689;

}

#new-home .mint-popup-bottom{
  width: 100%;
}
#new-home .mint-actionsheet-listitem{
  position: relative;
  overflow: hidden;
}
.user-box-pa{
  overflow: hidden;
  background: #26a2ff;
  color: white;
}
</style>

