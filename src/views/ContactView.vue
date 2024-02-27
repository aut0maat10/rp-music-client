<script setup>
import rpImage from '@/assets/rp-guit2.png'
</script>
<template>
  <div class="contact bg-darkred flex flex-col justify-center p-8">
    <img :src="rpImage" class="opacity-10 z-0 max-lg:hidden absolute">
    <h2 class="text-2xl lg:text-4xl text-magenta mb-2 lg:mb-4">Contact</h2>
    <p class="text-xl lg:text-2xl">
      Need professional <span class="text-green">guitar tracks</span> for your project?
      <br/><br/>
      Looking for a <span class="text-green">versatile guitarist</span> for your next show?
      <br/><br/>
      Looking to <span class="text-green">take your guitar playing to the next level?</span>
      <br/><br/>
      Want to talk about your project? Discuss pros and cons of FRFR with amp modelers in live situations? Share your favorite motorik beats?
      <br/><br/>
    </p>
    <div class="text-left z-20 lg:mt-8">
      <p class="text-xl lg:text-2xl">Please send me a message through the</p>
      <a class="text-green hover:text-magenta hover:bg-darkred hover:scale-110 z-100 text-xl lg:text-3xl" href="#contactform">contact form</a>
      <p class="text-xl lg:text-2xl">at the bottom of the page.</p>
      <span class="pi pi-arrow-circle-down text-3xl mt-4"></span>
    </div>
    
  </div>
</template>

<style>
</style>