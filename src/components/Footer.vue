<template>
  <footer class="footer bg-dark-custom text-white">
    <div class="container">
      <div class="row footer-content">
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 footer-col">
          <h3 class="footer-heading text-secondary">NeG AgriTechnologies</h3>
          <p class="footer-text">MISUFINI</p>
          <p class="footer-text">MOROGORO, P.O BOX 3000</p>
          <p class="footer-text">TANZANIA</p>
          <p class="footer-text mt-3">
            <strong>Phone:</strong> 
            <a href="tel:+255620157239" class="text-white text-decoration-none footer-link">
              +255620157239
            </a>
          </p>
          <p class="footer-text">
            <strong>Email:</strong> 
            <a href="mailto:info@neg-agritech.com" class="text-white text-decoration-none footer-link">
              info@neg-agritech.com
            </a>
          </p>

          <div class="social-links d-flex gap-3 mt-4">
            <a href="#" class="social-icon-link" aria-label="Facebook" target="_blank">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/neg_agritechologies?igsh=MXRhemZjM3F2Y3BxaA==" class="social-icon-link" aria-label="Instagram" target="_blank">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" class="social-icon-link" aria-label="LinkedIn" target="_blank">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="#" class="social-icon-link" aria-label="Twitter" target="_blank">
              <i class="bi bi-twitter-x"></i>
            </a>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 footer-col">
          <h4 class="footer-subheading text-secondary">Useful Links</h4>
          <ul class="list-unstyled">
            <li class="footer-list-item">
              <router-link to="/" class="text-white text-decoration-none footer-link">
                <i class="bi bi-chevron-right"></i> Home
              </router-link>
            </li>
            <li class="footer-list-item">
              <router-link to="/about" class="text-white text-decoration-none footer-link">
                <i class="bi bi-chevron-right"></i> About us
              </router-link>
            </li>
            <li class="footer-list-item">
              <router-link to="/services" class="text-white text-decoration-none footer-link">
                <i class="bi bi-chevron-right"></i> Services
              </router-link>
            </li>
            <li class="footer-list-item">
              <router-link to="/team" class="text-white text-decoration-none footer-link">
                <i class="bi bi-chevron-right"></i> Team
              </router-link>
            </li>
          </ul>
        </div>

        <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 footer-col">
          <h4 class="footer-subheading text-secondary">Our Services</h4>
          <ul class="list-unstyled">
            <li class="footer-list-item">
              <i class="bi bi-check-circle text-secondary"></i>
              Irrigation Systems Services
            </li>
            <li class="footer-list-item">
              <i class="bi bi-check-circle text-secondary"></i>
              Farm Management Services
            </li>
            <li class="footer-list-item">
              <i class="bi bi-check-circle text-secondary"></i>
              Extension Services
            </li>
          </ul>
        </div>
      </div>

      <hr class="footer-divider border-secondary">
      <div class="row">
        <div class="col-12 text-center">
          <p class="footer-copyright">
            © Copyright <strong>NeG AgriTechnologies</strong>. All Rights Reserved {{ currentYear }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
/* Component-specific footer styles */
.footer {
  padding: 2rem 0 1.5rem;
  margin-top: 2rem;
}

.bg-dark-custom {
  background-color: var(--primary-color);
}

.footer-content {
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-col {
  margin-bottom: 1.5rem;
}

.footer-heading {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.footer-subheading {
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.footer-text {
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.footer-list-item {
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.footer-link {
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: var(--secondary-color) !important;
}

.footer-divider {
  margin: 1.5rem 0;
}

.footer-copyright {
  font-size: 0.875rem;
  margin-bottom: 0;
}

/* Social Media Button Styling */
.social-icon-link {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  font-size: 1rem;
  text-decoration: none;
}

.social-icon-link:hover {
  background-color: var(--secondary-color);
  color: #fff;
  transform: translateY(-3px);
}

/* Small devices (576px - 767px) */
@media (min-width: 576px) {
  .footer { padding: 2.5rem 0 1.75rem; }
  .footer-heading { font-size: 1.35rem; }
  .footer-subheading { font-size: 1.15rem; }
  .footer-text, .footer-list-item { font-size: 0.9rem; }
  .footer-copyright { font-size: 0.9rem; }
}

/* Medium devices (768px - 991px) */
@media (min-width: 768px) {
  .footer { padding: 3rem 0 2rem; margin-top: 3rem; }
  .footer-content { gap: 2.5rem; margin-bottom: 2.5rem; }
  .footer-col { margin-bottom: 0; }
  .footer-heading { font-size: 1.5rem; }
  .footer-subheading { font-size: 1.2rem; }
  .footer-text, .footer-list-item { font-size: 0.95rem; }
  .footer-list-item { margin-bottom: 0.6rem; }
  .footer-divider { margin: 2rem 0; }
  .footer-copyright { font-size: 0.95rem; }
}

/* Large devices (992px - 1199px) */
@media (min-width: 992px) {
  .footer { padding: 3.5rem 0 2.25rem; margin-top: 3.5rem; }
  .footer-content { gap: 3rem; margin-bottom: 3rem; }
  .footer-heading { font-size: 1.65rem; }
  .footer-subheading { font-size: 1.3rem; }
  .footer-text, .footer-list-item { font-size: 1rem; }
  .footer-list-item { margin-bottom: 0.7rem; }
  .footer-divider { margin: 2.5rem 0; }
  .footer-copyright { font-size: 1rem; }
}

/* Extra large devices (1200px - 1399px) */
@media (min-width: 1200px) {
  .footer { padding: 4rem 0 2.5rem; margin-top: 4rem; }
  .footer-heading { font-size: 1.75rem; margin-bottom: 1.25rem; }
  .footer-subheading { font-size: 1.4rem; margin-bottom: 1.25rem; }
  .footer-text { font-size: 1.05rem; margin-bottom: 0.6rem; }
  .footer-list-item { font-size: 1.05rem; margin-bottom: 0.75rem; }
}

/* Extra extra large (1400px+) */
@media (min-width: 1400px) {
  .footer { padding: 4.5rem 0 3rem; }
  .footer-heading { font-size: 1.85rem; }
  .footer-subheading { font-size: 1.5rem; }
  .footer-text, .footer-list-item { font-size: 1.1rem; }
}
</style>