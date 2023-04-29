module.exports = {
  // https://www.i18next.com/overview/configuration-options#logging
  debug: false,
  i18n: {
    defaultLocale: 'uk',
    locales: ['en', 'uk'],
    localeDetection: true,
  },
  localePath:
    typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales',
  // localePath,
  // reloadOnPrerender: process.env.NODE_ENV === 'development',
  // serializeConfig: false,
};
