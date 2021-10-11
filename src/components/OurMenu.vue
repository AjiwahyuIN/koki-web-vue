<template>
    <div class="container">
    <div class="row pt-5">
      <div class="col-md-3 our_menu_wrapper" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <span class="title_menu">OUR MENU</span>
      </div>
    </div>
    <div class="row d-flex justify-content-between">
      <div class="col-md-6 desc_menu_wrapper mt-2 mb-5" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <span class="desc_menu">Menu That Always Make You Fall In Love</span>
        <img src="../assets/circle_yellow.png" width="12px" height="12px" class="circle_yellow_menu" alt="">
      </div>
      <div class="col-md-2 d-flex align-items-end btn_scroll_menu_wrapper" data-aos="fade-down-left">
        <div class="arrow_scroll_wrapper d-flex justify-content-between mb-4">
          <div @click="scroll_left" class="arrow_scroll_left_wrapper rounded-circle d-flex align-items-center justify-content-center mr-3">
            <img src="../assets/arrow-scroll-left.svg" width="26px" height="26px" alt="">
          </div>
          <div @click="scroll_right" class="arrow_scroll_right_wrapper rounded-circle d-flex align-items-center justify-content-center">
            <img src="../assets/arrow-scroll-left.svg" class="right_arrow_menu" width="26px" height="26px" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-between mb-5 pb-5">
      <div class="col-md-3 col-sm-12">
        <div class="scroll_menu_wrapper d-block" data-aos="fade-down-right">
          <div @click="changeMenu('burger')" class="item_scroll_menu rounded-pill p-3 d-flex flex-row align-items-center mt-1 mb-2" :class="(menu === 'burger')? 'menu_active' : '' ">
            <div class="icon_menu_wrapper rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
              <img src="../assets/img-burger.png" alt="" class="img_menu">
            </div>
            <span class="title_food_menu ml-3">Burger</span>
          </div>
          <div @click="changeMenu('pizza')" class="item_scroll_menu rounded-pill p-3 d-flex flex-row align-items-center mb-2" :class="(menu === 'pizza')? 'menu_active' : '' ">
            <div class="icon_menu_wrapper rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
              <img src="../assets/img-pizza.png" alt="" class="img_menu">
            </div>
            <span class="title_food_menu ml-3">Pizza</span>
          </div>
          <div @click="changeMenu('cupcake')" class="item_scroll_menu rounded-pill p-3 d-flex flex-row align-items-center mb-2" :class="(menu === 'cupcake')? 'menu_active' : '' ">
            <div class="icon_menu_wrapper rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
              <img src="../assets/img-cupcake.png" alt="" class="img_menu">
            </div>
            <span class="title_food_menu ml-3">Cupcake</span>
          </div>
          <div @click="changeMenu('ramen')" class="item_scroll_menu rounded-pill p-3 d-flex flex-row align-items-center mb-2" :class="(menu === 'ramen')? 'menu_active' : '' ">
            <div class="icon_menu_wrapper rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
              <img src="../assets/img-ramen.png" alt="" class="img_menu">
            </div>
            <span class="title_food_menu ml-3">Ramen</span>
          </div>
          <div @click="changeMenu('iceCream')" class="item_scroll_menu rounded-pill p-3 d-flex flex-row align-items-center mb-2" :class="(menu === 'iceCream')? 'menu_active' : '' ">
            <div class="icon_menu_wrapper rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
              <img src="../assets/img-icecream.png" alt="" class="img_menu">
            </div>
            <span class="title_food_menu ml-3">Ice Cream</span>
          </div>
          <div @click="changeMenu('burger')" class="item_scroll_menu rounded-pill p-3 d-flex flex-row align-items-center mt-1 mb-2" :class="(menu === 'burger')? 'menu_active' : '' ">
            <div class="icon_menu_wrapper rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
              <img src="../assets/img-burger.png" alt="" class="img_menu">
            </div>
            <span class="title_food_menu ml-3">Burger</span>
          </div>
          <div @click="changeMenu('pizza')" class="item_scroll_menu rounded-pill p-3 d-flex flex-row align-items-center mb-2" :class="(menu === 'pizza')? 'menu_active' : '' ">
            <div class="icon_menu_wrapper rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
              <img src="../assets/img-pizza.png" alt="" class="img_menu">
            </div>
            <span class="title_food_menu ml-3">Pizza</span>
          </div>
          <div @click="changeMenu('cupcake')" class="item_scroll_menu rounded-pill p-3 d-flex flex-row align-items-center mb-2" :class="(menu === 'cupcake')? 'menu_active' : '' ">
            <div class="icon_menu_wrapper rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
              <img src="../assets/img-cupcake.png" alt="" class="img_menu">
            </div>
            <span class="title_food_menu ml-3">Cupcake</span>
          </div>
          <div @click="changeMenu('ramen')" class="item_scroll_menu rounded-pill p-3 d-flex flex-row align-items-center mb-2" :class="(menu === 'ramen')? 'menu_active' : '' ">
            <div class="icon_menu_wrapper rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
              <img src="../assets/img-ramen.png" alt="" class="img_menu">
            </div>
            <span class="title_food_menu ml-3">Ramen</span>
          </div>
          <div @click="changeMenu('iceCream')" class="item_scroll_menu rounded-pill p-3 d-flex flex-row align-items-center mb-2" :class="(menu === 'iceCream')? 'menu_active' : '' ">
            <div class="icon_menu_wrapper rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
              <img src="../assets/img-icecream.png" alt="" class="img_menu">
            </div>
            <span class="title_food_menu ml-3">Ice Cream</span>
          </div>
          <div @click="changeMenu('burger')" class="item_scroll_menu rounded-pill p-3 d-flex flex-row align-items-center mt-1 mb-2" :class="(menu === 'burger')? 'menu_active' : '' ">
            <div class="icon_menu_wrapper rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
              <img src="../assets/img-burger.png" alt="" class="img_menu">
            </div>
            <span class="title_food_menu ml-3">Burger</span>
          </div>
          <div @click="changeMenu('pizza')" class="item_scroll_menu rounded-pill p-3 d-flex flex-row align-items-center mb-2" :class="(menu === 'pizza')? 'menu_active' : '' ">
            <div class="icon_menu_wrapper rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
              <img src="../assets/img-pizza.png" alt="" class="img_menu">
            </div>
            <span class="title_food_menu ml-3">Pizza</span>
          </div>
          <div @click="changeMenu('cupcake')" class="item_scroll_menu rounded-pill p-3 d-flex flex-row align-items-center mb-2" :class="(menu === 'cupcake')? 'menu_active' : '' ">
            <div class="icon_menu_wrapper rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
              <img src="../assets/img-cupcake.png" alt="" class="img_menu">
            </div>
            <span class="title_food_menu ml-3">Cupcake</span>
          </div>
          <div @click="changeMenu('ramen')" class="item_scroll_menu rounded-pill p-3 d-flex flex-row align-items-center mb-2" :class="(menu === 'ramen')? 'menu_active' : '' ">
            <div class="icon_menu_wrapper rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
              <img src="../assets/img-ramen.png" alt="" class="img_menu">
            </div>
            <span class="title_food_menu ml-3">Ramen</span>
          </div>
          <div @click="changeMenu('iceCream')" class="item_scroll_menu rounded-pill p-3 d-flex flex-row align-items-center mb-2" :class="(menu === 'iceCream')? 'menu_active' : '' ">
            <div class="icon_menu_wrapper rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
              <img src="../assets/img-icecream.png" alt="" class="img_menu">
            </div>
            <span class="title_food_menu ml-3">Ice Cream</span>
          </div>
          
        </div>
      </div>
      <div class="col-md-8" data-aos="fade-down-left">
        <div v-if="menu == 'ramen'" class="d-flex flex-row justify-content-between mb-5 pb-5 wrapper_card_slide">
        <div v-for="item in ramen" :key="item.id">
        <div class="card_detail_menu_wrapper d-flex flex-row">
            <div class="card text-white detail_menu_wrapper border-0  mr-5 w-100">
              <img :src="require(`../assets/${item.images}`)" width="420px" height="500px" class="card-img" alt="...">
              <div class="card-img-overlay ml-4 d-flex title_detail_menu_wrapper">
              <div class="card-body"></div>
              <div class="card-footer text-left w-100">
              <span class="card-title title_detail_menu">{{item.title}}</span>
              <div class="rating_detail_menu_wrapper d-flex align-items-center">
                  <span class="dollar">$</span>
                  <span class="harga_menu">7.49</span>
              </div>
              <div class="order_now_wrapper d-flex flex-row align-items-center">
                  <span class="order_now mr-2">order now</span>
                  <img src="../assets/arrow-right.webp" alt="" width="22px" height="22px" class="arrow_right" >
                  </div>
                </div>
              </div>
          </div>
          </div>
        </div>
        </div>
        <div v-if="menu == 'iceCream'" class="d-flex flex-row justify-content-between mb-5 pb-5 wrapper_card_slide">
        <div v-for="item in iceCream" :key="item.id">
        <div class="card_detail_menu_wrapper d-flex flex-row">
            <div class="card text-white detail_menu_wrapper border-0 mr-5 w-100">
            <img :src="require(`../assets/${item.images}`)" width="420px" height="500px" class="card-img" alt="...">
            <div class="card-img-overlay ml-4 d-flex title_detail_menu_wrapper">
            <div class="card-body"></div>
            <div class="card-footer text-left w-100">
            <span class="card-title title_detail_menu">{{item.title}}</span>
            <div class="rating_detail_menu_wrapper d-flex align-items-center">
                <span class="dollar">$</span>
                <span class="harga_menu">7.49</span>
            </div>
            <div class="order_now_wrapper d-flex flex-row align-items-center">
                <span class="order_now mr-2">order now</span>
                <img src="../assets/arrow-right.webp" alt="" width="22px" height="22px" class="arrow_right" >
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
        <div v-if="menu == 'cupcake'" class="d-flex flex-row justify-content-between mb-5 pb-5 wrapper_card_slide">
        <div v-for="item in cupcake" :key="item.id">
        <div class="card_detail_menu_wrapper d-flex flex-row">
            <div class="card text-white detail_menu_wrapper border-0 mr-5 w-100">
            <img :src="require(`../assets/${item.images}`)" width="420px" height="500px" class="card-img" alt="...">
            <div class="card-img-overlay ml-4 d-flex title_detail_menu_wrapper">
            <div class="card-body"></div>
            <div class="card-footer text-left w-100">
            <span class="card-title title_detail_menu">{{item.title}}</span>
            <div class="rating_detail_menu_wrapper d-flex align-items-center">
                <span class="dollar">$</span>
                <span class="harga_menu">7.49</span>
            </div>
            <div class="order_now_wrapper d-flex flex-row align-items-center">
                <span class="order_now mr-2">order now</span>
                <img src="../assets/arrow-right.webp" alt="" width="22px" height="22px" class="arrow_right" >
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
        <div v-if="menu == 'burger'" class="d-flex flex-row justify-content-between mb-5 pb-5 wrapper_card_slide">
        <div v-for="item in burger" :key="item.id">
        <div class="card_detail_menu_wrapper d-flex flex-row">
            <div class="card text-white detail_menu_wrapper border-0 mr-5 w-100">
            <img :src="require(`../assets/${item.images}`)" width="420px" height="500px" class="card-img" alt="...">
            <div class="card-img-overlay ml-4 d-flex title_detail_menu_wrapper">
            <div class="card-body"></div>
            <div class="card-footer text-left w-100">
            <span class="card-title title_detail_menu">{{item.title}}</span>
            <div class="rating_detail_menu_wrapper d-flex align-items-center">
                <span class="dollar">$</span>
                <span class="harga_menu">7.49</span>
            </div>
            <div class="order_now_wrapper d-flex flex-row align-items-center">
                <span class="order_now mr-2">order now</span>
                <img src="../assets/arrow-right.webp" alt="" width="22px" height="22px" class="arrow_right" >
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
        <div v-if="menu == 'pizza'" class="d-flex flex-row justify-content-between mb-5 pb-5 wrapper_card_slide">
        <div v-for="item in pizza" :key="item.id">
        <div class="card_detail_menu_wrapper d-flex flex-row">
            <div class="card text-white detail_menu_wrapper border-0 mr-5 w-100 bg-info">
              <img :src="require(`../assets/${item.images}`)" width="420px" height="500px" class="card-img" alt="...">
              <div class="card-img-overlay ml-4 d-flex title_detail_menu_wrapper">
                <div class="card-body"></div>
                <div class="card-footer text-left w-100">
                <span class="card-title title_detail_menu">{{item.title}}</span>
                <div class="rating_detail_menu_wrapper d-flex align-items-center">
                    <span class="dollar">$</span>
                    <span class="harga_menu">7.49</span>
                </div>
                <div class="order_now_wrapper d-flex flex-row align-items-center">
                    <span class="order_now mr-2">order now</span>
                    <img src="../assets/arrow-right.webp" alt="" width="22px" height="22px" class="arrow_right" >
                    </div>
                  </div>
              </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div class="pb-5"></div>
    </div>
