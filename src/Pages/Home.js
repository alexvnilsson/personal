import Markdown from "markdown-to-jsx";
import React from "react";
import Chroma from "chroma-js";
import invertColor from "invert-color";

import { gql, useQuery } from "@apollo/client";

import {
  Timeline,
  TimelineItem,
} from "../Core/UI/Components/Itemization/Timeline";

import { FadeIn } from "../Core/UI/Transitions";

import parseHtml from "html-react-parser";

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

import { getBuildingBlock } from "./blocks";
import BuildingBlocksWrapper from "./blocks/_wrapper";

const Home = () => {
  const { loading, error, data } = useQuery(gql`
    query {
      home {
        leader {
          cover {
            image {
              url
            }
            backgroundColor
          }
          renderAsBanner
          content
        }
      }

      educations {
        educator
        field
        summary
        periodStart
        periodEnd
      }

      experiences {
        workPlace
        workTitle
        summary
        periodStart
        periodEnd
      }
    }
  `);

  const canRender = !loading && !error;
  const hasParsed = false;

  // if (data && data.home?.leader?.content) {
  //   const htmlNodes = new HtmlNodeCollection();

  //   const _wrapper = React.createElement(BuildingBlocksWrapper, {
  //     children: data.home.leader.content,
  //   });

  //   document.body.append(_wrapper);

  //   new Promise((resolve, reject) => {
  //     const nodes = parseHtml(data.home?.leader?.content, { trim: true });

  //     resolve(nodes);
  //   })
  //     .then((nodes) => {
  //       console.log("Got nodes: ", nodes);

  //       return nodes;
  //     })
  //     .then((nodes) => {
  //       const _components = [];

  //       nodes.forEach((node) =>
  //         import(`./blocks/${node.type}`)
  //           .then((c) => {
  //             console.log(c);
  //             const component = React.createElement(c.default.component);
  //             console.log(component);
  //             _components.push([c, component]);
  //           })
  //           .catch((reason) => console.error(reason))
  //       );

  //       return _components;
  //     })
  //     .then((nodeAndComponent) => {
  //       nodeAndComponent.forEach((nc) => {
  //         const _node = nc[0];
  //         const _component = nc[1];

  //         htmlNodes.append(_node, _component);
  //       });
  //     })
  //     .then(() => {
  //       parseHtml(data.home?.leader?.content, {
  //         trim: true,
  //         replace: function (node) {
  //           if (htmlNodes.contains(node.type)) {
  //             const _component = htmlNodes.get(node.type);

  //             return _component;
  //           }
  //         },
  //       });
  //     });
  // } else {
  //   console.log("Waiting for: Home.Leader");
  // }

  return (
    <div className="container-fluid px-0">
      {error && (
        <div class="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {canRender && !data.home?.leader?.renderAsBanner && (
        <div className="container mt-2">
          {/* <Markdown options={{ forceBlock: true }}>
            {data.home?.leader?.content}
          </Markdown> */}

          <BuildingBlocksWrapper>
            {data.home?.leader?.content}
          </BuildingBlocksWrapper>
        </div>
      )}

      {canRender && data.home?.leader?.renderAsBanner && (
        <div
          className="container-fluid py-3 mb-2"
          style={{
            backgroundColor: Chroma(
              data.home?.leader?.cover?.backgroundColor
            ).hex(),
            color:
              invertColor(
                Chroma(data.home?.leader?.cover?.backgroundColor).hex()
              ) || "#202020",
          }}
        >
          <div className="container position-relative">
            {data.home?.leader?.cover.image?.url && (
              <img
                className="image"
                alt="cover"
                src={data.home?.leader?.cover?.image?.url}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  width: "auto",
                  height: "128px",
                  opacity: "0.5",
                  zIndex: 1,
                }}
              />
            )}
            <div
              className="content"
              style={{
                position: "relative",
                zIndex: 2,
              }}
            >
              <Markdown options={{ forceBlock: true }}>
                {data.home?.leader?.content}
              </Markdown>
            </div>
          </div>
        </div>
      )}

      <div className="timeline-fluid-group banner banner-1">
        <h2 className="timeline-group-title">Arbetslivserfarenhet</h2>
      </div>

      <div className="container">
        <FadeIn delay={500} duration={750}>
          <div className="timeline-group">
            {canRender && (
              <Timeline>
                {data.experiences?.map((item, index) => (
                  <TimelineItem
                    key={index}
                    heading={item.workTitle || "Title"}
                    subheading={item.workPlace || "Subtitle"}
                    tagline={
                      new Date(item.periodStart).getFullYear() || "Dateline"
                    }
                    footer={item.footer || []}
                  >
                    {item.summary && (
                      <Markdown options={{ forceBlock: true }}>
                        {item.summary}
                      </Markdown>
                    )}
                  </TimelineItem>
                ))}
              </Timeline>
            )}
          </div>
        </FadeIn>
      </div>

      <div className="timeline-fluid-group banner banner-2">
        <h2 className="timeline-group-title">Utbildning</h2>
      </div>

      <div className="container">
        <FadeIn delay={500} duration={750}>
          <div className="timeline-group">
            {canRender && (
              <Timeline>
                {data.educations?.map((item, index) => (
                  <TimelineItem
                    key={index}
                    heading={item.field || "Title"}
                    subheading={item.educator || "Subtitle"}
                    tagline={
                      new Date(item.periodStart).getFullYear() || "Dateline"
                    }
                    footer={item.footer || []}
                  >
                    {item.summary && (
                      <Markdown options={{ forceBlock: true }}>
                        {item.summary}
                      </Markdown>
                    )}
                  </TimelineItem>
                ))}
              </Timeline>
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Home;
