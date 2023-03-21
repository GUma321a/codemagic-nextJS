import React from 'react';

import NotFound from '../../src/components/pages/NotFound';
import { getStaticPaths, makeStaticProps } from '../../src/components/molecules/getStatic';

export default function NotFoundPage(props) {
  return <NotFound {...props} />;
}

const getStaticProps = makeStaticProps('common');
export { getStaticPaths, getStaticProps };
