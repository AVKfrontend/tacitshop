// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/src/css/reset.css", "~/src/css/main.css", "~/src/scss/app.scss"],
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      "Roboto+Slab": [300, 400, 700],
      Oswald: [600],
    },
    display: "swap",
    preconnect: true,
  },
  app: {
    pageTransition: { name: "page-transit", mode: "out-in" },
    head: {
      link: [
        {
          href: "https://fonts.cdnfonts.com/css/myriad-pro?styles=947,949,20533,952,953",
          rel: "stylesheet",
        },
        { rel: "icon", href: "/img/favicon.png" },
      ],
    },
  },
  runtimeConfig: {
    public: {
      baseURL: "https://dummyjson.com",
    },
  },
  ssr: false,
});
