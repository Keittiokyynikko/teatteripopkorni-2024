import 'dotenv/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [['@storyblok/nuxt', { accessToken: process.env.SB_TOKEN_PREVIEW }]],
  css: ['@/assets/styles/main.scss'],
})
