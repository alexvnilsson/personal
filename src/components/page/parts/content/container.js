import PagePart from "../base";

import HTMLWrapper from "../../wrappers/html";

/**
 *
 */
export default class ContentContainer extends PagePart {
  render() {
    return (
      <div className="container">
        <HTMLWrapper htmlString={this.props.children} />
      </div>
    );
  }
}

PagePart.typeName = "ComponentContentContainer";
