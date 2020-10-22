import Markdown from "markdown-to-jsx";
import React from "react";
import { Link } from "react-router-dom";

import { gql, useQuery } from "@apollo/client";

import {
  Timeline,
  TimelineItem,
} from "Core/UI/Components/Itemization/Timeline";

import Button from "Core/UI/Components/Button";

import { FadeIn } from "Core/UI/Transitions";

const Home = () => {
  const { loading, error, data } = useQuery(gql`
    query {
      home {
        leader {
          cover {
            url
          }

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
    <div className="container-fluid">
      {error && (
        <div class="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="container">
        {canRender && (
          <Markdown options={{ forceBlock: true }}>
            {data.home?.leader?.content}
          </Markdown>
        )}

        <div className="mt-4 text-center">
          <Link to="/toolbox">
            <Button>Min verktygslåda</Button>
          </Link>
        </div>
      </div>

      <div className="container">
        <FadeIn delay={500} duration={750}>
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
