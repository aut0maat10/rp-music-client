<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import ContactForm from './components/ContactForm.vue';
</script>

<template>
  <div class="outer bg-darkred lg:grid lg:grid-cols-2 lg:p-0">
    <header class="lg:h-screen bg-black lg:w-[50vw] lg:h-[100vh] flex justify-center flex-1">
      <div class="wrapper lg:flex lg:flex-wrap justify-center flex-start flex-col lg:h-screen">
        <HelloWorld />
        <div class="wrapper lg:flex lg:flex-wrap lg:place-items-start">
          <nav class="w-100 mt-8 flex gap-4 text-xl">
            <RouterLink to="/" class="hover:text-magenta" :class="{ 'text-magenta underline': $route.path === '/', 'text-green': $route.path != '/' }">Home</RouterLink>
            <RouterLink to="/about" class="hover:text-magenta" :class="{ 'text-magenta underline': $route.path === '/about', 'text-green': $route.path != '/about' }">About</RouterLink>
            <RouterLink to="/lessons" class="hover:text-magenta" :class="{ 'text-magenta underline': $route.path === '/lessons', 'text-green': $route.path != '/lessons' }">Lessons</RouterLink>
          </nav>
        </div>
      </div>
    </header>
    <RouterView/>
  </div>
  <ContactForm />
</template>

<style scoped>
</style>
