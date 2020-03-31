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
    if (this.closedCaptionRef) {
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
    const video = this.props.video;

    if (!video) {
      const videoId = "yBXy5P8IeWE";
      return (
        <React.Fragment>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-4 celebrity-filters">
                <div class="line"></div>
                <button className="celebrity-filters-button">6 hours</button>
                <button className="celebrity-filters-button">24 hours</button>
                <button className="celebrity-filters-button">Last Week</button>
                <div class="line"></div>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-5 yt-live-container">
                    <iframe
                      className="embed-responsive-item yt-live"
                      src={`https://www.youtube.com/embed/${videoId}`}
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

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
        <div className="captions">
          <Alert variant="success" transition="fade-in">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit loimport CelebrityHeader from
              './celebrity_card'; nger so that you can see how spacing within an
              alert works with this kind of content.
            </p>
          </Alert>
        </div>
        <textarea
          className="textarea-scrollbar scrollbar-outer"
          rows="3"
        ></textarea>
      </div>
    );
  }
}

export default VideoDetail;
