import React, { Component } from 'react';

export default class TimelineItem extends Component {
  render() {
    return (
      <div className="item">
        <div className="col-ident margin-right-1">
          <span className="label">
            {this.props.subheading}
          </span>
        </div>

        <div className="col-content">
          <h4 className="heading">{this.props.heading}</h4>

          {this.props.children}
        </div>
      </div>
    );
  }
}