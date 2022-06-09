import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true,
  },
  buildModules: [
    '@pinia/nuxt',
    // 'bootstrap-icons'
  ],

  meta: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
      },
    ],
    script: [
      // { src: '/assets/js/bootstrap.bundle.min.js', type: 'text/javascript' },
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js',
        type: 'text/javascript',
      },
    ],
  },

  css: ['@/assets/styles/style.css'],
});
