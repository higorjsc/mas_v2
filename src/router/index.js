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
        path: "/ahp",
        name: "ahp",
        children: [
            {
                path: "/ahp/inputs-etapa",
                name: "inputsEtapa",
                component: () => import("../views/ahpTabViews/inputsEtapa.vue")
            },
            {
                path: "/ahp/primeira-etapa",
                name: "primeiraEtapa",
                component: () => import("../views/ahpTabViews/primeiraEtapa.vue")
            },
            {
                path: "/ahp/segunda-etapa",
                name: "segundaEtapa",
                component: () => import("../views/ahpTabViews/segundaEtapa.vue")
            },
            {
                path: "/ahp/resultados-etapa",
                name: "resultadosEtapa",
                component: () => import("../views/ahpTabViews/resultadosEtapa.vue")
            }
        ],
        component: () => import("../views/ahp.vue")
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
