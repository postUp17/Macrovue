import "./style/style.css";
import React, { Component } from "react";
import NavBar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import RegionBar from "./components/regionBar/RegionBar";
import FilterBar from "./components/filterBar/filterBar";
import ActivityTable from "./components/activityTable/ActivityTable";
import Pagination from "./components/pagination/Pagination";
import ExportSummary from "./components/exportSummary/ExportSummary";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Banner />
        <RegionBar />
        <FilterBar />
        <ActivityTable />
        <Pagination />
        <ExportSummary />
      </div>
    );
  }
}

export default App;
