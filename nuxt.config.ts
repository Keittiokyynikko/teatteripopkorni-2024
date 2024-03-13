// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
        charset: 'utf-8',
        title: 'Teatteri Popkorni',
        link: [
          { rel: 'icon', type: 'image/png', href: '/poppari-neon_01.png' },
        ],
        viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
        meta: [
            {
                name: 'description',
                content: 'Aikuisille suunnattu harrastajateatteri Helsingissä',
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: 'Teatteri Popkorni',
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: 'https://teatteripopkorni.fi/',
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: 'https://teatteripopkorni.fi/header.jpg',
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: 'Aikuisille suunnattu harrastajateatteri Helsingissä',
            },
        ],
        script: [
            {
                src: '/js/gtm.js',
            },
            {
                src: 'https://apps.elfsight.com/p/platform.js',
                defer: '',
            },
        ],
    },
},
  devtools: { enabled: true },
  modules: [['@storyblok/nuxt', { accessToken: process.env.ACCESS_TOKEN }]],
  css: [
    '@/assets/styles/main.scss',
    'bootstrap/dist/css/bootstrap.css'
  ],

})
