import React from "react";

export class PageTitle extends React.Component {
  render() {
    if (
      this.props.title &&
      this.props.title.text &&
      this.props.title.showOnPage
    ) {
      return <h1>{this.props.title.text}</h1>;
    } else {
      return null;
    }
  }
}

export default class PageTemplateNormal extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="page">
        <div className="cover"></div>

        {this.props?.title && <PageTitle title={this.props.title} />}
      </div>
    );
  }
}
