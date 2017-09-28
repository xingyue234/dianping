<template>
	<div>
		<mu-drawer :open="UI_open">
      <mu-appbar title="大众点评管理平台"/>
      <mu-list>

        <router-link to="/">
          <mu-list-item title="首页" />
        </router-link>
        
        <router-link to="/Shoptype">
          <mu-list-item title="商家分类管理" />
        </router-link>

        <router-link to="/shop">
          <mu-list-item title="商家管理" />
        </router-link>

        <mu-list-item title="用户管理"/>
      </mu-list>
    </mu-drawer>
	</div>
</template>

<script>
	export default{
		name:'leftMenu',
		computed:{
			UI_open(){
				return this.$store.getters.UI_open;
			}
		}
	}
</script>

<style>
</style>