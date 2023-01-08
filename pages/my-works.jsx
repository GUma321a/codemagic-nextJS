import React from 'react';
import MyWork from '../src/components/pages/MyWorks';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      // Will be passed to the page component as props
    },
  };
}

export default function MyWorkPage(props) {
  return <MyWork {...props} />;
}
