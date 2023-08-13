import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        redirect: { name: "cardozo" },
        component: () => import("../views/cardozo.vue")
    },
    {
        path: "/cardozo",
        name: "cardozo",
        children: [

        ],
        component: () => import("../views/cardozo.vue")
    },
    {
        path: "/vergne",
        name: "vergne",
        component: () => import("../views/vergne.vue")
    },
    {
        path: "/moser",
        name: "moser",
        component: () => import("../views/moser.vue")
    },
    {
        path: "/ahp-cardozo",
        name: "ahpCardozo",
        children: [
            {
                path: "/ahp-cardozo/first-etapa",
                name: "firstEtapa",
                component: () => import("../views/ahpCardozoTabViews/firstEtapa.vue")
            },
            {
                path: "/ahp-cardozo/secound-etapa",
                name: "secoundEtapa",
                component: () => import("../views/ahpCardozoTabViews/secoundEtapa.vue")
            },
            {
                path: "/ahp-cardozo/resultados",
                name: "resultados",
                component: () => import("../views/ahpCardozoTabViews/resultados.vue")
            }
        ],
        component: () => import("../views/ahpCardozo.vue")
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
