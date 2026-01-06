<template>
  <main class="about-page">
    <section class="hero-section">
      <div class="content-limiter">
        <span class="tag">Since 2019</span>
        <h1>Revolutionizing Agriculture in East Africa</h1>
        <p class="lead-text">
          NEG-AGRITECHNOLOGIES is a dynamic technology company based in Morogoro, Tanzania, 
          dedicated to empowering farmers through cutting-edge smart solutions.
        </p>
      </div>
    </section>

    <section class="mission-vision-section">
      <div class="content-limiter grid-2-col">
        <div class="info-card">
          <div class="icon">🎯</div>
          <h2>Our Mission</h2>
          <p>To provide quality and affordable agriculture services using the best technologies to solve agriculture and environmental problems.</p>
        </div>
        <div class="info-card">
          <div class="icon">🔭</div>
          <h2>Our Vision</h2>
          <p>To be the leading company in providing Smart agriculture services, solutions, and technology in Africa.</p>
        </div>
      </div>
    </section>

    <section class="story-section">
      <div class="content-limiter grid-split">
        <div class="text-content">
          <h2>Who We Are</h2>
          <p>
            Founded by a team of passionate engineers and agronomists, our company has established itself 
            as a leading provider of IoT and AI-driven solutions. At the heart of our success lies 
            a deep understanding of the unique challenges facing farmers in Tanzania.
          </p>
          <p>
            We don't just build tools; we collaborate directly with farming communities to 
            unlock new pathways to increased productivity and enhanced profitability.
          </p>
        </div>
        <div class="kik-farms-promo">
          <h3>KIK Farms Model</h3>
          <p>
            Our unique "living lab" approach where we test our smart technologies 
            on our own horticultural farms before bringing them to the market.
          </p>
          <router-link to="/blog" class="btn-secondary">Learn about KIK Farms</router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-page {
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
}

.content-limiter {
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 2rem;
}

/* Hero Styles */
.hero-section {
  background: linear-gradient(rgba(45, 90, 39, 0.9), rgba(45, 90, 39, 0.9)), 
              url('/farm-bg.jpg') center/cover;
  color: white;
  text-align: center;
}

.tag {
  color: #4caf50;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
}

h1 { font-size: 3.5rem; margin: 1rem 0; }
.lead-text { font-size: 1.25rem; max-width: 800px; margin: 0 auto; opacity: 0.9; }

/* Mission/Vision Styles */
.mission-vision-section { background-color: #f8fafc; }
.grid-2-col { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }

.info-card {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  border-bottom: 5px solid #4caf50;
}

.info-card h2 { color: #2d5a27; margin-top: 1rem; }
.icon { font-size: 3rem; }

/* Story Section */
.grid-split { display: grid; grid-template-columns: 1.5fr 1fr; gap: 4rem; align-items: center; }

.kik-farms-promo {
  background: #e8f5e9;
  padding: 2.5rem;
  border-radius: 15px;
  border-left: 8px solid #2d5a27;
}

.btn-secondary {
  display: inline-block;
  margin-top: 1rem;
  color: #2d5a27;
  font-weight: bold;
  text-decoration: underline;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .grid-2-col, .grid-split { grid-template-columns: 1fr; }
  h1 { font-size: 2.5rem; }
}
</style>
