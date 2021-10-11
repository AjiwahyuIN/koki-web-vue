<template>
<div class="bg_gradient">
<Nav/>
  <div class="container">
  <div class="main_header">
    <div class="row jumbotron_wrapper pb-5">
      <div class="col-md-6 left_wrapper col-sm-auto">
        <div class="row mb-5">
          <div class="col-md-6 col-sm-6">
            <div class="cherry_wrapper mt-5 rounded-pill p-2 d-flex justify-content-center align-items-center" data-aos="fade-right">
              <span class="mr-1">More Than Faster</span>
              <span>🍒</span>
            </div>
          </div>
        </div>
        <div class="title_jumbotron mb-5" data-aos="fade-right">Be The Fastest In Delivering Your <span>Food</span></div>
        <span class="desc_jumbotron" data-aos="fade-right">Our job is to filling your tummy with delicious food and with fast and free delivery.</span>
        <div class="btn_left_wrapper mt-5 d-flex flex-row pb-4" data-aos="fade-up">
          <div class="btn btn_started pl-4 pr-4 pt-3 pb-3 rounded-pill text-white mr-5">Get Started</div>
          <div class="watch_wrapper d-flex flex-row align-items-center rounded-pill pl-2 pr-2">
            <div class="play_wrapper rounded-circle d-flex justify-content-center align-items-center shadow mr-3">
              <img src="../assets/play-yellow.png" alt="play_yellow">
            </div>
            <span>Watch Video</span>
          </div>
        </div>
        <div class="happy_customer_wrapper mt-5 d-flex flex-row align-items-center" data-aos="fade-up">
          <img src="../assets/happy-customer.webp" width="140px" height="60px" class="img_happy_customer" alt="happy-customer">
          <div class="desc_happy_customer ml-3">
            <span class="title_happy_customer">Our Happy Customer</span>
            <div class="rating_customer_wrapper d-flex align-items-center mt-2">
              <img src="../assets/Star.png" alt="rating-img">
              <span class="rating_customer ml-1 mr-3">4,8</span>
              <span class="review_customer">(12.5k Review)</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 right_wrapper">
        <img src="../assets/img-jumbotron-right.webp" width="660px" height="870px" class="img_right" alt="img-jumbotron" data-aos="fade-left">
        <img src="../assets/richard-watson.svg" class="richard_watson" alt="" data-aos="fade-left">
        <img src="../assets/italian-pizza.webp" class="italian_pizza" alt="" data-aos="fade-left">
        <img src="../assets/box-yellow.webp" width="90px" height="90px" class="box_yellow" alt="" data-aos="fade-left">
        <img src="../assets/img-arrow-jumbo.png" class="arrow_jumbo" alt="" data-aos="fade-left">
        <img src="../assets/fire.png" class="fire" alt="" data-aos="fade-left">
        <img src="../assets/circle_yellow.png" height="14px" width="14px" class="circle_yellow" alt="" data-aos="fade-left">
        <img src="../assets/circle_red.png" height="14px" width="14px" class="circle_red" alt="" data-aos="fade-left">
        <img src="../assets/circle_red.png" height="14px" width="14px" class="circle_red_bottom" alt="" data-aos="fade-left">
      </div>
    </div>
  </div>
