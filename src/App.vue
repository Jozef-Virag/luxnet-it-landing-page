<script lang="ts" setup>
import {onMounted} from 'vue';

import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
// import Benefits from "./components/Benefits.vue";
// import Features from "./components/Features.vue";
import Services from "./components/Services.vue";
import Projects from "./components/Projects.vue";
import Testimonials from "./components/Testimonials.vue";
import AboutUs from "./components/AboutUs.vue";
import Pricing from "./components/Pricing.vue";
import Community from "./components/Community.vue";
import Contact from "./components/Contact.vue";
import FAQ from "./components/FAQ.vue";
import Footer from "./components/Footer.vue";

onMounted(() => {
  // particlesJS is now available globally via CDN
  particlesJS.load('particles-js', '/src/particles-config.json', function () {
  });
  particlesJS.load('particles-js-testimonials', '/src/particles-config.json', function () {
  });
  particlesJS.load('particles-js-services', '/src/particles-config.json', function () {
  });
});
</script>

<template>
  <Navbar/>
  <div id="relative">
    <div id="particles-js"></div>
    <Hero/>
  </div>
  <!--  <Benefits />-->
  <!--  <Features />-->
  <AboutUs/>
  <div id="relative">
    <div id="particles-js-services"></div>
    <Services/>
  </div>
  <Projects/>
  <div id="relative">
    <div id="particles-js-testimonials"></div>
    <Testimonials/>
  </div>
  <Community/>
  <Pricing/>
  <Contact/>
  <FAQ/>
  <Footer/>

  <div class="flex flex-col items-center justify-center">
    <h2 class="text-center text-2xl text-muted-foreground pb-24">
      New sections in progress...
    </h2>
  </div>
</template>

<style scoped>
#relative {
  position: relative;
}

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -20;
}

#particles-js-services {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -20;
}

#particles-js-testimonials {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -20;
}

body, html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  height: 100%;
}

</style>
