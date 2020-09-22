import React from 'react';
import SummaryTable from './summary-table/SummaryTable';
import DataTable from './data-table/DataTable';
import { oraDataShape } from '../data/constants';

function OraDashboard({ data }) {
  return (
    <main>
      <div className="container-fluid">
        <h1>Open Responses</h1>
        <SummaryTable />
        <DataTable data={data} />
      </div>
    </main>
  );
}

OraDashboard.propTypes = {
  data: oraDataShape,
};

OraDashboard.defaultProps = {
  data: {},
};

export default OraDashboard;
