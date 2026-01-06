<template>
  <section 
    class="hero-section d-flex align-items-center justify-content-center text-white position-relative"
    :style="backgroundStyle"
  >
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></div>
    
    <div class="container position-relative text-center px-3">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8 col-xxl-7">
          <h1 class="hero-title fw-bold mb-3 mb-sm-4 mb-md-4 mb-lg-5">
            {{ title }}
          </h1>
          <p class="hero-subtitle mb-3 mb-sm-4 mb-md-4 mb-lg-5">
            {{ subtitle }}
          </p>
          <router-link 
            v-if="buttonText"
            :to="buttonLink"
            class="btn btn-secondary hero-btn"
          >
            {{ buttonText }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: String,
    subtitle: String,
    buttonText: String,
    buttonLink: { type: String, default: '/services' },
    backgroundImage: String
  },
  computed: {
    backgroundStyle() {
      if (this.backgroundImage) {
        return {
          backgroundImage: `url(${this.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }
      }
      return { backgroundColor: 'var(--primary-color)' }
    }
  }
}
</script>

<style scoped>
/* Component-specific styles - Won't affect other components */

/* Mobile First */
.hero-section {
  min-height: 350px;
  padding: 2rem 0;
}

.hero-title {
  font-size: 1.75rem;
  line-height: 1.2;
  animation: fadeInUp 0.8s ease-out;
}

.hero-subtitle {
  font-size: 1rem;
  line-height: 1.5;
}

.hero-btn {
  padding: 0.75rem 2rem;
  font-size: 1rem;
}

/* Tablets */
@media (min-width: 768px) {
  .hero-section { min-height: 480px; padding: 3rem 0; }
  .hero-title { font-size: 2.5rem; }
  .hero-subtitle { font-size: 1.2rem; }
  .hero-btn { padding: 1rem 3rem; font-size: 1.1rem; }
}

/* Laptops */
@media (min-width: 992px) {
  .hero-section { min-height: 550px; padding: 3.5rem 0; }
  .hero-title { font-size: 3rem; }
  .hero-subtitle { font-size: 1.3rem; }
  .hero-btn { padding: 1.1rem 3.5rem; font-size: 1.15rem; }
}

/* Desktops */
@media (min-width: 1200px) {
  .hero-section { min-height: 600px; padding: 4rem 0; }
  .hero-title { font-size: 3.5rem; }
  .hero-subtitle { font-size: 1.4rem; }
  .hero-btn { padding: 1.2rem 4rem; font-size: 1.2rem; }
}

/* Large Desktops */
@media (min-width: 1400px) {
  .hero-section { min-height: 650px; padding: 4.5rem 0; }
  .hero-title { font-size: 4rem; }
  .hero-subtitle { font-size: 1.5rem; }
}
</style>