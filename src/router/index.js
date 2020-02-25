import Vue from 'vue';
import Home from '../views/Home.vue';
import {IonicVueRouter} from '@ionic/vue';

Vue.use(IonicVueRouter);
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import('../views/About.vue')
    }
];

const router = new IonicVueRouter({
    routes
});

export default router;
