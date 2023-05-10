import React from 'react';
import pt from 'prop-types';

function Section({ children, children2, className, line }) {
  return (
    <section className={`${className} my-60 lg:my-160`}>
      {children2}
      <div className={`container ${line ? 'border-y  border-gray-200' : ''}`}>{children}</div>
    </section>
  );
}

Section.propTypes = {
  children: pt.node,
  children2: pt.node,
  className: pt.string,
  line: pt.bool,
};

Section.defaultProps = {
  className: '',
  line: false,
};

export default Section;
