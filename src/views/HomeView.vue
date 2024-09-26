<script lang="ts" setup>
import {onMounted} from 'vue';

import Hero from "@/components/Hero.vue";
// import Benefits from "./components/Benefits.vue";
// import Features from "./components/Features.vue";
import Services from "@/components/Services.vue";
// import Projects from "./components/Projects.vue";
import Testimonials from "@/components/Testimonials.vue";
import AboutUs from "@/components/AboutUs.vue";
// import Pricing from "./components/Pricing.vue";
// import Community from "./components/Community.vue";
import Contact from "@/components/Contact.vue";
import FAQ from "@/components/FAQ.vue";

onMounted(() => {
  // particlesJS is now available globally via CDN
  particlesJS.load('particles-js', '/src/particles-config.json', function () {
  });
  particlesJS.load('particles-js-testimonials', '/src/particles-config.json', function () {
  });
  particlesJS.load('particles-js-services', '/src/particles-config.json', function () {
  });
  particlesJS.load('particles-js-faq', '/src/particles-config.json', function () {
  });
});
</script>

<template>
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
  <!--  <Projects/>-->
  <div id="relative">
    <div id="particles-js-testimonials"></div>
    <Testimonials/>
  </div>
  <!--  <Community/>-->
  <!--  <Pricing/>-->
  <Contact/>
  <div id="relative">
    <div id="particles-js-faq"></div>
    <FAQ/>
  </div>
</template>

<style scoped>
#relative {
  position: relative;
}

#particles-js, #particles-js-faq, #particles-js-services, #particles-js-testimonials {
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
