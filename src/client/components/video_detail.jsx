import React, { Component } from "react";
import ReactPlayer from "react-player";
import socketIOClient from "socket.io-client";
import CelebrityCard from "./celebrity_card";
import ClosedCaption from "./closed_caption";
import NewsTicker from "./news_ticker";
import StreamTrend from "./stream_trend";
import "../assets/css/gfonts.css";
import "../assets/css/celebrity_card.css";
import "../assets/css/heading_bar.css";

class VideoDetail extends Component {
  state = { response: false, endpoint: "http://localhost:8909" };
  closedCaptionRef = React.createRef();

  scrollToBottom = () => {
    if (this.props.video && this.closedCaptionRef) {
      this.closedCaptionRef.current.scrollTop = this.closedCaptionRef.current.scrollHeight;
    }
  };

  async componentDidMount() {
    this.scrollToBottom();

    const socketEndpoint = process.env.REACT_APP_MODULES_SOCKET_URL;
    console.log(socketEndpoint);
    const socket = socketIOClient(socketEndpoint);
    socket.on("FacialRecognitionData", data => {
      this.setState({ response: data });
      console.log(data);
    });
    socket.on("SpeechRecognitionData", data => {
      this.setState({ response: data });
      console.log(data);
    });
    socket.on("TickerRecognitionData", data => {
      this.setState({ response: data });
      console.log(data);
    });
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
                      config={{
                        file: { attributes: { controlsList: "nodownload" } }
                      }}
                      onContextMenu={e => e.preventDefault()}
                      controls
                    />
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
