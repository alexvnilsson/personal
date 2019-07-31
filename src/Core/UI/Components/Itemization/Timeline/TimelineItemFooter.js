import React from "react";

export default class TimelineItemFooter extends React.Component {
  render() {
    return <div className="timeline-footer">{this.props.children}</div>;
  }
}
