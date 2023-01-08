import React from 'react';
import { useTranslation } from 'next-i18next';

import about_1 from '../../../../assets/images/illustrations/about-1.jpg';
import about_2 from '../../../../assets/images/illustrations/about-2.jpg';
import about_3 from '../../../../assets/images/illustrations/about-3.jpg';

function About() {
  const { t } = useTranslation('about');

  return (
    <section className="about mb-60 mt-[100px] lg:my-160">
      <div className="container">
        <div className="about__wrapper lg:flex lg:justify-between mb-80">
          <h2 className="about__title heading-h3 mb-xl lg:mb-0">{t('title')}</h2>
          <div className="about__inner flex-60">
            <p className="about__text body-text-m text-gray-400 mb-md md:mb-lg">{t('text__1')}</p>
            <p className="about__text body-text-m text-gray-400 mb-md md:mb-lg">{t('text__2')}</p>
            <p className="about__text body-text-m text-gray-400 mb-md md:mb-lg">{t('text__3')}</p>
            <p className="about__text body-text-m text-gray-400 mb-md md:mb-lg">{t('text__4')}</p>
          </div>
        </div>
        <div className="about__images grid grid-cols-1 gap-sm md:grid-cols-2 lg:grid-cols-3">
          <div className="about__image max-h-[500px]">
            <img
              className="max-h-[160px] w-full 450:max-h-[200px] md:max-h-[500px]"
              src={about_1.src}
              alt="photo"
              loading="lazy"
            />
          </div>
          <div className="about__image max-h-[500px]">
            <img
              className="max-h-[160px] w-full 450:max-h-[200px] md:max-h-[500px]"
              src={about_2.src}
              alt="photo"
              loading="lazy"
            />
          </div>
          <div className="about__image max-h-[500px] md:col-span-2 lg:col-auto">
            <img
              className="max-h-[160px] w-full 450:max-h-[200px] md:max-h-[500px]"
              src={about_3.src}
              alt="photo"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
