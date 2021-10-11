<template>
    <div class="container">
    <div class="row">
      <div class="col-md-12 mt-5 pt-5">
        <div class="row download_wrapper mt-5 p-5 d-flex align-items-center mb-5 ml-0">
          <div class="col-md-6 download_left_wrapper">
            <div class="row">
              <div class="col-md-12" data-aos="fade-right">
                <span class="download_header">DOWNLOAD APP</span>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 mt-3" data-aos="fade-right">
                <span class="download_title">Get Started With Fudo Today!</span>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 mt-3" data-aos="fade-right">
                <span class="download_desc">Discover food wherever and whenever and get <br> your food delivered quickly.</span>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 mt-5" data-aos="fade-up">
                <div class="btn btn_get_app pt-3 pb-3 pl-5 pr-5 rounded-pill text-white">Get The App</div>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-flex align-items-end justify-content-end right_download_wrapper">
            <img src="../assets/hp.webp" class="hp d-flex align-items-end mb-0 pb-0"  alt="">
            <img src="../assets/you-food-arrived.png" class="food_arrived" alt="">
            <img src="../assets/richard_watson.png" class="richard_download" alt="" data-aos="fade-up">
            <img src="../assets/fire.png" class="fire_download" alt="" data-aos="fade-left">
            <img src="../assets/circle_yellow.png" class="circle_yellow_download" alt="">
            <img src="../assets/hiasan-oren.png" class="hiasan_oren" alt="" data-aos="fade-left">
            <img src="../assets/emot-enak.png" class="emote_enak" alt="" data-aos="fade-left">
            <img src="../assets/circle_red.png" class="box_red_download" alt="">
            <img src="../assets/oval-red.png" class="oval_red_download" alt="">
            <img src="../assets/emot-senyum.png" class="emote_smile" alt="" data-aos="fade-down">
            <img src="../assets/banner-hp.webp" class="banner_hp" alt="" data-aos="fade-left">
            <img src="../assets/cupcake-hp.png" class="cupcake_hp" alt="" data-aos="fade-left">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:'DownloadApp'
}
</script>
<style scoped>
.download_wrapper{
  width: 100%;
  height: 600px;
  background-color: rgba(254, 245, 245, 1);
  border-radius: 30px;
}
.download_header{
  font-size: 18px;
  font-weight: 600;
  color: rgba(245, 71, 72, 1);
}
.download_title{
  font-size: 48px;
  font-weight: 600;
  color: rgba(46, 46, 46, 1);
}
.download_desc{
  font-weight:400;
  font-size: 18px;
  color: rgba(89, 89, 89, 1);
}
.btn_get_app{
  font-size: 20px !important;
  font-weight: 500 !important;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(245, 71, 72, 1) !important;
}
.btn_get_app:hover{
  transform: scale(1.1);
  transition: transform .2s;
}
.right_download_wrapper{
  position: relative;
}
.hp{
  position: absolute;
  bottom: -300px;
  right: 30px;
}
.food_arrived{
  position: absolute;
  left: -30px;
  top: -120px;
  box-shadow: 0px 10px 71px 1px rgba(245,71,72,0.2);
}
.richard_download{
  position: absolute;
  left: -170px;
  top:200px ;
}
.fire_download{
  position: absolute;
  left: 0;
  top: 100px;
}
.circle_yellow_download{
  position: absolute;
  left: -80px;
  top: 150px;
}
.hiasan_oren{
  position: absolute;
  right: -70px;
  top: -200px;
}
.emote_enak{
  position: absolute;
  right: -20px;
  top: -70px;
}
.box_red_download{
  position: absolute;
  right: -10px;
  top: 40px;
}
.oval_red_download{
  position: absolute;
  left: 60px;
  top: -250px;
}
.emote_smile{
  position: absolute;
  left: -70px;
  top: -220px;
}
.banner_hp{
  position: absolute;
  top: -110px;
  right: 92px;
}
.cupcake_hp{
  position: absolute;
  right: -18px;
  bottom: -128px;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) { 
  .download_header{
    font-size: 14px;
  }
  .download_title{
    font-size: 34px;
  }
  .download_desc{
    font-size: 18px;
  }
 }

/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) { 
  .right_download_wrapper{
    display: none !important;
  }
  .download_header{
    font-size: 14px;
  }
  .download_title{
    font-size: 34px;
  }
  .download_desc{
    font-size: 18px;
  }
 }

/* Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) { 

 }

/* Large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) { 

 }
</style>