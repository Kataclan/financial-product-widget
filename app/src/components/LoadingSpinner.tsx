import React from 'react';

/**
 * Renders a loading spinner extracted from a 3rd party website
 */
const LoadingSpinner: React.SFC = () => (
  <img
    alt="loading-spinner"
    id="loading-spinner"
    className="loading-spinner"
    src="https://i.pinimg.com/originals/3f/2c/97/3f2c979b214d06e9caab8ba8326864f3.gif"
  />
);

export default LoadingSpinner;
