import React, { Component } from "react";
import { Link } from "react-router-dom";

import { store, actions } from "Core/UI/Store";

import Button from "Core/UI/Components/Button";

import { Timeline, TimelineItem } from "Core/UI/Components/Itemization";

export default class Home extends Component {
  componentWillMount() {
    store.dispatch(actions.setColorTheme("dark"));
  }

  render() {
    return (
      <div className="content">
        <h1>Alexander Nilsson ‐ en webbutvecklare</h1>

        <p>
          Jag har under större delen av 2010-talet utbildat mig & arbetat med
          webbdesign och -teknik.
        </p>

        <p className="text-align-center margin-y-3">
          <Link to="/portfolio">
            <Button>Portfölj</Button>
          </Link>

          <br />

          <span className="inline-block margin-top-1 text-darken">
            eller läs mer nedan
          </span>
        </p>

        <div className="margin-top-4" />

        <div>
          <h2>Arbetslivserfarenhet</h2>

          <Timeline>
            <TimelineItem heading="Egenföretagare" subheading="2016">
              Drev egen firma fr.o.m. sena 2015 under mitt egna namn, hösten
              2016 grundade jag (ej ensam) ett aktiebolag med namnet{" "}
              <span className="text-muted" title="Detta är ännu inte en länk.">
                NC NetCommando AB
              </span>
              , som gick i konkurs ett år senare (september, 2017).
              <p>
                För mig blev det tydligt väldigt fort att jag inte var
                "business"-begåvad, utan jag är tekniskt inriktad.
              </p>
            </TimelineItem>

            <TimelineItem
              heading="Webbansvarig/-utvecklare, ProPublic AB"
              subheading="2013"
            >
              Drev webbutveckling och -drift åt denna konsultfirma som startade
              sin verksamhet vid årsskiftet 2013-2014. Här hade jag möjlighet
              att under flexibla omständigheter utveckla mina komptenser inom
              området.
            </TimelineItem>
          </Timeline>
        </div>

        <div>
          <h2>Utbildning</h2>

          <Timeline>
            <TimelineItem
              heading="Vuxenutbildningscentrum, Västerås"
              subheading="2015"
            >
              Distansstudier i Skövde gick åt helvete (märker du ett mönster),
              flyttade hem till Västerås, försökte med distansstudier.
            </TimelineItem>

            <TimelineItem
              heading="Vuxenutbildningscentrum, Skövde"
              subheading="2014"
            >
              Skolan gick åt helvete, försökte studera på distans.
            </TimelineItem>

            <TimelineItem heading="IT-gymnasiet, Skövde" subheading="2014">
              Datakunskaplig inriktning, webbutveckling och datorkunskap
              (forts.)
            </TimelineItem>

            <TimelineItem
              heading="Grillska gymnasium, Västerås"
              subheading="2013"
            >
              Datakunskaplig inriktning, webbutveckling och datorkunskap.
            </TimelineItem>
          </Timeline>
        </div>

        <p />
      </div>
    );
  }
}
