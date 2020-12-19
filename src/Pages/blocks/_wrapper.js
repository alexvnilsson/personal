import React from "react";
import ReactDOM from "react-dom";

import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

import buildingBlocks from "./index";

class HtmlNodeCollection {
  constructor() {
    this._nodes = {};
  }

  append(node, element) {
    const _collection = this._nodes;

    const _kRef = node.typ;
    if (typeof _collection[_kRef] !== "undefined") {
      throw new Error(`Implement msg.`);
    }

    if (typeof element === "undefined") {
      throw new Error(`Missing argument "element".`);
    }

    _collection[_kRef] = element;
  }
  contains(key) {
    return typeof [key] !== "undefined";
  }
  /**
   * Return element from collection.
   *
   * @param {boolean} [noError=false] Skip throwing exception on empty result.
   */
  get(key, noError) {
    const _collection = this._nodes;

    if (!this.contains(key)) {
      if (!noError) {
        throw new Error(`Not found.`);
      } else {
        return null;
      }
    }

    return _collection[key];
  }
}

// export default class BuildingBlocksWrapper extends React.Component {
//   componentDidMount() {
//     const _html = this.props.children.toString();
//     console.log("BuildingBlocksWrapper");
//     console.log(_html);
//   }

//   render() {
//     return <strong>BuildingBlocksWrapper</strong>;
//   }
// }

class BuildingBlocksWrapper extends React.Component {
  constructor() {
    super();

    console.log(`BuildingBlocksWrapper#constructor`);
    this.rawHtml = "foo";
    this.renderedChildren = undefined;

    this.state = {
      rawHtml: undefined,
    };
  }

  componentDidMount() {
    console.log(`BuildingBlocksWrapper#componentDidMount`);
    const _html = this.props.children;

    const _blocks = {};
    const _nodes = htmlparser2(_html, {
      lowerCaseTagName: false,
      blockTextElements: true,
    });
    this.setState({
      ...this.state,
      rawHtml: _nodes.outerHTML,
    });
    this.rawHtml = _nodes.outerHTML;
    console.log(_nodes, this.state.rawHtml);

    const root = React.createElement("div");

    const _blockPromises = [];

    console.log();

    buildingBlocks.getNames().forEach((n) => {
      const _n = _nodes.querySelectorAll(n);

      if (_n.length != 0) {
        _blockPromises.push(
          new Promise((resolve, reject) => {
            return buildingBlocks
              .get(n)
              .then((b) => {
                console.log(`Resolving ${n}... Succeeded.`);

                resolve(b);
              })
              .catch((reason) => {
                console.error(`Resolving ${n}... Failed.`, reason);
                reject(reason);
              });
          })
        );
      }
    });

    _blockPromises.forEach((p) => p.then((pr) => pr));

    Promise.allSettled(_blockPromises)
      .then((all) =>
        all.filter((p) => p.status === "fulfilled").map((p) => p.value)
      )
      .then((blocks) => {
        console.log("Finished all Block resolves.");
        console.log(blocks);

        _nodes.querySelectorAll("*").forEach((node) => {
          if (_blocks[node.rawTagName]) {
            const newHtml = React.createElement(_blocks[node.rawTagName], {
              children: node.innerText,
            });

            console.log(newHtml);
          }
        });
      })
      .catch((e) => console.error(e));
  }

  render() {
    if (this.renderedChildren) {
      return this.renderedChildren;
    } else {
      if (!this.state.rawHtml) {
        return <strong>BuildingBlocksWrapper...</strong>;
      } else {
        return (
          <div>
            <code>{ReactHtmlParser(this.state.rawHtml)}</code>
          </div>
        );
      }
    }
  }
}

export default BuildingBlocksWrapper;
