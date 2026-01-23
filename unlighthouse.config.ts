export default {
  site: 'http://malaypatel.com', // or your deployed URL

  scanner: {
    // Crawl all pages safely
    dynamicSampling: true,
    maxRoutes: 200,

    routes: [
      '/', // start from the homepage
      '/crafts',
      '/blogs',
      '/blogs/nextjs-page-transition-gsap',
      '/blogs/my-portfolio-case-study'
    ],

    // Ignore Next.js internal routes
    exclude: [
      '/api/**',
      '/_next/**',
      '/404',
      '/500'
    ]
  },

  lighthouse: {
    preset: 'desktop' // mobile scores matter most
  }
}
