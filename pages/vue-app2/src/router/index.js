import Vue from 'vue'
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        // {path: '/vue-app', component: () => import(/* webpackChunkName: "newUserCoupon-h5" */ '@/pages/vue-app/')},
        {path: '/hello', component: () => import('../views/HelloWorld.vue')},
    ]
});

export default router;

