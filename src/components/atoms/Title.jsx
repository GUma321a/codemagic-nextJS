import React from 'react';
import pt from 'prop-types';

function Element({ as, ...props }) {
  const As = as;
  return <As {...props} />;
}

Element.propTypes = {
  as: pt.string,
};

function Title({ children, text, size, className, ...props }) {
  const titleClass = () => {
    if (size === 'h1') return 'heading-h1';
    if (size === 'h2') return 'heading-h2';
    if (size === 'h3') return 'heading-h3';
    if (size === 'h4') return 'heading-h4';
    if (size === 'h5') return 'heading-h5';
    return '';
  };

  return (
    <Element as={size} className={`${titleClass()} ${className}`.trim()} {...props}>
      {text || children || 'Title'}
    </Element>
  );
}

Title.propTypes = {
  children: pt.node,
  text: pt.string,
  size: pt.oneOf(['h5', 'h4', 'h3', 'h2', 'h1']),
  className: pt.string,
};

Title.defaultProps = {
  text: '',
  size: 'h2',
  className: '',
};

export default Title;
