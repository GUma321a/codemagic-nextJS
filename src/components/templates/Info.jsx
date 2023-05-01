import React from 'react';
import pt from 'prop-types';

function Info({ className, children, ...props }) {
  return (
    <div className={`${className} md:flex md:justify-between`} {...props}>
      {children}
    </div>
  );
}

Info.propTypes = {
  children: pt.node,
  className: pt.string,
};
Info.defaultProps = {
  className: '',
};

export default Info;
