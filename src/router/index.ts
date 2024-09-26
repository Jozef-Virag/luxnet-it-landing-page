import { createRouter, createWebHistory } from 'vue-router';
import PrivacyPolicyView from "@/views/PrivacyPolicyView.vue";
import HomeView from "@/views/HomeView.vue";

const routes = [
    { path: '/', component: HomeView },
    { path: '/privacy-policy', component: PrivacyPolicyView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
