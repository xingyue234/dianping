<template>
     <mt-header :title="title" fixed>
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>

</template>
<script>
export default {
   name:'navBar',
   props:{
     title:String
   }
}
</script>
<style>
.mint-header{
  font-size: .65rem;
  line-height: 1rem;
}
</style>


