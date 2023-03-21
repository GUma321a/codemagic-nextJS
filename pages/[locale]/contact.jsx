import React from 'react';

import Contact from '../../src/components/pages/Contact';
import { getStaticPaths, makeStaticProps } from '../../src/components/molecules/getStatic';

export default function MyWorkPage(props) {
  return <Contact {...props} />;
}

const getStaticProps = makeStaticProps(['common', 'contact']);
export { getStaticPaths, getStaticProps };
