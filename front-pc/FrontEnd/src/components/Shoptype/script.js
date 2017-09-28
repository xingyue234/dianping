	export default{
		name: 'Shoptype',
		data: function(){
			return{
				  focus:'list',  //显示的模块
				  typename:'',   //添加的商户类型名称，双向绑定
					editname:'',  //编辑的商户类型名称，双向绑定
				  isDisabled:true, //是否禁用批量删除，根据当前被选中tr个数
					selectedIndex:[], //当前被选中的所有tr的_id
					editItem:'',  //当前编辑的item
				  popup:{              //提示层数据
					   position:'top',
						 open:false,
						 overlay:false,
						 message:'添加失败',
						 error:true  //错误类型，为Boolean,根据它来改变样式
				  },
				 dialog:{   //弹出层信息
					 open:false,
					 title:'名称',
				 }
			}
		},
		created(){
//			let xhr = new XMLHttpRequest();
//			xhr.open('get','http://localhost:8888/shoptype',true);
//			xhr.onload = ()=>{
//				this.$store.commit('update_shopType_Data',
//				JSON.parse(xhr.responseText).data);
//				//console.log(JSON.parse(xhr.responseText));
//			};
//			xhr.send();
            //利用axios，包装的ajax对象
			/*this.$http.get('http://localhost:8888/shoptype').then((respose)=>{
				this.$store.commit('update_shopType_Data',respose.data.data);
			})*/
			
			//推荐的方法,通知给actions,通过actions通知给mutations来处理异步的
		//	console.dir(this.$http);
			this.$store.dispatch('getShopType',{
				$http:this.$http
			});
		},
		computed:{
			//表格数据
			tableData(){
				//console.log(this.$store.getters.App_shopType);
				 return this.$store.getters.App_shopType;
			}
		},
		methods:{
			close(){
         this.dialog.open = false;
	   	},
			//被选中的行数
			rowSelection(selectedRowsIndex){
				if(selectedRowsIndex instanceof Array && selectedRowsIndex.length > 1){
              this.isDisabled = false;  //去除禁用
				}else{
              this.isDisabled = true;   //显示禁用
				}
			 this.selectedIndex = [];
			 this.tableData.forEach( (item,index) => {
            if(selectedRowsIndex.indexOf(index) !== -1){
                this.selectedIndex.push(item._id);
						}
			 })
			 //console.log(this.selectedIndex);
			},
			//点击列表的时候向后台发送数据，以便重新更新数据
			click(name){
				 this.isDisabled = true;
         this.focus = name;
				 this.$store.dispatch('getShopType',{
					  $http:this.$http
				 });
			},
			//添加类型
			addShopType(){
				//发送数据，包括新增的typename
				this.$store.dispatch('addShopType',{
					$http:this.$http,
					data:{
						name:this.typename
					}
				}).then((res)=>{
					console.log(res);
					//添加成功
					if(!res.data.code){
              this.showPopup(res,'添加成功');
							//清空表单内容
							this.typename = '';
							//跳转到列表
			      	this.click('list');
					}else{
						 //添加失败
					  	this.showPopup(res);
					}
					
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
			showEditShopType(item){
           this.dialog.open = true;
					 this.dialog.title = '类别名称《'+ item.name + '》';
					 this.editname = item.name;   //要修改的新值
					 this.editItem = item;  //将编辑时的item存下来，以便提交的时候读取
			},
			editShopType(){
          this.$store.dispatch('editShopType',{
					    $http:this.$http,
							id: this.editItem._id,
							name : this.editname
			  	}).then((res)=>{
						if(!res.data.code){
              this.showPopup(res,'修改成功',500);
							 //修改后更新数据
							this.$store.dispatch('getShopType',{
								$http:this.$http
							});
							this.dialog.open = false;
						}else{
							//修改失败，数据不做更改
							this.showPopup(res);
						}
             //console.log(res);
					})
			},
			//删除商家类型
			deleteShopType(ids){
				//如果是事件对象，就是批量删除
				let id = ids instanceof MouseEvent ? this.selectedIndex.join(',') : ids;

				this.$store.dispatch('deleteShopType',{
					    $http:this.$http,
							id : id
				}).then((res)=>{
					 if(!res.data.code){
               this.showPopup(res,'删除成功');
							 //删除后更新数据
							this.$store.dispatch('getShopType',{
								$http:this.$http
							});
							//删除后禁用批量删除
							this.isDisabled = true;
					 }else{
						   this.showPopup(res);
					 } 
				})
			}
		}
	}