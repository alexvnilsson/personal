import React from "react";

import Css from "Core/UI/Css";
import Chroma from "chroma-js";

export default class Deck extends React.Component {
  render() {
    const bgColor = this.props.bgColor ? this.props.bgColor : "#fefefe";
    const color = this.props.color ? this.props.color : "#050505";

    const deckStyle = {
      backgroundColor: bgColor,
      color: color,
      boxShadow: [
        Css.boxShadow(
          Chroma(bgColor)
            .darker(1.75)
            .alpha(0.75),
          0,
          0,
          3,
          0
        ),
        Css.boxShadow(
          Chroma(bgColor)
            .darker(1.25)
            .alpha(0.25),
          0,
          0,
          9,
          0
        )
      ].join(", ")
    };

    return (
      <div className="deck" style={deckStyle}>
        {this.props.children}
      </div>
    );
  }
}

export class DeckTitle extends React.Component {
  render() {
    return <h3 className="title">{this.props.children}</h3>;
  }
}

export class DeckBody extends React.Component {
  render() {
    return <div className="deck-body">{this.props.children}</div>;
  }
}

export class DeckGroup extends React.Component {
  render() {
    if (typeof this.props.icon !== "undefined") {
      // Prioritize icon over text-based title.
      return (
        <div className="deck-group">
          <p className="subtitle lead">
            <i className={`title-icon icon icon-${this.props.icon}`} />
          </p>

          {this.props.children}
        </div>
      );
    } else if (
      typeof this.props.title !== "undefined" &&
      typeof this.props.icon === "undefined"
    ) {
      return (
        <div className="deck-group">
          <p className="subtitle lead">{this.props.title}</p>

          {this.props.children}
        </div>
      );
    }

    return <div className="deck-group">{this.props.children}</div>;
  }
}
