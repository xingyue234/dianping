<template>
  <div id="app">
     <router-view></router-view>
     <mt-tabbar v-model="selected" fixed>
        <mt-tab-item  v-for="item in homeData" :id="item.url" @click.native="tab(item.title,item.url)">
          <icon :name="item.icon" class="icon-i" :style="{transform:'scale('+navScale+')'}"></icon>
         <div class="item-title">{{ item.title }}</div>
        </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      homeData:[
        {
          title:'首页',
          url:'/',
          icon:'home'
        },
        {
          title:'发现',
          url:'/discovery',
          icon:'eye'
        },
        {
          title:'订单',
          url:'/order',
          icon:'bars'
        },
        {
          title:'我的',
          url: '/newhome',
          icon:'user'
        },
      ]
    }
  },
  computed:{
    selected(){
      return this.$store.getters.get_selectedId;
    },
    isPreCookie(){
      return this.$store.getters.get_isPreCookie;
    },
    navScale(){
      return document.documentElement.clientWidth/16/20;
    }
  },
  created(){  
    if(this.isPreCookie && this.$cookie.get('userinfo')){
          let cookie = JSON.parse(this.$cookie.get('userinfo'));
          console.log(cookie,'app');
          this.$store.commit('update_currentUser',cookie)
    }
  },
  methods:{
    tab(id,url){
      this.$router.push(url);
    },
  },
}
</script>

<style lang="less">
@import './style/common.css';

#app{
  width: 100%;
  height: 100%;
}
.mint-tab-item-label{
  font-size: .6rem;
}
.mint-tab-item{
    padding: .35rem 0;
}
.icon-i{
  margin-bottom: .275rem;
  margin-top:.125rem;
} 
</style>
