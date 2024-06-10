// main.js
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import './styles/style.css'
import './styles/index.css'

import App from './App.vue'

// Define routes
const routes = [
    {
        path: '/',
        component: () => import('./views/HomePage.vue'),
        meta: { transition: 'fade' }
    },
    {
        path: '/contributors',
        component: () => import('./views/Contributors.vue'),
        meta: { transition: 'fade' }
    },
    {
        path: '/documentation',
        component: () => import('./views/Documentation.vue'),
        redirect: '/documentation/introduction',
        meta:{transition: 'fade'},
        children: [
            {
                path: 'introduction',
                component: () => import('./views/Introduction.vue'),
                meta: { transition: 'fade' },
            },
            {
                path: 'footer',
                component: () => import('./views/FooterView.vue'),
                meta: { transition: 'fade' },
            },
            {
                path: 'header',
                component: () => import('./components/Header/Header.vue'),
                meta: { transition: 'fade' },
            },
            {
                path: 'inputs',
                component: () => import('./views/InputView.vue'),
                meta: { transition: 'fade' },
            },
            {
                path: 'button',
                component: () => import('./views/ButtonView.vue'),
                meta: { transition: 'fade' },
            },
            {
                path: 'dialogs',
                component: () => import('./views/DialogView.vue'),
                meta: { transition: 'fade' },
            },
            {
                path: 'sheet',
                component: () => import('./views/SheetView.vue'),
                meta: { transition: 'fade' },
            },
            {
                path: 'bottomsheet',
                component: () => import('./views/BottomSheetView.vue'),
                meta: { transition: 'fade' },
            },
            {
                path: 'dropdown',
                component: () => import('./views/DropDown.vue'),
                meta: { transition: 'fade' },
            },
            {
                path: 'popups',
                component: () => import('./views/PopupView.vue'),
                meta: { transition: 'fade' },
            },
            {
                path: 'checkbox',
                component: () => import('./views/CheckboxVue.vue'),
                meta: { transition: 'fade' },
            },
            {
                path: 'avatar',
                component: () => import('./views/AvatarView.vue'),
                meta: { transition: 'fade' },
            },
            {
                path: 'cards',
                component: () => import ('./views/CardsView.vue'),
                meta: { transition: 'fade' },
            },
            {
                path: 'text-area',
                component: () => import ('./views/TextareaView.vue'),
                meta: { transition: 'fade' },
            },
            {
                path: 'alert',
                component: () => import ('./views/AlertView.vue'),
                meta: { transition: 'fade' },
            },
            {
                path: 'images',
                component: () => import ('./views/ImageView.vue'),
                meta: { transition: 'fade' },
            },
            {
                path: 'card-loader',
                component: () => import('./views/CardLoaderView.vue'),
                meta: { transition: 'fade' },
            },
            {
                path: 'hover',
                component: () => import('./views/HoverView.vue'),
                meta: { transition: 'fade' },
            }
        ]
    }
]

// Create router instance
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// Create Vue app instance and use router
const app = createApp(App)
app.use(router)
app.mount('#app')
