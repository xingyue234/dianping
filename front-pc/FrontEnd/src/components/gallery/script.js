export default{
  name:'gallery',
  data:function(){
    return {
        checkedAll:false,
        host: 'http://localhost:8888/',
        focus:'list',  //显示的模块
        typename:'',   //添加的相册，双向绑定
        isDisabled:true, //是否禁用批量删除
        checkImg:true,  //check选中与否
        checkedIndex: [],  //被选中的图片的index  数组
        dialog:{   //弹出层信息
					 open:false,
					 title:'名称',
			  },
        popup:{              //提示层数据
          position:'top',
          open:false,
          overlay:false,
          message:'添加失败',
          error:true  //错误类型，为Boolean,根据它来改变样式
       },
       uploadImg:{
        fileUrl:'', //上传图片的链接编码
        open:false, //上传图片弹出层显示与隐藏
        file:null,  //上传的图片信息
        progress:0,  //上传图片进度
        description:''  //图片描述
      },
      shopId:  this.$route.params.id,  //商品所属商家_id
    }
  },
  computed:{
    shopData(){
      //console.log(this.$store.getters.App_shopData,'shopData');
      return this.$store.getters.App_shopData;
    },
    //获取当前商家的相册数据
    galleryData(){
      let data = [];
      let shopItem = this.shopData.filter((item)=>{
            return item._id == this.shopId;
      });
      shopItem.forEach((item)=>{
          data = item.gallery;
      });
      //添加一个checked属性
      data.forEach((item)=>{
           item.checked = false;
      })
      console.log(data);
      return data;
    },
    shopName(){
      this.shopData.forEach((item)=>{
              if(item._id == this.shopId){
                  let name = item.name;
              }
      })
      return name;
    }
  },
  created(){
   this.$store.dispatch('getShop',{
       $http:this.$http
   })
  },
  methods:{
    //点击全选的时候
    changeAll(){
      this.galleryData.forEach((item)=>{
         item.checked = this.checkedAll;
      })
    },
    //控制批量删除是否禁用
    changeCheck(){
      let len = this.galleryData.filter((item)=>{
                return  item.checked
        }).length
       this.isDisabled =  len > 1 ? false : true; 
       console.log(len);
       this.checkedAll = len == this.galleryData.length;
    },
    //显示图片上传
    showUpload(item){
      this.uploadImg.open = true;
      this.uploadImg.file = null;
      this.uploadImg.fileUrl = '';
      this.uploadImg.progress = 0;
    },
    //选择图片
    chooseImg(e){
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = ()=>{
        if(!/image\/\w+/.test(e.target.files[0].type)){ 
          alert("文件必须为图片！"); 
          return false; 
      } 
      this.uploadImg.fileUrl = reader.result;
      this.uploadImg.file = e.target.files[0];
          //console.log(e.target.files[0]);
          //console.log(this.uploadImg.fileUrl);
     }
    },
    //确定图片上传
    uploadCover(){
      if(!this.uploadImg.fileUrl){
          this.showPopup({data:{code:1}},'请先选择图片',1000);
          return;
      }
      if(this.uploadImg.description == ''){
          this.showPopup({data:{code:1}},'请先填写简介',1000);
          return;
      }
       var _this = this;
       this.$store.dispatch('shopGallery',{
         $http:this.$http,
         data:{
           id: this.shopId,
           pic: this.uploadImg.file,
           description: this.uploadImg.description,
           onUploadProgress: function(e){
              _this.uploadImg.progress = parseInt( e.loaded / e.total * 100);
           }
         }
      }).then((res)=>{
        if(!res.data.code){
            this.$store.dispatch('getShop',{
            $http:this.$http
        });
        }
        console.log(res,'图片返回数据');
      })
    },
    deleteGallery(id){

      this.$store.dispatch('deleteGallery',{
        $http:this.$http,
        data:{
          id:this.shopId,
          gid:id
        }
      }).then((res)=>{
        if(!res.data.code){
           this.showPopup(res,'删除成功',1000);
           this.$store.dispatch('getShop',{
              $http:this.$http
           })
        }else{
           this.showPopup(res);
        }
       // console.log(res);
      })
    },
    deleteAllGallery(){
      let ids = [];
        this.galleryData.forEach((item,i)=>{
          if(item.checked){
            ids.push(i);
          }
        })
        console.log(ids);
        this.$store.dispatch('deleteGallery',{
        $http:this.$http,
        data:{
          id:this.shopId,
          gid:ids.join(',')
        }
      }).then((res)=>{
        if(!res.data.code){
           this.showPopup(res,'删除成功',1000);
           this.$store.dispatch('getShop',{
              $http:this.$http
           })
        }else{
           this.showPopup(res);
        }
       // console.log(res);
      })
    },
    close(){
         this.dialog.open = false;
	  },
    click(name){
        this.isDisabled = true;
        this.focus = name;
        this.$store.dispatch('getShop',{
          $http:this.$http
        });
		},
    //提示层显示
    showPopup(res,message,time){
        time = time ? time : 2000;
        this.popup.open = true;
        //提示信息
        this.popup.message = message ? message: res.data.message;
        //错误类型
        let type = res.data.code ? true:false;
        //console.log(type);
        this.popup.error = type;
        //console.log(type);
        //2秒后提示层消失
        setTimeout(()=>{
          this.popup.open = false;
        },time)
			}
     

  }
}