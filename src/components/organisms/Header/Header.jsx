import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import LanguageSwitchLink from '../../molecules/LanguageSwitchLink';
import { Link } from '../../atoms';

import logo from '../../../assets/images/logo.svg';

import i18nextConfig from '../../../../next-i18next.config';

function Header() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;
  const menu = [
    {
      text: t('header.menu__list__link__1'),
      href: '/about',
    },
    {
      text: t('header.menu__list__link__2'),
      href: '/my-works',
    },
    {
      text: t('header.menu__list__link__3'),
      href: '/contact',
    },
  ];

  return (
    <header className="header sticky bg-third-light py-[20px] inset-x-0 top-0 z-50">
      <div className="header__container mx-auto w-full px-sm lg:px-md xl:px-2xl">
        <div className="header__navbar flex justify-between items-center w-full">
          <div className="header__logo flex items-center z-110 max-w-[150px] lg:max-w-[200px]">
            <Link href="/" className="header__logo-link">
              <img className="max-w-full" src={logo.src} alt="Logo" loading="lazy" />
            </Link>
          </div>
          {/* <div className="test">Загиблі свинособаки: {info.data.stats.personnel_units}</div> */}
          <nav className="header__menu flex">
            <div className="header__language mr-md relative cursor-pointer pr-md lg:pr-md">
              {/* -----------------------Language Button---------------- */}
              <div className="flex">
                {i18nextConfig.i18n.locales.map((locale) => {
                  if (locale === currentLocale) return [];
                  return <LanguageSwitchLink locale={locale} key={locale} />;
                })}
              </div>
              {/* -----------------------Language Button---------------- */}
            </div>
            <ul className="header__menu-list flex z-100 fixed flex-col right-0 top-0 bottom-0 left-full w-full h-full bg-third-dark pt-80 m-0 p-0 justify-start text-left transition-all duration-300 overflow-x-hidden overflow-y-auto overscroll-y-contain pt-120px px-md lg:z-1 lg:static lg:flex-row lg:bg-transparent lg:overflow-x-visible lg:pt-0 lg:px-0">
              {menu.map((item) => {
                return (
                  <li className="header__menu-list-item mr-xl" key={item.text}>
                    <Link
                      className="header__menu-list-link menu-link py-md border-b-gray-200 border-b w-full transition-colors hover:text-primary-light lg:py-0 lg:border-none"
                      href={item.href}
                    >
                      {item.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="header__burger block relative h-[18px] w-[20px] z-100 cursor-pointer before:absolute after:absolute before:h-[2px] after:h-[2px] before:w-full after:w-full before:bg-white after:bg-white transition-all before:top-0 after:bottom-0 before:duration-300 after:duration-300 before:rounded-71 after:rounded-71 sm:w-[25px] lg:hidden">
            <span className="absolute top-xs right-0 w-full bg-white h-[2px] transition-all scale-100 duration-300 rounded-71" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
