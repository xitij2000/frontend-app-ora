import { getConfig } from '@edx/frontend-platform';
import PropTypes from 'prop-types';

export const API_BASE_URL = getConfig().LMS_BASE_URL;

/**
 * Enum for request status.
 * @readonly
 * @enum {string}
 */
export const RequestStatus = {
  IN_PROGRESS: 'in-progress',
  SUCCESSFUL: 'successful',
  FAILED: 'failed',
  DENIED: 'denied',
};

export const Routes = {
  HOME: '/:courseId',
};

export const oraDataShape = PropTypes.objectOf(PropTypes.shape({
  vertical: PropTypes.string.isRequired,
  name: PropTypes.string,
  total: PropTypes.number,
  training: PropTypes.number,
  peer: PropTypes.number,
  self: PropTypes.number,
  waiting: PropTypes.number,
  staff: PropTypes.number,
  done: PropTypes.number,
  status: PropTypes.string,
}));
