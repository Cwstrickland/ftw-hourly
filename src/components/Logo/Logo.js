import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LogoImage from './DesktopLogo.png';
import css from './Logo.css';

const Logo = props => {
  const { className, format, ...rest } = props;
  const isMobile = format !== 'desktop';
  const classes = classNames(className, { [css.logoMobile]: isMobile });
  

  return (
    <img
      className={classes}
      src={LogoImage}
      alt="Jaeger Logo"
      {...rest}
    />
  );
};

const { oneOf, string } = PropTypes;

Logo.defaultProps = {
  className: null,
  format: 'desktop',
};

Logo.propTypes = {
  className: string,
  format: oneOf(['desktop', 'mobile']),
};

export default Logo;
