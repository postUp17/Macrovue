import React, { Component } from "react";
import Logo from "../../img/Logo.jpg";

class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-white ">
          <a className="navbar-brand" style={{ fontSize: "18px" }} href="#!">
            <img
              className="ml-2"
              style={{ height: "50px" }}
              src={Logo}
              alt=""
            />
            MACROVUE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item active px-4">
                <a className="nav-link" href="#!">
                  Dashboard <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-4" href="#!">
                  Vues
                </a>
              </li>
              <li className="nav-item px-4">
                <a className="nav-link" href="#!">
                  Stocks
                </a>
              </li>
              <li className="nav-item px-4">
                <a className="nav-link" href="#!">
                  Watchlist
                </a>
              </li>
              <li className="nav-item dropdown px-4">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  My Account
                </a>
                <div
                  className="dropdown-menu "
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <button className="btn btn-primary" style={{ width: "100%" }}>
                    Transfer Funds
                  </button>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#!">
                    Holdings
                  </a>
                  <a className="dropdown-item" href="#!">
                    Performance
                  </a>
                  <a className="dropdown-item" href="#!">
                    Place order
                  </a>
                  <a className="dropdown-item" href="#!">
                    Activity
                  </a>
                  <a className="dropdown-item" href="#!">
                    Statements
                  </a>
                  <a className="dropdown-item" href="#!">
                    Referral
                  </a>
                  <a className="dropdown-item" href="#!">
                    My Settings
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#!">
                    Insights
                  </a>
                  <a className="dropdown-item" href="#!">
                    Pricing
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#!">
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
