import React from 'react';
import PropType from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSpi } from '@fortawesome/free-regular-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function LoadingOrValue({ value }) {
  if (value === null || value === undefined) {
    return <FontAwesomeIcon icon={faSpinner} spin />;
  }
  return value;
}

LoadingOrValue.propTypes = {
  value: PropType.element,
};

LoadingOrValue.defaultProps = {
  value: null,
};

export default LoadingOrValue;
