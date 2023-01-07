import React from 'react';
import pt from 'prop-types';
import Link from 'next/link';

function LinkComponent({ href, locale, external, ...props }) {
  if (!href) {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a {...props} />;
  }

  if (href.match(/^https?:/) || external) {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a href={href} locale={locale} target="_blank" rel="nofollow noreferrer" {...props} />
    );
  }

  return (
    <Link href={href} locale={locale} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a {...props} />
    </Link>
  );
}

LinkComponent.propTypes = {
  href: pt.string,
  className: pt.string,
  external: pt.bool,
  locale: pt.string,
};

LinkComponent.defaultProps = {
  href: '',
  className: '',
  external: false,
  locale: '',
};

export default LinkComponent;
