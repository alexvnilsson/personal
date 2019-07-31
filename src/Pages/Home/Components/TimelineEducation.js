import React from "react";

import {
  Timeline,
  TimelineItem
} from "Core/UI/Components/Itemization/Timeline";

export default class TimelineEducation extends React.Component {
  render() {
    return (
      <Timeline>
        <TimelineItem
          heading="Vuxenutbildningscentrum"
          tagline="2015"
          footer={[
            {
              label: "Plats",
              content: "Västerås"
            }
          ]}
        />

        <TimelineItem
          heading="Vuxenutbildningscentrum"
          tagline="2014"
          footer={[
            {
              label: "Plats",
              content: "Skövde"
            }
          ]}
        />

        <TimelineItem
          heading="IT-gymnasiet"
          subheading="Datakunskaplig inriktning"
          tagline="2014"
          footer={[
            {
              label: "Plats",
              content: "Skövde"
            }
          ]}
        >
          Webbutveckling och datorkunskap (forts.)
        </TimelineItem>

        <TimelineItem
          heading="Grillska gymnasium"
          subheading="Datakunskaplig inriktning"
          tagline="2013"
          footer={[
            {
              label: "Plats",
              content: "Västerås"
            }
          ]}
        >
          Webbutveckling och datorkunskap.
        </TimelineItem>
      </Timeline>
    );
  }
}
