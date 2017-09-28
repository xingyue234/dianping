import QS from 'qs'; //node里，将对象转换成参数字符串

 //通过后端代理，处理跨域，向8080发送请求时，相当于向8888发送请求

export default{
    register(store,{$http,data}){
      return $http({
        method:'POST',
        url:'/api/user/reg',
        data: QS.stringify(data)
      })
    },
    login(store,{$http,data}){
      return $http({
        method:'POST',
        url:'/api/user/login',
        data: QS.stringify(data)
      })
    },
    logout(store,{$http}){
      return $http(
        {url: '/api/user/logout'}
      )
    },
    //上传头像
    uploadAvatar(store,{$http,data}){
      let fd = new FormData();
      fd.append('avatar', data.avatar);
      console.log(data.avatar);
      return $http({
        method:'POST',
        url: '/api/user/avatar/upload',
        data: fd
      })
    },
    //获取头像
    getuploadAvatar(store,{$http}){
      $http({
        url: '/api/user/avatar',
      }).then((res)=>{
        //console.log(res);
        store.commit('update_avatar',res.data.avatar);
      })
    },
    //获取用户资料
    getUserData(store,{$http}){
       return $http({
          url: '/api/user/profile',
       }).then((res)=>{
         //console.log(res.data,'userdata');
         store.commit('update_gender',res.data.gender);
         store.commit('update_birthday',res.data.birthday);
         store.commit('update_shippingAddress',res.data.shippingAddress);
       })
    },
    //修改(上传)用户资料
    editUserData(store,{$http,data}){
        return $http({
          method:'POST',
          url: '/api/user/profile/edit',
          data: QS.stringify(data)
        })
    }

   

}