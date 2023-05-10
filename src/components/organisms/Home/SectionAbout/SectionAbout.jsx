import React from 'react';
import { useTranslation } from 'next-i18next';

import { Link, Title } from '../../../atoms';
import Image from '../../../atoms/Image';

import about_1 from '../../../../assets/images/illustrations/about-1.jpg';
import about_2 from '../../../../assets/images/illustrations/about-2.jpg';
import about_3 from '../../../../assets/images/illustrations/about-3.jpg';
import Section from '../../../templates/Section';
import Text from '../../../atoms/Text';

function SectionAbout() {
  const { t } = useTranslation('home');

  return (
    <Section className="about">
      <div className="about__wrapper lg:flex lg:justify-between mb-lg md:mb-80">
        <Title size="h2" className="about__title" text={t('about.title')} />
        <div className="about__inner flex-60">
          <Text
            size="m"
            content={t('about.text')}
            className="about__text my-md lg:mt-0 text-gray-400 lg:mb-lg"
          />
          <Link
            href="/about"
            className="about__button button-link-m text-primary-light hover:text-primary-dark hover:duration-200 duration-200"
            content={t('about.link')}
          />
        </div>
      </div>
      <div className="about__images grid grid-cols-1 gap-sm md:grid-cols-2 lg:grid-cols-3">
        <Image className="about__image max-h-[160px] w-full md:max-h-[350px]" src={about_1} />
        <Image className="about__image max-h-[160px] w-full md:max-h-[350px]" src={about_2} />
        <Image
          className="about__image max-h-[160px] w-full md:max-h-[350px]"
          wrapperClass="md:col-span-2 lg:col-auto"
          src={about_3}
        />
      </div>
    </Section>
  );
}

export default SectionAbout;
