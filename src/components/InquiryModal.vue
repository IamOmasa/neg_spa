<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-content">
      
      <div v-if="submitted" class="success-state">
        <div class="success-icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h2>Message Sent!</h2>
        <p>Asante! Your inquiry for <strong>{{ itemName }}</strong> has been received. Our team will contact you shortly.</p>
        <div class="loader-bar"></div>
        <p class="timer-text">Returning to page...</p>
      </div>

      <div v-else>
        <button class="close-btn" @click="$emit('close')">&times;</button>
        <header class="modal-header">
          <h2>Inquiry for {{ itemName }}</h2>
          <p>Please provide your contact details below.</p>
        </header>

        <form @submit.prevent="handleSubmit" class="inquiry-form">
          <div class="form-group">
            <label>Full Name</label>
            <input type="text" v-model="form.name" placeholder="E.g. Juma Kassim" required />
          </div>

          <div class="form-group">
            <label>Email Address</label>
            <input type="email" v-model="form.email" placeholder="juma@example.com" required />
          </div>

          <div class="form-group">
            <label>Phone Number</label>
            <input type="tel" v-model="form.phone" placeholder="+255..." required />
          </div>

          <div class="form-group">
            <label>Message (Optional)</label>
            <textarea v-model="form.message" rows="3" placeholder="Tell us more about your needs..."></textarea>
          </div>

          <button type="submit" class="submit-btn" :disabled="loading">
            <span v-if="loading" class="spinner"></span>
            <span v-else>Send Inquiry</span>
          </button>
        </form>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const props = defineProps({ itemName: String });
const emit = defineEmits(['close']);

const loading = ref(false);
const submitted = ref(false);
const form = ref({ name: '', email: '', phone: '', message: '' });

const handleSubmit = async () => {
  loading.value = true;
  
  const templateParams = {
    user_name: form.value.name,
    user_email: form.value.email,
    user_phone: form.value.phone,
    product_name: props.itemName,
    message: form.value.message,
  };

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    submitted.value = true;
    setTimeout(() => { emit('close'); }, 3500);

  } catch (error) {
    alert("Error sending email. Please check your .env settings.");
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(15, 23, 42, 0.8);
  display: flex; align-items: center; justify-content: center;
  z-index: 9999; backdrop-filter: blur(6px);
}

.modal-content {
  background: #ffffff; width: 90%; max-width: 440px;
  padding: 2.5rem; border-radius: 24px; position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Header & Form Styling */
.modal-header { margin-bottom: 1.5rem; text-align: left; }
.modal-header h2 { font-size: 1.5rem; color: #1e293b; margin-bottom: 0.5rem; }
.modal-header p { font-size: 0.9rem; color: #64748b; }

.form-group { margin-bottom: 1.25rem; text-align: left; }
label { display: block; font-size: 0.85rem; font-weight: 600; color: #334155; margin-bottom: 0.4rem; }
input, textarea {
  width: 100%; padding: 0.75rem; border: 1px solid #e2e8f0; border-radius: 10px;
  font-family: inherit; font-size: 0.95rem; transition: border-color 0.2s;
}
input:focus, textarea:focus { outline: none; border-color: #4caf50; box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.2); }

.submit-btn {
  width: 100%; padding: 0.9rem; background: #4caf50; color: white;
  border: none; border-radius: 12px; font-weight: 700; cursor: pointer;
  transition: background 0.2s; margin-top: 0.5rem;
}
.submit-btn:hover { background: #3d8b40; }
.submit-btn:disabled { background: #94a3b8; cursor: not-allowed; }

.close-btn {
  position: absolute; top: 1.25rem; right: 1.25rem;
  background: none; border: none; font-size: 1.75rem; color: #94a3b8; cursor: pointer;
}

/* Success State Styling */
.success-state { text-align: center; padding: 1rem 0; }
.success-icon-wrapper {
  width: 70px; height: 70px; background: #f0fdf4; color: #22c55e;
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  margin: 0 auto 1.5rem;
}
.success-icon-wrapper svg { width: 35px; height: 35px; }

.loader-bar {
  width: 100%; height: 4px; background: #f1f5f9;
  margin: 1.5rem 0 0.5rem; border-radius: 2px; overflow: hidden; position: relative;
}
.loader-bar::after {
  content: ''; position: absolute; left: 0; top: 0; height: 100%;
  background: #4caf50; width: 0%; animation: loading 3.5s linear forwards;
}

@keyframes loading { to { width: 100%; } }
</style>