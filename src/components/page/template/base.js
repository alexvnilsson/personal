import React from "react";

import navigation from "../../../services/cms/navigation";

import HTMLWrapper from "../wrappers/html";

export default class PageTemplate extends React.Component {
  static templateName = "";

  constructor() {
    super();
  }

  /**
   *
   * @param {*} page
   *
   * @returns {Promise<string>} URL.
   */
  async createLinkToPage(page) {
    return await navigation.createPageUrl(page);
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
