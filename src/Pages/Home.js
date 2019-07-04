import React, { Component } from "react";
import { Link } from "react-router-dom";

import { store, actions } from "Core/UI/Store";

import Button from "Core/UI/Components/Button";

import {
  Timeline,
  TimelineItem,
  TimelineItemFooter,
  TimelineItemFooterItem
} from "Core/UI/Components/Itemization/Timeline";

import { FadeInAndPanDown, FadeIn } from "Core/UI/Transitions";

export default class Home extends Component {
  componentWillMount() {
    store.dispatch(actions.setColorTheme("dark"));
  }

  render() {
    return (
      <div>
        <FadeIn delay={100} duration={1000}>
          <div className="content-container-dark">
            <div className="pre-content">
              <h1 className="font-weight-normal">Alexander Nilsson</h1>
              <h3>Webbutveckling, projektplanering?, med mera.</h3>
            </div>
          </div>

          <div className="content-container-dark">
            <div className="content">
              <FadeInAndPanDown duration={750}>
                <div className="row no-gutters justify-content-center py-4">
                  <div className="mb-4 mb-md-0 col-md-6 text-center position-relatvie">
                    <FadeInAndPanDown duration={1250}>
                      <img
                        src="assets/parts/layers.png"
                        style={{ maxWidth: "80vw", maxHeight: "177px" }}
                      />
                    </FadeInAndPanDown>
                  </div>

                  <div className="col-md-6 align-self-center">
                    <div className="container pr-0">
                      <h2 className="font-weight-light text-upper-heading">
                        Hela stacken
                      </h2>

                      <p className="text-readable-2x">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas elementum viverra consectetur. Aenean vel erat
                        ut tellus aliquam laoreet. Suspendisse potenti. In hac
                        habitasse platea dictumst. Quisque dapibus dolor
                        eleifend interdum dictum. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus.
                      </p>

                      <div className="mt-2 mt-lg-4 text-center">
                        <Link to="/toolbox">
                          <Button>Min verktygslåda</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInAndPanDown>

              <FadeInAndPanDown delay="200">
                <p>
                  Jag har under större delen av 2010-talet utbildat mig &
                  arbetat med webbdesign och -teknik.
                </p>

                <p className="text-align-center my-3">
                  <Link to="/portfolio">
                    <Button>Portfölj</Button>
                  </Link>

                  <br />

                  <span className="inline-block mt-1 text-darken">
                    eller läs mer nedan
                  </span>
                </p>
              </FadeInAndPanDown>

              <div className="grid-responsive">
                <div className="lot">
                  <img
                    src="assets/parts/layers.png"
                    style={{ maxWidth: "80vw", maxHeight: "177px" }}
                  />
                </div>

                <div className="rob">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas elementum viverra consectetur. Aenean vel erat ut
                  tellus aliquam laoreet. Suspendisse potenti. In hac habitasse
                  platea dictumst. Quisque dapibus dolor eleifend interdum
                  dictum. Interdum et malesuada fames ac ante ipsum primis in
                  faucibus.
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  grid: "repeat(2, auto) / repeat(2, auto)"
                }}
              >
                <div style={{ gridRow: "1 / 2", gridColumn: "1" }}>
                  <img
                    src="assets/parts/layers.png"
                    style={{ maxWidth: "80vw", maxHeight: "177px" }}
                  />
                </div>
                <div style={{ gridRow: "1 / 2", gridColumn: "2" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas elementum viverra consectetur. Aenean vel erat ut
                  tellus aliquam laoreet. Suspendisse potenti. In hac habitasse
                  platea dictumst. Quisque dapibus dolor eleifend interdum
                  dictum. Interdum et malesuada fames ac ante ipsum primis in
                  faucibus.
                </div>
              </div>
            </div>
          </div>

          <div className="page-sep-1" />

          <div className="content-container-light">
            <div class="content">
              <FadeIn delay={500} duration={750}>
                <div>
                  <h2>Arbetslivserfarenhet</h2>

                  <Timeline>
                    <TimelineItem heading="Greater Than AB" tagline="2018">
                      Blev rekryterad av Greater Than (Insurtech-företag) i
                      mitten av 2018, anställdes som full-stack utvecklare av
                      webb- och mobilapplikationer och -systemlösningar.
                      <TimelineItemFooter>
                        <TimelineItemFooterItem label="Bransch">
                          Insurtech
                        </TimelineItemFooterItem>

                        <TimelineItemFooterItem label="Referens(er)">
                          <i class="mr-1 text-success">✔</i> På begäran
                        </TimelineItemFooterItem>
                      </TimelineItemFooter>
                    </TimelineItem>

                    <TimelineItem heading="Egenföretagare" tagline="2016">
                      Drev egen firma fr.o.m. sena 2015 under mitt egna namn,
                      hösten 2016 grundade jag (ej ensam) ett aktiebolag med
                      namnet{" "}
                      <span
                        className="text-muted"
                        title="Detta är ännu inte en länk."
                      >
                        NC NetCommando AB
                      </span>
                      , som gick i konkurs ett år senare (september, 2017).
                    </TimelineItem>

                    <TimelineItem
                      heading="Webbansvarig/-utvecklare, ProPublic AB"
                      tagline="2013"
                    >
                      Drev webbutveckling och -drift åt denna konsultfirma som
                      startade sin verksamhet vid årsskiftet 2013-2014. Här hade
                      jag möjlighet att under flexibla omständigheter utveckla
                      mina komptenser inom området.
                    </TimelineItem>
                  </Timeline>
                </div>

                <div>
                  <h2>Utbildning</h2>

                  <Timeline>
                    <TimelineItem
                      heading="Vuxenutbildningscentrum, Västerås"
                      tagline="2015"
                    />

                    <TimelineItem
                      heading="Vuxenutbildningscentrum, Skövde"
                      tagline="2014"
                    />

                    <TimelineItem heading="IT-gymnasiet, Skövde" tagline="2014">
                      Datakunskaplig inriktning, webbutveckling och datorkunskap
                      (forts.)
                    </TimelineItem>

                    <TimelineItem
                      heading="Grillska gymnasium, Västerås"
                      tagline="2013"
                    >
                      Datakunskaplig inriktning, webbutveckling och
                      datorkunskap.
                    </TimelineItem>
                  </Timeline>
                </div>
              </FadeIn>

              <p />
            </div>
          </div>
        </FadeIn>
      </div>
    );
  }
}
