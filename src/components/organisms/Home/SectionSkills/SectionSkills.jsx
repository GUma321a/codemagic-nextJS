import React from 'react';

import { useTranslation } from 'next-i18next';
import Section from '../../../templates/Section';
import Title from '../../../atoms/Title';
import Info from '../../../templates/Info';

function SectionSkills() {
  const { t } = useTranslation('home');
  const services = [
    { text: 'HTML, CSS, JS' },
    { text: 'Tailwind CSS' },
    { text: 'NextJS' },
    { text: 'Responsive layout' },
    { text: 'CSS Animations' },
    { text: 'GitHub' },
    { text: 'SCSS' },
  ];

  return (
    <Section className="services text-center lg:text-start">
      <Info className="services__wrapper">
        <Title
          size="h2"
          className="services__title text-gray-300 mb-xl lg:mb-0"
          text={t('skills.title')}
        />
        <div className="services__inner flex-60 flex flex-col flex-wrap text-gray-500 md:flex-row md:gap-xl">
          {services.map((item) => {
            return (
              <Title
                size="h3"
                className="services__subtitle services__subtitle--before  flex-100 flex items-center mt-md justify-start pl-[65px]  md:mt-0 lg:flex-[40%]"
                key={item.text}
                text={item.text}
              />
            );
          })}
        </div>
      </Info>
    </Section>
  );
}

export default SectionSkills;
