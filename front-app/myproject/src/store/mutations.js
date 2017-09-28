export default{

  update_users_data(state,data){
    state.APP.users.push(data);
  },
  update_currentUser(state,newUser){
     if(newUser){
       state.APP.currentUser = newUser;
     }else{
       state.APP.currentUser = {};
     }
  },
  update_isPreCookie(state,value){
      state.APP.isPreCookie = value;
  },
  update_selectedId(state,value){
       state.APP.selectedId = value;
  },
  update_avatar(state,data){
       state.APP.avatar = data;
  },
  update_gender(state,data){
      state.APP.gender = data;
  },
  update_birthday(state,data){
      state.APP.birthday = data;
  },
  update_shippingAddress(state,data){
      state.APP.shippingAddress = data;
  },
  update_selectedAddress(state,data){
      state.APP.selectedAddress = data;
  },
  
}