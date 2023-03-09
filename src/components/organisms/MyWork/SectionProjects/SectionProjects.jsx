import React from 'react';

import { useTranslation } from 'next-i18next';
import { Link } from '../../../atoms';

import site_1 from '../../../../assets/images/illustrations/site-1.jpg';
import site_2 from '../../../../assets/images/illustrations/site-2.jpg';
import site_3 from '../../../../assets/images/illustrations/site-3.jpg';
import site_4 from '../../../../assets/images/illustrations/site-4.jpg';
import site_5 from '../../../../assets/images/illustrations/site-5.jpg';
import site_6 from '../../../../assets/images/illustrations/site-6.jpg';
import site_7 from '../../../../assets/images/illustrations/site-7.jpg';

function SectionProjects() {
  const { t } = useTranslation('home');

  return (
    <section className="projects mb-60 mt-[100px] lg:my-160">
      <div className="container">
        <div className="projects__box py-lg md:py-80">
          <p className="projects__subtitle heading-h3 mb-md lg:mb-lg">{t('works.title')}</p>
          <div className="projects__wrapper lg:flex lg:gap-lg items-start">
            <div className="projects__inner flex-45 grow flex flex-wrap lg:flex-col mb-lg lg:mb-0">
              <div className="projects__item projects__item-small flex-45 h-[150px] lg:h-[412px] lg:flex-[auto] relative transition-all before:absolute before:w-full before:h-full before:opacity-0 before:bg-gray-700 hover:before:opacity-100 before:duration-[0.4s] focus:before:opacity-100 before:transition-all">
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
              <div className="projects__item projects__item-big flex-45 ml-md h-[150px] lg:h-[581px] lg:mt-lg lg:ml-0 lg:flex-[auto] relative transition-all before:absolute before:w-full before:h-full before:opacity-0 before:bg-gray-700 hover:before:opacity-100 before:duration-[0.4s] focus:before:opacity-100 before:transition-all">
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
              <div className="projects__item projects__item-small mt-md h-[150px] lg:h-[412px] lg:mt-lg lg:ml-0 flex-45 lg:flex-[auto] relative transition-all before:absolute before:w-full before:h-full before:opacity-0 before:bg-gray-700 hover:before:opacity-100 before:duration-[0.4s] focus:before:opacity-100 before:transition-all">
                <img
                  className="min-h-full max-h-full w-full"
                  src={site_7.src}
                  alt="projects"
                  loading="lazy"
                />
                <Link
                  href="/projects/wc-template-4"
                  target="_blank"
                  className="projects__hover absolute w-full h-full flex justify-center items-center heading-h4 text-white left-0 top-0 opacity-0 duration-300"
                >
                  {t('works.link-1')}
                </Link>
              </div>
              <div className="projects__item projects__item-big mt-md h-[150px] lg:h-[581px] lg:mt-lg ml-md lg:ml-0 flex-45 lg:flex-[auto] relative transition-all before:absolute before:w-full before:h-full before:opacity-0 before:bg-gray-700 hover:before:opacity-100 before:duration-[0.4s] focus:before:opacity-100 before:transition-all">
                <img
                  className="min-h-full max-h-full w-full"
                  src={site_6.src}
                  alt="projects"
                  loading="lazy"
                />
                <Link
                  href="/projects/nimble-token"
                  target="_blank"
                  className="projects__hover absolute w-full h-full flex justify-center items-center heading-h4 text-white left-0 top-0 opacity-0 duration-300"
                >
                  {t('works.link-1')}
                </Link>
              </div>
            </div>
            <div className="projects__inner flex-45 grow flex flex-wrap lg:flex-col">
              <div className="projects__item projects__item-big h-[150px] lg:h-[581px] flex-45 lg:flex-[auto] relative transition-all before:absolute before:w-full before:h-full before:opacity-0 before:bg-gray-700 hover:before:opacity-100 before:duration-[0.4s] focus:before:opacity-100 before:transition-all">
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
              <div className="projects__item projects__item-small h-[150px] lg:h-[412px] lg:mt-lg ml-md lg:ml-0 flex-45 lg:flex-[auto] relative transition-all before:absolute before:w-full before:h-full before:opacity-0 before:bg-gray-700 hover:before:opacity-100 before:duration-[0.4s] focus:before:opacity-100 before:transition-all">
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
              <div className="projects__item projects__item-big h-[150px] mt-md lg:h-[581px] lg:mt-lg flex-45 lg:flex-[auto] relative transition-all before:absolute before:w-full before:h-full before:opacity-0 before:bg-gray-700 hover:before:opacity-100 before:duration-[0.4s] focus:before:opacity-100 before:transition-all">
                <img
                  className="min-h-full max-h-full w-full"
                  src={site_5.src}
                  alt="projects"
                  loading="lazy"
                />
                <Link
                  href="/projects/neuro"
                  target="_blank"
                  className="projects__hover absolute w-full h-full flex justify-center items-center heading-h4 text-white left-0 top-0 opacity-0 duration-300"
                >
                  {t('works.link-1')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionProjects;
