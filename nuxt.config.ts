// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-og-image', '@nuxtjs/seo'],

  // OG Image configuration
  ogImage: {
    defaults: {
      width: 1200,
      height: 630
    },
    fonts: [
      'Inter:400',
      'Inter:500',
      'Inter:600',
      'Inter:700'
    ]
  },

  // SEO and Performance Optimizations
  app: {
    head: {
      htmlAttrs: {
        lang: 'cs'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'M Clinic | Oční klinika Praha 4 - Profesionální péče o zrak',
      meta: [
        {
          name: 'description',
          content: 'M Clinic - Oční klinika v Praze 4. Komplexní oční vyšetření, diagnostika, léčba katarakty a glaukomu. Moderní technologie OCT, perimetr. Spolupráce se všemi pojišťovnami. Táborská 325/57.'
        },
        {
          name: 'keywords',
          content: 'oční klinika praha 4, oční lékař táborská, vyšetření zraku praha, OCT vyšetření, perimetr, glaukom, katarakta, kontaktní čočky, brýlová korekce, oční diagnostika, M Clinic, zdravotní pojišťovna'
        },
        {
          name: 'author',
          content: 'M Clinic s.r.o.'
        },
        {
          name: 'robots',
          content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'M Clinic | Oční klinika Praha 4 - Profesionální péče o zrak' },
        { property: 'og:description', content: 'Komplexní oční vyšetření a diagnostika s moderními technologiemi. Spolupracujeme se všemi pojišťovnami.' },
        { property: 'og:url', content: 'https://www.clinicm.cz' },
        { property: 'og:site_name', content: 'M Clinic' },
        { property: 'og:locale', content: 'cs_CZ' },
        { property: 'og:image', content: 'https://www.clinicm.cz/images/preview.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'M Clinic - Oční klinika Praha 4' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'M Clinic | Oční klinika Praha 4' },
        { name: 'twitter:description', content: 'Komplexní oční vyšetření a diagnostika s moderními technologiemi' },
        { name: 'twitter:image', content: 'https://www.clinicm.cz/images/preview.png' },
        // Local Business
        { name: 'geo.region', content: 'CZ-PR' },
        { name: 'geo.placename', content: 'Praha 4' },
        { name: 'geo.position', content: '50.062980;14.441230' },
        { name: 'ICBM', content: '50.062980, 14.441230' }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.clinicm.cz/' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://maps.google.com' },
        { rel: 'dns-prefetch', href: 'https://maps.googleapis.com' }
      ]
    }
  },

  // Performance optimizations
  nitro: {
    compressPublicAssets: true,
    minify: true
  },

  // CSS optimization
  css: [],

  // Build optimizations
  build: {
    transpile: []
  },

  // Site config for SEO modules
  site: {
    url: 'https://www.clinicm.cz',
    name: 'M Clinic'
  },

  // Runtime config for environment variables
  runtimeConfig: {
    public: {
      siteUrl: 'https://www.clinicm.cz',
      siteName: 'M Clinic',
      siteDescription: 'Oční klinika v Praze 4 s profesionální péčí o zrak'
    }
  },

  // Experimental features for better performance
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true
  }
})
