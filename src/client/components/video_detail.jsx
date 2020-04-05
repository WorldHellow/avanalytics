import React, { Component } from "react";
import ReactPlayer from "react-player";
import socketIOClient from "socket.io-client";
import CelebrityPanel from "./CelebrityPanel/celebrity_panel";
import ClosedCaptionPanel from "./ClosedCaptionsPanel/closed_caption_panel";
import NewsTickerPanel from "./NewsTickersPanel/news_ticker_panel";
import StreamTrendPanel from "./StreamTrendPanel/stream_trend_panel";
import "../assets/css/gfonts.css";
import "../assets/css/celebrity_card.css";
import "../assets/css/heading_bar.css";

const socket = socketIOClient(process.env.REACT_APP_MODULES_SOCKET_URL);

class VideoDetail extends Component {
  state = { response: false };
  closedCaptionRef = React.createRef();

  scrollToBottom = () => {
    if (this.props.video && this.closedCaptionRef) {
      this.closedCaptionRef.current.scrollTop = this.closedCaptionRef.current.scrollHeight;
    }
  };

  handleVideoPlay = () => {
    const videoId = this.props.video.videoId;
    socket.emit("VideoTrigger", { videoId: videoId });
  };

  async componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const { video } = this.props;
    const publicURL = process.env.REACT_APP_PUBLIC_URL;

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
                    <ReactPlayer
                      className="embed-responsive-item yt-live"
                      url={`${publicURL}/${video.url}`}
                      onPlay={this.handleVideoPlay}
                      config={{
                        file: { attributes: { controlsList: "nodownload" } },
                      }}
                      onContextMenu={(e) => e.preventDefault()}
                      controls
                    />
                  </div>
                  <div className="col-md-7">
                    <CelebrityPanel socket={socket} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <ClosedCaptionPanel
                      socket={socket}
                      closedCaptionRef={this.closedCaptionRef}
                    />
                    <NewsTickerPanel socket={socket} />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <StreamTrendPanel />
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
