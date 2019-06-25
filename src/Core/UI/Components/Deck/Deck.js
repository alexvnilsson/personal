import React from "react";

export default class Deck extends React.Component {
  render() {
    return <div className="deck">{this.props.children}</div>;
  }
}

export class DeckTitle extends React.Component {
  render() {
    return <h1 className="heading">{this.props.children}</h1>;
  }
}

export class DeckBody extends React.Component {
  render() {
    return <div className="deck-body">{this.props.children}</div>;
  }
}
