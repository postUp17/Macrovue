import React, { Component } from "react";
import FilterItem from "../filterBar/FilterItem";

class ExportSummary extends Component {
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
    },
    currencyContent: {
      label: " Currency",
      text: "Select Currency",
      data: ["ALL", "JPY", "USD", "AUD", "HKD", "EUR"]
    }
  };
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered " role="document">
            <div className="modal-content">
              <div className="modal-header ">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Export activities
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <form>
                  <div className="form-group row">
                    <label
                      forhtml="inputPassword"
                      className="col-sm-4 col-form-label"
                    >
                      Select Currency
                    </label>
                    <div className="dropdown  col-sm-5 ">
                      <FilterItem data={this.state.currencyContent} />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label
                      forhtml="inputPassword"
                      className="col-sm-4 col-form-label"
                    >
                      Select Type
                    </label>
                    <div className="dropdown  col-sm-6 ">
                      <FilterItem data={this.state.typeContent} />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label
                      forhtml="dropdownMenuButton"
                      className="col-sm-4 col-form-label"
                    >
                      Date Range
                    </label>
                    <div className="dropdown  col-sm-6">
                      <FilterItem data={this.state.dateContent} />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label
                      forhtml="inputPassword"
                      className="col-sm-4 col-form-label"
                    >
                      Select Type
                    </label>
                    <div
                      className="btn-group col-sm-6"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-success mr-2"
                      >
                        CSV
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-success ml-2"
                      >
                        XLS
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="dropdown-divider" />
              <div className="  float-left">
                <button
                  type="button "
                  className="btn btn-primary float-left mx-2 mb-2"
                >
                  Generate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExportSummary;
