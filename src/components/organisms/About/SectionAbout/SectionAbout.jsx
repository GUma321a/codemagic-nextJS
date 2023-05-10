import React from 'react';
import { useTranslation } from 'next-i18next';

import about_1 from '../../../../assets/images/illustrations/about-1.jpg';
import about_2 from '../../../../assets/images/illustrations/about-2.jpg';
import about_3 from '../../../../assets/images/illustrations/about-3.jpg';
import Section from '../../../templates/Section';
import Title from '../../../atoms/Title';
import Text from '../../../atoms/Text';
import Image from '../../../atoms/Image';

function About() {
  const { t } = useTranslation('about');
  const about__text = [
    { text: t('text__1') },
    { text: t('text__2') },
    { text: t('text__3') },
    { text: t('text__4') },
  ];

  return (
    <Section className="about">
      <div className="about__wrapper lg:flex lg:justify-between mb-80">
        <Title size="h3" className="about__title heading-h3 mb-xl lg:mb-0" text={t('title')} />
        <div className="about__inner flex-60">
          {about__text.map((item) => {
            return (
              <Text
                size="m"
                className="about__text text-gray-400 mb-md md:mb-lg"
                content={item.text}
                key={item.text}
              />
            );
          })}
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

export default About;
