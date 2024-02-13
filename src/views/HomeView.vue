<script setup>
import rpImage from '@/assets/rp-guit2.png'
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main class="flex flex-column w-50vw">
    <Transition
      enter-active-class="duration-300 ease-out"
      enter-from-class="transform opacity-0 scale-75"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-500 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-75"
      appear
      >
        <img v-if="true" :src="rpImage" class="object-contain">
    </Transition>
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

