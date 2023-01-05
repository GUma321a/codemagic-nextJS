import React from 'react';

import { Link } from '../../atoms';
import logo from '../../../../assets/images/logo.svg';

function Header() {
  let [open, setOpen] = React.useState(false);
  const languageMenu = () => {
    setOpen(!open);
    console.log('click');
  };

  return (
    <header className="header sticky bg-third-light py-[20px] inset-x-0 top-0 z-50">
      <div className="header__container mx-auto w-full px-sm lg:px-md xl:px-2xl">
        <div className="header__navbar flex justify-between items-center w-full">
          <div className="header__logo flex items-center z-110 max-w-[150px] lg:max-w-[200px]">
            <Link href="/ua" className="header__logo-link">
              <img className="max-w-full" src={logo.src} alt="Logo" loading="lazy" />
            </Link>
          </div>
          <nav className="header__menu flex">
            <div className="header__language mr-md relative cursor-pointer pr-md lg:pr-md">
              <p
                className="header__language-trigger relative after:absolute after:bg-[url('../images/decor/arrow-down-mobile.svg')]  after:transition-all after:w-[15px] after:h-[10px] after:bg-no-repeat after:top-[37%] after:translate-y-[-50%] after:left-[120%]"
                onClick={languageMenu}
              >
                УКР
              </p>
              {open && (
                <div className="header__language-menu">
                  <Link
                    href="/"
                    className="header__language-menu-item absolute top-[120%] bg-white text-third-light p-[10px] hover:text-primary-light"
                  >
                    АНГЛ
                  </Link>
                </div>
              )}
            </div>
            <ul className="header__menu-list flex z-100 fixed flex-col right-0 top-0 bottom-0 left-full w-full h-full bg-third-dark pt-80 m-0 p-0 justify-start text-left transition-all duration-300 overflow-x-hidden overflow-y-auto overscroll-y-contain pt-120px px-md lg:z-1 lg:static lg:flex-row lg:bg-transparent lg:overflow-x-visible lg:pt-0 lg:px-0">
              <li className="header__menu-list-item mr-xl">
                <Link
                  className="header__menu-list-link menu-link py-md border-b-gray-200 border-b w-full transition-colors hover:text-primary-light lg:py-0 lg:border-none"
                  href="/ua/about"
                >
                  Про мене
                </Link>
              </li>
              <li className="header__menu-list-item mr-xl">
                <Link
                  className="header__menu-list-link menu-link py-md border-b-gray-200 border-b w-full transition-colors hover:text-primary-light lg:py-0 lg:border-none"
                  href="/ua/my-works"
                >
                  Мої роботи
                </Link>
              </li>
              <li className="header__menu-list-item mr-xl">
                <Link
                  className="header__menu-list-link menu-link py-md border-b-gray-200 border-b w-full transition-colors hover:text-primary-light lg:py-0 lg:border-none"
                  href="/ua/contact"
                >
                  Зв'язок зі мною
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header__burger block relative h-[18px] w-[20px] z-100 cursor-pointer before:absolute after:absolute before:h-[2px] after:h-[2px] before:w-full after:w-full before:bg-white after:bg-white transition-all before:top-0 after:bottom-0 before:duration-300 after:duration-300 before:rounded-71 after:rounded-71 sm:w-[25px] lg:hidden">
            <span className="absolute top-xs right-0 w-full bg-white h-[2px] transition-all scale-100 duration-300 rounded-71"></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
