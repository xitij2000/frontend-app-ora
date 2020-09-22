/* eslint-disable import/prefer-default-export */
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';
import { API_BASE_URL } from '../../data/constants';

export async function getORABlocksInCourse(courseId) {
  const url = `${API_BASE_URL}/api/courses/v1/blocks/`;
  const params = {
    course_id: courseId,
    username: 'edx',
    depth: 'all',
    block_types_filter: 'course,chapter,sequential,vertical,openassessment',
    requested_fields: 'children',
  };
  const { data } = await getAuthenticatedHttpClient()
    .get(url, { params });
  return data;
}

export async function getORAResponses(courseId, blockId) {
  const url = `${API_BASE_URL}/courses/${courseId}/xblock/${blockId}/handler/get_ora2_responses`;
  const { data } = await getAuthenticatedHttpClient()
    .get(url);
  return data;
}
