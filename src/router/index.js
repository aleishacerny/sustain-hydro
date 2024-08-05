import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue'; // Replace with actual paths
import TechnologyView from '@/views/TechnologyView.vue'; // Replace with actual paths
import ContactUsView from '@/views/ContactUsView.vue'; // Replace with actual paths
import NewsView from '@/views/NewsView.vue'; // Replace with actual paths
import LeadershipView from '@/views/LeadershipView.vue';
import CompanyView from '@/views/CompanyView.vue';

const routes = [
  { path: '/sustain-hydro/', name: 'Home', component: HomeView },
  { path: '/sustain-hydro/technology', name: 'Technology', component: TechnologyView },
  { path: '/sustain-hydro/news', name: 'News', component: NewsView },
  { path: '/sustain-hydro/about-us/company', name: 'Company', component: CompanyView },
  { path: '/sustain-hydro/about-us/leadership', name: 'AboutUs', component: LeadershipView },
  { path: '/sustain-hydro/contact-us', name: 'ContactUs', component: ContactUsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
