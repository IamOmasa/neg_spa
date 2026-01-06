<template>
  <main class="article-page" v-if="post">
    <header class="hero" :style="{ backgroundImage: `url(${post.image})` }">
      <div class="hero-overlay">
        <div class="limiter">
          <button @click="$router.push('/blog')" class="back-link">← Back</button>
          <h1>{{ post.title }}</h1>
          <div class="article-info">
            <span>{{ post.category }}</span> • <span>{{ post.date }}</span>
          </div>
        </div>
      </div>
    </header>

    <div class="limiter">
      <article class="article-body">
        <div class="rich-content" v-html="renderedHtml"></div>
        
        <div class="share-footer">
          <h4>Share this Research Update</h4>
          <div class="share-buttons">
            <button @click="shareArticle" class="share-btn-main">
              🔗 Share Article
            </button>

            <a :href="waLink" target="_blank" class="share-btn-wa">
              WhatsApp
            </a>
          </div>
        </div>
      </article>
    </div>
  </main>

  <div v-else class="loader">
    <p>Loading report...</p>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { createClient } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

const route = useRoute();
const post = ref(null);

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

// Contentful Rich Text Rendering Options
const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title } = node.data.target.fields;
      return `<div class="in-article-img">
                <img src="${file.url}?w=1200" alt="${title}" />
                ${title ? `<p class="img-caption">${title}</p>` : ''}
              </div>`;
    },
    [BLOCKS.HEADING_2]: (node, next) => `<h2 class="section-h2">${next(node.content)}</h2>`,
  }
};

const renderedHtml = computed(() => {
  return post.value?.content ? documentToHtmlString(post.value.content, options) : '';
});

// Universal Share API Logic
const shareArticle = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: post.value.title,
        text: `Research Insight: ${post.value.title}`,
        url: window.location.href,
      });
    } catch (err) {
      console.log('Share cancelled');
    }
  } else {
    window.open(waLink.value, '_blank');
  }
};

const waLink = computed(() => {
  const text = encodeURIComponent(`KIK Farms Update: ${post.value?.title} - `);
  return `https://api.whatsapp.com/send?text=${text}${window.location.href}`;
});

onMounted(async () => {
  try {
    const res = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': route.params.slug,
      limit: 1
    });

    if (res.items.length > 0) {
      const entry = res.items[0];
      post.value = {
        title: entry.fields.title,
        image: entry.fields.thumbnail?.fields?.file?.url,
        category: entry.fields.category || 'Production',
        date: new Date(entry.sys.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
        content: entry.fields.content
      };
    }
  } catch (err) {
    console.error("Detail load error:", err);
  }
});
</script>

<style scoped>
.article-page { background: white; min-height: 100vh; }
.limiter { max-width: 800px; margin: 0 auto; padding: 0 1.2rem; box-sizing: border-box; }

/* SLIM HERO SETTINGS */
.hero { 
  height: 40vh; /* Reduced height */
  min-height: 300px;
  background-size: cover; 
  background-position: center; 
  position: relative; 
}
.hero-overlay { 
  position: absolute; 
  inset: 0; 
  background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.7)); 
  display: flex; 
  align-items: flex-end; 
  padding-bottom: 2rem; /* Tighter spacing */
}
.hero-overlay h1 { 
  color: white; 
  font-size: clamp(1.8rem, 4vw, 2.8rem); 
  margin: 0.5rem 0; 
  line-height: 1.2; 
  font-weight: 800;
}

.back-link { 
  background: rgba(255,255,255,0.15); 
  border: 1px solid rgba(255,255,255,0.3); 
  color: white; 
  padding: 0.4rem 1rem; 
  border-radius: 5px; 
  cursor: pointer; 
  font-size: 0.8rem;
  transition: 0.3s; 
  margin-bottom: 1rem;
}
.back-link:hover { background: #4caf50; border-color: #4caf50; }

.article-info { color: #4caf50; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; }

/* ARTICLE BODY */
.article-body { padding: 3rem 0; }
.rich-content { font-size: 1.15rem; line-height: 1.8; color: #334155; }
.rich-content :deep(p) { margin-bottom: 1.5rem; }
.rich-content :deep(.section-h2) { font-size: 1.8rem; color: #0f172a; margin: 2.5rem 0 1rem; }
.rich-content :deep(img) { width: 100%; border-radius: 12px; margin-top: 1rem; }
.rich-content :deep(.img-caption) { color: #64748b; font-size: 0.85rem; margin-top: 0.5rem; text-align: center; font-style: italic; }

/* SHARE FOOTER */
.share-footer { 
  margin-top: 4rem; 
  padding: 2rem; 
  background: #f8fafc; 
  border-radius: 16px; 
  text-align: center; 
}
.share-footer h4 { margin-bottom: 1.5rem; color: #1e293b; }
.share-buttons { display: flex; gap: 10px; justify-content: center; }

.share-btn-main { background: #1e293b; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 50px; font-weight: 700; cursor: pointer; }
.share-btn-wa { background: #25d366; color: white; padding: 0.8rem 1.5rem; border-radius: 50px; text-decoration: none; font-weight: 700; }

@media (max-width: 768px) {
  .hero { height: 35vh; }
  .article-body { padding: 2rem 0; }
  .rich-content { font-size: 1.05rem; }
}
</style>