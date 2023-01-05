import React from 'react';
import pt from 'prop-types';

import Header from '../organisms/ua/Header';
import Footer from '../organisms/ua/Footer';

function Layout({ children }) {
  return (
    <>
      <div className="p-3">
        <Header />
        <main className="my-2">{children}</main>
      </div>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: pt.node,
};

export default Layout;
