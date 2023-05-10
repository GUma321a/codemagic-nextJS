import React from 'react';
import { useTranslation } from 'next-i18next';

import { Link, Button, Title, Image } from '../../../atoms';

import photo from '../../../../assets/images/photos/preview-photo.jpg';
import Caption from '../../../atoms/Caption';
import Section from '../../../templates/Section';
import Text from '../../../atoms/Text';

function SectionHero() {
  const { t } = useTranslation('home');

  return (
    <Section className="mt-[100px]">
      <div className="hero__wrapper lg:flex lg:justify-between lg:gap-[78px]">
        <div className="hero__info lg:flex-65">
          <Caption
            size="s"
            className="hero__info-subtitle uppercase"
            content={t('hero.subtitle')}
          />
          <Title size="h1" className="hero__info-title heading-h1 mb-md" text={t('hero.title')} />
          <Text size="l" className="hero__info-text mb-xl" content={t('hero.text')} />
          <Button
            size="m"
            link="/contact"
            wrapperClass="hero__info-button flex justify-center lg:justify-start"
            text={t('hero.info-button')}
          />
        </div>
        <div className="hero__image flex flex-col items-center mt-md lg:flex-30">
          <Image
            src={photo}
            alt="user"
            wrapperClass="hero__image-photo mb-sm max-h-[300px] w-[300px] md:max-h-[500px]  lg:mb-md"
          />
          <div className="contact-me__wrapper">
            <Text
              size="s"
              className="contact-me__title text-16 text-gray-200 mb-[4px]"
              content={t('hero.contact-title')}
            />
            <Link
              href="mailto:alexandrchernocov@gmail.com"
              className="contact-me__mail body-text-m duration-[0.2s] hover:text-primary-dark hover:duration-[0.2s]"
            >
              alexandrchernicov@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default SectionHero;
