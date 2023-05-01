import React from 'react';
import pt from 'prop-types';

function Section({ children, children2, className }) {
  return (
    <section className={`${className} my-60 lg:my-160`}>
      {children2}
      <div className="container">{children}</div>
    </section>
  );
}

Section.propTypes = {
  children: pt.node,
  children2: pt.node,
  className: pt.string,
};

Section.defaultProps = {
  className: '',
};

export default Section;
