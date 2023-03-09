import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useTranslation } from 'next-i18next';
import { Link } from '../../../atoms';

import site_1 from '../../../../assets/images/illustrations/site-1.jpg';
import site_2 from '../../../../assets/images/illustrations/site-2.jpg';
import site_3 from '../../../../assets/images/illustrations/site-3.jpg';
import site_4 from '../../../../assets/images/illustrations/site-4.jpg';

function SectionMyWork() {
  const { t } = useTranslation('home');

  return (
    <section className="projects my-60 lg:my-160">
      <div className="container">
        <div className="projects__box py-lg md:py-80 border-y  border-gray-200">
          <p className="caption-s projects__subtitle">{t('works.title')}</p>
          <h2 className="heading-h2 text-gray-300 projects__title mb-lg md:mb-80">
            {t('works.subtitle')}
          </h2>
          <div className="projects__wrapper lg:flex lg:gap-lg items-start">
            <div className="projects__inner flex-45 grow flex lg:flex-col mb-lg lg:mb-0">
              <div className="projects__item projects__item-small h-[150px] lg:h-[412px] flex-50 lg:flex-[auto] relative transition-all before:absolute before:w-full before:h-full before:opacity-0 before:bg-gray-700 hover:before:opacity-100 before:duration-[0.4s] focus:before:opacity-100 before:transition-all">
                <img
                  className="min-h-full max-h-full w-full"
                  src={site_1.src}
                  alt="projects"
                  loading="lazy"
                />
                <Link
                  href="/projects/seatcovers"
                  target="_blank"
                  className="projects__hover absolute w-full h-full flex justify-center items-center heading-h4 text-white left-0 top-0 opacity-0 duration-300"
                >
                  {t('works.link-1')}
                </Link>
              </div>
              <div className="projects__item projects__item-big h-[150px] lg:h-[581px] lg:mt-lg ml-md lg:ml-0 flex-50 lg:flex-[auto] relative transition-all before:absolute before:w-full before:h-full before:opacity-0 before:bg-gray-700 hover:before:opacity-100 before:duration-[0.4s] focus:before:opacity-100 before:transition-all">
                <img
                  className="min-h-full max-h-full w-full"
                  src={site_2.src}
                  alt="projects"
                  loading="lazy"
                />
                <Link
                  href="/projects/wifi"
                  target="_blank"
                  className="projects__hover absolute w-full h-full flex justify-center items-center heading-h4 text-white left-0 top-0 opacity-0 duration-300"
                >
                  {t('works.link-1')}
                </Link>
              </div>
            </div>
            <div className="projects__inner flex-45 grow flex lg:flex-col">
              <div className="projects__item projects__item-big h-[150px] lg:h-[581px] flex-50 lg:flex-[auto] relative transition-all before:absolute before:w-full before:h-full before:opacity-0 before:bg-gray-700 hover:before:opacity-100 before:duration-[0.4s] focus:before:opacity-100 before:transition-all">
                <img
                  className="min-h-full max-h-full w-full"
                  src={site_4.src}
                  alt="projects"
                  loading="lazy"
                />
                <Link
                  href="/projects/video-line"
                  target="_blank"
                  className="projects__hover absolute w-full h-full flex justify-center items-center heading-h4 text-white left-0 top-0 opacity-0 duration-300"
                >
                  {t('works.link-1')}
                </Link>
              </div>
              <div className="projects__item projects__item-small h-[150px] lg:h-[412px] lg:mt-lg ml-md lg:ml-0 flex-50 lg:flex-[auto] relative transition-all before:absolute before:w-full before:h-full before:opacity-0 before:bg-gray-700 hover:before:opacity-100 before:duration-[0.4s] focus:before:opacity-100 before:transition-all">
                <img
                  className="min-h-full max-h-full w-full"
                  src={site_3.src}
                  alt="projects"
                  loading="lazy"
                />
                <Link
                  href="/projects/dance"
                  target="_blank"
                  className="projects__hover absolute w-full h-full flex justify-center items-center heading-h4 text-white left-0 top-0 opacity-0 duration-500"
                >
                  {t('works.link-1')}
                </Link>
              </div>
            </div>
          </div>
          <div className="projects__button text-center mt-[64px] flex justify-center">
            <Link href="/my-works" className="button-cta-m">
              {t('works.link-2')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      // Will be passed to the page component as props
    },
  };
}

export default SectionMyWork;
