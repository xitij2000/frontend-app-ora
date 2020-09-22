import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import React from 'react';
import messages from './messages';

function SummaryTable({ intl }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            {intl.formatMessage(messages.units)}
          </th>
          <th>
            {intl.formatMessage(messages.assessments)}
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
    </table>
  );
}
SummaryTable.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(SummaryTable);
