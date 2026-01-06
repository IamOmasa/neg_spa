<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <Navbar />
    <main class="flex-grow-1">
      <router-view />
      <BackToTop />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Hero from './components/Hero.vue';
import TeamCard from './components/TeamCard.vue';
import OfferCard from './components/OfferCard.vue';
import BackToTop from './components/BackToTop.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Hero,
    TeamCard,
    OfferCard,
    BackToTop
  }
}
</script>

<style>
/* Ensure smooth scrolling is enabled globally */
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
}
</style>