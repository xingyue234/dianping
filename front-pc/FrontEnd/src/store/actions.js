export default{
	// 商家类型

	//发送给mutations
	//https://github.com/zmouse/dianping.git     更新数据的
	getShopType(store,{$http}){
		$http({
			//默认是get方式
			url:'http://localhost:8888/admin/shoptype'
		}).then((respose)=>{
				store.commit('update_shopType_Data',respose.data);
			  //console.log(respose.data,'后数据');  //后台数据
			});
	},
	//提交新的商家类型
	addShopType(store,{$http,data}){
   let config = {
		 headers: {'content-type': 'application/x-www-form-urlencoded'}
	 }
	 //返回的数据作为dispatch的返回结果
		return $http.post('http://localhost:8888/admin/shoptype/add',"name="+data.name,config);
	},
	//删除数据
	deleteShopType(store,payload){
	    	//内部返回一个Promise对象
    return payload.$http.get('http://localhost:8888/admin/shoptype/delete?id='+payload.id);
	},
	editShopType(store,payload){
		let config = {
		 headers: {'content-type': 'application/x-www-form-urlencoded'}
	 }
    return payload.$http.post('http://localhost:8888/admin/shoptype/edit',
		"id="+payload.id+"&name="+payload.name, config );
	},




	//商家
	getShop(store,payload){
		payload.$http.get('http://localhost:8888/admin/shop').then((respose)=>{
				store.commit('update_shop_Data',respose.data);
			  //console.log(respose,'后台数据');  //后台数据
			});
	},
	//提交新的商家类型
	addShop(store,payload){
   let config = {
		 headers: {'content-type': 'application/x-www-form-urlencoded'}
	 }
	 //返回的数据作为dispatch的返回结果
		return payload.$http.post('http://localhost:8888/admin/shop/add',
		"name="+payload.data.name
		+"&type="+payload.data.type
		+"&phone="+payload.data.phone
		+"&address="+payload.data.address
		+"&description="+payload.data.description
		,config);
	},
	editShop(store,payload){
    return payload.$http.post('http://localhost:8888/admin/shop/edit',
		"id="+payload.data._id
		+"&name="+payload.data.name
		+"&type="+payload.data.type
		+"&phone="+payload.data.phone
		+"&address="+payload.data.address
		+"&description="+payload.data.description
		);
	},
	deleteShop(store,{$http,data}){

		return $http({
			url:'http://localhost:8888/admin/shop/delete?id='+data.id,
		})

	},
	//商家相册上传
	shopGallery(store,{$http,data}){
    //通过formdata对象可以把数据解析成formdata格式，二进制
		console.log(data);
		let fd = new FormData();
        fd.append('id', data.id);
        fd.append('pic', data.pic);
				fd.append('description', data.description);
        console.log(fd);
        return $http({
            method: 'POST',
            url: 'http://localhost:8888/admin/shop/gallery',
            data: fd,
            onUploadProgress: data.onUploadProgress
        });
	},
 //商家相册删除
  deleteGallery(store,{$http,data}){
        return $http({
            url: 'http://localhost:8888/admin/shop/gallery/delete',
            params: data
        });
	},
	//商户封面图片上传
	shopUploadCover(store,{$http,data}){
		//通过formdata对象可以把数据解析成formdata格式，二进制
		let fd = new FormData();
        fd.append('id', data.id);
        fd.append('cover', data.cover);
        console.log(fd);
        return $http({
            method: 'POST',
            url: 'http://localhost:8888/admin/shop/cover',
            data: fd,
            onUploadProgress: data.onUploadProgress
        });
	},

	//商品封面图片上传
	goodsUploadCover(store,{$http,data}){
		//通过formdata对象可以把数据解析成formdata格式，二进制
		let fd = new FormData();
        fd.append('id', data.id);
        fd.append('cover', data.cover);
        console.log(fd);
        return $http({
            method: 'POST',
            url: 'http://localhost:8888/admin/goods/cover',
            data: fd,
            onUploadProgress: data.onUploadProgress
        });
	},



	//商品
	//获取商品
	getGoods(store,{$http}){
      $http.get('http://localhost:8888/admin/goods').then((respose)=>{
				//console.log(respose);
             store.commit('update_goods_Data',respose.data);
			});
	},

	//添加商品
	addGoods(store,{$http,data}){
    return $http.post('http://localhost:8888/admin/goods/add',
		 "name="+data.name+"&shop="+data.shop);
	},
	//编辑商品
	editGoods(store,{$http,data}){
      return $http.post('http://localhost:8888/admin/goods/edit',
			"id="+data._id+"&name="+data.name+"&shop="+data.shop)
	},
	//删除商品
	deleteGoods(store,{$http,data}){
      return $http.get('http://localhost:8888/admin/goods/delete?id='+data.id)
	},

	
	getShopName(store,id){
		// console.log(id,'getid');
				let name = '';
				store.state.APP.ShopData.forEach((item)=>{
							if(item._id == id){
									name = item.name;
							}
				});
				return name;
	},

	//相册
	//获取相册
	


}
