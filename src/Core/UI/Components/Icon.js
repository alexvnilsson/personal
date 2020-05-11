import React, { Component } from "react";
import classNames from "classnames";

export const icons = {
  github: {
    viewBox: "0 0 32 32",
    path:
      "M16.29,0a16.29,16.29,0,0,0-5.15,31.75c.82.15,1.11-.36,1.11-.79s0-1.41,0-2.77C7.7,29.18,6.74,26,6.74,26a4.36,4.36,0,0,0-1.81-2.39c-1.47-1,.12-1,.12-1a3.43,3.43,0,0,1,2.49,1.68,3.48,3.48,0,0,0,4.74,1.36,3.46,3.46,0,0,1,1-2.18c-3.62-.41-7.42-1.81-7.42-8a6.3,6.3,0,0,1,1.67-4.37,5.94,5.94,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.41,15.41,0,0,1,8.16,0c3.11-2.11,4.47-1.67,4.47-1.67A5.91,5.91,0,0,1,25,11.07a6.3,6.3,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.85,3.85,0,0,1,1.11,3c0,2.18,0,3.94,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,16.29,0Z"
  },
  linkedin: {
    viewBox: "0 0 36 36",
    path:
      "M33.34,0H2.66A2.63,2.63,0,0,0,0,2.6V33.4A2.63,2.63,0,0,0,2.66,36H33.34A2.63,2.63,0,0,0,36,33.4V2.6A2.63,2.63,0,0,0,33.34,0ZM10.68,30.68H5.33V13.5h5.35ZM8,11.15a3.1,3.1,0,1,1,3.09-3.1A3.1,3.1,0,0,1,8,11.15ZM30.68,30.68H25.34V22.32c0-2,0-4.55-2.78-4.55s-3.2,2.17-3.2,4.41v8.5H14V13.5h5.12v2.34h.07a5.6,5.6,0,0,1,5.05-2.77c5.41,0,6.41,3.56,6.41,8.18Z"
  }
};

export default class Icon extends Component {
  render() {
    const { className } = this.props;

    const iconName = this.props.children;

    if (icons[iconName]) {
      const icon = icons[iconName];

      return (
        <svg
          className={classNames(className)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox={icon.viewBox}
          width={this.props.width}
          height={this.props.height || this.props.width}
        >
          <path d={icon.path} fill={this.props.fill} />
        </svg>
      );
    }
  }
}
