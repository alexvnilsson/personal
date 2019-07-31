import React from "react";

export default class TimelineItemFooterItem extends React.Component {
  render() {
    return (
      <div className="footer-item">
        <label className="item-label">{this.props.label}</label>

        <p className="item-content">{this.props.children}</p>
      </div>
    );
  }
}
