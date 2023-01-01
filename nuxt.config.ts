// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    ssr: false,
    css: [
        '~/node_modules/vue3-sfc-transitions/dist/style.css',
        '~/node_modules/vuelize/src/styles/index.scss'
    ],
    runtimeConfig: {
        public: {
            API_BASE_URL: 'http://localhost:3000/api'
        }
    }
})
