// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],
    css: ['@/assets/css/tailwind.css', '@fancyapps/ui/dist/fancybox.css', 'animate.css'],


    // app: {    pageTransition: { name: 'page', mode: 'out-in' }  },
})
