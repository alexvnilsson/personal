import React from "react";

import classNames from "classnames";

export default class ListItem extends React.Component {
  render() {
    if (
      typeof this.props.title !== "undefined" &&
      typeof this.props.icon !== "undefined"
    ) {
      const itemIconClasses = ["title-icon", "icon-smallest"];
      let itemIconElement = undefined;

      if (typeof this.props["icons-spaced"] !== "undefined") {
        itemIconClasses.push("mx-1");
      }

      if (Array.isArray(this.props.icon)) {
        itemIconElement = (
          <div>
            {this.props.icon.map((icon, index) => (
              <i
                key={index}
                className={classNames(...itemIconClasses, `icon-${icon}`)}
              />
            ))}
          </div>
        );
      } else {
        itemIconElement = (
          <i
            className={classNames(
              ...itemIconClasses,
              `icon-${this.props.icon}`
            )}
          />
        );
      }

      return (
        <div className="listitem">
          <div className="title h5">
            <div className="title-wrapper">
              {itemIconElement}
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
