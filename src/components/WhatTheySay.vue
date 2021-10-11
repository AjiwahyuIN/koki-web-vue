<template>
    <div class="container">
    <div class="row pt-5 ">
      <div class="col-md-6">
        <div class="chef_wrapper mb-5 mt-5">
          <div class="bg_chef_wrapper" data-aos="fade-up">
            <img src="../assets/bg-color-chef.png" width="497px" height="475px" class="bg_color_chef" alt="">
            <img src="../assets/bg-chef.webp" class="bg_chef" alt="">
          </div>
          <img src="../assets/chef.webp" width="384px" height="650px" class="chef" alt="" data-aos="fade-up">
          <img src="../assets/our-reviewer.webp" class="our_reviewer" alt="" data-aos="fade-down">
          <img src="../assets/cabe-small.webp" width="32px" height="28px" class="cabe_small" alt="" data-aos="fade-left">
          <img src="../assets/cabe-big.webp" width="47px" height="41px" class="cabe_big" alt="" data-aos="fade-left">
          <img src="../assets/daun-small.png" class="daun_small" alt="" data-aos="fade-left">
          <img src="../assets/daun-big.png" class="daun_big" alt="" data-aos="fade-left">
          <img src="../assets/bawang-small.png" width="52px" height="35px" class="bawang_small" alt="" data-aos="fade-right">
          <img src="../assets/bawang-big.png" width="63px" height="42px" class="bawang_big" alt="" data-aos="fade-right"> 
          <img src="../assets/jamur-behind.png" class="jamur_behind pb-3" alt="" data-aos="fade-right">
          <img src="../assets/jamur-front.png" class="jamur_front pl-4" alt="" data-aos="fade-right">
          <img src="../assets/circle_yellow.webp" width="12px" height="12px" class="circle_yellow_chef" alt="">
          <img src="../assets/circle_red.webp" width="12px" height="12px" class="box_red_chef" alt=""> 
        </div>
      </div>
      <div class="col-md-6">
        <div class="right_chef_wrapper">
          <img src="../assets/circle_yellow.png" class="circle_yellow_right_chef" alt="">
          <div class="row">
            <div class="col-md-4" data-aos="fade-left">
              <span class="head_title_chef">WHAT THEY SAY</span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12" data-aos="fade-left">
              <span class="title_chef">What Our Customer Say About Us</span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12" data-aos="fade-left">
              <span class="desc_chef">“Fudo is the best. Besides the many and delicious meals, the  service is also very good, especially in the very fast delivery. I highly recommend Fudo to you.”</span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 d-flex align-items-center mx-auto mt-4" data-aos="fade-left">
              <img src="../assets/theresa.png" height="60px" width="60px" class="avatar_theresa" alt="">
              <div class="theresa_wrapper d-flex flex-column text-left ml-3">
                <span class="theresa">Theresa Jordan</span>
                <span class="desc_theresa">Food Enthusiast</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="star_rating d-flex align-items-center mx-auto mt-3" data-aos="fade-left">
                <img src="../assets/Star.png" width="20px" height="19px" alt="">
                <img src="../assets/Star.png" width="20px" height="19px" alt="">
                <img src="../assets/Star.png" width="20px" height="19px" alt="">
                <img src="../assets/Star.png" width="20px" height="19px" alt="">
                <img src="../assets/star-light.png" width="20px" height="19px" alt="">
                <span class="rating-theresa ml-2">4.8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
export default {
    name:'WhatTheySay'
}
</script>
<style scoped>
.chef_wrapper{
    position: relative;
}
.bg_chef_wrapper{
    position: relative;
    width: 497px;
    height: 475px;
}
.bg_chef{
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.2;
}
.chef{
    position: absolute;
    top: -175.1px;
    left: 60px;
}
.our_reviewer{
  position: absolute;
  right: -100px;
  bottom: -160px;
}
.cabe_small{
  position: absolute;
  right: 100px;
  bottom: 140px;
}
.cabe_big{
  position: absolute;
  right: 60px;
  bottom: 160px;
}
.daun_small{
  position: absolute;
  top: -150px;
  right: 80px;
}
.daun_big{
  position: absolute;
  top: -100px;
  right: 30px;
}
.bawang_small{
  position: absolute;
  left: -35px;
  top: -100px;
}
.bawang_big{
  position: absolute;
  left: 20px;
  top: -120px;
}
.jamur_behind, .jamur_front{
  position: absolute;
  bottom: 300px;
  left: -40px;
}
.circle_yellow_chef{
  position: absolute;
  left: -40px;
  bottom: 100px;
}
.box_red_chef{
  position: absolute;
  top: 100px;
  right: 0;
}
.right_chef_wrapper{
  position: relative;
}
.circle_yellow_right_chef{
  position: absolute;
  right: 0;
  top: 0;
}
.head_title_chef{
  font-size: 18px;
  font-weight: 600;
  color: rgba(245, 71, 72, 1);
}
.title_chef{
  font-size: 48px;
  font-weight: 600;
  color: rgba(46, 46, 46, 1);
}
.desc_chef{
  font-size: 20px;
  font-weight: 500;
  color: rgba(89, 89, 89, 1);
}
.theresa{
  font-size: 18px;
  font-weight: 600;
  color: rgba(46, 46, 46, 1);
}
.desc-theresa{
  font-size: 16px;
  font-weight: 400;
  color: rgba(89, 89, 89, 1);
}
.rating_theresa{
  font-size: 16px;
  font-weight: 500;
  color: rgba(46, 46, 46, 1);
}
/* small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) { 
  .head_title_chef{
    font-size: 14px;
  }
  .title_chef{
    font-size: 34px;
  }
  .desc_chef{
    font-size: 18px;
  }
  .theresa{
    font-size: 16px;
  }
  .desc_theresa{
    font-size: 14px;
  }
  .rating_theresa{
    font-size: 14px;
  }
 }

/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) { 
  .chef_wrapper,.bg_color_chef,.bg_chef,.chef,.our_reviewer,.jamur_behind,.jamur_front,.daun_big,.daun_small,.bawang_big,.bawang_small,.cabe_big,.cabe_small{
    display: none !important;
  }
 }

/* Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) { 

 }

/* Large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) { 

 }
</style>