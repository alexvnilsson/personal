import React, { Component } from 'react';

export default class SeamlessItem extends Component {
  render() {
    return (
      <div className="padding-bottom-1">
        <div className="flex row margin-bottom-tiny">
          <h4 className="inline-block margin-0 padding-right-2">{this.props.heading}</h4>
          {this.props.subheading &&
            <span className="inline-block text-darken text-weight-light">{this.props.subheading}</span>
          }
        </div>

        <div className="text-line-spacing-expand">
          {this.props.children}
        </div>
      </div>
    );
  }
}