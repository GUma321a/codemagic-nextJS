import React from 'react';
import { useTranslation } from 'next-i18next';
import Section from '../../../templates/Section';
import Title from '../../../atoms/Title';
import Form from '../../../atoms/Telegram';
import Caption from '../../../atoms/Caption';

function SectionForm() {
  const { t } = useTranslation('contact');

  return (
    <Section className="contact">
      <div className="caption-wrapper max-w-[624px] mx-auto">
        <Caption size="s" className="contact__caption" content={t('caption')} />
        <Title size="h2" className="contact__title mb-md" text={t('title')} />
        <Form action="Contact Form" />
      </div>
    </Section>
  );
}

export default SectionForm;
