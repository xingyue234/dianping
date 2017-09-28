<template>
  <div>
  <h1>订单</h1>
  </div>
</template>
<script>
export default {
    name:'order',
    data(){
      return{

      }
    },
    created(){
       this.$store.commit('update_selectedId','/order')   //更新selectedId
    },
    methods:{

    }
}
</script>


<style> 
</style>
