import React, { Component } from "react";
// import VideoThumbnail from "react-video-thumbnail";

class SearchBarList extends Component {
  render() {
    const { videos, onListItemClick, onBlur } = this.props;
    const publicURL = process.env.REACT_APP_PUBLIC_URL;

    return (
      <React.Fragment>
        <div className="search-bar-list">
          <ul>
            {videos.map(item => (
              <li key={item.videoId} onMouseDown={() => onListItemClick(item)}>
                <div className="col-xs-3">
                  {/* <VideoThumbnail
                    videoUrl={`public/${item.url}`}
                    snapshotAtTime={1}
                    renderThumbnail={true}
                  /> */}
                  <img
                    src={`${publicURL}/${item.thumbnails.default.url}`}
                    alt={item.title}
                  />
                </div>
                <div className="col-xs-9">
                  <p className="sbl_list_title">{item.title}</p>
                  <p className="sbl_list_desc">{item.description}</p>
                </div>
              </li>
            ))}
            {(!Array.isArray(videos) || !videos.length) && (
              <li
                key="not_found"
                className="sbl_not_found"
                onMouseDown={onBlur}
              >
                <div className="col-xs-12">
                  <p className="sbl_list_title">No videos found!</p>
                  <p className="sbl_list_desc">
                    Search again with another query.
                  </p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBarList;
