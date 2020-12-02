import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './BusinessFAQ.module.css';

const BusinessFAQ = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p>This is where words go.</p>
    </div>
  );
};

BusinessFAQ.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

BusinessFAQ.propTypes = {
  rootClassName: string,
  className: string,
};

export default BusinessFAQ;  
