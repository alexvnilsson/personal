import React from "react";

export default class Deck extends React.Component {
  render() {
    return <div className="deck">{this.props.children}</div>;
  }
}

export class DeckTitle extends React.Component {
  render() {
    return <h1 className="title">{this.props.children}</h1>;
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
          <p className="subtitle">
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
          <p className="subtitle">{this.props.title}</p>

          {this.props.children}
        </div>
      );
    }

    return <div className="deck-group">{this.props.children}</div>;
  }
}
