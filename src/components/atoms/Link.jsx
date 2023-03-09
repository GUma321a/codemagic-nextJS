import React from 'react';
import pt from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';

function LinkComponent({ children, skipLocaleHandling, ...rest }) {
  const router = useRouter();
  const locale = rest.locale || router.query.locale || '';

  let href = rest.href || router.asPath;
  if (href.indexOf('http') === 0) skipLocaleHandling = true; // eslint-disable-line no-param-reassign
  if (locale && !skipLocaleHandling) {
    href = href ? `/${locale}${href}` : router.pathname.replace('[locale]', locale);
  }

  return (
    <Link href={href} legacyBehavior>
      <a {...rest}>{children}</a>
    </Link>
  );
}

LinkComponent.propTypes = {
  children: pt.string,
  skipLocaleHandling: pt.bool,
};
Link.defaultProps = {
  children: '',
};

export default LinkComponent;
