/* eslint-disable import/prefer-default-export */
import { logError } from '@edx/frontend-platform/logging';
import { getORABlocksInCourse, getORAResponses } from './api';
import {
  fetchOraBlocksFailed,
  fetchOraBlocksRequest,
  fetchOraBlocksSuccess,
  fetchOraReportFailed,
  fetchOraReportRequest,
  fetchOraReportSuccess,
} from './slices';

export function fetchOraBlocks(courseId) {
  return async (dispatch) => {
    try {
      dispatch(fetchOraBlocksRequest({ courseId }));
      const data = await getORABlocksInCourse(courseId);
      dispatch(fetchOraBlocksSuccess(data));
    } catch (error) {
      dispatch(fetchOraBlocksFailed());
      logError(error);
    }
  };
}

export function fetchOraReports(courseId, blockId) {
  return async (dispatch) => {
    try {
      dispatch(fetchOraReportRequest({ courseId, blockId }));
      const data = await getORAResponses(courseId, blockId);
      dispatch(fetchOraReportSuccess(data));
    } catch (error) {
      dispatch(fetchOraReportFailed({ blockId }));
      logError(error);
    }
  };
}
