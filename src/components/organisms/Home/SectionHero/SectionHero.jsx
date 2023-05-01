import React from 'react';
import { useTranslation } from 'next-i18next';

import { Link, Button, Title } from '../../../atoms';

import photo from '../../../../assets/images/photos/preview-photo.jpg';

function SectionHero() {
  const { t } = useTranslation('home');

  return (
    <section className="hero mb-60 mt-[100px] lg:my-160">
      <div className="container">
        <div className="hero__wrapper lg:flex lg:justify-between lg:gap-[78px]">
          <div className="hero__info lg:flex-65">
            <p className="hero__info-subtitle caption-s uppercase">{t('hero.subtitle')}</p>
            <Title size="h1" className="hero__info-title heading-h1 mb-md" text={t('hero.title')} />
            <p className="hero__info-text body-text-l mb-xl">{t('hero.text')}</p>
            <Button
              size="m"
              link="/contact"
              wrapperClass="hero__info-button flex justify-center lg:justify-start"
              text={t('hero.info-button')}
            />
          </div>
          <div className="hero__image flex flex-col items-center mt-md lg:flex-30">
            <div className="hero__image-photo mb-sm lg:mb-md">
              <img
                className="max-h-[300px] w-full md:max-h-[500px]"
                src={photo.src}
                alt="user"
                loading="lazy"
              />
            </div>
            <div className="contact-me__wrapper">
              <div className="contact-me__title body-text-s text-16 text-gray-200 mb-[4px]">
                {t('hero.contact-title')}
              </div>
              <Link
                href="mailto:alexandrchernocov@gmail.com"
                className="contact-me__mail body-text-m duration-[0.2s] hover:text-primary-dark hover:duration-[0.2s]"
              >
                alexandrchernicov@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionHero;
