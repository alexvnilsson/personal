import React, { Component } from "react";

import Deck, { DeckTitle, DeckBody, DeckGroup } from "Core/UI/Components/Deck";
import Progress from "Core/UI/Components/Progress";
import ListItem from "Core/UI/Components/ListItem";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FadeInAndPanDown, FadeIn } from "Core/UI/Transitions";

import { store, actions } from "Core/UI/Store";

export default class Toolbox extends Component {
  componentWillMount() {
    store.dispatch(actions.setColorTheme("light"));
  }

  render() {
    return (
      <div className="back-light">
        <FadeIn delay={100} duration={1000}>
          <div className="content text-dark">
            <img
              src="assets/parts/layers.png"
              style={{
                position: "absolute",
                right: "0px",
                top: "0px",
                width: "300px",
                zIndex: "-9999"
              }}
            />
            <h1 class="font-weight-normal">Min verktygslåda</h1>

            <p>
              Detaljerad genomgång över teknologier jag har erfarenhet av i
              produktionsmiljöer.
            </p>

            <div className="margin-top-3" />

            <TransitionGroup>
              <FadeInAndPanDown delay="200" duration="500">
                <Deck bgColor="#324b96" color="#f5f5f5">
                  <DeckTitle>Datalogik</DeckTitle>

                  <DeckBody>
                    <DeckGroup>
                      <ListItem title="MySQL" icon="mysql">
                        <Progress type="linear" value="80" />

                        <p className="description">
                          Erfarenhet av (Query SQL)?, MySQL Workbench
                        </p>
                      </ListItem>

                      <ListItem title="SQL Server" icon="sqlserver">
                        <Progress type="linear" value={50} />

                        <p className="description">
                          Erfarenhet av Transact-SQL, Migrations med EF
                          <sup>1</sup> Core och EF 6+
                          <br />
                          <br />
                          <sup>1</sup> <small>Entity Framework</small>
                        </p>
                      </ListItem>

                      <ListItem title="MongoDB" icon="mongodb">
                        <Progress type="linear" value="40" />

                        <p className="description">
                          Erfarenhet av användning med NodeJS-baserade servrar
                        </p>
                      </ListItem>
                    </DeckGroup>
                  </DeckBody>
                </Deck>
              </FadeInAndPanDown>

              <div className="margin-top-4" />

              <FadeInAndPanDown delay="300" duration="500">
                <Deck bgColor="#32e1c8" color="#2d2d2d">
                  <DeckTitle>Affärslogik</DeckTitle>

                  <DeckBody>
                    <DeckGroup title="NodeJS">
                      <ListItem title="ExpressJS" icon="expressjs">
                        <Progress type="linear" value="75" />

                        <p className="description">Beskrivning av teknologin</p>
                      </ListItem>

                      <ListItem title="SailsJS" icon="sailsjs">
                        <Progress type="linear" value="40" />

                        <p className="description">Beskrivning av teknologin</p>
                      </ListItem>
                    </DeckGroup>

                    <DeckGroup title="Microsoft">
                      <ListItem title="ASP.NET Core MVC" icon="netcore">
                        <Progress type="linear" value="66" />

                        <p className="description">Beskrivning av teknologin</p>
                      </ListItem>
                    </DeckGroup>
                  </DeckBody>
                </Deck>
              </FadeInAndPanDown>

              <div className="margin-top-4" />

              <FadeInAndPanDown delay="400" duration="500">
                <Deck bgColor="#ffaf00" color="#2d2d2d">
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

                        <p className="description">Beskrivning av teknologin</p>
                      </ListItem>
                    </DeckGroup>
                  </DeckBody>
                </Deck>
              </FadeInAndPanDown>
            </TransitionGroup>
          </div>
        </FadeIn>
      </div>
    );
  }
}
