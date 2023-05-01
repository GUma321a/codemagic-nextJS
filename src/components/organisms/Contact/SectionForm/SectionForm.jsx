import React from 'react';
import { useTranslation } from 'next-i18next';
import Section from '../../../templates/Section';
import Title from '../../../atoms/Title';
import Form from '../../../atoms/Telegram';

function SectionForm() {
  const { t } = useTranslation('contact');

  return (
    <Section className="contact">
      <div className="caption-wrapper max-w-[624px] mx-auto">
        <p className="contact__caption caption-s">{t('caption')}</p>
        <Title size="h2" className="contact__title mb-md" text={t('title')} />
        <Form action="Contact Form" />
      </div>
    </Section>
  );
}

export default SectionForm;
