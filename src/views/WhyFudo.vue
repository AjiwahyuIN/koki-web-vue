<template>
  <div class="WhyFudo">
    <Jumbotron/>
    <main>
      <WhatWeServe/>
      <OurMenu/>
      <WhatTheySay/>
      <DownloadApp/>
    </main>
    <Footer/>
  </div>
</template>
<script>
import Footer from '../components/Footer.vue'
import Jumbotron from '../components/Jumbotron.vue'
import WhatWeServe from '../components/WhatWeServe.vue'
import OurMenu from '../components/OurMenu.vue'
import WhatTheySay from '../components/WhatTheySay.vue'
import DownloadApp from '../components/DownloadApp.vue'

export default {
    name:'WhyFudo',
    components:{
      Jumbotron,
      WhatWeServe,
      OurMenu,
      WhatTheySay,
      DownloadApp,
      Footer,
    }
}
</script>
<style>

</style>