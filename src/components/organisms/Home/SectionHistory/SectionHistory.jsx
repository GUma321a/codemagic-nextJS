import React from 'react';
import { useTranslation } from 'next-i18next';

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
    <section className="history bg-third-dark py-2xl md:py-[128px] my-60 lg:my-160">
      <div className="container">
        <div className="history__wrapper md:flex justify-between">
          <div className="history__info mb-md md:mb-lg flex-30">
            <h2 className="history__title heading-h2 mb-sm">{t('history.title')}</h2>
          </div>
          <div className="history__timeline flex flex-wrap flex-60">
            {history.map((item, index) => {
              return (
                <div className="history__timeline-item flex-50 p-[10px]" key={index.id}>
                  <h3 className="history__timeline-year heading-h3 text-primary-dark">
                    {item.year}
                  </h3>
                  <h4 className="history__timeline-text heading-h4 text-secondary-dark">
                    {item.text}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionHistory;
