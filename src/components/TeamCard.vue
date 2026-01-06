<template>
  <div class="team-card">
    <div class="image-container">
      <img 
        v-if="member.image" 
        :src="member.image" 
        :alt="member.name"
        class="member-photo"
      />
      <div v-else class="member-initial">
        {{ member.name.charAt(0) }}
      </div>
    </div>
    
    <div class="member-info">
      <h3>{{ member.name }}</h3>
      <p class="role">{{ member.role }}</p>
      
      <div v-if="member.socials" class="social-links">
        <a v-if="member.socials.linkedin" 
           :href="member.socials.linkedin" 
           target="_blank" 
           aria-label="LinkedIn Profile"
           class="social-icon linkedin">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
            <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  member: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.team-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #eee;
}

.team-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  border-color: #4caf50;
}

.image-container {
  width: 130px;
  height: 130px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  background: #f0fdf4;
  border: 4px solid #f0fdf4;
}

.member-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-initial {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #4caf50;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
  color: #1a1a1a;
}

.role {
  color: #666;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  justify-content: center;
  border-top: 1px solid #f0f0f0;
  padding-top: 1rem;
}

.social-icon {
  color: #bdc3c7;
  transition: color 0.2s;
}

.social-icon:hover {
  color: #0077b5;
}
</style>