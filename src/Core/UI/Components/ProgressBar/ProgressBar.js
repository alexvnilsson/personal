import React, { Component } from "react";

import Chroma from "chroma-js";

export default class ProgressBar extends Component {
  constructor() {
    super();

    this.value = 0;
    this.colorRange = Chroma.scale(["#E21818", "#E2C018", "#18E29D"]).mode(
      "rgb"
    );
  }

  componentWillMount() {
    if (
      typeof this.props === "undefined" ||
      typeof this.props.value === "undefined"
    ) {
      console.warn(`ProgressBar: componentWillMount() warning.`);
      return;
    }

    this.value = this.props.value / 100;
  }

  render() {
    const styleBackground = `linear-gradient(90deg, ${this.colorRange(
      this.value
    )}, ${this.colorRange(this.value).desaturate(1)})`;

    return (
      <div className="progress-small">
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: this.props.value + "%",
            backgroundColor: "green",
            background: styleBackground
          }}
          aria-valuenow={this.props.percent}
          area-valuemin="0"
          area-valuemax="100"
        />
      </div>
    );
  }
}
