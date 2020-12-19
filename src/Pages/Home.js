import React from "react";

import Chroma from "chroma-js";
import invertColor from "invert-color";

import Markdown from "markdown-to-jsx";

import { gql, useQuery } from "@apollo/client";

import {
  Timeline,
  TimelineItem,
} from "../Core/UI/Components/Itemization/Timeline";

import { FadeIn } from "../Core/UI/Transitions";

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
              {/* <Markdown options={{ forceBlock: true }}>
                {data.home?.leader?.content}
              </Markdown> */}
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <FadeIn delay={500} duration={750}>
          {data?.experiences && (
            <div className="timeline-group">
              <h2 className="timeline-group-title">Arbetslivserfarenhet</h2>

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
                      {/* {item.summary && (
                        <Markdown options={{ forceBlock: true }}>
                          {item.summary}
                        </Markdown>
                      )} */}
                    </TimelineItem>
                  ))}
                </Timeline>
              )}
            </div>
          )}

          {data?.educations && (
            <div className="timeline-group">
              <h2 className="timeline-group-title">Utbildning</h2>

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
                      {/* {item.summary && (
                        <Markdown options={{ forceBlock: true }}>
                          {item.summary}
                        </Markdown>
                      )} */}
                    </TimelineItem>
                  ))}
                </Timeline>
              )}
            </div>
          )}
        </FadeIn>
      </div>
    </div>
  );
};

export default Home;
