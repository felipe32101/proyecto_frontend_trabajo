import Login from "../components/Login.vue";
import Home from "../components/Home.vue";
import {createRouter, createWebHashHistory} from "vue-router"

const routes=[
    {path: "/", component:Login},
    {path: "/Home", component:Home}
]

export const router = createRouter({ 
    history: createWebHashHistory(),
    routes
})