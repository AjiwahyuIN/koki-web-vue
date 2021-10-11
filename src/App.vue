<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  name:'App',
  components:{

  }
}
</script>
<style>
* {
    font-family: 'Poppins','sans-serif' !important;
    scroll-behavior: smooth;
}
.scroll_menu_wrapper::-webkit-scrollbar {
    width: 5px;
  }
   
  .scroll_menu_wrapper::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(243, 243, 243, 1);
  }
   
  .scroll_menu_wrapper::-webkit-scrollbar-thumb {
    background-color: rgba(245, 71, 72, 1) ;
    border-radius: 4px;
}
</style>
