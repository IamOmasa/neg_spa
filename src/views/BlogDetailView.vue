<template>
  <main class="article-page" v-if="post">
    <header class="hero" :style="{ backgroundImage: `url(${post.image})` }">
      <div class="hero-overlay">
        <div class="limiter">
          <button @click="$router.push('/blog')" class="back-link">← Back to Insights</button>
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
          <h4>Share this update:</h4>
          <a :href="waLink" target="_blank" class="wa-share">Share via WhatsApp</a>
        </div>
      </article>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { createClient } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

const route = useRoute();
const post = ref(null);

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

// Options for rendering Rich Text content correctly
const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title } = node.data.target.fields;
      return `<div class="in-article-img">
                <img src="${file.url}?w=1200" alt="${title}" />
                ${title ? `<caption>${title}</caption>` : ''}
              </div>`;
    },
    [BLOCKS.HEADING_2]: (node, next) => `<h2 class="section-h2">${next(node.content)}</h2>`,
  }
};

const renderedHtml = computed(() => {
  return post.value?.content ? documentToHtmlString(post.value.content, options) : '';
});

const waLink = computed(() => {
  return `https://wa.me/?text=Check out this KIK Farms update: ${post.value?.title} - ${window.location.href}`;
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
.limiter { max-width: 800px; margin: 0 auto; padding: 0 1.5rem; }

.hero { height: 60vh; background-size: cover; background-position: center; position: relative; }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.85)); display: flex; align-items: flex-end; padding-bottom: 4rem; }
.hero-overlay h1 { color: white; font-size: clamp(2rem, 5vw, 3.5rem); margin: 1rem 0; line-height: 1.1; }

.back-link { background: none; border: 1px solid rgba(255,255,255,0.4); color: white; padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer; transition: 0.3s; }
.back-link:hover { background: #4caf50; border-color: #4caf50; }
.article-info { color: #4caf50; font-weight: 700; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 1px; }

.article-body { padding: 4rem 0; }
.rich-content { font-size: 1.2rem; line-height: 1.8; color: #333; }
.rich-content :deep(p) { margin-bottom: 1.5rem; }
.rich-content :deep(.section-h2) { font-size: 2rem; color: #1b2e1c; margin: 3rem 0 1rem; }
.rich-content :deep(.in-article-img) { margin: 3rem 0; text-align: center; }
.rich-content :deep(img) { width: 100%; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }

.share-footer { margin-top: 5rem; padding-top: 2rem; border-top: 1px solid #eee; text-align: center; }
.wa-share { display: inline-block; margin-top: 1rem; background: #25d366; color: white; padding: 1rem 2rem; border-radius: 50px; text-decoration: none; font-weight: 700; transition: 0.3s; }
.wa-share:hover { transform: scale(1.05); }

@media (max-width: 768px) {
  .hero { height: 50vh; }
  .rich-content { font-size: 1.1rem; }
}
</style>