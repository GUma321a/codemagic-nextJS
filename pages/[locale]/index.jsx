import React from 'react';
import Home from '../../src/components/pages/Home';
import { getStaticPaths, makeStaticProps } from '../../src/components/molecules/getStatic';

export default function HomePage(props) {
  return <Home {...props} />;
}
const getStaticProps = makeStaticProps(['common', 'home']);
export { getStaticPaths, getStaticProps };
