<template>
  <div class="solutions-page">
    <nav class="sub-nav">
      <div class="nav-limiter">
        <a href="#products">Hardware Products</a>
        <a href="#services">Professional Services</a>
      </div>
    </nav>

    <div class="content-limiter">
      <section id="products" class="offer-section">
        <header class="section-header">
          <span class="tag">Smart Hardware</span>
          <h2>Our Products</h2>
          <p>Precision tools developed and tested at our KIK Farms laboratory.</p>
        </header>
        
        <div class="grid">
          <OfferCard 
            v-for="p in products" 
            :key="p.title" 
            :item="p" 
            @click="openInquiry(p.title)"
          />
        </div>
      </section>

      <div class="section-divider"></div>

      <section id="services" class="offer-section">
        <header class="section-header">
          <span class="tag">Technical Solutions</span>
          <h2>Professional Services</h2>
          <p>Expert consulting and system designs for Tanzanian agriculture.</p>
        </header>
        
        <div class="grid">
          <OfferCard 
            v-for="s in services" 
            :key="s.title" 
            :item="s" 
            @click="openInquiry(s.title)"
          />
        </div>
      </section>
    </div>

    <Teleport to="body">
      <InquiryModal 
        v-if="showModal" 
        :itemName="selectedItem" 
        @close="showModal = false" 
      />
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import OfferCard from '@/components/OfferCard.vue';
import InquiryModal from '@/components/InquiryModal.vue';

// State management for Inquiry Modal
const showModal = ref(false);
const selectedItem = ref('');

const openInquiry = (name) => {
  selectedItem.value = name;
  showModal.value = true;
};

// Data directly from neg-agritech.com/services
const products = [
  {
    title: "NEG Irrigation Controller",
    type: "product",
    icon: "🎮",
    description: "The brain of your farm. Uses advanced algorithms to monitor soil moisture and automate irrigation schedules."
  },
  {
    title: "NEG Soil Moisture Sensor",
    type: "product",
    icon: "🌡️",
    description: "Durable sensors providing real-time moisture data accessible via mobile or web dashboards."
  },
  {
    title: "NEG Soil Moisture Meter",
    type: "product",
    icon: "📟",
    description: "Portable high-accuracy tool for informed decisions on irrigation and fertilization management."
  }
];

const services = [
  {
    title: "Irrigation Systems Design",
    type: "service",
    icon: "📐",
    description: "Custom-tailored hydraulic designs by our engineers to maximize productivity and minimize water waste."
  },
  {
    title: "Farm Management Services",
    type: "service",
    icon: "🗺️",
    description: "Topographic surveys, aerial imagery, and advanced soil analysis for data-driven farming success."
  }
];
</script>

<style scoped>
.solutions-page {
  width: 100%;
  min-height: 100vh;
  background-color: #f8fafc;
  scroll-behavior: smooth;
}

/* Sticky Sub-Nav Settings */
.sub-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e2e8f0;
  padding: 1rem 0;
}

.nav-limiter {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  gap: 2rem;
}

.nav-limiter a {
  text-decoration: none;
  color: #64748b;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.nav-limiter a:hover { color: #4caf50; }

/* Layout Settings */
.content-limiter {
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.offer-section { padding: 2rem 0; }

.section-header { margin-bottom: 3rem; }
.tag { color: #4caf50; font-weight: 800; font-size: 0.8rem; text-transform: uppercase; }
h2 { font-size: 2.5rem; color: #0f172a; margin-top: 0.5rem; }

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

.section-divider {
  height: 1px;
  background: #e2e8f0;
  margin: 4rem 0;
}

@media (max-width: 768px) {
  .nav-limiter { justify-content: center; gap: 1rem; }
  h2 { font-size: 2rem; }
}
</style>