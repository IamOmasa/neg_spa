import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import TeamView from '../views/TeamView.vue'
import ServicesView from '../views/ServicesView.vue'
import ContactView from '@/views/ContactView.vue'
import BlogView from '@/views/BlogView.vue'
import BlogDetailView from '@/views/BlogDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // This ensures that when you switch pages, you start at the top
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    // --- BLOG ROUTES ---
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/blog/:slug', // Dynamic route for individual posts
      name: 'blog-detail',
      component: BlogDetailView,
      props: true // Allows passing the slug as a prop if needed
    },
  ],
})

export default router