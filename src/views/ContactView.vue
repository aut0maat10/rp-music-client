<script setup>
import rpImage from '@/assets/rp-guit2.png'
</script>
<template>
  <div class="contact bg-darkred flex flex-col justify-center px-8">
    <h2 class="text-4xl text-magenta pb-4">Contact</h2>
    <p>Need professional guitar tracks for a project?
    <br/><br/>
    Looking for a versatile guitarist for your next show?
    <br/><br/>
    Looking to take your guitar playing to the next level?
    <br/><br/>
    Want to talk about Krautrock? Amp modelers? Bergman movies?
    <br/><br/>
    <span class="text-2xl text-green">Please send me a message with the <a class="text-magenta" href="https://google.com">contact form</a> below.</span>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <img :src="rpImage" class="opacity-10 max-lg:hidden absolute">
  </div>
</template>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>