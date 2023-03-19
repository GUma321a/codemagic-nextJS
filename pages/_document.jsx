import React from 'react';
import i18n from 'i18next';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  // const currentLocale =
  //   this.props.__NEXT_DATA__.query.locale || nextI18nextConfig.i18n.defaultLocale;

  const getLanguage = i18n.language;
  return (
    <Html lang={getLanguage}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
