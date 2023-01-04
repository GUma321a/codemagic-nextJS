import React from 'react';
import { NextSeo } from 'next-seo';

function NotFoundPage() {
  const title = 'This page could not be found';
  const description = 'The page you are trying to access does not exist.';

  return (
    <>
      <NextSeo title={title} description={description} />
      <div>not found page</div>
    </>
  );
}

export default NotFoundPage;
