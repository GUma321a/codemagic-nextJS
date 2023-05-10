import React from 'react';
import pt from 'prop-types';

function Caption({ className, size, children, content }) {
  const captionSize = () => {
    if (size === 's') return 'caption-s';
    if (size === 'm') return 'caption-m';
    if (size === 'l') return 'caption-l';
    return '';
  };
  return <p className={`${className} ${captionSize()}`}>{children || content || 'caption'}</p>;
}

Caption.propTypes = {
  className: pt.string,
  size: pt.oneOf(['s', 'm', 'l']),
  children: pt.node,
  content: pt.string,
};

Caption.defaultProps = {
  className: '',
  size: 's',
};

export default Caption;
