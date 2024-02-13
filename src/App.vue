<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import BandCamp from './components/BandCamp.vue';
import VideoSection from './components/VideoSection.vue';
import ContactForm from './components/ContactForm.vue';
import PageFooter from './components/PageFooter.vue';
</script>

<template>
  <div class="outer bg-darkred lg:grid lg:grid-cols-2 lg:p-0">
    <header class="lg:h-screen bg-black lg:w-[50vw] lg:h-[100vh] flex justify-center flex-1 p-12 lg:p-0">
      <div class="wrapper lg:flex lg:flex-wrap justify-center flex-start flex-col lg:h-3/4">
        <HelloWorld />
        <div class="wrapper lg:flex lg:flex-wrap lg:place-items-start">
          <nav class="w-100 mt-8 flex gap-4 text-xl">
            <RouterLink to="/" class="hover:text-magenta" :class="{ 'text-magenta underline': $route.path === '/', 'text-green': $route.path != '/' }">Home</RouterLink>
            <RouterLink to="/about" class="hover:text-magenta" :class="{ 'text-magenta underline': $route.path === '/about', 'text-green': $route.path != '/about' }">Bio</RouterLink>
            <RouterLink to="/lessons" class="hover:text-magenta" :class="{ 'text-magenta underline': $route.path === '/lessons', 'text-green': $route.path != '/lessons' }">Lessons</RouterLink>
            <RouterLink to="/contact" class="hover:text-magenta" :class="{ 'text-magenta underline': $route.path === '/contact', 'text-green': $route.path != '/contact' }">Contact</RouterLink>
          </nav>
        </div>
      </div>
    </header>
    <RouterView/>
  </div>
  <BandCamp />
  <VideoSection />>
  <ContactForm />
  <PageFooter />
</template>

<style scoped>
</style>
