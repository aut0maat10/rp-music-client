<script setup>
</script>

<template>
  <div class="">
    <Transition
      enter-active-class="duration-500 ease-out"
      enter-from-class="transform opacity-0 scale-75"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-500 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-75"
      appear
    >
      <h1 class="text-4xl lg:text-6xl text-magenta py-3 font-bold">Robin Pahlman</h1>
    </Transition>
    <Transition
      enter-active-class="delay-500 duration-500 ease-out"
      enter-from-class="transform opacity-0 scale-75"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-500 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-75"
      appear
    >
    <h3 class="text-2xl lg:text-4xl font-normal text-white">
      Musician <span class="invisible sm:visible">|</span> Songwriter <span class="invisible sm:visible">|</span> Producer
    </h3>
  </Transition>
  </div>
</template>

<style scoped>
</style>
