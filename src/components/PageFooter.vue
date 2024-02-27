<script setup>
import { RouterLink, RouterView } from 'vue-router';
const currentYear = () => new Date().getFullYear()
</script>
<template>
  <div class="h-1/6 p-12 bg-black flex flex-col gap-4 justify-center items-center">
    <div>
      <nav class="w-100 mt-8 flex gap-4 text-xl">
        <RouterLink to="/" class="transition-colors duration-300 ease-in-out hover:text-magenta hover:bg-black" :class="{ 'text-magenta underline': $route.path === '/', 'text-green': $route.path != '/' }">Home</RouterLink>
        <RouterLink to="/about" class="transition-colors duration-300 ease-in-out hover:text-magenta hover:bg-black" :class="{ 'text-magenta underline': $route.path === '/about', 'text-green': $route.path != '/about' }">Bio</RouterLink>
        <RouterLink to="/lessons" class="transition-colors duration-300 ease-in-out hover:text-magenta hover:bg-black" :class="{ 'text-magenta underline': $route.path === '/lessons', 'text-green': $route.path != '/lessons' }">Lessons</RouterLink>
        <RouterLink to="/contact" class="transition-colors duration-300 ease-in-out hover:text-magenta hover:bg-black" :class="{ 'text-magenta underline': $route.path === '/lessons', 'text-green': $route.path != '/lessons' }">Contact</RouterLink>
        
      </nav>
    </div>
    <div class="w-full lg:w-1/6 flex justify-around">
      <a href="" class="hover:text-magenta hover:bg-black"><i class="pi pi-instagram hover:scale-110"></i></a>
      <a href="" class="hover:text-magenta hover:bg-black"><i class="pi pi-youtube hover:text-magenta hover:scale-110"></i></a>
      <a href="" class="hover:text-magenta hover:bg-black"><i class="pi pi-facebook hover:text-magenta hover:scale-110"></i></a>
    </div>
    <div class="text-green">
      <span>&copy;</span>
      <span>{{ currentYear() }}</span><span class="text-magenta">&nbsp;Robin Pahlman</span></div>
  </div>
</template>

