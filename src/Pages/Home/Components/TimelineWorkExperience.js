import React from "react";

import {
  Timeline,
  TimelineItem
} from "Core/UI/Components/Itemization/Timeline";

export default class TimelineWorkExperience extends React.Component {
  render() {
    return (
      <Timeline>
        <TimelineItem
          heading="Greater Than AB"
          subheading="Full-stack utvecklare"
          tagline="2018"
          footer={[
            {
              label: "Bransch",
              content: "InsurTech"
            },
            {
              label: "Plats",
              content: "Stockholm"
            },
            {
              label: "Referenser",
              content: "På begäran"
            }
          ]}
        >
          Blev rekryterad av Greater Than i mitten av 2018, anställdes som
          full-stack utvecklare av webb- och mobilapplikationer och
          -systemlösningar.
        </TimelineItem>

        <TimelineItem
          heading="Egenföretagare"
          subheading="NC NetCommando AB"
          tagline="2016"
        >
          Drev egen firma fr.o.m. sena 2015 under mitt egna namn, hösten 2016
          grundade jag (ej ensam) ett aktiebolag med namnet{" "}
          <span className="text-muted" title="Detta är ännu inte en länk.">
            NC NetCommando AB
          </span>
          , som gick i konkurs ett år senare (september, 2017).
        </TimelineItem>

        <TimelineItem
          heading="ProPublic AB"
          subheading="Systemansvarig, webbutvecklare"
          tagline="2013"
        >
          Drev webbutveckling och -drift åt denna konsultfirma som startade sin
          verksamhet vid årsskiftet 2013-2014. Här hade jag möjlighet att under
          flexibla omständigheter utveckla mina komptenser inom området.
        </TimelineItem>
      </Timeline>
    );
  }
}
