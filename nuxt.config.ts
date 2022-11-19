// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    // [
    //   "@pinia/nuxt",
    //   {
    //     autoImports: ["defineStore", "acceptHMRUpdate"],
    //   },
    // ],
  ],
  // imports: {
  //   dirs: ["stores"],
  // },
  // alias: {
  //   pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
  // },
  nitro: {
    preset: "netlify",
  },
  routeRules: {
    "/spar": { ssr: false },
    "/static": { static: true },
    "/swr": { swr: true },
    "/600": { swr: 600 },
    "/21600": { swr: 21600 },
  },
});
