import React from "react";

export default class TimelineItem extends React.Component {
  render() {
    return (
      <div className="timeline-item">
        <div className="timeline-title-area mr-3 mr-md-0">
          <p className="title-text">{this.props.tagline}</p>
        </div>

        <div className="timeline-content-area">
          <h4 className="title">{this.props.heading}</h4>

          <div className="text-readable-2x mb-0">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
