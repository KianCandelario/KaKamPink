// main.js
import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import './styles/style.css'
import './styles/index.css'

import Homepage from './views/HomePage.vue'
import Contributors from './views/Contributors.vue'
import Documentation from './views/Documentation.vue'
import Footer from './views/FooterView.vue'
import Header from './components/Header.vue'
import inputView from './views/InputView.vue'

import App from './App.vue'

// Define routes
const routes = [
    {
        path: '/',
        component: Homepage
    },
    {
        path: '/contributors',
        component: Contributors
    },
    {   
        path: '/documentation',
        component: Documentation,
        children: [
            {
                path: 'footer',
                component: Footer
            },
            {
                path: 'header',
                component: Header
            },
            {
                path: 'inputs',
                component: inputView
            },
        ]
    }
]

// Create router instance
const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

// Create Vue app instance and use router
const app = createApp(App)
app.use(router)
app.mount('#app')
