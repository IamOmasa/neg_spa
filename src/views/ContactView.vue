<template>
  <main class="contact-page">
    <div class="content-limiter">
      
      <div class="contact-grid">
        
        <section class="info-column">
          <header class="header-block">
            <span class="pre-title">Tanzania's Smart Farming Partner</span>
            <h1>Get In Touch</h1>
            <p>Ready to automate your farm? Our technical team in Morogoro is standing by to help you scale.</p>
          </header>

          <div class="info-cards">
            <div class="info-item">
              <div class="icon-circle">📍</div>
              <div class="info-text">
                <h3>Our Office</h3>
                <p>Misufini, Morogoro, Tanzania</p>
              </div>
            </div>

            <div class="info-item">
              <div class="icon-circle">📞</div>
              <div class="info-text">
                <h3>Direct Line</h3>
                <p>+255 620 157 239</p>
              </div>
            </div>

            <div class="info-item">
              <div class="icon-circle">✉️</div>
              <div class="info-text">
                <h3>Support Email</h3>
                <p>info@neg-agritechnologies.com</p>
              </div>
            </div>
          </div>
        </section>

        <section class="form-column">
          <div class="glass-card">
            <form @submit.prevent="handleSend">
              <div class="input-row">
                <div class="field">
                  <label>Name</label>
                  <input type="text" v-model="form.name" placeholder="John Doe" required />
                </div>
                <div class="field">
                  <label>Phone</label>
                  <input type="tel" v-model="form.phone" placeholder="+255..." required />
                </div>
              </div>

              <div class="field">
                <label>Email</label>
                <input type="email" v-model="form.email" placeholder="john@example.com" required />
              </div>

              <div class="field">
                <label>Message</label>
                <textarea v-model="form.message" rows="4" placeholder="How can we help your project?" required></textarea>
              </div>

              <button type="submit" class="submit-btn" :disabled="loading">
                <span v-if="loading" class="spinner"></span>
                <span v-else>Send Message</span>
              </button>
            </form>
          </div>
        </section>
      </div>

      <section class="map-wrapper">
        <div class="map-inner">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.11477764831!2d37.659103!3d-6.818389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185a5da26b48d6d7%3A0x6a0c0b89f074d6c1!2sMorogoro!5e0!3m2!1sen!2stz!4v1700000000000!5m2!1sen!2stz" 
            width="100%" 
            height="400" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </section>
    </div>

    <Teleport to="body">
      <div v-if="submitted" class="success-overlay" @click="submitted = false">
        <div class="success-pop" @click.stop>
          <div class="success-circle">✓</div>
          <h2>Asante Sana!</h2>
          <p>We have received your message. A specialist will contact you soon.</p>
          <button class="done-btn" @click="submitted = false">Return to Page</button>
        </div>
      </div>
    </Teleport>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const loading = ref(false);
const submitted = ref(false);
const form = ref({ name: '', email: '', phone: '', message: '' });

const handleSend = async () => {
  loading.value = true;
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        user_name: form.value.name,
        user_email: form.value.email,
        user_phone: form.value.phone,
        message: form.value.message,
        source: "General Contact Page"
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    submitted.value = true;
    form.value = { name: '', email: '', phone: '', message: '' };
  } catch (err) {
    alert("Message failed to send. Please check your connection.");
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  background: #fcfdfc;
  padding: 6rem 0;
}

.content-limiter {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  margin-bottom: 5rem;
}

/* Info Column Styling */
.pre-title { color: #4caf50; font-weight: 800; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; }
h1 { font-size: 3.5rem; color: #1e293b; margin: 0.5rem 0 1.5rem; }
header p { color: #64748b; font-size: 1.1rem; line-height: 1.6; }

.info-cards { margin-top: 3rem; display: flex; flex-direction: column; gap: 2rem; }
.info-item { display: flex; gap: 1.5rem; align-items: center; }
.icon-circle { 
  width: 50px; height: 50px; background: #f0fdf4; border-radius: 50%;
  display: flex; align-items: center; justify-content: center; font-size: 1.2rem;
}
.info-text h3 { font-size: 0.9rem; color: #94a3b8; text-transform: uppercase; margin: 0; }
.info-text p { color: #1e293b; font-weight: 600; margin: 0.2rem 0 0; }

/* Form Column Styling */
.glass-card {
  background: white;
  padding: 3rem;
  border-radius: 30px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.05);
}
.input-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
.field { margin-bottom: 1.5rem; text-align: left; }
label { display: block; font-size: 0.85rem; font-weight: 700; color: #334155; margin-bottom: 0.5rem; }
input, textarea {
  width: 100%; padding: 0.8rem; border: 1px solid #e2e8f0; border-radius: 10px; font-family: inherit;
}
input:focus, textarea:focus {
  outline: none; border-color: #4caf50; box-shadow: 0 0 0 4px rgba(76, 175, 80, 0.1);
}

.submit-btn {
  width: 100%; padding: 1rem; background: #1e293b; color: white; border: none; border-radius: 12px;
  font-weight: 700; cursor: pointer; transition: 0.2s;
}
.submit-btn:hover { background: #0f172a; transform: translateY(-2px); }

/* Map Section */
.map-wrapper { border-radius: 24px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
.map-inner { filter: grayscale(100%); transition: filter 0.5s; }
.map-inner:hover { filter: grayscale(0%); }

/* Success UI */
.success-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(15, 23, 42, 0.9); backdrop-filter: blur(8px);
  z-index: 9999; display: flex; align-items: center; justify-content: center;
}
.success-pop { background: white; padding: 4rem; border-radius: 30px; text-align: center; max-width: 450px; }
.success-circle { 
  width: 80px; height: 80px; background: #4caf50; color: white; border-radius: 50%;
  font-size: 2.5rem; line-height: 80px; margin: 0 auto 2rem;
}
.done-btn { margin-top: 2rem; padding: 0.8rem 2.5rem; background: #f1f5f9; border: none; border-radius: 10px; cursor: pointer; }

@media (max-width: 968px) {
  .contact-grid { grid-template-columns: 1fr; gap: 4rem; }
  h1 { font-size: 2.5rem; }
}
</style>