import React, { Component } from "react";

import Deck, { DeckTitle, DeckBody, DeckGroup } from "Core/UI/Components/Deck";
import Progress from "Core/UI/Components/Progress";
import ListItem from "Core/UI/Components/ListItem";

import { TransitionGroup } from "react-transition-group";
import { FadeInAndPanDown, FadeIn } from "Core/UI/Transitions";

import classNames from "classnames";

export class ToolboxItem extends Component {
  render() {
    if (
      typeof this.props.title !== "undefined" &&
      typeof this.props.icon !== "undefined"
    ) {
      const itemIconClasses = ["title-icon", "icon-smallest"];
      let itemIconElement = undefined;

      if (typeof this.props["icons-spaced"] !== "undefined") {
        itemIconClasses.push("mx-1");
      }

      if (Array.isArray(this.props.icon)) {
        itemIconElement = (
          <div className="mr-2">
            {this.props.icon.map((icon, index) => (
              <i
                key={index}
                className={classNames(...itemIconClasses, `icon-${icon}`)}
              />
            ))}
          </div>
        );
      } else {
        itemIconElement = (
          <div className="mr-2">
            <i
              className={classNames(
                ...itemIconClasses,
                `icon-${this.props.icon}`
              )}
            />
          </div>
        );
      }

      return (
        <div className="listitem">
          <div className="title">
            <div className="title-wrapper">
              {itemIconElement}
              <h5 className="title-text">{this.props.title}</h5>
            </div>
          </div>

          <div className="body">{this.props.children}</div>
        </div>
      );
    } else if (
      typeof this.props.title !== "undefined" &&
      typeof this.props.icon === "undefined"
    ) {
      return (
        <div className="listitem">
          <div className="title">
            <p className="title-text">{this.props.title}</p>
          </div>

          <div className="body">{this.props.children}</div>
        </div>
      );
    }
  }
}

export default class Toolbox extends Component {
  render() {
    return (
      <div className="container mt-2">
        <FadeIn delay={100} duration={1000}>
          <div
            style={{
              backgroundImage: "url(assets/parts/layers.png)",
              backgroundPosition: "85% top",
              backgroundRepeat: "no-repeat",
              backgroundSize: "288px",
            }}
          >
            <div className="mb-4">
              <h1 className="page-header">Min verktygslåda</h1>
              <h6>
                Detaljerad genomgång över teknologier jag har erfarenhet av i
                produktionsmiljöer.
              </h6>
            </div>

            <div className="py-4">
              <TransitionGroup className="container">
                <FadeInAndPanDown delay={50} duration={500}>
                  <Deck className="mb-5">
                    <DeckTitle>Datalogik</DeckTitle>

                    <DeckBody>
                      <DeckGroup>
                        <ToolboxItem
                          title="Relationsdatabaser"
                          icon={["mysql"]}
                        >
                          <Progress type="linear" value="80" />

                          <p className="description">
                            Erfarenhet av (Query SQL)?, MySQL Workbench
                          </p>
                        </ToolboxItem>
                      </DeckGroup>
                    </DeckBody>
                  </Deck>
                </FadeInAndPanDown>

                <FadeInAndPanDown delay={300} duration={500}>
                  <Deck className="mb-5">
                    <DeckTitle>Affärslogik</DeckTitle>

                    <DeckBody>
                      <DeckGroup title="NodeJS">
                        <ListItem title="ExpressJS" icon="expressjs">
                          <Progress type="linear" value="75" />

                          <p className="description">
                            Beskrivning av teknologin
                          </p>
                        </ListItem>

                        <ListItem title="SailsJS" icon="sailsjs">
                          <Progress type="linear" value="40" />

                          <p className="description">
                            Beskrivning av teknologin
                          </p>
                        </ListItem>
                      </DeckGroup>

                      <DeckGroup title="Microsoft">
                        <ListItem title="ASP.NET Core MVC" icon="netcore">
                          <Progress type="linear" value="66" />

                          <p className="description">
                            Beskrivning av teknologin
                          </p>
                        </ListItem>
                      </DeckGroup>
                    </DeckBody>
                  </Deck>
                </FadeInAndPanDown>

                <FadeInAndPanDown delay={400} duration={500}>
                  <Deck>
                    <DeckTitle>Presentationslager</DeckTitle>

                    <DeckBody>
                      <DeckGroup title="NodeJS">
                        <ListItem title="Angular" icon="angular">
                          <Progress type="linear" value="80" />

                          <p className="description">
                            Utvecklat stor-skaliga affärssystem för ...
                          </p>
                        </ListItem>

                        <ListItem title="React" icon="react">
                          <Progress type="linear" value="66" />

                          <p className="description" />
                        </ListItem>

                        <ListItem title="VueJS" icon="vuejs">
                          <Progress type="linear" value="75" />

                          <p className="description" />
                        </ListItem>
                      </DeckGroup>

                      <DeckGroup title="Microsoft">
                        <ListItem title="ASP.NET Core MVC" icon="netcore">
                          <Progress type="linear" value="66" />

                          <p className="description">
                            Beskrivning av teknologin
                          </p>
                        </ListItem>
                      </DeckGroup>
                    </DeckBody>
                  </Deck>
                </FadeInAndPanDown>
              </TransitionGroup>
            </div>
          </div>
        </FadeIn>
      </div>
    );
  }
}
