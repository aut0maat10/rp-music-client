<script setup>
import rpImage from '@/assets/rp-guit2.png'
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main class="flex flex-column">
    <!-- <TheWelcome /> -->
    <img :src="rpImage">
  </main>
</template>
<style>
img {
  margin: auto;
}
main {
  margin: auto;
}
@media (min-width: 1024px) {
  img {
    max-width: 50vw;
    max-height: 100vh;  
  }
}
</style>

