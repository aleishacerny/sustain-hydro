import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue'; // Replace with actual paths
import TechnologyView from '@/views/TechnologyView.vue'; // Replace with actual paths
import ContactUsView from '@/views/ContactUsView.vue'; // Replace with actual paths
import NewsView from '@/views/NewsView.vue'; // Replace with actual paths
import LeadershipView from '@/views/LeadershipView.vue';
import CompanyView from '@/views/CompanyView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/technology', name: 'Technology', component: TechnologyView },
  { path: '/news', name: 'News', component: NewsView },
  { path: '/about-us/company', name: 'Company', component: CompanyView },
  { path: '/about-us/leadership', name: 'AboutUs', component: LeadershipView },
  { path: '/contact-us', name: 'ContactUs', component: ContactUsView },
  { path: '/:pathMatch(.*)*', redirect: '/' } // Catch-all route for 404 pages
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;