import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectOraBlocks } from './data/selectors';
import { fetchOraBlocks } from './data/thunks';
import OraDashboard from './OraDashboard';

export default function OraDashboardContainer() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const oraBlocks = useSelector(selectOraBlocks);
  useEffect(() => {
    // The courseId from the URL is the course we WANT to load.
    dispatch(fetchOraBlocks(courseId));
  }, [courseId]);

  return (
    <OraDashboard data={oraBlocks} />
  );
}
