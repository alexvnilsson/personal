import React, { Component } from "react";

import Deck, { DeckTitle, DeckBody, DeckGroup } from "Core/UI/Components/Deck";
import Progress from "Core/UI/Components/Progress";
import ListItem from "Core/UI/Components/ListItem";

import { TransitionGroup } from "react-transition-group";
import { FadeInAndPanDown, FadeIn } from "Core/UI/Transitions";

import { SpaceSeparator } from "Core/UI/Components/Separators";

export default class Toolbox extends Component {
  render() {
    return (
      <div className="container">
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

            <TransitionGroup className="container">
              <FadeInAndPanDown delay={200} duration={500}>
                <Deck pad bgColor="#324b96" color="#f5f5f5">
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

              <SpaceSeparator />

              <FadeInAndPanDown delay={300} duration={500}>
                <Deck pad bgColor="#32e1c8" color="#2d2d2d">
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

              <SpaceSeparator />

              <FadeInAndPanDown delay={400} duration={500}>
                <Deck pad bgColor="rgb(255, 200, 50)" color="#2d2d2d">
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
