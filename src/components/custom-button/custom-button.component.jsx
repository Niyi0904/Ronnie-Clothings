import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoggleSignIn, inverted, ...otherProps }) => (
  <button className={`${inverted ? 'inverted' : ''} ${isGoggleSignIn ? 'google-sign-in' : ''} custom-button rounded-2xl`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;