<template>
  <div class="edit-con">
    <nav-bar title="个人资料修改"></nav-bar>
    <div>
      <!--上传图片弹出-->
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
    <input type="file" accept="image/*" capture="camera" @change="chooseImg" :class="{mintCameraFile:true,hidden:ishidden}">
    <input type="file" accept="image/*"  @change="chooseImg"  :class="{mintImgFile:true,hidden:ishidden}" >
    
    <!--修改生日弹出-->
    <mt-datetime-picker
      ref="picker"
      type="date"
      v-model="pickerValue"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleConfirm">
    </mt-datetime-picker>

   <!--性别选择-->
    <mt-popup
      v-model="popupVisible"
      position="bottom">
      <div class="picker-toolbar">
        <span class="mint-datetime-action mint-datetime-cancel" @click="cancelGenderPicker">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="confirmPicker">确定</span>
      </div>
      <mt-picker :slots="slots" @change="onValuesChange">
      </mt-picker>
    </mt-popup>

    

    </div>
    <div class="edit-main">
      <section>
        <ul>
          <li class="avatar-li" @click="showUpload">
            <span class="avatar-title">头像</span>
            <span class="avatar-img">
              <img v-if="Avatar" :src="host+Avatar" alt=""><span class="avatar-icon">
                <icon name="angle-right"></icon>
              </span>
            </span>
          </li>
          <li @click="toasts">
            <span class="user-title">用户名</span>
            <span class="user-val">
                 {{ username }}
            </span>
          </li>
          <li @click="showgenderPicker">
            <span class="gender-title">性别</span>
            <span class="gender-val">
                {{ genderValue }}
            </span>
          </li>
          <li @click="showTimePicker">
            <span class="birth-title">生日</span>
            <span class="birth-val">
              {{birthday}}
            </span>
          </li>
          <li class="my-address-title"> 
            <span>我的收获地址</span>
            <router-link to="/user/edit/editAddress" class="to-edit-address">
                 <span class="edit-address"></span>
            </router-link>
          </li>
          <li>
            <span class="adress-detail my-adress">{{ address }} </span>
          </li>
        </ul>
      </section>
      <mt-button type="primary" size="large"  class="logout" @click="logout">
                 退出当前账户
      </mt-button>
    </div>
  </div>
</template>
<style>
h4{
  font-weight: normal;
  margin: 0;
}
.edit-main{
  margin-top: 1rem;
  height: 7.45rem;
  width: 100%;
  color: #232326;
}
.edit-main li{
   display: flex;
   display: -webkit-flex;
   -webkit-box-pack: justify;
   -webkit-justify-content: space-between;
   justify-content: space-between;
   -webkit-box-align: center;
   align-items: center;
   height: 1.5rem;
   border-bottom:1px solid #f8f8f8;
   padding: 0 .375rem;
   line-height: 1.5rem;
   position: relative;
   background: #fff;
}
.edit-main .avatar-li{
  height: 1.875rem;
  line-height: 1.875rem;
}

.avatar-title{
  display: inline-block;
  vertical-align: middle;
}
.avatar-img{
  height: 1.875rem;
  right: 0;
  vertical-align: middle;
}
.avatar-img img{
  max-height: 1.25rem;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
}
.avatar-icon{
   display: inline-block;
   vertical-align: middle;
   margin-left: .6rem;
   color: #ccc;
}
.avatar-icon svg{
  transform: scale(2.1);
  -webkit-transform: scale(2.1);
}
.mintImgFile,
.mintCameraFile{
   position: fixed;
   left: 0;
   width: 100%;
   opacity: 1;
   z-index: 5555555;
   font-size: 5em;
   height: 1.15rem;
   overflow: hidden;
   opacity: 0;
}
.mintImgFile{
   bottom: 1rem;
}
.mintCameraFile{
   bottom: 2.4rem;
}
.hidden{
  display: none;
}
.edit-con .mint-popup-bottom{
  width: 100%;
}

.edit-address{
  display: inline-block;
  width: .7rem;
  height: .675rem;
  background: url(../assets/edit.png) no-repeat;
  background-size: .7rem .675rem;

}
.to-edit-address{
  line-height: normal;
}

.mint-button{
  font-size: .65rem;
  height: 1.1rem;
  line-height:1.1rem;
}
</style>
<script>
import navBar from './navBar';
import provinces from "../assets/provinces";

