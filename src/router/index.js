import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/PageLayout.vue";
import Home from "../components/pages/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "page-layout",
        component: Layout,
        children:[
            {
                path:"/",
                name:'home',
                component: Home
            }
        ]
    },


];

const router = new VueRouter({
    mode: "history",
    // base: process.env.BASE_URL,
    base: '/',
    routes
});

export default router;
