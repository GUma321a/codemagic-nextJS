import React, { useState } from 'react';
import { useRouter } from 'next/router';
import pt from 'prop-types';
import languageDetector from './languageDetector';
import Link from '../atoms/Link';

function LanguageSwitchLink({ locale, ...rest }) {
  const router = useRouter();

  /* eslint-disable no-unused-vars */
  let href = rest.href || router.asPath;
  /* eslint-disable no-unused-vars */
  let pName = router.pathname;
  Object.keys(router.query).forEach((k) => {
    if (k === 'locale') {
      pName = pName.replace(`[${k}]`, locale);
      return;
    }
    pName = pName.replace(`[${k}]`, router.query[k]);
  });
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName;
  }

  const [open, setOpen] = useState(false);
  const languageMenu = () => setOpen(!open) && languageDetector.cache(locale);

  return (
    <div className="header__language cursor-pointer">
      <button
        className="header__language-trigger text-24 relative after:absolute after:bg-[url('../images/decor/arrow-down-mobile.svg')]  after:transition-all after:w-[15px] after:h-[10px] after:bg-no-repeat after:top-[37%] after:translate-y-[-50%] after:left-[120%]"
        onClick={languageMenu}
        type="button"
      >
        {locale}
      </button>
      {open && (
        <span className="header__language-menu block absolute">
          <Link
            href="/"
            locale="ua"
            className="header__language-menu-item top-[120%] w-full text-center bg-white text-third-light p-[10px] hover:text-primary-light"
          >
            UA
          </Link>
          <Link
            href="/"
            locale="en"
            className="header__language-menu-item top-[120%] w-full text-center bg-white text-third-light p-[10px] hover:text-primary-light"
          >
            EN
          </Link>
        </span>
      )}
    </div>
  );
}

LanguageSwitchLink.propTypes = {
  locale: pt.string,
};

export default LanguageSwitchLink;
