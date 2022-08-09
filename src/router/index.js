import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/HomeVue";
import ProductPage from '@/pages/ViewProduct'

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/product/:id",
        name: "ProductPage",
        component: ProductPage,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;