<template>
  <div>
    <mu-raised-button label="获取分类数据" @click="getShopType" />
    <mu-raised-button label="添加商户分类" />
    <mu-table multiSelectable enableSelectAll ref="table">
      <mu-thead>
        <mu-tr>
          <mu-th>ID</mu-th>
          <mu-th>Name</mu-th>
        </mu-tr>
      </mu-thead>
      <mu-tbody>
        <mu-tr v-for="user,index in users">
          <mu-td>{{index+1}}</mu-td>
          <mu-td>{{user.name}}</mu-td>
        </mu-tr>
      </mu-tbody>
    </mu-table>
  </div>
</template>
<script>
export default {
  name: 'Index',
  data: function() {
    return {
      users: []
    }
  },
  methods: {
    getShopType() {
      var xhr = new XMLHttpRequest();
      xhr.open('get', 'http://localhost:8888/admin/shoptype', true);
      xhr.onload = () => {
        //console.log(JSON.parse(xhr.responseText));
        this.users = JSON.parse(xhr.responseText);
      }
      xhr.send();
    }
  }
}
</script>
