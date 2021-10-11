<template>
<footer>
  <div class="container">
  <div class="row mt-5 d-flex justify-content-between mb-5">
    <div class="col-md-3">
      <div class="row">
        <div class="col-md-12">
          <div class="logo_footer_wrapper d-flex align-items-center">
            <img src="../assets/logo.png" alt="">
            <span class="ml-3 fudo_footer">Fudo</span>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-12">
          <span class="desc_footer">Our job is to filling your tummy with delicious food and with fast and free delivery.</span>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-12 col-sm-12">
          <div class="row ic_sosmed_wrapper">
            <div class="col-md-3 col-sm-3">
              <a href="#"><img src="../assets/ic-ig.png" alt=""></a>
            </div>
            <div class="col-md-3 col-sm-3">
              <a href="#"><img src="../assets/ic-fb.png" alt=""></a>
            </div>
            <div class="col-md-3 col-sm-3">
              <a href="#"><img src="../assets/ic-twitter.png" alt=""></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-8">
      <div class="row">
        <div class="col-md-2 menu_footer_wrapper">
          <div class="row">
            <div class="col-md-12 mb-1">
              <span class="header_title_footer">About</span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mt-3">
              <a href="#" class="list_menu_footer">About Us</a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mt-3">
              <a href="#" class="list_menu_footer">Features</a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mt-3">
              <a href="#" class="list_menu_footer">News</a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mt-3">
              <a href="#" class="list_menu_footer">Menu</a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="row">
            <div class="col-md-12 mb-1 header_title_footer_wrapper">
              <span class="header_title_footer">Company</span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mt-3">
              <a href="#" class="list_menu_footer">Why Fudo?</a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mt-3">
              <a href="#" class="list_menu_footer">Partner With Us</a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mt-3">
              <a href="#" class="list_menu_footer">FAQ</a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mt-3">
              <a href="#" class="list_menu_footer">Blog</a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="row">
            <div class="col-md-12 mb-1 header_title_footer_wrapper">
              <span class="header_title_footer">Support</span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mt-3">
              <a href="#" class="list_menu_footer">Account</a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mt-3">
              <a href="#" class="list_menu_footer">Support Center</a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mt-3">
              <a href="#" class="list_menu_footer">Feedback</a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mt-3">
              <a href="#" class="list_menu_footer">Contact Us</a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mt-3">
              <a href="#" class="list_menu_footer">Accesbility</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-12 mb-1 header_title_footer_wrapper">
              <span class="header_title_footer">Get in Touch</span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mt-3 col-sm-6">
              <a href="#" class="list_menu_footer">Question or feedback? We’d love to hear from you</a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mt-4">
              <input type="text" name="email" placeholder="Email Address" id="email" class="rounded-pill d-flex justify-content-end" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</footer>
</template>
<script>
export default {
    name:'Footer'
}
</script>
<style scoped>
.fudo_footer{
  font-size: 20px;
  font-weight: 600;
  color: rgba(46, 46, 46, 1);
}
.desc_footer{
  font-size: 16px;
  color: rgba(89, 89, 89, 1);
  font-weight: 400;
}
.header_title_footer{
  font-size: 20px;
  font-weight: 600;
  color: rgba(46, 46,a href="#" 1);
}
.list_menu_footer{
  font-size: 16px;
  font-weight: 400;
  color: rgba(89, 89, 89, 1);
  text-decoration: none !important;
}
.list_menu_footer:hover{
  color: rgba(245, 71, 72, 1);
}
.btn_email_address{
  border: 1px solid rgba(219, 219, 219, 1) !important;
  font-size: 16px;
  color: rgba(89, 89, 89, 1) !important;
  font-weight: 400;
}
#email {
  background-origin:content-box;
  background: white url(../assets/ic-send.png) right;
  background-repeat: no-repeat;
  background-origin: content-box;
  padding: 16px !important;
  border: 1px solid rgba(219, 219, 219, 1);
  font-size: 14px;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) { 
  .header_title_footer{
    margin-top: 90px !important;
  }
  .ic_sosmed_wrapper{
    margin-bottom: 20px;
  }
  .header_title_footer_wrapper{
    margin-top: 20px;
  }
 }

/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) { 
  .ic_sosmed_wrapper{
    margin-bottom: 20px;
  }
  .header_title_footer{
    padding-top: 90px !important;
  }
  .header_title_footer_wrapper{
    margin-top: 20px;
  }
  .desc_footer{
    font-size: 16px;
  }
  .header_title_footer,.list_menu_footer{
  font-size: 14px;
}
  
 }

/* Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) { 

 }

/* Large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) { 

 }
</style>