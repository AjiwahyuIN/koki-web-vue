<template>
<div class="container">
    <div class="row mt-5">
      <div class="col-md-12" data-aos="zoom-in">
        <span class="title_serve d-flex justify-content-center">WHAT WE SERVE</span>
      </div>
    </div>
    <div class="row">
      <div class="desc_serve_wrapper col-md-12 mt-3 mb-5 col-sm-auto" data-aos="zoom-in">
        <span class="desc_serve d-flex justify-content-center mx-auto text-center w-50">Your Favourite Food Delivery Partner</span>
        <img src="../assets/dots-yellow.png" height="14px" width="14px" class="dots_yellow" alt="">
        <img src="../assets/circle_red.png" height="14px" width="14px" class="circle_red_serve" alt="">
      </div>
    </div>
    <div class="row mt-4 mb-5">
      <div class="WES_wrapper col-md-4 col-sm-12">
        <div class="easy_to_order_wrapper d-flex flex-column justify-content-center mx-auto text-center">
          <img src="../assets/easy-to-order.png" width="77px" height="160px" class="mx-auto img_serve img-fluid" alt="" data-aos="fade-right">
          <span class="title_ETO mt-4" data-aos="fade-right">Easy To Order</span>
          <span class="desc_ETO w-75 mx-auto mt-1" data-aos="fade-up">You only need a few steps in ordering food.</span>
        </div>
      </div>
      <div class="WES_wrapper col-md-4 col-sm-12">
        <div class="easy_to_order_wrapper d-flex flex-column justify-content-center mx-auto text-center"  data-aos="fade-up">
          <img src="../assets/fastest-delivery.webp" width="178px" height="160px" class="mx-auto img_serve img-fluid" alt="">
          <span class="title_ETO mt-4" data-aos="fade-up">Fastest Delivery</span>
          <span class="desc_ETO mx-auto mt-1" data-aos="fade-up">Delivery that is always ontime even faster.</span>
        </div>
      </div>
      <div class="WES_wrapper col-md-4 col-sm-12">
        <div class="easy_to_order_wrapper d-flex flex-column justify-content-center mx-auto text-center"  data-aos="fade-left">
          <img src="../assets/best-quality.png" width="163px" height="160px" class="mx-auto img_serve img-fluid" alt="">
          <span class="title_ETO mt-4" data-aos="fade-left">Best Quality</span>
          <span class="desc_ETO w-100 mx-auto mt-1" data-aos="fade-up">Not only fast for us quality is also number one.</span>
          <img src="../assets/oval-red.png" class="oval_red" alt="">
        </div>
      </div>
    </div>
</div>
</template>
<script>
export default {
    name:'WhatWeServe'
}
</script>
<style scoped>
.title_serve{
    font-size: 18px;
    font-weight: 600;
    color: rgba(245, 71, 72, 1);
}
.desc_serve{
    font-size: 48px;
    font-weight: 600;
    color: rgba(46, 46, 46, 1) !important;
}
.desc_serve_wrapper {
    position: relative;
}
.dots_yellow{
    position: absolute;
    right: 150px;
    top: 0;
}
.circle_red_serve{
    position: absolute;
    left: 100px;
    top: 60px;
}
.title_ETO{
    font-size: 28px;
    font-weight: 600;
    color: rgba(46, 46, 46, 1);
}
.desc_ETO{
    font-size: 18px;
    font-weight: 400;
    color: rgba(89, 89, 89, 1);
    width: 80%;
}
.easy_to_order_wrapper{
    position: relative;
}
.oval_red {
    position: absolute;
    left: 30px;
    bottom: -80px;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) { 
  .WES_wrapper{
    padding-top: 20px;
  }
  .title_serve{
    font-size: 14px;
  }
  .desc_serve{
    font-size: 34px;
  }
  .title_ETO{
    font-size: 20px;
  }
  .desc_ETO{
    font-size: 18px;
  }
 }

/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) { 
  .WES_wrapper{
    padding-top: 80px;
  }
 }

/* Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) { 

 }

/* Large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) { 

 }
</style>