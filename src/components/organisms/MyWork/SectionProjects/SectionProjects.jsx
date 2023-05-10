import React from 'react';
import { useTranslation } from 'next-i18next';

import { images } from './db';

import Gallery from '../../../molecules/Gallery';
import Section from '../../../templates/Section';
import { Title } from '../../../atoms';

function SectionProjects() {
  const { t } = useTranslation('home');

  return (
    <Section className="projects mt-[100px]">
      <Title size="h3" className="projects__subtitle mb-md lg:mb-lg" text={t('works.title')} />
      <Gallery content={images} />
    </Section>
  );
}

export default SectionProjects;
