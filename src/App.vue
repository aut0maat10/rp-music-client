<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import BandCamp from './components/BandCamp.vue';
import VideoSection from './components/VideoSection.vue';
import ContactForm from './components/ContactForm.vue';
import PageFooter from './components/PageFooter.vue';
</script>

<template>
  <div class="outer bg-darkred md:h-1/2 lg:grid lg:grid-cols-2 lg:p-0 h-1/2 lg:h-screen">
    <header class="bg-black h-1/2 md:h-1/2 lg:w-[50vw] lg:h-full xl:h[90vh] flex justify-center flex-1 p-12 lg:p-0">
      <div class="wrapper lg:flex lg:flex-wrap justify-center flex-start flex-col lg:h-3/4">
        <HelloWorld />
        <Transition
            enter-active-class="delay-1000 duration-300 ease-out"
            enter-from-class="transform opacity-0 scale-75"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="duration-500 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-75"
            appear
          >
        <div class="wrapper lg:flex lg:flex-wrap lg:place-items-start">
          <nav class="w-100 mt-2 lg:mt-8 flex gap-4 text-xl">
            <RouterLink to="/" class="transition duration-150 ease-in-out hover:text-magenta hover:bg-black hover:scale-105" :class="{ 'text-magenta underline': $route.path === '/', 'text-green': $route.path != '/' }">Home</RouterLink>
            <RouterLink to="/about" class="transition duration-150 ease-in-out hover:text-magenta hover:bg-black hover:scale-105" :class="{ 'text-magenta underline': $route.path === '/about', 'text-green': $route.path != '/about' }">Bio</RouterLink>
            <RouterLink to="/lessons" class="transition duration-150 ease-in-out hover:text-magenta hover:bg-black hover:scale-105" :class="{ 'text-magenta underline': $route.path === '/lessons', 'text-green': $route.path != '/lessons' }">Lessons</RouterLink>
            <RouterLink to="/contact" class="transition duration-150 ease-in-out hover:text-magenta hover:bg-black hover:scale-105" :class="{ 'text-magenta underline': $route.path === '/contact', 'text-green': $route.path != '/contact' }">Contact</RouterLink>
          </nav>
        </div>
      </Transition>
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
