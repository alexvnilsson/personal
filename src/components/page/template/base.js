import React from "react";
import HTMLWrapper from "../wrappers/html";

export default class PageTemplate extends React.Component {
  static templateName = "";

  constructor() {
    super();
  }

  /**
   * @returns {Array<PageContentContainerType>}
   */
  getContentContainers() {
    if (this.props?.content) {
      return this.props.content.filter(
        (c) => c["__typename"] === "ComponentContentContainer"
      );
    }

    return [];
  }
}

export { HTMLWrapper };
