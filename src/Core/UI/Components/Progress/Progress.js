import React from "react";

import classNames from "classnames";
import Chroma from "chroma-js";

export class ProgressLinear extends React.Component {
  constructor() {
    super();

    this.value = 0;
    this.colorRange = Chroma.scale(["#E21818", "#E2C018", "#18E29D"]).mode(
      "rgb"
    );
  }

  getValueFromProps() {
    if (
      typeof this.props === "undefined" ||
      typeof this.props.value === "undefined"
    ) {
      console.warn(`Progress: componentWillMount() warning.`);
      return;
    }

    this.value = this.props.value / 100;
  }

  render() {
    this.getValueFromProps();
    const bgColor = this.colorRange(this.value).desaturate(1);

    const progressStyleBackground = `linear-gradient(90deg, ${this.colorRange(
      this.value
    )
      .desaturate(0.5)
      .darken(0.25)}, ${this.colorRange(this.value)})`;

    return (
      <div
        className="progress-linear"
        style={{
          backgroundColor: this.colorRange(bgColor).alpha(0.25),
        }}
      >
        <div
          className="progress"
          role="progressbar"
          style={{
            width: this.props.value + "%",
            backgroundColor: this.colorRange(this.value),
            background: progressStyleBackground,
          }}
          aria-valuenow={this.props.percent}
          area-valuemin="0"
          area-valuemax="100"
        />
      </div>
    );
  }
}

export class ProgressRadial extends React.Component {
  static defaultProps = {
    radius: 40,
    strokeWidth: 10,
    dimension: 90,
    color: "#327dc8",
    value: 33,
  };

  constructor(props) {
    super(props);

    this.colorRange = Chroma.scale(["#E21818", "#E2C018", "#18E29D"]).mode(
      "rgb"
    );

    this.state = { setStrokeLength: false };
  }

  componentDidMount() {
    // For initial animation
    setTimeout(() => {
      this.setState({ setStrokeLength: true });
    });
  }

  render() {
    const { className, radius, strokeWidth, dimension, value } = this.props;

    const circleRadius = Math.min(radius, 45);
    const circumference = 2 * Math.PI * circleRadius;
    const strokeLength = this.state.setStrokeLength
      ? (circumference / 100) * value
      : 0;

    return (
      <div
        className={classNames("progress-radial", className, {
          "no-progress": strokeLength === 0,
        })}
      >
        <svg
          viewBox={`0 0 ${dimension} ${dimension}`}
          width={dimension}
          height={dimension}
        >
          <circle
            className="background"
            stroke={this.colorRange(value / 100)}
            strokeWidth={strokeWidth}
            fill="none"
            cx={dimension / 2}
            cy={dimension / 2}
            r={circleRadius}
          />
          <circle
            className="progress"
            stroke={this.colorRange(value / 100)}
            strokeWidth={strokeWidth}
            strokeDasharray={`${strokeLength},${circumference}`}
            strokeLinecap="round"
            fill="none"
            cx={dimension / 2}
            cy={dimension / 2}
            r={circleRadius}
          />
        </svg>
      </div>
    );
  }
}

export default class Progress extends React.Component {
  render() {
    if (this.props.type === "linear") {
      return <ProgressLinear value={this.props.value} />;
    } else if (this.props.type === "radial") {
      return <ProgressRadial value={this.props.value} />;
    }
  }
}
