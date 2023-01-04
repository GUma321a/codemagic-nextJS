import React from 'react';
import pt from 'prop-types';

import Link from './Link';

function Button({ children, link, text, buttonType, variant, size, className, ...props }) {
  const btnClass = () => {
    if (variant === 'ghost' && size === 'xl') return 'button-ghost-m sm:button-ghost-xl';
    if (variant === 'cta' && size === 'xl') return 'button-cta-m sm:button-cta-xl';
    if (variant === 'ghost' && size === 'l') return 'button-ghost-m sm:button-ghost-l';
    if (variant === 'cta' && size === 'l') return 'button-cta-m sm:button-cta-l';
    if (variant === 'ghost' && size === 'm') return 'button-ghost-m';
    if (variant === 'cta' && size === 'm') return 'button-cta-m';
    return '';
  };

  if (link) {
    return (
      <Link href={link} className={`${btnClass()} ${className}`.trim()}>
        {text || children || 'Button'}
      </Link>
    );
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={buttonType} className={`${btnClass()} ${className}`.trim()} {...props}>
      {text || children || 'Button'}
    </button>
  );
}

Button.propTypes = {
  children: pt.node,
  link: pt.string,
  text: pt.string,
  buttonType: pt.oneOf(['button', 'submit']),
  variant: pt.oneOf(['cta', 'ghost']),
  size: pt.oneOf(['m', 'l', 'xl']),
  className: pt.string,
};

Button.defaultProps = {
  text: '',
  buttonType: 'button',
  variant: 'cta',
  size: 'xl',
  className: '',
};

export default Button;
