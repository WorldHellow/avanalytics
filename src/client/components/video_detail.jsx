import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";
import CelebrityCard from "./celebrity_card";
import ClosedCaption from "./closed_caption";
import NewsTicker from "./news_ticker";
import StreamTrend from "./stream_trend";
import "../assets/css/gfonts.css";
import "../assets/css/celebrity_card.css";
import "../assets/css/heading_bar.css";

class VideoDetail extends Component {
  state = { waaa: {} };
  closedCaptionRef = React.createRef();

  scrollToBottom = () => {
    if (this.props.video && this.closedCaptionRef) {
      this.closedCaptionRef.current.scrollTop = this.closedCaptionRef.current.scrollHeight;
    }
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const { video } = this.props;

    if (video) {
      return (
        <React.Fragment>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-4 celebrity-filters">
                <div className="line"></div>
                <button className="celebrity-filters-button">6 hours</button>
                <button className="celebrity-filters-button">24 hours</button>
                <button className="celebrity-filters-button">Last Week</button>
                <div className="line"></div>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-5 yt-live-container">
                    <iframe
                      className="embed-responsive-item yt-live"
                      src={video.url}
                    ></iframe>
                  </div>
                  <div className="col-md-7">
                    <CelebrityCard></CelebrityCard>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <ClosedCaption
                      closedCaptionRef={this.closedCaptionRef}
                    ></ClosedCaption>
                    <NewsTicker></NewsTicker>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <StreamTrend></StreamTrend>
              </div>
            </div>
          </div>
          <div className="video-detail col-md-8">
            <div className="row"></div>
          </div>
          <div className="col-md-4"></div>
        </React.Fragment>
      );
    }

    return (
      <div className="video-detail col-md-8">
        <div className="details">
          <div>Video not selected, please search another term!</div>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
