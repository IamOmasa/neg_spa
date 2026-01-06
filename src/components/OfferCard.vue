<template>
  <div class="offer-card" :class="item.type">
    <div class="card-header">
      <div class="icon-circle">
        <span class="icon">{{ item.icon }}</span>
      </div>
      <span :class="['type-badge', item.type]">{{ item.type }}</span>
    </div>
    
    <div class="card-body">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>

    <div class="card-footer">
      <button class="inquire-btn">Inquire Now</button>
    </div>
  </div>
</template>

<script setup>
defineProps({ item: Object });
</script>

<style scoped>
.offer-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #eef2f6;
  height: 100%;
}

.offer-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
}

.icon-circle {
  width: 50px;
  height: 50px;
  background: #f0fdf4;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.type-badge {
  font-size: 0.7rem;
  padding: 4px 12px;
  border-radius: 30px;
  font-weight: 700;
  text-transform: uppercase;
}

.product .type-badge { background: #e0f2fe; color: #0369a1; }
.service .type-badge { background: #dcfce7; color: #15803d; }

h3 { margin: 1.5rem 0 0.75rem; color: #0f172a; font-size: 1.25rem; }
p { color: #64748b; font-size: 0.95rem; line-height: 1.6; flex-grow: 1; }

.inquire-btn {
  margin-top: 2rem;
  width: 100%;
  padding: 0.8rem;
  border-radius: 8px;
  border: 2px solid #4caf50;
  background: transparent;
  color: #4caf50;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}

.inquire-btn:hover { background: #4caf50; color: white; }
</style>