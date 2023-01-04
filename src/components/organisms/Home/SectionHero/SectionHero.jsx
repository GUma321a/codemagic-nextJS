import { Link } from '../../../atoms';
import React from 'react';

import photo from '../../../../assets/images/photos/preview-photo.jpg';

function SectionHero() {
  return (
    <section className="hero mb-60 mt-[100px] lg:my-160">
      <div className="container">
        <div className="hero__wrapper lg:flex lg:justify-between lg:gap-[78px]">
          <div className="hero__info lg:flex-65">
            <p className="hero__info-subtitle caption-s uppercase">
              HELLO! I AM Alexander Chernikov
            </p>
            <h1 className="hero__info-title heading-h1 mb-md">
              Building Delightful Design Experiences for Users.
            </h1>
            <p className="hero__info-text body-text-l mb-xl">
              If you have a website design, then what to expect?
            </p>
            <div className="hero__info-button flex justify-center lg:justify-start">
              <Link className="button-cta-m " href="/contact">
                Start a Project
              </Link>
            </div>
          </div>
          <div className="hero__image flex flex-col items-center mt-md lg:flex-30">
            <div className="hero__image-photo mb-sm lg:mb-md">
              <img
                className="max-h-[300px] w-full md:max-h-[500px]"
                src={photo.src}
                alt="photo"
                loading="lazy"
              ></img>
            </div>
            <div className="contact-me__wrapper">
              <div className="contact-me__title body-text-s text-16 text-gray-200 mb-[4px]">
                Contact me at
              </div>
              <Link
                href="mailto:alexandrchernocov@gmail.com"
                className="contact-me__mail body-text-m duration-[0.2s] hover:text-primary-dark hover:duration-[0.2s]"
              >
                alexandrchernicov@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionHero;
