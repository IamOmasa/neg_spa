
<template>
  <main class="full-screen-container">
    <div class="content-limiter">
      
      <header class="page-header">
        <span class="subtitle">NEG AgriTech</span>
        <h1>Meet Our Team</h1>
        <div class="accent-line"></div>
      </header>

      <div class="team-grid">
        <TeamCard 
          v-for="person in team" 
          :key="person.name" 
          :member="person" 
        />
      </div>

    </div>
  </main>
</template>

<script setup>
import TeamCard from '@/components/TeamCard.vue';

// Replace null with actual image paths (e.g., import img from '@/assets/name.jpg')
const team = [
  { 
    name: "James Kabati", 
    role: "CEO, Innovation and IoT",
    image: "/team/james.jpg", 
    socials: { linkedin: "https://www.linkedin.com/in/james-kabati-a65b32111/" }
  },
  { 
    name: "Omary Ally", 
    role: "CTO",
    image: "/team/omary.jpg",
    socials: { linkedin: "#" }
  },
  { 
    name: "James Gates", 
    role: "Busines Development Manager",
    image: "/team/jamesgates.jpg",
    socials: { linkedin: "#" }
  },
  { 
    name: "Fanuel Darema", 
    role: "Engineering and GIS Manager",
    image: "/team/darema.jpg",
    socials: { linkedin: "#" }
  },
  { 
    name: "Salimu Goliama", 
    role: "Production Manager",
    image: "/team/salim.jpg",
    socials: { linkedin: "#" }
  },
   { 
    name: "Donat Shukuru", 
    role: "Manager Mechanization",
    image: "/team/donat.jpg",
    socials: { linkedin: "#" }
  },
   { 
    name: "Rose Ng'atigwa", 
    role: "Marketing and Communications Manager",
    image: "/team/rose-ngatingwa.jpg",
    socials: { linkedin: "#" }
  },
  { 
    name: "Dr. Alcardo Alex Barakabitze", 
    role: "Head of Research & Development",
    image: "/team/alcado.jpg",
    socials: { linkedin: "https://www.linkedin.com/in/alcardo-alex-barakabitze-phd-43555246/" }
  },
  { 
    name: "Kadeghe Fue", 
    role: "Digital Agriculture Consultant",
    image: "/team/kadeghe.jpg",
    socials: { linkedin: "#" }
  }
  
];
</script>

<style scoped>
/* Ensures the background covers the whole screen */
.full-screen-container {
  width: 100%;
  min-height: 100vh;
  background-color: #f8fafc;
  margin: 0;
  padding: 0;
}

/* Centers the content and prevents it from getting too wide */
.content-limiter {
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 4rem;
}

.subtitle {
  color: #4caf50;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.9rem;
}

h1 {
  font-size: 3rem;
  color: #2c3e50;
  margin-top: 0.5rem;
}

.accent-line {
  width: 60px;
  height: 4px;
  background: #4caf50;
  margin: 1.5rem auto;
}

/* The Grid System */
.team-grid {
  display: grid;
  /* Columns: At least 280px, but fill space otherwise */
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

/* Mobile Adjustments */
@media (max-width: 768px) {
  h1 { font-size: 2rem; }
  .content-limiter { padding: 3rem 1rem; }
}
</style>