</template>
<script>
import {pizza, burger, ramen,cupcake,iceCream} from '../data/menu'



export default {
    name:'OurMenu',
    components:{
    },
    data(){
        return {
        pizza,
        burger,
        ramen,
        cupcake,
        iceCream,
        menu:"pizza",
        }
    },
    methods:{
    changeMenu : function(menu) {
        this.menu = menu;
    },
    scroll_left() {
    let content = document.querySelector(".wrapper_card_slide");
    let btnArrow = document.querySelector(".arrow_scroll_left_wrapper")
    content.scrollLeft -= 50;
    btnArrow.style.backgroundColor = "rgba(245, 71, 72, 1)"

    setTimeout(() => {
    btnArrow.style.backgroundColor = "rgba(243, 243, 243, 1)"
      
    }, 100)

    
    
    },
    scroll_right() {
    let content = document.querySelector(".wrapper_card_slide");
    let btnArrow = document.querySelector(".arrow_scroll_right_wrapper")
    let rightArrow = document.querySelector(".right_arrow_menu")
    content.scrollLeft += 40;
    btnArrow.style.backgroundColor = "rgba(245, 71, 72, 1)"
    rightArrow.style.fill = "#fff"

    setTimeout(() => {
    btnArrow.style.backgroundColor = "rgba(243, 243, 243, 1)"
      
    }, 100)
    }
    }
}
</script>
<style scoped>
.wrapper_card_slide::-webkit-scrollbar {
  display: none;
}
.right_arrow_menu{
  transform: rotate(180deg);
}
.arrow_scroll_left_wrapper{
  width: 66px;
  height: 66px;
  background-color: rgba(243, 243, 243, 1);
}
.arrow_scroll_right_wrapper{
  width: 66px;
  height: 66px;
  background-color: rgba(243, 243, 243, 1);
}
.scroll_active {
  background-color: rgba(245, 71, 72, 1);
}
.title_menu{
    font-size: 18px;
    font-weight: 600;
    color: rgba(245, 71, 72, 1);
}
.desc_menu_wrapper{
    position: relative;
}
.desc_menu {
    font-size: 48px;
    font-weight: 600;
    color: rgba(46, 46, 46, 1);
}
.circle_yellow_menu{
    position: absolute;
    right: 0;
    top: 0;
}
.scroll_menu_wrapper{
    width: 320px;
    height: 500px;
    overflow-y: auto;
}
.item_scroll_menu{
    background-color: #fff;
    width: 85%;
}
.item_scroll_menu:hover{
    background-color: rgba(245, 71, 72, 1);
    transition: 800ms;
}
.item_scroll_menu:hover .title_food_menu{
    color:#fff; 
    font-weight: 600;
}
.menu_active, .menu_active span{
    background-color: rgba(245, 71, 72, 1);
    color:#fff; 
    font-weight: 600;
}
.icon_menu_wrapper{
    background-color: rgba(255, 255, 255, 1);
}
.title_food_menu{
    font-size: 22px;
    font-weight: 400;
    color: rgba(46, 46, 46, 1);
}
.detail_menu_wrapper{
    min-width: 420px !important;
    min-height: 500px !important;
    border-radius:30px;
    position: relative;
    overflow-x: auto !important;
    display: block;
    object-fit: cover;
}
.wrapper_card_slide{
    overflow-x: auto;
}
.detail_menu_wrapper::after{
    content:'';
    position:absolute;
    left:0; 
    top:0;
    width:100%; 
    height:100%;
    border-radius: 30px;
    display:inline-block;
    background: linear-gradient(to bottom, rgba(0,47,75,0) 0%,rgba(0, 0, 0, 0.5) 100%);
}
.card_detail_menu_wrapper{
    overflow-x: auto;
}
.title_detail_menu{
    font-size: 36px;
    font-weight: 600;
    color: #fff;
    z-index: 100;
    position: relative;
}
.dollar{
    font-size: 18px;
    color: #FDC55E;
    z-index: 100;
    position: relative;
}
.harga_menu{
    font-size: 36px;
    color: #fff;
    z-index: 100;
    position: relative;
}
.order_now{
    font-size: 18px;
    color: #fff;
    font-weight: 600;
    z-index: 100;
    position: relative;
}
.arrow_right{
    color: #fff;
    z-index: 100;
    position: relative;
}
.card-footer {
    padding: 0!important;
    background-color: unset!important;
    border-top: unset!important;
}

