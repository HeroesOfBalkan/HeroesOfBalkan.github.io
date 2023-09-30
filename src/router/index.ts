import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "../components/LandingPage.vue";
import PortfolioPage from "../components/PortfolioPage.vue";
import AboutMePage from "../components/AboutMePage.vue";
import ContactPage from "../components/ContactPage.vue";

const router = createRouter({
    routes: [
        {
            path: "/",
            name: "home",
            component: LandingPage
        },
        {
            path: "/portfolio",
            name: "portfolio",
            component: PortfolioPage
        },
        {
            path: "/about-me",
            name: "about me",
            component: AboutMePage
        },
        {
            path: "/contact",
            name: "contact",
            component: ContactPage
        }
    ],
    history: createWebHashHistory()
});

export default router;