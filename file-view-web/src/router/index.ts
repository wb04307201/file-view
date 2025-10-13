import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import Ofdview from '../components/Ofdview.vue';
import Docxview from "../components/Docxview.vue";
import Excelview from "../components/Excelview.vue";
import Pptxview from "../components/Pptxview.vue";
import O3Dview from "../components/O3dview.vue";
import Cadview from "../components/Cadview.vue";

// 定义路由数组（带类型）
const routes = [
    {
        path: '/',
        component: HelloWorld,
    },
    {
        path: '/ofd',
        component: Ofdview,
    },
    {
        path: '/docx',
        component: Docxview,
    },
    {
        path: '/excel',
        component: Excelview,
    },
    {
        path: '/pptx',
        component: Pptxview,
    },
    {
        path: '/o3d',
        component: O3Dview,
    },
    {
        path: '/cad',
        component: Cadview,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;