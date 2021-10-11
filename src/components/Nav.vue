<template>
<div class="container">
    <nav class="navbar navbar-expand-lg navbar-light mb-5 pl-0 pr-0">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" width="44px" height="44px" alt="logo-fudo">
        <span>Fudo</span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto mx-auto">
          <li class="nav-item mr-3" :class="(navbar=== 'why fudo' )? 'active' : ''">
            <a @click="onClickNavbar('why fudo')" class="nav-link  oranye" href="#">Why Fudo?</a>
          </li>
          <li class="nav-item dropdown mr-3" :class="(navbar=== 'service' )? 'active' : ''">
            <a @click="onClickNavbar('service')" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Service
              <!-- <i class="fas fa-chevron-down"></i> -->
              <img src="../assets/arrow-down.webp" width="12px" height="12px" alt="">
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a @click="onClickNavbar('service')" class="dropdown-item" href="#">Action</a>
              <a @click="onClickNavbar('service')" class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a @click="onClickNavbar('service')" class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item dropdown mr-3" :class="(navbar=== 'menu' )? 'active' : ''">
            <a @click="onClickNavbar('menu')" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Menu
              <img src="../assets/arrow-down.webp" width="12px" height="12px" alt="">
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a @click="onClickNavbar('menu')" class="dropdown-item" href="#">Action</a>
              <a @click="onClickNavbar('menu')" class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a @click="onClickNavbar('menu')" class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item" :class="(navbar=== 'contact' )? 'active' : ''">
            <a @click="onClickNavbar('contact')" class="nav-link" href="#">Contact</a>
          </li>
        </ul>
        <ul class="d-flex flex-row">
          <li class="d-flex align-items-center mr-4 search_wrapper">
            <img src="../assets/Search.png" alt="">
          </li>
          <li class="d-flex align-items-center mr-4 bag_wrapper">
            <img src="../assets/Bag.webp" alt="img-bag" class="img_bag">
            <span id="x" class="d-flex justify-content-center align-items-center">4</span>
          </li>
          <li>
            <button class="btn btn-lg btn_submit rounded-pill d-flex align-items-center" type="submit">
              <img src="../assets/Login.png" width="16px" height="16px" alt="">
              <span class="ml-1">Login</span>
            </button>
          </li>
        </ul>
      </div>
  </nav>
  </div>
</template>
<script>
export default {
    name:'Nav',
    data(){
      return {
      navbar:"why fudo"
      }
    },
    methods:{
      onClickNavbar:function(title){
        this.navbar = title;
      }
    }
}
</script>
<style scoped>
.navbar-brand span{
    color: rgba(46, 46, 46, 1);
    font-weight: 500 !important;
    margin-left: 8px;
}
.nav-item .nav-link {
    color: rgba(46, 46, 46, 1) !important;
}
.dropdown-toggle::after {
    display: none !important;
}
.active .nav-link{
    color: rgba(245, 71, 72, 1)  !important;
}
.active .nav-link{
    position: relative;
    padding-bottom: 20px;
}
.active .nav-link::before {
    content:"";
    transform: translateX(-50%);
    border-radius: 100%;
    position: absolute;
    background: rgba(245, 71, 72, 1) ;
    color: rgba(245, 71, 72, 1) !important;
    position: absolute;
    bottom: 10px;
    height: 6px;
    width: 6px;
    left: 50%;
    justify-content: center;
}

ul li {
    list-style-type: none;
}

.btn_submit{
    background: rgba(245, 71, 72, 1) !important;
    color: #fff !important;
}
.btn_submit span {
    font-size: 15px;
    font-weight: 500;
}
.search_wrapper{
    cursor: pointer;
}
.bag_wrapper{
    position: relative;
    cursor: pointer;
}
.bag_wrapper #x{
    position: absolute;
    background: rgba(245, 71, 72, 1) ;
    color: #fff;
    top: 4px;
    right: -6px;
    border: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    display: block;
    font-weight: 400;
    font-size: 9px;
    cursor: pointer;
}
</style>