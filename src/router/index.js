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
        path: "/mcdm",
        name: "mcdm",
        children: [
            {
                path: "/mcdm/inputs",
                name: "inputsEtapa",
                component: () => import("../views/mcdmTabViews/inputsEtapa.vue")
            },
            {
                path: "/mcdm/primeira",
                name: "primeiraEtapa",
                component: () => import("../views/mcdmTabViews/primeiraEtapa.vue")
            },
            {
                path: "/mcdm/segunda",
                name: "segundaEtapa",
                component: () => import("../views/mcdmTabViews/segundaEtapa.vue")
            },
            {
                path: "/mcdm/resultados",
                name: "resultadosEtapa",
                component: () => import("../views/mcdmTabViews/resultadosEtapa.vue")
            }
        ],
        component: () => import("../views/mcdm.vue")
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
