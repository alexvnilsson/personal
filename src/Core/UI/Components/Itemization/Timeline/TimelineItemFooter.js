import React from "react";

import TimelineItemFooterItem from "./TimelineItemFooterItem";

export default class TimelineItemFooter extends React.Component {
  render() {
    return <div class="footer">{this.props.children}</div>;
  }
}
