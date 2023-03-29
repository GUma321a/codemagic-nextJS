import React from 'react';
import { useTranslation } from 'next-i18next';
import Form from '../../../atoms/Telegram';

function SectionForm() {
  const { t } = useTranslation('contact');

  return (
    <section className="contact mt-[100px] mb-60 md:mt-[200px] lg:mb-160">
      <div className="container">
        <div className="caption-wrapper max-w-[624px] mx-auto">
          <p className="contact__caption caption-s">{t('caption')}</p>
          <h2 className="contact__title heading-h2 mb-md">{t('title')}</h2>
          <Form action="Contact Form" />
        </div>
      </div>
    </section>
  );
}

export default SectionForm;
