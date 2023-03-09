import React from 'react';
import { useTranslation } from 'next-i18next';

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
    <section className="services my-60 text-center lg:text-start lg:my-160">
      <div className="container">
        <div className="services__wrapper md:flex md:justify-between">
          <h2 className="services__title heading-h2 text-gray-300 mb-xl lg:mb-0">
            {t('skills.title')}
          </h2>
          <div className="services__inner flex-60 flex flex-col flex-wrap text-gray-500 md:flex-row md:gap-xl">
            {services.map((item) => {
              return (
                <p
                  className="services__subtitle heading-h3 flex-100 flex items-center mt-md justify-start pl-[65px] relative before:absolute before:w-lg before:h-lg before:bg-[url('../images/decor/services-icon.svg')] before:left-0 before:top-1/2 before:-translate-y-1/2 md:mt-0 lg:flex-[40%]"
                  key={item.text}
                >
                  {item.text}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSkills;