export default {
  name:'edit',
  data(){
    return{
       host:'http://localhost:8888/',
       username:'',
       sheetVisible:false,
       actions:[
          {
            name:'拍照',
          },
          {
            name:'从相册中选择',
          }
        ],
        imgData:{
           file:null
        },
        pickerValue:'',  
        birthday:'请选择生日', //页面显示的生日
        //gender
        genderValue:'请选择性别',
        address:'',
        slotsgender:[
            {
              flex: 1,
              values: ['男', '女', '保密'],
              className: 'slot1',
              textAlign: 'center'
            }
        ],
        popupVisible:false,
        slots:null,
        detailAddress:''
    }
  },
  created(){
     this.$store.commit('update_selectedId','/newhome')  //更新selectedId
     //更新用户头像
     this.$store.dispatch('getuploadAvatar',{
          $http:this.$http
     });
     //获取用户资料
     this.$store.dispatch('getUserData',{
         $http:this.$http
     }).then(()=>{
       //获取birthday
        let newDate = new Date(this.$store.getters.get_birthday);
        console.log(newDate);
        this.birthday = newDate.getFullYear() + '-' + (newDate.getMonth()+1) + '-' + newDate.getDate();
        //获取gender
        this.genderValue = this.$store.getters.get_gender;
        //获取adress
        this.address = this.$store.getters.get_shippingAddress;
     })
     
     //获取用户名
     if(this.$store.getters.get_currentUser.username){
       //console.log(this.$store.getters.get_currentUser._id);
        this.username = this.$store.getters.get_currentUser.username;
     }
     
  },
  components:{
     navBar
  },
  computed:{
    ishidden(){   //是否隐藏头像上传input,根据弹出框的出现隐藏来判断
      return !this.sheetVisible;
    },
    Avatar(){
      return this.$store.getters.get_avatar;
    },
    //传给后台的生日,根据birthday,在月数上减1
    birth(){
     let arr = this.birthday.split('-');
     return arr[0] + '-' + (Number(arr[1]) - 1)+ '-' + arr[2];
    },
    selectedAddress(){
      return this.$store.getters.get_selectedAddress;
    },
    Address(){
      return this.selectedAddress + this.detailAddress;
    }
  },
  methods:{
     //显示头像上传弹出
       showUpload(){
          this.sheetVisible = true;
          this.ishidden = false;
       },
       //选择头像并上传
       chooseImg(e){
          let fr = new FileReader();
          fr.onload = ()=>{
             this.imgData.file = e.target.files[0];
             this.$store.dispatch('uploadAvatar',{
                $http:this.$http,
                data:{
                  avatar:e.target.files[0]
                }
              }).then((res)=>{
                if(res.data.code){
                  this.$toast({
                      message: res.data.message,
                      duration: 1000
                  });
                }else{
                  this.$toast({
                      message: '上传成功',
                      duration: 1000
                  });
                  //更新头像
                  this.$store.dispatch('getuploadAvatar',{
                    $http:this.$http
                  });
                  //将头像信息保存到本地存储
                  
                }
                console.log(res);
              })
          }
          fr.readAsDataURL(e.target.files[0]);
          this.sheetVisible = false;
       },
       //用户名提示
       toasts(){
          this.$toast({
              message: '用户名不可修改',
              duration: 1000
           });
       },
       //显示日期弹出
       showTimePicker(){
          this.ishidden = true;
          this.$refs.picker.open();
       },
       //确定日期选择并上传
       handleConfirm(value){
         this.birthday = value.getFullYear() + '-' + (value.getMonth()+1) + '-' + value.getDate();
         this.$store.dispatch('editUserData',{
            $http:this.$http,
            data:{
              birthday:this.birth
            }
         }).then((res)=>{
            if(!res.data.code){
               this.$toast({
                      message: '生日修改成功',
                      duration: 1000
               });
            }else{
              this.$toast({
                      message: res.data.code,
                      duration: 1000
              });
            }
         })

      },
      //显示性别弹出
      showgenderPicker(){
        this.ishidden = true;
        this.popupVisible = true;
        this.slots = this.slotsgender;
      },
      //性别改变时
      onValuesChange(picker,values) {
            this.genderValue = values[0];
      },
      //取消性别选择
      cancelGenderPicker(){
          this.popupVisible = false;
      },
      //确定性别选择并上传
      confirmPicker(){
          this.popupVisible = false;
          this.$store.dispatch('editUserData',{
            $http:this.$http,
            data:{
               gender:this.genderValue
            }
         }).then((res)=>{
            if(!res.data.code){
               this.$toast({
                      message: '性别修改成功',
                      duration: 1000
               });
            }else{
              this.$toast({
                      message: res.data.code,
                      duration: 1000
              });
            }
         })
      },
      //退出登录
      logout(){
        console.log(111);
          this.$store.dispatch('logout',{
            $http:this.$http
          }).then((res)=>{
             if(!res.data.code){
                 this.$toast({
                    message: '退出成功',
                    duration: 1000
                });
                this.$store.commit('update_currentUser');
                setTimeout(()=>{
                  this.$router.push('/user/login');
                },1000);
             }else{
               this.$toast({
                    message: res.data.message,
                    duration: 1000
                });
             }
          })
       }
  }
}
</script>




