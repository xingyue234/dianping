export default{
    name:'goods',
    data:function(){
      return{
          focus:'list',  //显示的模块
					editname:'',  //编辑修改的商品名称，双向绑定
				  isDisabled:true, //是否禁用批量删除，根据当前被选中tr个数
					selectedIndex:[], //当前被选中的所有item的_id,用于传给后台批量删除的
					editItem:'',  //当前编辑的item
				  popup:{              //提示层数据
					   position:'top',
						 open:false,
						 overlay:false,
						 message:'添加失败',
						 error:true  //错误类型，为Boolean,根据它来改变样式
				  },
          add:{      //添加信息
            goodname:''
          },
          edit:{    //编辑信息
             goodname:''
          },
				 dialog:{   //弹出层信息
					 open:false,
					 title:'名称',
				 },
         shopId:  this.$route.params.id,  //商品所属商家_id
         shopName: null,
         uploadImg:{
            id:'', //要上传图片的商户id
            fileUrl:'', //上传图片的链接编码
            file:null,  //上传的图片信息
            progress:0,  //上传图片进度
            isSuccess:false   //是否上传成功
        },
        host:'http://localhost:8888/'
        
         
      }
    },
    created(){  //组件创建的时候
     this.$store.dispatch('getGoods',{
					  $http:this.$http
		 });

    //  console.log(this.$store.dispatch('getShopName',this.shopId))

     this.$store.dispatch('getShopName',this.shopId).then((value)=>{
       this.shopName = value;
     });
    },
    computed:{
      goodsData(){
        //console.log(this.$store.getters.App_GoodsData)
       let newData = this.$store.getters.App_GoodsData.filter((item)=>{
                 return item.shop._id == this.shopId;
        });
        //console.log(newData);
        return newData;
			}
    },
    methods:{
      close(){
        this.dialog.open = false;
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
      click(name){
         this.focus = name;
         this.$store.dispatch('getGoods',{
					  $http:this.$http
				 });
      },
      addGoods(){
        this.$store.dispatch('addGoods',{
            $http:this.$http,
            data:{
               name:this.add.goodname,
               shop:this.shopId
            }
        }).then((res)=>{
					//添加成功
					if(!res.data.code){
              // console.log('成功');
              this.showPopup(res,'添加成功');
							//清空表单内容
							this.add.goodname = '';
							//跳转到列表
			      	this.click('list');
					}else{
						 //添加失败
					  	this.showPopup(res);
					}
					
				});
      },
      //通过rowSelection监听被选中的行数
			rowSelection(selectedRowsIndex){
				if(selectedRowsIndex instanceof Array && selectedRowsIndex.length > 1){
              this.isDisabled = false;  //去除禁用
				}else{
              this.isDisabled = true;   //显示禁用
				}
			 this.selectedIndex = [];
			 this.goodsData.forEach( (item,index) => {
            if(selectedRowsIndex.indexOf(index) !== -1){
                this.selectedIndex.push(item._id);
						}
			 })
			 //console.log(this.selectedIndex);
			},
      deleteGoods(ids){
         //如果是事件对象，就是批量删除
				  let id = ids instanceof MouseEvent ? this.selectedIndex.join(',') : ids;
          
          this.$store.dispatch('deleteGoods',{
            $http:this.$http,
            data:{
                id:id
            }
          }).then((res)=>{
              if(!res.data.code){
               this.showPopup(res,'删除成功');
							 //删除后更新数据
                this.$store.dispatch('getGoods',{
                    $http:this.$http
                })
					 }else{
						   this.showPopup(res);
					 } 
          })
      },
      showeditGoods(item){
        //编辑名称
        this.dialog.open = true;
        this.editItem = item; //将编辑时的item存下来，以便提交的时候读取
        this.dialog.title = '编辑《'+ item.name + '》';
        this.editname = item.name;   //要修改的新值
        //编辑图片
        this.uploadImg.file = null;
        this.uploadImg.fileUrl = '';
        this.uploadImg.id = item._id;
        this.uploadImg.progress = 0;
      },
      //编辑提交
      editGoods(){
          this.$store.dispatch('editGoods',{
            $http:this.$http,
            data:{
                _id  : this.editItem._id,
                name : this.editname,
                shop : this.shopId
            }
          }).then((res)=>{
						if(!res.data.code && this.uploadImg.isSuccess){
              this.showPopup(res,'修改成功',500);
							 //修改后更新数据
							this.$store.dispatch('getGoods',{
                    $http:this.$http
              })
							this.dialog.open = false;
						}else{
							//修改失败，数据不做更改
							this.showPopup(res);
						}
             //console.log(res,'编辑返回');
          })
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
         // console.log(this.uploadImg.file);
     }
    },
    //确定图片上传
    uploadCover(){
      var _this = this;
      this.$store.dispatch('goodsUploadCover',{
         $http:this.$http,
         data:{
           id:this.uploadImg.id,
           cover:this.uploadImg.file,
           onUploadProgress:function(e){
              _this.uploadImg.progress = parseInt( e.loaded / e.total * 100);
             // console.log(_this.uploadImg.progress);
           }
         }
      }).then((res)=>{
        if(!res.data.code){
            this.uploadImg.isSuccess = true;
        }else{
            this.uploadImg.isSuccess = false;
        }
        //console.log(res,'图片上传返回数据');
      })
    }
    }
}