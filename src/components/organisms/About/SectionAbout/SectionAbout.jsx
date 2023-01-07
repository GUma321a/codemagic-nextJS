import React from 'react';
import { useTranslation } from 'next-i18next';

import about_1 from '../../../../assets/images/illustrations/about-1.jpg';
import about_2 from '../../../../assets/images/illustrations/about-2.jpg';
import about_3 from '../../../../assets/images/illustrations/about-3.jpg';

function About() {
  const { t } = useTranslation();

  return (
    <section className="about mb-60 mt-[100px] lg:my-160">
      <div className="container">
        <div className="about__wrapper lg:flex lg:justify-between mb-80">
          <h2 className="about__title heading-h3 mb-xl lg:mb-0">About Me</h2>
          <div className="about__inner flex-60">
            <p className="about__text body-text-m text-gray-400 mb-md md:mb-lg">
              Hi, my name is Alexander. I'm Front-End Developer.
            </p>
            <p className="about__text body-text-m text-gray-400 mb-md md:mb-lg">
              I create successful websites that are fast, easy to use, and built with best
              practices. I work to make a better web. One that is fast, easy to use, beautiful,
              accessible to all, and frustration-free. Regardless of your specific business
              requirements, in solving these challenges, you have a great chance of finding success
              online.
            </p>
            <p className="about__text body-text-m text-gray-400 mb-md md:mb-lg">
              I use HTML, CSS, and JavaScript to produce responsive websites that provide users the
              best and most appropriate experience suited to their device and browser. I write
              standards based code that is semantic, accessible, search-engine friendly, easy to
              maintain, cross browser compatible, and performant.
            </p>
            <p className="about__text body-text-m text-gray-400 mb-md md:mb-lg">
              I am an experienced programmer who can find creative solutions to technical
              challenges, whilst at the same time designing sleek and visually appealing websites. I
              have extensive knowledge of recognized technical standards and i'm familiar with
              modern build practices.
            </p>
          </div>
        </div>
        <div className="about__images grid grid-cols-1 gap-sm md:grid-cols-2 lg:grid-cols-3">
          <div className="about__image max-h-[500px]">
            <img
              className="max-h-[160px] w-full 450:max-h-[200px] md:max-h-[500px]"
              src={about_1.src}
              alt="photo"
              loading="lazy"
            />
          </div>
          <div className="about__image max-h-[500px]">
            <img
              className="max-h-[160px] w-full 450:max-h-[200px] md:max-h-[500px]"
              src={about_2.src}
              alt="photo"
              loading="lazy"
            />
          </div>
          <div className="about__image max-h-[500px] md:col-span-2 lg:col-auto">
            <img
              className="max-h-[160px] w-full 450:max-h-[200px] md:max-h-[500px]"
              src={about_3.src}
              alt="photo"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
