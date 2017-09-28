<template>
  <div id="app">
   
    <mu-appbar class="admin-mu-appbar" :class="{full: !UI_open}">
      <mu-icon-button icon="+" slot="left" @click.native="toggle" />
      <mu-flat-button label="待定" slot="right"/>
      <mu-flat-button href="javascript:;" label="换肤" slot="right"/>
      <mu-icon-button icon="a" slot="right"/>
    </mu-appbar>

    <left-menu></left-menu>
    <div class="admin-container" :class="{full: !UI_open}">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
	
import leftMenu from '@/components/leftMenu';

//console.log(leftMenu);

export default {
  name: 'app',
  components:{
  	leftMenu
  },
  methods:{
		toggle(){
			this.$store.commit('UI_open_toggle');
			//console.log(this.$store.getters.UI_open,'sssss');
		}
  },
  computed:{
  	UI_open(){  //UI_open 控制左侧菜单导航
  		return this.$store.getters.UI_open;
  		
  	}
  }
}
</script>

<style scoped>
  .admin-mu-appbar {
    position: fixed;
    left: 256px;
    right: 0;
    top: 0;
    width: auto;
    transition: all .45s cubic-bezier(.23,1,.32,1)
  }
  .admin-mu-appbar.full {
    left: 0;
  }

  .admin-container {
    padding-top: 84px;
    padding-left: 276px;
    transition: all .45s cubic-bezier(.23,1,.32,1)
  }
  .admin-container.full {
    padding-left: 20px;
  }
</style>
