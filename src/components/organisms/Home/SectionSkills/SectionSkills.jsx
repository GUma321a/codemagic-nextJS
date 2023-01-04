import React from 'react';

function SectionSkills() {
  return (
    <section className="services my-60 text-center lg:text-start lg:my-160">
      <div className="container">
        <div className="services__wrapper md:flex md:justify-between">
          <h2 className="services__title heading-h2 text-gray-300 mb-xl lg:mb-0">Skills</h2>
          <div className="services__inner flex-60 flex flex-col flex-wrap text-gray-500 md:flex-row md:gap-xl">
            <p className="services__subtitle heading-h3 flex-100 flex items-center justify-start pl-[65px] relative before:absolute before:w-lg before:h-lg before:bg-[url('/images/decor/services-icon.svg')] before:left-0 before:top-1/2 before:-translate-y-1/2 md:mt-0 lg:flex-[40%]">
              HTML, CSS, JS
            </p>
            <p className="services__subtitle heading-h3 flex-100 flex items-center mt-md justify-start pl-[65px] relative before:absolute before:w-lg before:h-lg before:bg-[url('/images/decor/services-icon.svg')] before:left-0 before:top-1/2 before:-translate-y-1/2 md:mt-0 lg:flex-[40%]">
              Tailwind CSS
            </p>
            <p className="services__subtitle heading-h3 flex-100 flex items-center mt-md justify-start pl-[65px] relative before:absolute before:w-lg before:h-lg before:bg-[url('/images/decor/services-icon.svg')] before:left-0 before:top-1/2 before:-translate-y-1/2 md:mt-0 lg:flex-[40%]">
              React & Redax
            </p>
            <p className="services__subtitle heading-h3 flex-100 flex items-center mt-md justify-start pl-[65px] relative before:absolute before:w-lg before:h-lg before:bg-[url('/images/decor/services-icon.svg')] before:left-0 before:top-1/2 before:-translate-y-1/2 md:mt-0 lg:flex-[40%]">
              Responsive layout
            </p>
            <p className="services__subtitle heading-h3 flex-100 flex items-center mt-md justify-start pl-[65px] relative before:absolute before:w-lg before:h-lg before:bg-[url('/images/decor/services-icon.svg')] before:left-0 before:top-1/2 before:-translate-y-1/2 md:mt-0 lg:flex-[40%]">
              CSS Animations
            </p>
            <p className="services__subtitle heading-h3 flex-100 flex items-center mt-md justify-start pl-[65px] relative before:absolute before:w-lg before:h-lg before:bg-[url('/images/decor/services-icon.svg')] before:left-0 before:top-1/2 before:-translate-y-1/2 md:mt-0 lg:flex-[40%]">
              GitHub
            </p>
            <p className="services__subtitle heading-h3 flex-100 flex items-center mt-md justify-start pl-[65px] relative before:absolute before:w-lg before:h-lg before:bg-[url('/images/decor/services-icon.svg')] before:left-0 before:top-1/2 before:-translate-y-1/2 md:mt-0 lg:flex-[40%]">
              SCSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSkills;
