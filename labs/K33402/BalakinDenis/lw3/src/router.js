import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "@/views/Main";
import Login from "@/views/Login";
import Profile from "@/views/Profile";
import Register from "@/views/Register";
import store from "@/store";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    let isAuthenticated = store.state.profile;
    if (to.name !== 'Login'&& to.name !== 'Register' && !isAuthenticated) next({ name: 'Login' })
    else next()
})

export default router;
