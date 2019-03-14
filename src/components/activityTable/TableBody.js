import React, { Component } from "react";

class TableBody extends Component {
  render() {
    let body = this.props.data;
    // let bodyContent = this.props.data.map(data => (
    //   <tr>
    //     <th scope="row">{data.date}</th>
    //     <td>{data.type}</td>
    //     <td>{data.action}</td>
    //     <td>{data.amount}</td>
    //     <td>{data.ending_cash_AUD}</td>
    //   </tr>
    // ));
    return body.map(data => (
      <tr key={data.date}>
        <th scope="row">{data.date}</th>
        <td>{data.type}</td>
        <td>{data.action}</td>
        <td>{data.amount}</td>
        <td>{data.ending_cash_AUD}</td>
      </tr>
    ));
  }
}

export default TableBody;
