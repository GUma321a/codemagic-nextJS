import React from 'react';

import Contact from '../src/components/pages/Contact';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'contact'])),
      // Will be passed to the page component as props
    },
  };
}

export default function MyWorkPage(props) {
  return <Contact {...props} />;
}
