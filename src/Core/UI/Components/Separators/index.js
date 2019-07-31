import React from "react";

import classNames from "classnames";

const PageSeparator = ({ from, to }) => (
  <div className="page-separator" style={{ backgroundColor: to }}>
    <svg
      className="separator-shape"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 420 50"
    >
      <polygon style={{ fill: from }} points="420 50 0 0 0 0 420 0 420 50" />
    </svg>
  </div>
);

PageSeparator.defaultProps = {
  from: "rgb(15, 15, 25)",
  to: "rgb(235, 238, 243)"
};

export { PageSeparator };

const SpaceSeparator = ({ className, multiplier }) => (
  <div
    className={classNames(className)}
    // style={{ marginTop: multiplier * 25 + "px" }}
  />
);

SpaceSeparator.defaultProps = {
  multiplier: 1
};

export { SpaceSeparator };
