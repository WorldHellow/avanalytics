import React, { Component } from "react";
import socket from "../socketContext";

class NewsTickerPanel extends Component {
  state = { tickers: [] };

  async componentDidMount() {
    socket.on("TickerRecognitionClient", (data) => {
      console.log("Data from TickerRecognition Module :", data);
      const tickers = [...this.state.tickers, data];
      this.setState({ tickers });
    });
  }

  render() {
    const { tickers } = this.state;
    return (
      <React.Fragment>
        <div className="container pb-1">
          <h2 className="heading-bar tb">News Tickers</h2>
        </div>
        {tickers.map((ticker, index) => (
          <marquee
            key={index}
            behavior="scroll"
            className={`ticker-${index % 3}`}
            direction="right"
          >
            {ticker.label}
          </marquee>
        ))}
      </React.Fragment>
    );
  }
}

export default NewsTickerPanel;
