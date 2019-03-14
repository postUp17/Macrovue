import React, { Component } from "react";
import FilterItem from "./FilterItem";
import Aux from "../../hoc/Aux";
import DropdownItem from "./DropdownItem";

class filterBar extends Component {
  state = {
    displayFilterInputs: false,
    dateContent: {
      text: "Select date range",
      label: "Data range",
      data: [
        "All dates",
        "This week",
        "Last Week",
        "Last 3 months",
        "Last 6 months",
        "Last 12 months",
        "This financial year",
        "Last financial year",
        "Custom range"
      ]
    },
    typeContent: {
      text: "Select activity",
      label: "Type",
      data: [
        "All Types",
        "Deposit",
        "Withdrawal",
        "Stock purchase",
        "Stock sale",
        "Dividends",
        "Broker interest paid",
        "Broker Interest received",
        "Corporate action",
        "FX purchase",
        "FX sale",
        "Fee",
        "Other Fees",
        "Platform Fee",
        "Portfolio Fee",
        "Position Transfer in",
        "Position Transfer out"
      ]
    },
    numberContent: {
      label: "Showing",
      text: "Select Amount",
      data: ["100 entries", "200 entries", "300 entries"]
    }
  };

  onFilterInputsToggle = () => {
    this.setState(prevState => ({
      displayFilterInputs: !prevState.displayFilterInputs
    }));
  };
  render() {
    let filterInputs;
    if (this.state.displayFilterInputs) {
      filterInputs = (
        <Aux>
          <div
            className="text-nowrap mt-2 d-lg-none"
            style={{ textAlign: "right" }}
          >
            <a
              href="#!"
              className="badge badge-success"
              onClick={this.onFilterInputsToggle}
            >
              Close X
            </a>
          </div>

          <div className="row mt-2">
            <div className="dropdown d-lg-none col-md-12 ">
              <a
                className="btn btn-outline-success dropdown-toggle"
                href="#!"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ width: "100%" }}
              >
                {this.state.dateContent.text}
              </a>
              <div
                className="dropdown-menu"
                style={{ width: "94%" }}
                aria-labelledby="dropdownMenuLink"
              >
                {this.state.dateContent.data.map(item => (
                  <DropdownItem key={item} item={item} />
                ))}
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="dropdown d-lg-none col-md-12 ">
              <a
                className="btn btn-outline-success dropdown-toggle"
                href="#!"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ width: "100%" }}
              >
                {this.state.numberContent.text}
              </a>
              <div
                className="dropdown-menu"
                style={{ width: "94%" }}
                aria-labelledby="dropdownMenuLink"
              >
                {this.state.numberContent.data.map(item => (
                  <DropdownItem key={item} item={item} />
                ))}
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="dropdown d-lg-none col-md-12 ">
              <a
                className="btn btn-outline-success dropdown-toggle"
                href="#!"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ width: "100%" }}
              >
                {this.state.typeContent.text}
              </a>
              <div
                className="dropdown-menu"
                style={{ width: "94%" }}
                aria-labelledby="dropdownMenuLink"
              >
                {this.state.typeContent.data.map(item => (
                  <DropdownItem key={item} item={item} />
                ))}
              </div>
            </div>
          </div>
        </Aux>
      );
    }
    return (
      <Aux>
        <div className="container d-none d-lg-block mt-2">
          <div className="btn-toolbar row ">
            {/* <div className="dropdown d-none d-lg-block col-sm-4 ">
              <a
                className="btn btn-outline-success dropdown-toggle"
                href="#!"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ width: "100%" }}
              >
                {this.state.dateContent.text}
              </a>
              <div
                className="dropdown-menu"
                style={{ width: "94%" }}
                aria-labelledby="dropdownMenuLink"
              >
                {this.state.dateContent.data.map(item => (
                  <DropdownItem key={item} item={item} />
                ))}
              </div>
            </div> */}

            <FilterItem data={this.state.dateContent} />
            <FilterItem data={this.state.numberContent} />
            <FilterItem data={this.state.typeContent} />

            <div className="col-sm-3 ">
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{ width: "100%" }}
              >
                <i className="fas fa-file-export" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* ////////////////////////////small////////////////// */}
        <div className="container mt-2 d-lg-none col-lg-12">
          <div className="row">
            <div className="col ">
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{ width: "70%" }}
                onClick={this.onFilterInputsToggle}
              >
                Filter
              </button>
            </div>

            <div className="col " style={{ width: "80%" }}>
              <form className="form-inline float-right ">
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback" />

                  <input
                    className="form-control mr-sm-2 form-control "
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
              </form>
            </div>
          </div>
          {filterInputs}

          <div className="container d-lg-none mt-2">
            <div className="row">
              <button
                type="button"
                className="btn btn-primary "
                style={{ width: "100%" }}
              >
                <i className="fas fa-file-export" />
                Export
              </button>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default filterBar;
