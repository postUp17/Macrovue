import React, { Component } from "react";
import TableBody from "./TableBody";
import Aux from "../../hoc/Aux";

class ActivityTable extends Component {
  state = [
    {
      date: "2019-02-19",
      type: "Stock Trade Commission",
      action: "Commission for Stock Trade Microsoft Corporation[MSFT] NASDAQ",
      amount: -12.91,
      ending_cash_AUD: 667746.18
    },
    {
      date: "2019-02-18",
      type: "Stock Trade Commission",
      action: "Commission for Stock Trade Microsoft Corporation[MSFT] NASDAQ",
      amount: -12.91,
      ending_cash_AUD: 667746.18
    },
    {
      date: "2019-02-17",
      type: "Stock Trade Commission",
      action: "Commission for Stock Trade Microsoft Corporation[MSFT] NASDAQ",
      amount: -12.91,
      ending_cash_AUD: 667746.18
    },
    {
      date: "2019-02-16",
      type: "Stock Trade Commission",
      action: "Commission for Stock Trade Microsoft Corporation[MSFT] NASDAQ",
      amount: -12.91,
      ending_cash_AUD: 667746.18
    },
    {
      date: "2019-02-15",
      type: "Stock Trade Commission",
      action: "Commission for Stock Trade Microsoft Corporation[MSFT] NASDAQ",
      amount: -12.91,
      ending_cash_AUD: 667746.18
    },
    {
      date: "2019-02-14",
      type: "Stock Trade Commission",
      action: "Commission for Stock Trade Microsoft Corporation[MSFT] NASDAQ",
      amount: -12.91,
      ending_cash_AUD: 667746.18
    },
    {
      date: "2019-02-13",
      type: "Stock Trade Commission",
      action: "Commission for Stock Trade Microsoft Corporation[MSFT] NASDAQ",
      amount: -12.91,
      ending_cash_AUD: 667746.18
    },
    {
      date: "2019-02-12",
      type: "Stock Trade Commission",
      action: "Commission for Stock Trade Microsoft Corporation[MSFT] NASDAQ",
      amount: -12.91,
      ending_cash_AUD: 667746.18
    },
    {
      date: "2019-02-11",
      type: "Stock Trade Commission",
      action: "Commission for Stock Trade Microsoft Corporation[MSFT] NASDAQ",
      amount: -12.91,
      ending_cash_AUD: 667746.18
    },
    {
      date: "2019-02-10",
      type: "Stock Trade Commission",
      action: "Commission for Stock Trade Microsoft Corporation[MSFT] NASDAQ",
      amount: -12.91,
      ending_cash_AUD: 667746.18
    },
    {
      date: "2019-02-9",
      type: "Stock Trade Commission",
      action: "Commission for Stock Trade Microsoft Corporation[MSFT] NASDAQ",
      amount: -12.91,
      ending_cash_AUD: 667746.18
    },
    {
      date: "2019-02-8",
      type: "Stock Trade Commission",
      action: "Commission for Stock Trade Microsoft Corporation[MSFT] NASDAQ",
      amount: -12.91,
      ending_cash_AUD: 667746.18
    }
  ];

  render() {
    let body = this.state;

    return (
      <Aux>
        <div className="container d-none d-lg-block">
          <table
            className="table table-striped table-bordered hidden-md-down"
            style={{ margin: "25px 0 50px 0" }}
          >
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Type</th>
                <th scope="col">Action</th>
                <th scope="col">Amount AUD</th>
                <th scope="col">Ending Cash AUD</th>
              </tr>
            </thead>
            <tbody>
              <TableBody data={this.state} />
            </tbody>
          </table>
        </div>

        <div className="container d-lg-none " style={{ marginTop: "25px" }}>
          <div className="row ">
            {/* justify-content-center  align-items-center */}
            {body.map(data => (
              <div
                className="col-md-6  col-sm-12 "
                style={{
                  marginTop: "10px"
                }}
                key={data.date}
              >
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-success">
                      {data.date} {data.type}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {data.type}
                    </h6>
                    <p className="card-text">{data.action}</p>
                    <p className="card-text ">
                      Amount AUD:{" "}
                      <strong className="text-info">{data.amount}</strong>
                    </p>
                    <p className="card-text">
                      Ending Cash AUD:{" "}
                      <strong className="text-info">
                        {data.ending_cash_AUD}
                      </strong>{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Aux>
    );
  }
}

export default ActivityTable;
