import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './JaegerFAQ.module.css';

const JaegerFAQ = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p>This is where words go.</p>
    </div>
  );
};

JaegerFAQ.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

JaegerFAQ.propTypes = {
  rootClassName: string,
  className: string,
};

export default JaegerFAQ;  
