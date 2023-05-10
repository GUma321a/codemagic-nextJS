import React from 'react';
import pt from 'prop-types';

import { useTranslation } from 'next-i18next';

import Image from '../atoms/Image';
import Link from '../atoms/Link';

function Gallery({ content, className }) {
  const { t } = useTranslation('home');

  return (
    <div
      className={`projects__wrapper grid grid-cols-1 lg:grid-cols-2 lg:gap-lg items-start ${className}`}
    >
      {content.map((item) => {
        return (
          <div
            className={`${
              item.variant === 'big' ? 'projects__item--big' : ''
            } projects__item h-[350px] relative transition-all before:absolute before:w-full before:h-full before:opacity-0 before:bg-gray-700 hover:before:opacity-100 before:duration-[0.4s] focus:before:opacity-100 before:transition-all before:z-1`}
            key={item.href}
          >
            <Image src={item.src} alt="projects" layout="fill" />
            <Link
              href={item.href}
              target="_blank"
              className="projects__hover absolute w-full h-full flex justify-center items-center heading-h4 text-white left-0 top-0 opacity-0 duration-300 z-1"
              content={t('works.link-1')}
            />
          </div>
        );
      })}
    </div>
  );
}

Gallery.propTypes = {
  className: pt.string,
  content: pt.instanceOf(Array),
};

Gallery.defaultProps = {
  className: '',
};

export default Gallery;
