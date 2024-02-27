<script setup>
import rpImage from '@/assets/rp-guit2.png'
</script>
<template>
  <div class="about bg-darkred flex justify-center flex-col p-8">
    <h2 class="text-2xl lg:text-4xl text-magenta self-start mb-2 lg:mb-4">Bio</h2>
    <p class="text-xl">Robin Pahlman is a guitarist, producer, and educator based in New York City. Originally from <span class="text-green">Finland</span>, he received his music education at <span class="text-green">Stockholms Musikkonservatorium (SMK)</span> in Stockholm, Sweden, and worked as a freelance musician and guitar teacher for 20+ years. He has worked with bands and played shows all over the world – from small DIY spaces in Vienna, Austria to Carnegie Hall in New York City.<br/><br/>Fluent in many genres (and generally interested in everything), Robin has played punk rock, folk and country, rock, pop: electric, acoustic, and electronic. He recorded and toured Europe and Australia with his band <span class="text-green">Agent Kooper</span> in the early '00s. He released lo-fi folk music as part of the duo <span class="text-green">Carmen & The Devil</span>, self-produced and recorded a folk-inspired solo EP and produced his debut album <span class="text-green">Temporary Everything</span> in 2016.<br/><br/>After relocating to the US, he performed and recorded with <span class="text-green">Deni Bonet</span> and <span class="text-green">Howth</span> and many other bands and artists. In 2023, Robin worked as guitarist in the production of <span class="text-green">Disney Encanto X CAMP</span> in New York City. He is currrently a member of the band <span class="text-green">Automaatio</span> and regularly performs with <span class="text-green">Grace Bergere</span>.</p>
    <img :src="rpImage" class="opacity-10 max-lg:hidden absolute">
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
