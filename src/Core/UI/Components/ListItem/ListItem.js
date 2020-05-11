import React from "react";

export default class ListItem extends React.Component {
  render() {
    if (
      typeof this.props.title !== "undefined" &&
      typeof this.props.icon !== "undefined"
    ) {
      return (
        <div className="listitem">
          <div className="title h5">
            <div className="title-wrapper">
              <i
                className={`title-icon icon-smaller icon-${this.props.icon}`}
              />
              <p className="title-text">{this.props.title}</p>
            </div>
          </div>

          <div className="body">{this.props.children}</div>
        </div>
      );
    } else if (
      typeof this.props.title !== "undefined" &&
      typeof this.props.icon === "undefined"
    ) {
      return (
        <div className="listitem">
          <div className="title">
            <p className="title-text">{this.props.title}</p>
          </div>

          <div className="body">{this.props.children}</div>
        </div>
      );
    }
  }
}