.text-center {
    color: #fff;
}

.card-img-overlay {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;   
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) { 
  .detail_menu_wrapper{
    margin-right: 14px !important;
  }
  .wrapper_card_slide{
    margin-bottom: 0px !important;
    padding-bottom: 0px !important;
  }
  .title_menu{
    font-size: 14px;
  }
  .desc_menu{
    font-size: 34px;
  }
  .circle_yellow_menu{
    right: 20px;
  }
  .btn_scroll_menu_wrapper{
    display: none !important;
  }

 }

/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) { 
  .our_menu_wrapper{
    margin-top: 50px;
  }
  .scroll_menu_wrapper{
    display: flex !important;
    flex-direction: row !important;
    overflow-y: hidden;
    overflow-x: auto !important;
    margin-bottom: 50px;
    width: 100%;
    height: 200px;
  }
  .btn_scroll_menu_wrapper{
    display: none !important;
  }
  .title_menu{
    font-size: 14px;
  }
  .desc_menu{
    font-size: 34px;
  }
  .circle_yellow_menu{
    right: 20px;
  }
  .title_food_menu{
    font-size: 18px;
  }
  .icon_menu_wrapper img{
    max-height: 30px;
    max-width: 30px;
  }
  .icon_menu_wrapper{
    max-width: 50px;
    max-height: 50px;
  }
  .item_scroll_menu{
    max-height: 70px;
    max-width: 200px;
  }
 }

/* Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) { 

 }

/* Large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) { 

 }
</style>