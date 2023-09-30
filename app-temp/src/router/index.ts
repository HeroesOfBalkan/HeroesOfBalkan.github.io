import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "../components/LandingPage.vue";
import PostPage from "../components/PostPage.vue";
import NewPostPage from "../components/CreatePostPage.vue";

const router = createRouter({
    routes: [
        {
            path: "/",
            name: "home",
            component: LandingPage
        },
        {
            path: "/post=:id",
            name: "post page",
            component: PostPage
        },
        {
            path: "/new-post",
            name: "new post",
            component: NewPostPage
        }
    ],
    history: createWebHashHistory()
});

export default router;