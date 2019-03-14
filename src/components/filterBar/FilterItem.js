import React, { Component } from "react";
import DropdownItem from "./DropdownItem";
import Aux from "../../hoc/Aux";

class FilterItem extends Component {
  render() {
    return (
      <Aux>
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
          {this.props.data.text}
        </a>
        <div
          className="dropdown-menu "
          style={{ width: "94%" }}
          aria-labelledby="dropdownMenuLink"
        >
          {this.props.data.data.map(item => (
            <DropdownItem key={item} item={item} />
          ))}
        </div>
      </Aux>
    );
  }
}
export default FilterItem;
