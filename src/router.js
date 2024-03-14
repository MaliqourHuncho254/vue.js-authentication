import { createRouter, createWebHistory } from "vue-router";
import LoginForm from './pages/LoginForm.vue';
import SignupForm from './pages/SignupForm.vue'; // Assuming you have a SignupForm.vue file

const routes = [
    { path: '/login', component: LoginForm }, // Use lowercase for paths for consistency
    { path: '/signup', component: SignupForm },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
