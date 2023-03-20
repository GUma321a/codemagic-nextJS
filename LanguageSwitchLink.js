import React, { useState } from 'react';
import languageDetector from './languageDetector';
import { useRouter } from 'next/router';
import Link from './src/components/atoms/Link';
import i18next from 'i18next';

const LanguageSwitchLink = ({ locale, ...rest }) => {
  const router = useRouter();
  let href = rest.href || router.asPath;
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

  let [open, setOpen] = useState(false);
  const languageMenu = () => {
    setOpen(!open), languageDetector.cache(locale);
  };

  return (
    <div className="header__language cursor-pointer">
      <p
        className="header__language-trigger text-24 relative after:absolute after:bg-[url('../images/decor/arrow-down-mobile.svg')]  after:transition-all after:w-[15px] after:h-[10px] after:bg-no-repeat after:top-[37%] after:translate-y-[-50%] after:left-[120%]"
        onClick={languageMenu}
      >
        {locale}
      </p>
      {open && (
        <div className="header__language-menu absolute">
          <Link
            href="/"
            locale="ua"
            className="header__language-menu-item top-[120%] bg-white text-third-light p-[10px] hover:text-primary-light"
          >
            UA
          </Link>
          <Link
            href="/"
            locale="en"
            className="header__language-menu-item top-[120%] bg-white text-third-light p-[10px] hover:text-primary-light"
          >
            EN
          </Link>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitchLink;
