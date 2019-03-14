import React, { Component } from "react";
import Aux from "../../hoc/Aux";

class RegionBar extends Component {
  render() {
    return (
      <Aux>
        <div className="container d-none d-md-block">
          <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand" href="#!">
              ALL
            </a>
            <a className="navbar-brand" href="#!">
              JPY
            </a>
            <a className="navbar-brand" href="#!">
              USD
            </a>
            <a className="navbar-brand" href="#!">
              AUD
            </a>
            <a className="navbar-brand" href="#!">
              HKD
            </a>

            <a className="navbar-brand" href="#!">
              EUR
            </a>

            <form className="form-inline">
              <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback" />

                <input
                  className="form-control mr-sm-2 form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </form>
          </nav>
        </div>
        {/* //////////////////////////////////// */}
        <div className="container">
          <div className="row">
            <div
              className="dropdown d-lg-none col-md-12 "
              style={{ marginTop: "25px" }}
            >
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
                Exchange
              </a>

              <div
                className="dropdown-menu"
                style={{ width: "94%" }}
                aria-labelledby="dropdownMenuLink"
              >
                <a className="dropdown-item" href="#!">
                  ALL
                </a>
                <a className="dropdown-item" href="#!">
                  JPY
                </a>
                <a className="dropdown-item" href="#!">
                  USD
                </a>
                <a className="dropdown-item" href="#!">
                  AUD
                </a>
                <a className="dropdown-item" href="#!">
                  HKD
                </a>
                <a className="dropdown-item" href="#!">
                  EUR
                </a>
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default RegionBar;
