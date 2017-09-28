export default{

  App_users(state){
      return state.APP.users;
  },
  get_currentUser(state){
     return state.APP.currentUser;
  },
  get_isPreCookie(state){
    return state.APP.isPreCookie;
  },
  get_selectedId(state){
    return state.APP.selectedId;
  },
  get_avatar(state){
    return state.APP.avatar;
  },
  get_gender(state){
    return state.APP.gender;
  },
  get_birthday(state){
    return state.APP.birthday;
  },
  get_shippingAddress(state){
    return state.APP.shippingAddress;
  },
  get_selectedAddress(state){
    return state.APP.selectedAddress;
  },

  
}