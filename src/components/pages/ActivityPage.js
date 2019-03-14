import React, { Component } from "react";
import RegionBar from "../regionBar/RegionBar";
import FilterBar from "../filterBar/filterBar";
import ActivityTable from "../activityTable/ActivityTable";
import Pagination from "../pagination/Pagination";
import ExportSummary from "../exportSummary/ExportSummary";

class ActivityPage extends Component {
  render() {
    return (
      <div>
        <RegionBar />
        <FilterBar />
        <ActivityTable />
        <Pagination />
        <ExportSummary />
      </div>
    );
  }
}

export default ActivityPage;
