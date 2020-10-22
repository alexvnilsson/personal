import React, { Component } from "react";
import { Link } from "react-router-dom";

import ApiService from "../Data/Services/ApiService";

import {
  Timeline,
  TimelineItem,
} from "Core/UI/Components/Itemization/Timeline";

import Button from "Core/UI/Components/Button";

import { FadeInAndPanDown, FadeIn } from "Core/UI/Transitions";

export default class Home extends Component {
  state = {
    pendingData: {
      experiences: true,
      educations: true,
    },
    collections: {
      experiences: [],
      educations: [],
    },
  };

  componentDidMount() {
    if (this.state.pendingData.experiences) {
      ApiService.getExperiences().then((data) =>
        this.setState({
          pendingData: {
            ...this.state.pendingData,
            experiences: false,
          },
          collections: {
            ...this.state.collections,
            experiences: [...this.state.collections.experiences, ...data],
          },
        })
      );
    }

    if (this.state.pendingData.educations) {
      ApiService.getEducations().then((data) =>
        this.setState({
          pendingData: {
            ...this.state.pendingData,
            educations: false,
          },
          collections: {
            ...this.state.collections,
            educations: [...this.state.collections.educations, ...data],
          },
        })
      );
    }
  }

  getResumeItemContent(item) {
    if (typeof item.body !== "undefined" && Array.isArray(item.body)) {
      return item.body.map((subitem, index) =>
        React.createElement("p", { key: index }, subitem)
      );
    } else if (typeof item.body === "string") {
      return item.body;
    }
  }

  render() {
    return (
      <div className="container">
        <div className="content-container">
          <div className="pre-content">
            <h1 className="font-weight-normal">Alexander Nilsson</h1>
          </div>

          <div className="content">
            <FadeInAndPanDown duration={750}>
              <div className="row no-gutters justify-content-center my-4 py-4">
                <div className="mb-4 mb-md-0 col-md-3 text-center position-relatvie">
                  <FadeInAndPanDown duration={1250}>
                    <img
                      src="assets/parts/layers.png"
                      alt="Tre lager ovanpå varandra i olika färger."
                      style={{
                        marginLeft: "1em",
                        maxWidth: "66vw",
                        maxHeight: "177px",
                        opacity: 0.75,
                      }}
                    />
                  </FadeInAndPanDown>
                </div>

                <div className="col-md-9 align-self-center">
                  <div className="container">
                    <h2 className="text-upper-heading">Hela stacken</h2>

                    <p className="text-readable-2x">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas elementum viverra consectetur. Aenean vel erat ut
                      tellus aliquam laoreet. Suspendisse potenti. In hac
                      habitasse platea dictumst. Quisque dapibus dolor eleifend
                      interdum dictum. Interdum et malesuada fames ac ante ipsum
                      primis in faucibus.
                    </p>

                    <div className="mt-4 text-center">
                      <Link to="/toolbox">
                        <Button>Min verktygslåda</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInAndPanDown>
          </div>
        </div>

        <div className="content-container-light bg-transparent">
          <div className="content">
            <FadeIn delay={500} duration={750}>
              <div className="timeline-group">
                <h2 className="timeline-group-title">Arbetslivserfarenhet</h2>

                <Timeline>
                  {this.state.collections.experiences.map((item, index) => (
                    <TimelineItem
                      key={index}
                      heading={item.workPlace || "Title"}
                      subheading={item.workTitle || "Subtitle"}
                      tagline={
                        new Date(item.periodStart).getFullYear() || "Dateline"
                      }
                      footer={item.footer || []}
                    >
                      {item.summary}
                    </TimelineItem>
                  ))}
                </Timeline>
              </div>

              <div className="timeline-group">
                <h2 className="timeline-group-title">Utbildning</h2>

                <Timeline>
                  {this.state.collections.educations.map((item, index) => (
                    <TimelineItem
                      key={index}
                      heading={item.field || "Title"}
                      subheading={item.educator || "Subtitle"}
                      tagline={
                        new Date(item.periodStart).getFullYear() || "Dateline"
                      }
                      footer={item.footer || []}
                    >
                      {item.summary}
                    </TimelineItem>
                  ))}
                </Timeline>
              </div>
            </FadeIn>

            <p />
          </div>
        </div>
      </div>
    );
  }
}
