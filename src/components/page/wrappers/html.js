import React from "react";

import parseHtml from "html-react-parser";

export default class HTMLWrapper extends React.Component {
  render() {
    const content = parseHtml(this.props.htmlString, { trim: true });

    if (content) {
      return <div>{content}</div>;
    }

    return null;
  }
}
