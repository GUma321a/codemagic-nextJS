import React from 'react';

import { useTranslation } from 'next-i18next';

import Image from './Image';
import Link from './Link';

import site_1 from '../../assets/images/illustrations/site-1.jpg';
import site_2 from '../../assets/images/illustrations/site-2.jpg';
import site_3 from '../../assets/images/illustrations/site-3.jpg';
import site_4 from '../../assets/images/illustrations/site-4.jpg';
import site_5 from '../../assets/images/illustrations/site-5.jpg';
import site_6 from '../../assets/images/illustrations/site-6.jpg';
import site_7 from '../../assets/images/illustrations/site-7.jpg';

function Gallery() {
  const { t } = useTranslation('home');
  const images = [
    {
      src: site_1,
      href: '/projects/seatcovers',
      text: t('works.link-1'),
    },
    {
      src: site_2,
      href: '/projects/wifi',
      text: t('works.link-1'),
      variant: 'big',
    },
    {
      src: site_3,
      href: '/projects/dance',
      text: t('works.link-1'),
      variant: 'big',
    },
    {
      src: site_4,
      href: '/projects/video-line',
      text: t('works.link-1'),
    },
    {
      src: site_5,
      href: '/projects/neuro',
      text: t('works.link-1'),
    },
    {
      src: site_6,
      href: '/projects/nimble-token',
      text: t('works.link-1'),
      variant: 'big',
    },
    {
      src: site_7,
      href: '/projects/wc-template-4',
      text: t('works.link-1'),
      variant: 'big',
    },
  ];

  return (
    <div className="projects__wrapper grid grid-cols-1 lg:grid-cols-2 lg:gap-lg items-start">
      {images.map((item) => {
        return (
          <div
            className={`${
              item.variant === 'big' ? 'projects__item--big' : ''
            } projects__item h-[350px] relative transition-all before:absolute before:w-full before:h-full before:opacity-0 before:bg-gray-700 hover:before:opacity-100 before:duration-[0.4s] focus:before:opacity-100 before:transition-all before:z-1`}
            key={item.href}
          >
            <div className="projects__image min-h-full object-center object-cover">
              <Image src={item.src} alt="projects" load="lazy" layout="fill" />
            </div>
            <Link
              href={item.href}
              target="_blank"
              className="projects__hover absolute w-full h-full flex justify-center items-center heading-h4 text-white left-0 top-0 opacity-0 duration-300 z-1"
            >
              {item.text}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
