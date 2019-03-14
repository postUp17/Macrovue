import React, { Component } from "react";

export default class t extends Component {
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
    return <div />;
  }
}
