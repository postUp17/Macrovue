import React, { Component } from "react";

class DropdownItem extends Component {
  render() {
    return (
      <a className="dropdown-item" href="#!">
        {this.props.item}
      </a>
    );
  }
}

export default DropdownItem;
