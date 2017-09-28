export default{
       	UI_open_toggle(state){
       		state.UI.open = !state.UI.open;
       	},
       	update_shopType_Data(state,data){
       		state.APP.shopType = data;  //data后台返回的数据
       	},
				update_shop_Data(state,data){     //更新商家数据
            state.APP.ShopData = data;  //data后台返回的数据
				},
				update_goods_Data(state,data){
            state.APP.GoodsData = data;
				}
}
