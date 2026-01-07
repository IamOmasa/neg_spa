<template>
  <div class="home">
    <section v-if="blogPosts && blogPosts.length > 0" class="blog-carousel-section">
      <div id="blogCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="hover">
        
        <div class="carousel-indicators custom-dots">
          <button 
            v-for="(post, index) in blogPosts" 
            :key="'dot-' + post.sys.id"
            type="button" 
            data-bs-target="#blogCarousel" 
            :data-bs-slide-to="index" 
            :class="{ active: index === 0 }" 
            :aria-current="index === 0 ? 'true' : 'false'" 
            :aria-label="'Slide ' + (index + 1)">
          </button>
        </div>

        <div class="carousel-inner">
          <div 
            v-for="(post, index) in blogPosts" 
            :key="post.sys.id" 
            :class="['carousel-item', { active: index === 0 }]"
            data-bs-interval="3000" 
          >
            <div 
              class="blog-banner-card"
              :style="{ backgroundImage: post.fields.thumbnail ? `url(${post.fields.thumbnail.fields.file.url}?w=1600&q=80)` : 'none' }"
            >
              <div class="carousel-overlay">
                <div class="container d-flex align-items-center justify-content-between">
                  <div class="blog-content">
                    <span class="badge bg-green-theme mb-1">Latest Update</span>
                    <h3 class="blog-title overflow-wrap">{{ post.fields.title }}</h3>
                    <router-link :to="'/blog/' + post.fields.slug" class="read-article-link badge bg-primary mb-2 text-white">
                      Read Full Report →
                    </router-link>
                  </div>
                  <div class="blog-image-wrapper d-none d-md-block" v-if="post.fields.thumbnail">
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Hero
      title="Welcome to NeG AgriTechnologies"
      subtitle="At NeG AgriTechnologies we work tirelessly to provide best agriculture services and provide cutting edge solutions that optimize production."
      buttonText="Learn More"
      buttonLink="/services"
      backgroundImage="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920"
    />

    <section class="about-section">
      <div class="container">
        <div class="text-center section-header">
          <h2 class="section-title fw-bold text-primary">About Us</h2>
          <p class="section-subtitle text-muted">
            Discover what makes NeG AgriTechnologies your trusted partner in agriculture
          </p>
        </div>

        <div class="row cards-grid">
          <div class="col-12 col-sm-12 col-md-6 col-lg-4" v-for="card in aboutCards" :key="card.id">
            <div class="info-card h-100 shadow-sm border-0">
              <div class="card-body text-center">
                <div class="icon-wrapper">
                  <div class="icon-circle">
                    <component :is="card.icon" />
                  </div>
                </div>
                <h3 class="card-title fw-bold text-primary">{{ card.title }}</h3>
                <p class="card-text text-muted">{{ card.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="services-section">
      <div class="container">
        <div class="text-center section-header">
          <h2 class="section-title fw-bold text-primary">Our Services</h2>
          <p class="section-subtitle text-muted">
            Comprehensive agriculture solutions for modern farming
          </p>
        </div>

        <div class="row cards-grid">
          <div class="col-12 col-sm-6 col-lg-4" v-for="service in services" :key="service.id">
            <div class="service-card h-100 shadow-sm border-0 overflow-hidden">
              <img :src="service.image" class="card-img-top service-image" :alt="service.title">
              <div class="card-body">
                <h3 class="service-title fw-bold text-primary">{{ service.title }}</h3>
                <p class="service-text text-muted">{{ service.description }}</p>
                <router-link to="/services" class="btn btn-outline-secondary btn-sm">
                  Learn More →
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section bg-primary text-white">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8">
            <h2 class="cta-title fw-bold">Ready to Transform Your Farm?</h2>
            <p class="cta-subtitle">
              Get in touch with us today and discover how we can help optimize your agricultural production.
            </p>
            <router-link to="/contact" class="btn btn-secondary btn-lg">
              Contact Us Now
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import { createClient } from 'contentful'

export default {
  name: 'Home',
  components: { Hero },
  data() {
    return {
      client: createClient({
        space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
        accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
      }),
      blogPosts: [],
      aboutCards: [
        { id: 1, title: 'WHO WE ARE', text: 'We are highly motivated and experienced agriculture specialists and farmers working as a team to create a better future for the agriculture sector in Tanzania and Africa at large.', icon: 'UsersIcon' },
        { id: 2, title: 'Mission', text: 'To provide quality and affordable agriculture services using the best technologies to solve agriculture and environmental problems.', icon: 'TargetIcon' },
        { id: 3, title: 'Vision', text: 'To be the Leading company in providing Smart agriculture services, solutions and technology in the World.', icon: 'EyeIcon' }
      ],
      services: [
        { id: 1, title: 'Irrigation Systems', description: 'Modern irrigation solutions and farm structures for optimal water management.', image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800' },
        { id: 2, title: 'Farm Management', description: 'Professional farm management services to maximize your agricultural productivity.', image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800' },
        { id: 3, title: 'Extension Services', description: 'Expert guidance and support to help you implement best farming practices.', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800' }
      ]
    }
  },
  async created() {
    try {
      const res = await this.client.getEntries({
        content_type: 'blogPost',
        order: '-sys.createdAt',
        limit: 3
      });
      this.blogPosts = res.items;
    } catch (err) {
      console.error("Home Blog Fetch Error:", err);
    }
  }
}
</script>

<style scoped>
/* --- UPDATED CAROUSEL STYLES --- */
.blog-carousel-section { background: #0f172a; border-bottom: 3px solid #4caf50; padding-bottom: 0; }
.blog-banner-card { 
  background-size: cover; 
  background-position: center; 
  position: relative; 
  min-height: 180px; 
  display: flex; 
  align-items: center;
  transition: min-height 0.3s ease;
}
.carousel-overlay { 
  background: linear-gradient(90deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.3) 100%); 
  width: 100%; 
  height: 100%; 
  display: flex; 
  align-items: center;
}
.bg-green-theme { background-color: #4caf50 !important; font-size: 0.7rem; text-transform: uppercase; }
.blog-title { color: white; margin: 0; font-weight: 600; transition: font-size 0.3s ease; }
.read-article-link { color: #4caf50; text-decoration: none; font-size: 0.85rem; font-weight: 700; }
.custom-dots { bottom: 5px; }
.custom-dots button {
  width: 8px !important;
  height: 8px !important;
  border-radius: 50%;
  background-color: #4caf50 !important;
  margin: 0 5px;
  border: none;
  opacity: 0.4;
}
.custom-dots button.active { opacity: 1; background-color: #ffffff !important; border: 1px solid #4caf50; }

/* Responsive Heights & Font Sizes */
@media (max-width: 767px) {
  .blog-banner-card { min-height: 180px; }
  .blog-title { font-size: 1.1rem; }
}
@media (min-width: 768px) {
  .blog-banner-card { min-height: 250px; }
  .blog-title { font-size: 1.8rem; }
}
@media (min-width: 1200px) {
  .blog-banner-card { min-height: 350px; }
  .blog-title { font-size: 2.5rem; }
}

/* --- RESTORED ORIGINAL STYLES (AS PROVIDED) --- */
.about-section { padding: 2rem 0; background: #f8f9fa; }
.services-section { padding: 2rem 0; background: white; }
.cta-section { padding: 2rem 0; }
.section-header { margin-bottom: 2rem; }
.section-title { font-size: 1.75rem; margin-bottom: 0.75rem; }
.section-subtitle { font-size: 0.95rem; padding: 0 1rem; }
.cards-grid { gap: 1rem; }
.info-card, .service-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
.info-card:hover, .service-card:hover { transform: translateY(-5px); box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15) !important; }
.card-body { padding: 1.25rem; }
.icon-wrapper { margin-bottom: 1rem; }
.icon-circle { width: 50px; height: 50px; background-color: rgba(126, 217, 87, 0.1); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; }
.card-title { font-size: 1.1rem; margin-bottom: 0.75rem; }
.card-text { font-size: 0.9rem; line-height: 1.6; }
.service-image { height: 180px; object-fit: cover; }
.service-title { font-size: 1.1rem; margin-bottom: 0.75rem; }
.service-text { font-size: 0.9rem; margin-bottom: 1rem; }
.cta-title { font-size: 1.75rem; margin-bottom: 1rem; }
.cta-subtitle { font-size: 1rem; margin-bottom: 1.5rem; }

/* TABLETS */
@media (min-width: 768px) {
  .about-section, .services-section { padding: 3rem 0; }
  .cta-section { padding: 3rem 0; }
  .section-header { margin-bottom: 2.5rem; }
  .section-title { font-size: 2.25rem; }
  .section-subtitle { font-size: 1.05rem; }
  .cards-grid { gap: 0.5rem; }
  .card-body { padding: 1.75rem; }
  .icon-circle { width: 60px; height: 60px; }
  .card-title { font-size: 1.2rem; }
  .service-image { height: 220px; }
  .cta-title { font-size: 2.25rem; }
}

/* LAPTOPS */
@media (min-width: 992px) {
  .about-section, .services-section { padding: 3.5rem 0; }
  .cta-section { padding: 3.5rem 0; }
  .section-title { font-size: 2.5rem; }
  .cards-grid { gap: 0.75rem; }
  .card-body { padding: 2rem; }
  .icon-circle { width: 70px; height: 70px; }
  .card-title { font-size: 1.3rem; }
  .service-image { height: 240px; }
  .cta-title { font-size: 2.5rem; }
}

/* DESKTOPS */
@media (min-width: 1200px) {
  .about-section, .services-section { padding: 4rem 0; }
  .section-title { font-size: 2.75rem; }
  .cards-grid { gap: 0rem; }
  .card-body { padding: 2.25rem; }
  .icon-circle { width: 75px; height: 75px; }
  .card-title { font-size: 1.4rem; }
  .service-image { height: 260px; }
  .cta-title { font-size: 2.75rem; }
}

/* LARGE DESKTOPS */
@media (min-width: 1400px) {
  .about-section, .services-section { padding: 4.5rem 0; }
  .section-title { font-size: 3rem; }
  .icon-circle { width: 80px; height: 80px; }
  .service-image { height: 280px; }
  .cta-title { font-size: 3rem; }
}
</style>