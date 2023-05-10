import React from 'react';

import { useTranslation } from 'next-i18next';
import { works } from './db';
import { Button, Title } from '../../../atoms';
import Gallery from '../../../molecules/Gallery';

import Section from '../../../templates/Section';
import Caption from '../../../atoms/Caption';

function SectionMyWork() {
  const { t } = useTranslation('home');

  return (
    <Section className="projects" line>
      <div className="projects__box py-lg md:py-80">
        <Caption className="projects__subtitle" size="s" content={t('works.title')} />
        <Title
          size="h2"
          className="text-gray-300 projects__title mb-lg md:mb-80"
          text={t('works.subtitle')}
        />
        <Gallery content={works} />
        <Button
          size="m"
          link="/my-works"
          wrapperClass="projects__button text-center mt-[64px] flex justify-center"
          text={t('works.link-2')}
        />
      </div>
    </Section>
  );
}

export default SectionMyWork;
