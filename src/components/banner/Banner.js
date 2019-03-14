import React, { Component } from "react";
import banP from "../../img/banP.png";

class Banner extends Component {
  render() {
    return (
      <div>
        <img src={banP} className="img-fluid" alt="test" />
      </div>
    );
  }
}

export default Banner;
