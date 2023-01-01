import Vuelize from "vuelize/src";
import V3Transitions from 'vue3-sfc-transitions'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(V3Transitions)
    nuxtApp.vueApp.use(Vuelize)
})
