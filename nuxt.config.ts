// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  i18n: {
    /* module options */
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "pt-BR",
        iso: "pt-BR",
        name: "Português(BR)",
        file: "pt-BR.json"
      },
      {
        code: "en-US",
        iso: "en-US",
        name: "English(US)",
        file: "en-US.json"
      },
    ],
    defaultLocale: "pt-BR",
    vueI18n: "./i18n.config.ts",
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})
