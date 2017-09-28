export default{
   	UI_open(state){
   	    return state.UI.open;
   	},
   	App_shopType(state){
		   //每一次获取数据都清除所有选中的tr
		state.APP.shopType.forEach((item)=>{
			item.selected = false;
		})
   		return state.APP.shopType;
   	},
   App_shopData(state){
	  //    state.APP.ShopData.forEach((item)=>{
    //           item.isShowDetails = false;
		//  })
          return state.APP.ShopData;
   },
	 App_GoodsData(state){
        return state.APP.GoodsData;
	 }

}