</div>
</div>
</template>
<script>
import Nav from '../components/Nav.vue'
export default {
    name:'Jumbotron',
    components:{
        Nav
    }
}
</script>
<style scoped>
.bg_gradient{
    background-image: linear-gradient(rgba(254, 236, 236, 0.7),rgba(254, 236, 236, 0));
}
.cherry_wrapper {
    background-color: rgba(253, 236, 236, 1);
}
.cherry_wrapper span{
    font-size: 16px;
    color: rgba(245, 71, 72, 1);
}
.title_jumbotron {
    font-size: 74px;
    font-weight: 600;
}
.title_jumbotron span {
    color: rgba(245, 71, 72, 1);
}
.desc_jumbotron{
    color: rgba(89, 89, 89, 1);
    font-size: 20px;
}
.jumbotron_wrapper {
    position: relative;
}
.img_right {
    position:absolute;
    right: 25px;
    top: 0;
}
.btn_started{
    background-color: rgba(245, 71, 72, 1) !important;
    font-size: 20px;
    box-shadow: 0px 10px 71px 1px rgba(245,71,72,0.2);
}
.btn_started:hover{
  transform: scale(1.1);
  transition: transform .2s;
}
.play_wrapper {
    background-color: rgba(255, 255, 255, 1);
    height: 32px;
    width: 32px;
}
.watch_wrapper span{
    color: rgba(89, 89, 89, 1);
    font-size: 20px;
}
.watch_wrapper:hover span{
  color: rgba(245, 71, 72, 1) ;
}
.richard_watson{
    position: absolute;
    bottom: 140px;
    left: -160px !important;
    filter: drop-shadow(10px 8px 8px rgba(180, 180, 180,0.2));
}
.italian_pizza {
    position: absolute;
    bottom: 70px;
    right:10px;
    filter: drop-shadow(10px 8px 8px rgba(180, 180, 180,0.2));
}
.box_yellow{
    position: absolute;
    top: 0;
    left:10px;
}
.arrow_jumbo{
    position: absolute;
    top: 90px;
    right: 6px;
}
.fire{
    position: absolute;
    top: 0;
    right: 50px;
}
.circle_yellow {
    position: absolute;
    top: 300px;
    left: -50px;
}
.circle_red{
    position: absolute;
    bottom: 290px;
    right: -10px;
}
.circle_red_bottom {
    position: absolute;
    bottom: 20px;
}
.title_happy_customer{
    font-size: 20px;
    font-weight: 600;
    color: rgba(46, 46, 46, 1);
}
.rating_customer{
    font-size: 16px;
    color: rgba(46, 46, 46, 1);
    font-weight: 500;
}
.review_customer{
    font-size: 16px;
    color: rgba(89, 89, 89, 1);
}
/* small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) { 
  .img_right,.arrow_jumbo,.box_yellow,.italian_pizza,.richard_watson{
    display: none;
  }
  .circle_red_bottom,.circle_red, .circle_yellow, .fire{
    display: block;
  }
  .fire{
    top: -470px !important;

  }
  .circle_red_bottom{
    display: block;
    top: -320px;
  }
  .circle_red{
    bottom: 320px !important;
    right: -30px;
  }
  .circle_yellow{
    top: -480px !important;
  }
  .happy_customer_wrapper{
    display: block;
    width: 100%;
    justify-content: center;
  }
  .title_happy_customer{
    font-size: 16px;
  }
  .rating_customer{
    font-size: 14px;
  }
  .review_customer{
    font-size: 14px;
  }
  .img_happy_customer{
    width: 25%;
    height: 25%;
  }
  .btn_left_wrapper{
    justify-content: center;
  }
  .title_jumbotron{
    font-size: 40px !important;
  }
  .desc_jumbotron{
    font-size: 18px;
  }
 }

/* devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) { 
  .title_jumbotron{
    font-size: 60px !important;
  }
  .img_right{
    display: none;
  }
  .arrow_jumbo,.italian_pizza,.richard_watson,.box_yellow{
    display: none;
  }
  .circle_red_bottom,.circle_red, .circle_yellow, .fire{
    display: block;
  }
  .circle_red_bottom{
    bottom: 340px;
  }
  .circle_red{
    bottom: 400px;
    right: 20px;
  }
  .circle_yellow{
    top:-500px;
    left: 20px;
  }
  .fire{
    top: -500px;
    right: 20px;
  }
  .happy_customer_wrapper{
    display: block;
    width: 100%;
    justify-content: center;
  }
  .title_happy_customer{
    font-size: 16px;
  }
  .rating_customer{
    font-size: 14px;
  }
  .review_customer{
    font-size: 14px;
  }
  .img_happy_customer{
    width: 25%;
    height: 25%;
  }
  .title_jumbotron{
    font-size: 40px !important;
  }
  
 }

/* devices (tablets, less than 992px) */
@media (max-width: 991.98px) { 
  .img_right,.arrow_jumbo,.box_yellow,.italian_pizza,.richard_watson{
    display: none;
  }
 }

/* devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) { 

 }
</style>