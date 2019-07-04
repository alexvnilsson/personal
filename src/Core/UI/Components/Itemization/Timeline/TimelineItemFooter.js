import React from "react";

export default class TimelineItemFooter extends React.Component {
  render() {
    return <div class="timeline-footer">{this.props.children}</div>;
  }
}
