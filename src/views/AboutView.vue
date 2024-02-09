<script setup>
import rpImage from '@/assets/rp-guit2.png'
</script>
<template>
  <div class="about bg-darkred left-1/2 w-100">
    <h1>Bio</h1>
    <p>Robin Pahlman is a guitarist and prducer based in New York City. Originally from Finland, he received his music education in Stockholm, Sweden,and worked as a freelance musician and guitar teacher for 20+ years. He has worked with bands and played shows all over the world – from small DIY spaces in Vienna, Austria to Carnegie Hall in New York City.<br/><br/>Fluent in many genres and generally interested in everything, Robin has played punk rock, folk and country, rock, pop: electric, acoustic, and electronic. He released lo-fi folk music as part of the duo Carmen & The Devil, self-produced and recorded a folk-inspired solo EP, and produced his debut album in 2016. He performed and recorded with Deni Bonet and Howth in New York City. He is currrently a member of the band Automaatio and regularly performs with Grace Bergere.</p>
    <img :src="rpImage" class="opacity-10">
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
