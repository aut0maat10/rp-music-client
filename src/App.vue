<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="lg:h-screen bg-black lg:w-[50vw] lg:h-[100vh] flex justify-center">
    <div class="wrapper lg:flex lg:flex-wrap justify-center flex-start flex-col lg:h-screen">
      <HelloWorld />
      <div class="wrapper lg:flex lg:flex-wrap lg:place-items-start">
        <nav class="w-100 mt-8 flex gap-4 text-xl">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
