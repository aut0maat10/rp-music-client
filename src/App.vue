<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="h-screen bg-black lg:w-[50vw] lg:h-[100vh] flex justify-center">
    <div class="wrapper lg:flex lg:flex-wrap justify-center flex-start flex-col h-screen">
      <HelloWorld />
      <div class="wrapper lg:flex lg:flex-wrap lg:place-items-start">
        <nav class="w-100 mt-8 flex gap-4 text-xl">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.wrapper {
  /* width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  /* background: darkcyan; */
}
/* header {
  line-height: 1.5;
  max-height: 100vh;
} */

/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

/* nav {
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
} */

/* nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
} */

/* nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
} */

/* nav a:first-of-type {
  border: 0;
} */

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
