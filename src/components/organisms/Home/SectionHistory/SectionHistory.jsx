import React from 'react';
import { useTranslation } from 'next-i18next';

import Title from '../../../atoms/Title';

import Info from '../../../templates/Info';

import Section from '../../../templates/Section';

function SectionHistory() {
  const { t } = useTranslation('home');
  const history = [
    {
      year: '2020',
      text: t('history.text-1'),
    },
    {
      year: '2021',
      text: t('history.text-2'),
    },
    {
      year: '2022',
      text: t('history.text-3'),
    },
    {
      year: '2022',
      text: t('history.text-4'),
    },
  ];

  return (
    <Section className="history bg-third-dark py-2xl md:py-[128px]">
      <Info className="history__wrapper">
        <Title
          className="history__title mb-md flex-30 md:mb-lg"
          size="h2"
          text={t('history.title')}
        />
        <div className="history__timeline flex flex-wrap flex-60">
          {history.map((item) => {
            return (
              <div className="history__timeline-item flex-50 p-[10px]" key={item.text}>
                <Title
                  className="history__timeline-year text-primary-dark"
                  size="h3"
                  text={item.year}
                />
                <Title
                  className="history__timeline-text text-secondary-dark"
                  size="h4"
                  text={item.text}
                />
              </div>
            );
          })}
        </div>
      </Info>
    </Section>
  );
}

export default SectionHistory;
