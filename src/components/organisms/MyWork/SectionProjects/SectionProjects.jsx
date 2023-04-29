import React from 'react';
import { useTranslation } from 'next-i18next';

import Gallery from '../../../atoms/Gallery';

function SectionProjects() {
  const { t } = useTranslation('home');

  return (
    <section className="projects mb-60 mt-[100px] lg:my-160">
      <div className="container">
        <div className="projects__box py-lg md:py-80">
          <p className="projects__subtitle heading-h3 mb-md lg:mb-lg">{t('works.title')}</p>
          <Gallery />
        </div>
      </div>
    </section>
  );
}

export default SectionProjects;
