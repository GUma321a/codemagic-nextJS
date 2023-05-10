import React from 'react';
import NextImage from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import pt from 'prop-types';

function ImageComponent({ wrapperClass, ...props }) {
  const [loaded, setLoaded] = React.useState(false);
  const motionControls = useAnimation();

  const onLoadingComplete = () => {
    setLoaded(true);
  };

  React.useEffect(() => {
    if (loaded) {
      motionControls.start('visible');
    }
  }, [loaded, motionControls]);

  const motionProps = {
    initial: 'hidden',
    animate: motionControls,
    variants: {
      visible: { opacity: 1 },
      hidden: { opacity: 0 },
    },
    transition: {
      ease: 'easeOut',
      duration: 0.1,
    },
  };

  return (
    <motion.span {...motionProps} className={`block ${wrapperClass}`}>
      <NextImage {...props} onLoadingComplete={onLoadingComplete} />
    </motion.span>
  );
}

ImageComponent.propTypes = {
  wrapperClass: pt.string,
  alt: pt.string,
  layout: pt.string,
  lazyBoundary: pt.string,
};

ImageComponent.defaultProps = {
  alt: '',
  layout: 'responsive',
  lazyBoundary: '1000px',
  wrapperClass: '',
};

export default ImageComponent;
