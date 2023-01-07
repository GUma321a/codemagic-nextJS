import React from 'react';

import About from '../src/components/pages/About';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}

export default function AboutPage(props) {
  return <About {...props} />;
}
