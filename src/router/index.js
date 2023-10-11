import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import('../components/main/pages/infosPage.vue')
    },
    {
      path: "/experience",
      component: () => import('../components/main/pages/experiencePage.vue')
    },
    {
      path: "/skills",
      component: () => import('../components/main/pages/skillsPage.vue')
    },
    {
      path: "/education",
      component: () => import('../components/main/pages/educationPage.vue')
    },
    {
      path: "/projects",
      component: () => import('../components/main/pages/projectsPage.vue')
    },
  ],
});

export default router;
