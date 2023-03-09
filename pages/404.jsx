import React from 'react';

import NotFound from '../src/components/pages/NotFound';
// import { getStaticPaths, makeStaticProps } from '../getStatic';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common'])),
//       // Will be passed to the page component as props
//     },
//   };
// }

export default function NotFoundPage(props) {
  return <NotFound {...props} />;
}

// const getStaticProps = makeStaticProps('common');
// export { getStaticPaths, getStaticProps };
