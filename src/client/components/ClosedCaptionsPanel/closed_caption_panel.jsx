import React, { Component } from "react";
import socket from "../socketContext";

class ClosedCaptionPanel extends Component {
  state = { captions: [] };
  closedCaptionRef = React.createRef();

  scrollToBottom = () => {
    if (this.closedCaptionRef) {
      this.closedCaptionRef.current.scrollTop = this.closedCaptionRef.current.scrollHeight;
    }
  };

  async componentDidMount() {
    socket.on("SpeechRecognitionClient", (data) => {
      console.log("Data from SpeechRecognition Module :", data);
      const captions = [...this.state.captions, data];
      this.setState({ captions });
    });
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const { captions } = this.state;

    return (
      <React.Fragment>
        <div className="container pt-1">
          <h2 className="heading-bar tb">Closed Captions</h2>
        </div>

        <textarea
          ref={this.closedCaptionRef}
          value={captions
            .map(
              (caption) =>
                caption.hypotheses.map((hypotheses) => hypotheses.utterance)[0]
            )
            .join(" ")}
          disabled={true}
          className="textarea"
          dir="rtl"
        ></textarea>
      </React.Fragment>
    );
  }
}

export default ClosedCaptionPanel;
