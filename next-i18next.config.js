// module.exports = {
//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en', 'ua'],
//   },
// };

// used for SSR (getServerSideProps)
// const path = require('path')
// const localePath = path.resolve('./public/locales')

module.exports = {
  // https://www.i18next.com/overview/configuration-options#logging
  debug: false,
  i18n: {
    defaultLocale: 'ua',
    locales: ['en', 'ua'],
    localeDetection: true,
  },
  localePath:
    typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales',
  // localePath,
  // reloadOnPrerender: process.env.NODE_ENV === 'development',
  // serializeConfig: false,
};
