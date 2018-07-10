import React, { Component } from 'react';

export default class Timeline extends Component {
  render() {
    return (
      <div className="list-timeline">
        <div className="vertical-line"></div>
        {this.props.children}
      </div>
    );
  }
}