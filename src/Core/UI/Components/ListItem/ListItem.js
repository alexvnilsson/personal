import React from "react";

export default class ListItem extends React.Component {
  render() {
    return (
      <div className="listitem">
        <div className="heading">
          <p className="heading-text">{this.props.heading}</p>
        </div>

        <div className="body">{this.props.children}</div>
      </div>
    );
  }
}
