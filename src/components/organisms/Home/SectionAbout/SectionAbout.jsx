import React from 'react';
import { useTranslation } from 'next-i18next';

import { Link } from '../../../atoms';
import Image from '../../../atoms/Image';

import about_1 from '../../../../assets/images/illustrations/about-1.jpg';
import about_2 from '../../../../assets/images/illustrations/about-2.jpg';
import about_3 from '../../../../assets/images/illustrations/about-3.jpg';

function SectionAbout() {
  const { t } = useTranslation('home');

  return (
    <section className="about my-60 lg:my-160">
      <div className="container">
        <div className="about__wrapper lg:flex lg:justify-between mb-lg md:mb-80">
          <h2 className="about__title heading-h2">{t('about.title')}</h2>
          <div className="about__inner flex-60">
            <p className="about__text my-md lg:mt-0 body-text-m text-gray-400 lg:mb-lg">
              {t('about.text')}
            </p>
            <Link
              href="/about"
              className="about__button button-link-m text-primary-light hover:text-primary-dark hover:duration-200 duration-200"
            >
              {t('about.link')}
            </Link>
          </div>
        </div>
        <div className="about__images grid grid-cols-1 gap-sm md:grid-cols-2 lg:grid-cols-3">
          <div className="about__image max-h-[500px]">
            <Image
              className="max-h-[160px] w-full 450:max-h-[200px] md:max-h-[500px]"
              src={about_1}
              alt="about"
              loading="lazy"
            />
          </div>
          <div className="about__image max-h-[500px]">
            <Image
              className="max-h-[160px] w-full 450:max-h-[200px] md:max-h-[500px]"
              src={about_2}
              alt="about"
              loading="lazy"
            />
          </div>
          <div className="about__image max-h-[500px] md:col-span-2 lg:col-auto">
            <Image
              className="max-h-[160px] w-full 450:max-h-[200px] md:max-h-[500px]"
              src={about_3}
              alt="about"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionAbout;
