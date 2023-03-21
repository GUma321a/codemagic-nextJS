import React from 'react';

import About from '../../src/components/pages/About';
import { getStaticPaths, makeStaticProps } from '../../src/components/molecules/getStatic';

export default function AboutPage(props) {
  return <About {...props} />;
}

const getStaticProps = makeStaticProps(['common', 'about']);
export { getStaticPaths, getStaticProps };
