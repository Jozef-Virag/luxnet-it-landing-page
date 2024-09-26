<script lang="ts" setup>

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

</script>

<template>
  <Navbar/>
  <router-view />
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
