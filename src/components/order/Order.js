import React, { Component } from "react";

class Order extends Component {
  state = {
    order1: {
      ticker: "MSFT",
      exchange: "NASDAQ",
      name: "Microsoft Corporation",
      min_quantity: 1,
      lot_size: 1,
      last_close_price_local: 110.97,
      estimated_quantity: 35,
      last_close_price_aud: 155.52,
      estimated_amount: 5443.13,
      estimated_total_investment: 54443.13,
      estimated_trading_fees: 15,
      estimated_taxes: 0.0065,
      estimated_gst: 0.0,
      estimated_total: 5458.14
    }
  };
  render() {
    const order = this.state.order1;
    return (
      <div className="container mb-5">
        <div className="row mt-5 mb-5 pl-1">
          <div className="col-12">
            <h2>
              <span className="text-success">BUY</span> | Microsoft Corporation
              [MSFT]
              <span className="align-text-bottom float-right h6 pt-3">
                Stock will be held in{" "}
                <a className="text-success" href="#!">
                  Stocks I own
                </a>
              </span>
            </h2>
          </div>
        </div>

        <div className="table-responsive">
          <table
            className="table table-borderless mb-5"
            style={{ border: "1px solid #ccc" }}
          >
            <thead id="grad" style={{ height: "80px" }}>
              <tr style={{ border: "1px solid #ccc" }}>
                <th
                  scope="col"
                  colSpan="10"
                  style={{ borderRight: "1px solid #ccc", height: "80px" }}
                >
                  <h3 className="text-success"> Order Detail</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ border: "1px solid #ccc" }}>
                <th scope="row">Buy</th>
                <td>Ticker</td>
                <td>Exchange</td>
                <td>Name</td>
                <td>Min Quantity</td>
                <td>Lot Size</td>
                <td>Last close price (Local)</td>
                <td>Estimated Quantity</td>
                <td>Last close price (AUD)</td>
                <td style={{ borderRight: "1px solid #ccc" }}>
                  Estimated Amount (AUD)
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ccc" }}>
                <th scope="row">
                  <i className="fas fa-check" style={{ color: "green" }} />
                </th>
                <td>{order.ticker}</td>
                <td>{order.exchange}</td>
                <td>{order.name}</td>
                <td>{order.min_quantity}</td>
                <td>{order.lot_size}</td>
                <td>US${order.last_close_price_local}</td>
                <td>{order.estimated_quantity}</td>
                <td>AU${order.last_close_price_aud}</td>
                <td style={{ borderRight: "1px solid #ccc" }}>
                  ${order.estimated_amount}
                </td>
              </tr>
              <tr>
                <th colSpan="6" scope="row" />
                <td colSpan="3" style={{ border: "none" }}>
                  Estimated Total Investment (AUD)
                </td>
                <td style={{ borderRight: "1px solid #ccc" }}>
                  ${order.estimated_total_investment}
                </td>
              </tr>
              <tr>
                <th colSpan="6" scope="row" />
                <td colSpan="3">Estimated Trading Fees(AUD)</td>
                <td style={{ borderRight: "1px solid #ccc" }}>
                  ${order.estimated_trading_fees}
                </td>
              </tr>
              <tr>
                <th colSpan="6" scope="row" />
                <td colSpan="3">Estimated Taxes(AUD)</td>
                <td style={{ borderRight: "1px solid #ccc" }}>
                  ${order.estimated_taxes}
                </td>
              </tr>
              <tr>
                <th colSpan="6" scope="row" />
                <td colSpan="3" style={{ borderBottom: "1px solid #ccc" }}>
                  Estimated GST (AUD)
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #ccc",
                    borderRight: "1px solid #ccc"
                  }}
                >
                  ${order.estimated_gst}
                </td>
              </tr>
              <tr>
                <th colSpan="6" scope="row" />
                <td colSpan="3" style={{ borderBottom: "1px solid #ccc" }}>
                  Estimated Total (AUD)
                </td>
                <td
                  style={{
                    borderRight: "1px solid #ccc",
                    borderBottom: "1px solid #ccc"
                  }}
                >
                  ${order.estimated_total}
                </td>
              </tr>
              <tr>
                <th colSpan="12" style={{ borderRight: "1px solid #ccc" }} />
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row">
          <div className="col-8">
            <button className="btn btn-outline-primary btn-lg mr-2">
              <i className="fas fa-angle-left mr-2" />
              Edit Order
            </button>
            <button className="btn btn-outline-primary btn-lg ">Cancel</button>
          </div>

          <div className="ml-auto mr-3">
            <span className="mr-2">
              Step{" "}
              <a style={{ color: "green" }} href="#!">
                2
              </a>{" "}
              of 2
            </span>
            <button className="btn btn-success btn-lg ml-auto">
              Place order
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
