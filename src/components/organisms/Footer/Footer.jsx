import React from 'react';

import { Link } from '../../atoms';
import { useTranslation } from 'next-i18next';

import photo from '../../../assets/images/photos/preview-photo-mini.jpg';
import instagram from '../../../assets/images/icons/Instagram.svg';
import telegram from '../../../assets/images/icons/telegram.svg';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer bg-third-dark pt-[40px] lg:pt-96 pb-lg">
      <div className="container">
        <div className="footer__top flex flex-wrap mb-2xl lg:mb-[96px] lg:justify-between">
          <div className="footer__text max-w-[450px] mb-lg lg:mb-0 xl:max-w-[565px]">
            <p className="footer__text-title heading-h3 mb-2xl">{t('footer.text-title')}</p>
            <p className="footer__text-subtitle body-text-m text-gray-200">
              {t('footer.text-subtitle')}
            </p>
            <p className="footer__text-mail heading-h4 text-gray-300 hover:text-white transition-colors">
              <Link href="mailto:alexandrchernicov@gmail.com">alexandrchernicov@gmail.com</Link>
            </p>
          </div>
          <div className="footer__user">
            <div className="footer__user flex justify-start items-center mb-sm sm:mb-xl">
              <div className="footer__user-photo">
                <img
                  className="rounded-full w-[50px] h-[50px] sm:w-[96px] sm:h-[96px]"
                  src={photo.src}
                  alt="photo"
                  loading="lazy"
                ></img>
              </div>
              <div className="footer__user-inner ml-[10px] sm:ml-lg text-gray-300">
                <p className="footer__user-name heading-h3">{t('footer.user-name')}</p>
                <p className="footer__user-position body-text-m">{t('footer.user-position')}</p>
              </div>
            </div>
            <ul className="footer__social flex">
              <li className="footer__social-item">
                <Link target="_blank" href="https://www.instagram.com/gu_ma_ink/">
                  <img
                    className="link-with-svg transition-colors w-[42px] h-[42px]"
                    src={instagram.src}
                    alt="instagram"
                  />
                </Link>
              </li>
              <li className="footer__social-item ml-sm">
                <Link className="" target="_blank" href="https://t.me/gu_ma_ink">
                  <img
                    className="link-with-svg transition-colors w-[42px] h-[42px]"
                    src={telegram.src}
                    alt="telegram"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom flex flex-col md:flex-row flex-wrap justify-between">
          <div className="footer__copy body-text-s text-gray-600 order-1 mx-auto mt-xl md:order-none md:mt-0 md:order-0 md:m-0">
            CodeMagic @2022
          </div>
          <ul className="footer__menu menu-link text-center flex justify-center flex-col sm:flex-row">
            <li className="fotter__menu-item transition-colors hover:text-primary-light">
              <Link href="/about">{t('header.menu__list__link__1')}</Link>
            </li>
            <li className="fotter__menu-item transition-colors hover:text-primary-light mt-sm sm:mt-0 sm:ml-lg">
              <Link href="/my-works">{t('header.menu__list__link__2')}</Link>
            </li>
            <li className="fotter__menu-item transition-colors hover:text-primary-light mt-sm sm:mt-0 sm:ml-lg">
              <Link href="/contact">{t('header.menu__list__link__3')}</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
