import React from 'react';
import pt from 'prop-types';

function Text({ content, className, children, size }) {
  const textSize = () => {
    if (size === 's') return 'body-text-s';
    if (size === 'm') return 'body-text-m';
    if (size === 'l') return 'body-text-l';
    return '';
  };

  return <p className={`${className} ${textSize()}`}>{children || content || 'Text'}</p>;
}

Text.propTypes = {
  children: pt.node,
  content: pt.string,
  className: pt.string,
  size: pt.oneOf(['s', 'm', 'l']),
};

Text.defaultProps = {
  className: '',
  size: 's',
};

export default Text;
