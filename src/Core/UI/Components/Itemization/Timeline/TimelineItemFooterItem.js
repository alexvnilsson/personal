import React from "react";

export default class TimelineItemFooterItem extends React.Component {
  render() {
    return (
      <div class="footer-item">
        <label class="item-label">{this.props.label}</label>

        <p class="item-content">{this.props.children}</p>
      </div>
    );
  }
}
