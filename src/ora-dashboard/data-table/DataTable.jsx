import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import LoadingOrValue from '../../components/value-or-loading/ValueOrLoading';
import messages from './messages';
import { fetchOraReports } from '../data/thunks';
import { oraDataShape } from '../../data/constants';

function DataTable({ intl, data }) {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    Object.keys(data).map((blockId) => data[blockId].status || dispatch(fetchOraReports(courseId, blockId)));
  }, [courseId, data]);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            {intl.formatMessage(messages.unit_name)}
          </th>
          <th>
            {intl.formatMessage(messages.assessment)}
          </th>
          <th>
            {intl.formatMessage(messages.total_responses)}
          </th>
          <th>
            {intl.formatMessage(messages.training)}
          </th>
          <th>
            {intl.formatMessage(messages.peer)}
          </th>
          <th>
            {intl.formatMessage(messages.self)}
          </th>
          <th>
            {intl.formatMessage(messages.waiting)}
          </th>
          <th>
            {intl.formatMessage(messages.staff)}
          </th>
          <th>
            {intl.formatMessage(messages.final_grade_received)}
          </th>
        </tr>
      </thead>
      <tbody>
        {Object.values(data).map(((block) => (
          <tr key={block.id}>
            <td>{block.vertical}</td>
            <td>{block.name}</td>
            <td><LoadingOrValue value={block.total} /></td>
            <td><LoadingOrValue value={block.training} /></td>
            <td><LoadingOrValue value={block.peer} /></td>
            <td><LoadingOrValue value={block.self} /></td>
            <td><LoadingOrValue value={block.waiting} /></td>
            <td><LoadingOrValue value={block.staff} /></td>
            <td><LoadingOrValue value={block.done} /></td>
          </tr>
        )))}
      </tbody>
    </table>
  );
}
DataTable.propTypes = {
  intl: intlShape.isRequired,
  data: oraDataShape,
};

DataTable.defaultProps = {
  data: {},
};

export default injectIntl(DataTable);
