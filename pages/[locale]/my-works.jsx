import React from 'react';
import MyWork from '../../src/components/pages/MyWorks';
import { getStaticPaths, makeStaticProps } from '../../src/components/molecules/getStatic';

export default function MyWorkPage(props) {
  return <MyWork {...props} />;
}
const getStaticProps = makeStaticProps(['common', 'home']);
export { getStaticPaths, getStaticProps };
