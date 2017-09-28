export default {
  name: 'Shop',
  data: function(){
    return {
      host:'http://localhost:8888/', //服务器端口
      focus:'list',  //显示的模块
      isDisabled:true, //是否禁用批量删除，根据当前被选中tr个数
      selectedIndex:[], //当前被选中的所有tr的_id
      isShowDetails:0,  //是否显示详情,根据index
      editItem:'',  //当前编辑的item
      uploadImg:{
        id:'', //要上传图片的商户id
        fileUrl:'', //上传图片的链接编码
        open:false, //上传图片弹出层显示与隐藏
        title:'',
        file:null,  //上传的图片信息
        progress:0,  //上传图片进度
        description:''  //图片描述
      },
      popup:{              //提示层数据
					   position:'top',
						 open:false,
						 overlay:false,
						 message:'添加失败',
						 error:true  //错误类型，为Boolean,根据它来改变样式
			},
      addShopMsg:{    //添加数据
         name:'',
         typename:'', //商户类型名称（参考）
         phone:'',
         address:'',
         description:''
      },
      editShopMsg:{     //编辑数据
         name:'',
         _id:'',
         typeId:'',  //商户类型_id
         phone:'',
         address:'',
         description:''
      },
      dialog:{   //弹出层数据
        open:false,
        title:'名称',
      }
    }
  },
  created(){
     this.$store.dispatch('getShop',{
       $http:this.$http
     });
     this.$store.dispatch('getShopType',{
				$http:this.$http
			});
  },
  computed:{
    shopData(){
      //console.log(this.$store.getters.App_shopData,'shopData');
      return this.$store.getters.App_shopData;
    },
    typeData(){
     // console.log(this.$store.getters.App_shopType);
			return this.$store.getters.App_shopType;
	  },
    //return:商户类型名称对应的_id
    addTypeId(){
       let _id = '';
       this.typeData.forEach((item)=>{
          if(item.name.trim() == this.addShopMsg.typename){
                  _id = item._id;
          }
       })
       console.log(_id);
       return _id;
    }
  },
  methods:{
    // geteditTypeId(val){
    //   console.log(val)
    // },
    //显示图片上传
    showUpload(item,Title){
      this.uploadImg.open = true;
      this.uploadImg.file = null;
      this.uploadImg.title = Title;
      this.uploadImg.fileUrl = '';
      this.uploadImg.id = item._id;
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
      var _this = this;
      if(this.uploadImg.title == '上传封面图'){
          this.$store.dispatch('shopUploadCover',{
          $http:this.$http,
          data:{
            id:this.uploadImg.id,
            cover:this.uploadImg.file,
            onUploadProgress:function(e){
                _this.uploadImg.progress = parseInt( e.loaded / e.total * 100);
                console.log(_this.uploadImg.progress);
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
      }else if(this.uploadImg.title == '上传相册'){
        if(this.uploadImg.description == ''){
          this.showPopup({data:{code:1}},'请先填写简介',1000);
          return;
        }
       this.$store.dispatch('shopGallery',{
         $http:this.$http,
         data:{
           id: this.uploadImg.id,
           pic: this.uploadImg.file,
           description: this.uploadImg.description,
           onUploadProgress: function(e){
              _this.uploadImg.progress = parseInt( e.loaded / e.total * 100);
              console.log(_this.uploadImg.progress);
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
      }
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
			},
    addShop(){
        this.$store.dispatch('addShop',{
          $http:this.$http,
          data:{
            name : this.addShopMsg.name,
            type : this.addTypeId,   //商户类型_id
            phone : this.addShopMsg.phone,
            address : this.addShopMsg.address,
            description : this.addShopMsg.description
          }
        }).then((res)=>{
          //添加成功
					if(!res.data.code){
              this.showPopup(res,'添加成功');
							//跳转到列表
			      	this.click('list');
					}else{
						 //添加失败
					  	this.showPopup(res);
					}
            //console.log(res);
        })
    },
    showEditShop(item){
       // console.log(item);
        this.dialog.open = true;
        this.dialog.title = '商户名称《'+ item.name + '》';
        this.editShopMsg = {
             name: item.name,//商户名称
             typeId: item.type._id, //商户类型名称
             _id: item._id,//商家_id
             phone: item.phone,//商户电话
             address: item.address,//商家地址
             description: item.description           //商家描述
        };
        this.editItem = item;//将编辑时的item存下来，以便提交的时候读
        console.log(this.editShopMsg.typeId,'44444');
		},
    editShop(){
          this.$store.dispatch('editShop',{
					    $http : this.$http,
							data:{
                _id : this.editShopMsg._id,
                name : this.editShopMsg.name,
                type : this.editShopMsg.typeId,
                phone : this.editShopMsg.phone,
                address : this.editShopMsg.address,
                description : this.editShopMsg.description
              }
			  	}).then((res)=>{
						if(!res.data.code){
              this.showPopup(res,'修改成功',500);
							 //修改后更新数据
							this.$store.dispatch('getShop',{
								$http:this.$http
							});
							this.dialog.open = false;
						}else{
							//修改失败，数据不做更改
							this.showPopup(res);
						}
             console.log(res,'editData');
					})
			},
      //删除商家
			deleteShop(id){

				this.$store.dispatch('deleteShop',{
					    $http:this.$http,
							data:{
                id : id
              }
				}).then((res)=>{
					 if(!res.data.code){
               this.showPopup(res,'删除成功');
							 //删除后更新数据
							this.$store.dispatch('getShop',{
								$http:this.$http
							});
							// //删除后禁用批量删除
							// this.isDisabled = true;
					 }else{
						   this.showPopup(res);
					 } 
           //console.log(res,'删除后返回的数据');
				})
			}
  },
  
}