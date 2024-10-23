<script lang="ts" setup>
import Footer from "./components/Footer.vue";
import Navbar from "@/components/Navbar.vue";



</script>

<template>
  <Navbar/>

  <router-view/>
  <Footer/>
</template>

<style scoped>
body, html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  height: 100%;
}
</style>
