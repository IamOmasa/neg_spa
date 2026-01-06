<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow">
    <div class="container">
      <router-link class="navbar-brand fw-bold fs-4" to="/">
        NeG AgriTech
      </router-link>
      
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" active-class="active">
              Home
            </router-link>
          </li>
          
          <!-- Dropdown Menu -->
          <li class="nav-item dropdown">
            <a 
              class="nav-link dropdown-toggle" 
              href="#" 
              role="button" 
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              About
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/about">
                  About Us
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/team">
                  Team
                </router-link>
              </li>
            </ul>
          </li>
          
          <li class="nav-item">
            <router-link class="nav-link" to="/services" active-class="active">
              Services
            </router-link>
          </li>
          
          <li class="nav-item">
            <router-link class="nav-link" to="/blog" active-class="active">
              KiK Farm
            </router-link>
          </li>
          
          <li class="nav-item">
            <router-link class="nav-link" to="/contact" active-class="active">
              Contact Us
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar-brand:hover {
  color: var(--secondary-color) !important;
}

.nav-link:hover {
  color: var(--secondary-color) !important;
}

.nav-link.active {
  color: var(--secondary-color) !important;
  font-weight: 600;
}
</style>