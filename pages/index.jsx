import React from 'react';
import Home from '../src/components/pages/Home';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}

export default function HomePage(props) {
  return <Home {...props} />;
}
