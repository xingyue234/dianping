<template>
  <div id="index">
       <div class="search">
         <span>
           <icon name="search" class="search-icon" :style="{transform:'scale('+searchScale+')'}"></icon>
           <span>
             搜索商家、商品名称
           </span>
            </span>
        </div>
        <div class="main-con">
            <div class="swip-box">
            <mt-swipe  :auto="1000000">
              <mt-swipe-item>
                <ul>
                  <li>
                    <img src="../assets/swip/02.jpeg"/>
                    <span>美食</span>
                  </li>
                  <li>
                    <img src="../assets/swip/01.jpeg"/>
                    <span>甜品饮品</span>
                  </li>
                  <li>
                    <img src="../assets/swip/07.jpeg"/>
                    <span>商超便利</span>
                  </li>
                  <li>
                    <img src="../assets/swip/08.jpeg"/>
                    <span>预定早餐</span>
                  </li>
                  <li>
                    <img src="../assets/swip/09.jpeg"/>
                    <span>果蔬生鲜</span>
                  </li>
                  <li>
                    <img src="../assets/swip/04.jpeg"/>
                    <span>新店特惠</span>
                  </li>
                  <li>
                    <img src="../assets/swip/03.jpeg"/>
                    <span>准时达</span>
                  </li>
                  <li>
                    <img src="../assets/swip/02.jpeg"/>
                    <span>夜宵</span>
                  </li>
                </ul>
              </mt-swipe-item>
              <mt-swipe-item>
                <ul>
                <li>
                    <img src="../assets/swip/13.jpeg"/>
                    <span>帮买帮送</span>
                </li>
                <li>
                    <img src="../assets/swip/05.jpeg"/>
                    <span>生日蛋糕</span>
                </li>
                <li>
                    <img src="../assets/swip/16.jpeg"/>
                    <span>医药健康</span>
                </li>
                <li>
                    <img src="../assets/swip/10.jpeg"/>
                    <span>汉堡薯条</span>
                </li>
                <li>
                    <img src="../assets/swip/06.jpeg"/>
                    <span>包子粥店</span>
                </li>
                <li>
                    <img src="../assets/swip/16.jpeg"/>
                    <span>地方菜系</span>
                </li>
                <li>
                    <img src="../assets/swip/11.jpeg"/>
                    <span>披萨意面</span>
                </li>
                <li>
                    <img src="../assets/swip/15.jpeg"/>
                    <span>麻辣烫</span>
                </li>
                </ul>
              </mt-swipe-item>
            </mt-swipe>
          </div>
          <h4 class="index-title">推荐商家</h4>
          <section class="shop-list">
            <section class="list-item">
              <section class="index-tj-shop">
                <div class="logo-con">
                    <div class="logo-img">
                      <img src="../assets/shoplist/list01.jpeg" alt="">
                    </div>
                </div>
                <div class="index-main">
                    <section class="index-line">
                      <h4 class="index-shopname">
                        <span>西贝莜面村（七宝店）</span>
                      </h4>
                    </section>
                    <section class="index-line">
                        <div class="index-rateWrap">
                           <div class="rating-wrap">
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                          </div>
                          <span class="index-rate">4.8</span>
                          <span>月售1886单</span>
                        </div>
                    </section>
                    <section class="index-line">
                        <div class="index-money">
                          <span>¥0起送</span>
                          <span>配送费¥7</span>
                          <span>¥45/人</span>
                        </div>
                        <div class="index-time">
                          <span class="index-distance">1.70km</span>
                          <span class="index-timeWrap">40分钟</span>
                        </div>
                    </section>
                </div>
              </section>
            </section>
            <section class="list-item">
              <section class="index-tj-shop">
                <div class="logo-con">
                    <div class="logo-img">
                      <img src="../assets/shoplist/list02.jpeg" alt="">
                    </div>
                </div>
                <div class="index-main">
                    <section class="index-line">
                      <h4 class="index-shopname">
                        <span>汉堡王（七宝宝龙店22828）</span>
                      </h4>
                    </section>
                    <section class="index-line">
                        <div class="index-rateWrap">
                           <div class="rating-wrap">
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                          </div>
                          <span class="index-rate">4.8</span>
                          <span>月售1886单</span>
                        </div>
                    </section>
                    <section class="index-line">
                        <div class="index-money">
                          <span>¥0起送</span>
                          <span>配送费¥7</span>
                          <span>¥45/人</span>
                        </div>
                        <div class="index-time">
                          <span class="index-distance">1.70km</span>
                          <span class="index-timeWrap">40分钟</span>
                        </div>
                    </section>
                </div>
              </section>
            </section>
            <section class="list-item">
              <section class="index-tj-shop">
                <div class="logo-con">
                    <div class="logo-img">
                      <img src="../assets/shoplist/list03.jpeg" alt="">
                    </div>
                </div>
                <div class="index-main">
                    <section class="index-line">
                      <h4 class="index-shopname">
                        <span>棒约翰比萨(七宝龙城店)</span>
                      </h4>
                    </section>
                    <section class="index-line">
                        <div class="index-rateWrap">
                           <div class="rating-wrap">
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                          </div>
                          <span class="index-rate">4.8</span>
                          <span>月售1886单</span>
                        </div>
                    </section>
                    <section class="index-line">
                        <div class="index-money">
                          <span>¥0起送</span>
                          <span>配送费¥7</span>
                          <span>¥45/人</span>
                        </div>
                        <div class="index-time">
                          <span class="index-distance">1.70km</span>
                          <span class="index-timeWrap">40分钟</span>
                        </div>
                    </section>
                </div>
              </section>
            </section>
            <section class="list-item">
              <section class="index-tj-shop">
                <div class="logo-con">
                    <div class="logo-img">
                      <img src="../assets/shoplist/list04.jpeg" alt="">
                    </div>
                </div>
                <div class="index-main">
                    <section class="index-line">
                      <h4 class="index-shopname">
                        <span>周大虾龙虾盖浇饭（龙茗路店）</span>
                      </h4>
                    </section>
                    <section class="index-line">
                        <div class="index-rateWrap">
                           <div class="rating-wrap">
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                          </div>
                          <span class="index-rate">4.8</span>
                          <span>月售1886单</span>
                        </div>
                    </section>
                    <section class="index-line">
                        <div class="index-money">
                          <span>¥0起送</span>
                          <span>配送费¥7</span>
                          <span>¥45/人</span>
                        </div>
                        <div class="index-time">
                          <span class="index-distance">1.70km</span>
                          <span class="index-timeWrap">40分钟</span>
                        </div>
                    </section>
                </div>
              </section>
            </section>
            <section class="list-item">
              <section class="index-tj-shop">
                <div class="logo-con">
                    <div class="logo-img">
                      <img src="../assets/shoplist/list05.jpeg" alt="">
                    </div>
                </div>
                <div class="index-main">
                    <section class="index-line">
                      <h4 class="index-shopname">
                        <span>米番屋（七宝店）</span>
                      </h4>
                    </section>
                    <section class="index-line">
                        <div class="index-rateWrap">
                           <div class="rating-wrap">
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                          </div>
                          <span class="index-rate">4.8</span>
                          <span>月售1886单</span>
                        </div>
                    </section>
                    <section class="index-line">
                        <div class="index-money">
                          <span>¥0起送</span>
                          <span>配送费¥7</span>
                          <span>¥45/人</span>
                        </div>
                        <div class="index-time">
                          <span class="index-distance">1.70km</span>
                          <span class="index-timeWrap">40分钟</span>
                        </div>
                    </section>
                </div>
              </section>
            </section>
            <section class="list-item">
              <section class="index-tj-shop">
                <div class="logo-con">
                    <div class="logo-img">
                      <img src="../assets/shoplist/list01.jpeg" alt="">
                    </div>
                </div>
                <div class="index-main">
                    <section class="index-line">
                      <h4 class="index-shopname">
                        <span>西贝莜面村（七宝店）</span>
                      </h4>
                    </section>
                    <section class="index-line">
                        <div class="index-rateWrap">
                           <div class="rating-wrap">
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                            <icon name="star" class="star-icon" :style="{transform:'scale('+starScale+')'}"></icon>
                          </div>
                          <span class="index-rate">4.8</span>
                          <span>月售1886单</span>
                        </div>
                    </section>
                    <section class="index-line">
                        <div class="index-money">
                          <span>¥0起送</span>
                          <span>配送费¥7</span>
                          <span>¥45/人</span>
                        </div>
                        <div class="index-time">
                          <span class="index-distance">1.70km</span>
                          <span class="index-timeWrap">40分钟</span>
                        </div>
                    </section>
                </div>
              </section>
            </section>
          </section>
          <footer>

          </footer>
        </div>
  </div>
