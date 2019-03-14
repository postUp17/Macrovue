import "./style/style.css";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import ActivityPage from "./components/pages/ActivityPage";
import Order from "./components/order/Order";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Banner />
          <Route exact path="/activity" component={ActivityPage} />
          <Route exact path="/order" component={Order} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
