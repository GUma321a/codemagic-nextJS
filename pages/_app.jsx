import React from 'react';
import pt from 'prop-types';
import { appWithTranslation } from 'next-i18next';
import Head from '../src/components/molecules/Head';
import Layout from '../src/components/templates/Layout';

import '../src/assets/css/style.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

App.propTypes = {
  Component: pt.elementType.isRequired,
  pageProps: pt.shape(),
};

export default appWithTranslation(App);
