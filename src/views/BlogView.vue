<template>
  <main class="blog-list-page">
    <div class="container">
      <header class="section-header">
        <span class="badge">NeG Agri-Tech</span>
        <h1>KIK Farms Insights</h1>
        <p>Updates on IoT integration, soil health, and sustainable production.</p>
      </header>

      <div v-if="loading" class="loading-container">
        <div class="spinner"></div>
        <p>Connecting to farm database...</p>
      </div>

      <div v-else class="post-grid">
        <article 
          v-for="post in posts" 
          :key="post.id" 
          class="post-card"
          @click="$router.push(`/blog/${post.slug}`)"
        >
          <div class="image-box">
            <img :src="post.image" :alt="post.title" loading="lazy" />
            <div class="category-tag">{{ post.category }}</div>
          </div>
          
          <div class="content-box">
            <h3>{{ post.title }}</h3>
            <p>{{ post.excerpt }}</p>
            <div class="card-footer">
              <span class="date">{{ post.date }}</span>
              <span class="read-btn">Read Article →</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { createClient } from 'contentful';

const posts = ref([]);
const loading = ref(true);

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

onMounted(async () => {
  try {
    const res = await client.getEntries({ 
      content_type: 'blogPost', 
      order: '-sys.createdAt' 
    });

    posts.value = res.items.map(entry => ({
      id: entry.sys.id,
      title: entry.fields.title,
      slug: entry.fields.slug,
      excerpt: entry.fields.excerpt,
      image: entry.fields.thumbnail?.fields?.file?.url || 'https://via.placeholder.com/800x600',
      category: entry.fields.category || 'Agri-Tech',
      date: new Date(entry.sys.createdAt).toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric'
      })
    }));
  } catch (err) {
    console.error("Contentful Error:", err);
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.blog-list-page { padding: 8rem 0; background: #f9fbf9; min-height: 100vh; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }

.section-header { margin-bottom: 4rem; text-align: center; }
.badge { background: #e8f5e9; color: #2e7d32; padding: 0.4rem 1rem; border-radius: 50px; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
h1 { font-size: clamp(2.5rem, 5vw, 3.5rem); color: #1b2e1c; margin-top: 1rem; }

.post-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 2rem; }

.post-card { background: white; border-radius: 20px; overflow: hidden; cursor: pointer; transition: 0.4s; border: 1px solid #eee; display: flex; flex-direction: column; }
.post-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.06); border-color: #4caf50; }

.image-box { height: 220px; position: relative; overflow: hidden; }
.image-box img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
.post-card:hover .image-box img { transform: scale(1.1); }

.category-tag { position: absolute; top: 1rem; right: 1rem; background: rgba(255,255,255,0.9); padding: 0.3rem 0.8rem; border-radius: 8px; font-size: 0.7rem; font-weight: 800; color: #2e7d32; }

.content-box { padding: 1.5rem; flex-grow: 1; display: flex; flex-direction: column; }
h3 { font-size: 1.4rem; color: #1b2e1c; margin-bottom: 0.8rem; line-height: 1.3; }
p { color: #555; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem; flex-grow: 1; }

.card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f0f0f0; padding-top: 1rem; }
.date { font-size: 0.85rem; color: #888; }
.read-btn { color: #4caf50; font-weight: 700; font-size: 0.9rem; }

/* Mobile optimization */
@media (max-width: 768px) {
  .blog-list-page { padding: 5rem 0; }
  .post-grid { grid-template-columns: 1fr; }
}
</style>