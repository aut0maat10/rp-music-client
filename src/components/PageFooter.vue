<script setup>
import { RouterLink, RouterView } from 'vue-router';
const currentYear = () => new Date().getFullYear()
</script>
<template>
  <div class="h-1/6 p-12 bg-black flex flex-col gap-4 justify-center items-center">
    <div>
      <nav class="w-100 mt-8 flex gap-4 text-xl">
        <RouterLink to="/" class="hover:text-magenta" :class="{ 'text-magenta underline': $route.path === '/', 'text-green': $route.path != '/' }">Home</RouterLink>
        <RouterLink to="/about" class="hover:text-magenta" :class="{ 'text-magenta underline': $route.path === '/about', 'text-green': $route.path != '/about' }">Bio</RouterLink>
        <RouterLink to="/lessons" class="hover:text-magenta" :class="{ 'text-magenta underline': $route.path === '/lessons', 'text-green': $route.path != '/lessons' }">Lessons</RouterLink>
        <RouterLink to="/contact" class="hover:text-magenta" :class="{ 'text-magenta underline': $route.path === '/lessons', 'text-green': $route.path != '/lessons' }">Contact</RouterLink>
        
      </nav>
    </div>
    <div class="w-1/6 flex justify-around">
      <a href=""><i class="pi pi-instagram"></i></a>
      <a href=""><i class="pi pi-youtube"></i></a>
      <a href=""><i class="pi pi-facebook"></i></a>
    </div>
    <div>
      <span>&copy;</span>
      <span>{{ currentYear() }}</span> Robin Pahlman</div>
  </div>
</template>

