// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  debug: true,
  logLevel: 'verbose',
  devtools: { enabled: true },
  app: {
    baseURL: '/console',
  },
  nitro: {
    logLevel: '999'
  }
})