</template>
<style>
#index{
  width: 100%;
  height: 100%;
}
.main-con{
  width: 100%;
  height: 100%;
  overflow: auto;
  margin-top: 2.2rem;
  margin-bottom: 2.2rem;
}
/*
* 商家推荐
*/
h4,h3{
  margin: 0;
  font-weight: normal;
}
.shop-list{
      background-color: #fff;
}
.index-tj-shop{
    position: relative;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    color: #666;
    list-style: none;
    font-size: .293333rem;
    display: flex;
    display: -webkit-flex;
}
.logo-con{
    position: relative;
    padding: .625rem .425rem;
}
.logo-img{
    position: relative;
    width: 2.55rem;
    height: 2.55rem;
}
.logo-img img{
    display: block;
    width: 100%;
    height: 100%;
    border-radius: .073333rem;
    max-width: 100%;
}

.index-main{
  flex-direction: column;
  padding: .625rem .425rem .625rem 0;
  display: flex;
  width: 12.375rem;
  flex-grow: 1;
  -webkit-box-flex: 1;
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
  flex-direction: column;
  user-select: none;

}
.index-line{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.index-line:nth-child(2){
    margin-top: .32rem;
    line-height: .55rem;
}
.index-line:nth-child(3){
    margin-top:.3625rem;
    line-height: .5rem;
    font-size: 0.499999rem;
}
.index-shopname{
    align-items: center;
    margin: 0;
    padding: 0;
    max-width: 9rem;
    height: .675rem;
    color: #333;
    font-weight: 700;
    font-size: .65rem;
    display: flex;
    -webkit-box-align: center;
}
.index-rate{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.index-shopname span{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rating-wrap{
    position: relative;
    display: inline-block;
    vertical-align: middle;
}
.index-rate{
    margin: 0 .175rem;
    color: #ff6000;
}
.index-shopname::before{
    margin-right: .2125rem;
    padding: 0 .106675rem;
    height: .65rem;
    border-radius: .100rem;
    background-color: #ffd930;
    color: #52250a;
    content: "\54C1\724C";
    vertical-align: top;
    text-align: center;
    white-space: nowrap;
    font-weight: 700;
    font-size: .46666rem;
    line-height: .65rem;
}
.index-rateWrap{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: .499999rem;
}
.index-money{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
}
.index-distance{
      color: #999;
}
.index-timeWrap{
      color: #2395ff;
}
.index-timeWrap::before{
     margin: 0 .125rem;
    color: #ddd;
    content: "/";
}
.index-money span+span:before {
    margin: 0 .128rem;
    color: #ddd;
    content: "/";
}
.mint-tab-container{
  overflow: visible;
}
.mint-tab-item-icon{
  width: auto;
  height: auto;
}
.mint-tab-item-icon > *{
  width: auto;
  height: auto;
}
.mint-tab-item-icon img{
    width: 100%;
    margin: 0 auto;
}
.mint-cell-value{
  width: 100%;
}
#index .mint-cell-wrapper{
  padding: 0;
}
.search{
  position: fixed;
  top: 0;
  left: 0;
  height: 2.2rem;
  width: 100%;
  background: #0096ff;
  text-align: center;
}
.search>span{
   position: absolute;
   display: block;
   width: 90%;
   height: 1rem;
   background: #fff;
   border-radius: 2.5em;
   margin: 0;
   text-align: center;
   line-height: 1rem;
   left: 50%;
   top: 50%;
   margin-left: -45%;
   margin-top: -.4rem;
   color: #666666;
}

.search-icon{
   color:#999999;
   transform: scale(1.5);
}
.search-icon path{
  font-size: 555px;
}
.swip-box{
  width: 100%;
  overflow: hidden;
}
.swip-box .mint-swipe{
    height: 7.55rem;
}
.mint-swipe-item ul{
  width: 100%;
  background: #fff;
  height: 7.55rem;
}
.mint-swipe-item ul li{
  list-style: none;
  float: left;
  width: 25%;
  height: 2.75rem;
  text-align: center;
  margin-top: .45rem;
  
}
.mint-swipe-item ul li img{
    width: 1.9rem;
    height: 1.9rem;

}
.mint-swipe-item ul li span{
    display: block;
    font-size: .6rem;
    margin-top: .2rem;
}
.mint-swipe-indicator{
    opacity: .2;
    width: .2rem;
    height: .2rem;
    margin: .075rem;
}
.mint-swipe-indicator.is-active{
    opacity: .5;
    background: #000;
}
/* 推荐商家 */
.index-title{
    margin-top: .425rem;
    font-weight: 600;
    background-color: #fff;
    border-top: 1px solid #eee;
    font-size: .675rem;
    padding: .675rem .427rem 0;
}
.shop-list{
  background: #fff;

}
.list-item{
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  color: #666;
  list-style: none;
  font-size: .293333rem;
}
.star-icon{
  color: #ffaa0c;
}

</style>
<script>
export default {
  name:'index',
  data(){
    return {
    }
  },
  created(){
     this.$store.commit('update_selectedId','/')  //更新selectedId
  },
  methods:{
  },
  computed:{
    searchScale(){
      return document.documentElement.clientWidth/16/26;
    },
    starScale(){
      return document.documentElement.clientWidth/16/36;
    }
  }
}
</script>
