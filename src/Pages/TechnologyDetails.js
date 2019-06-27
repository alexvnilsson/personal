import React, { Component } from "react";

import Deck, { DeckTitle, DeckBody, DeckGroup } from "Core/UI/Components/Deck";
import ProgressBar from "Core/UI/Components/ProgressBar";
import ListItem from "Core/UI/Components/ListItem";

import { store, actions } from "Core/UI/Store";

export default class TechnologyDetails extends Component {
  componentWillMount() {
    store.dispatch(actions.setColorTheme("light"));
  }

  render() {
    return (
      <div className="back-light">
        <div className="content text-dark">
          <img
            src="assets/parts/fullstack.png"
            style={{
              position: "absolute",
              right: "0px",
              top: "0px",
              width: "300px",
              zIndex: "-9999"
            }}
          />
          <h1>Detaljer om teknologier</h1>

          <p>
            Detaljerad genomgång över teknologier jag har erfarenhet av i
            produktionsmiljöer.
          </p>

          <div class="margin-top-3" />

          <Deck>
            <DeckTitle>Datalogik</DeckTitle>

            <DeckBody>
              <DeckGroup>
                <ListItem title="MySQL" icon="mysql">
                  <ProgressBar value="80" />

                  <p className="description">
                    Erfarenhet av (Query SQL)?, MySQL Workbench
                  </p>
                </ListItem>

                <ListItem title="SQL Server" icon="sqlserver">
                  <ProgressBar value="66" />

                  <p className="description">
                    Erfarenhet av Transact-SQL, Migrations med EF
                    <sup>1</sup> Core och EF 6+
                    <br />
                    <br />
                    <sup>1</sup> <small>Entity Framework</small>
                  </p>
                </ListItem>

                <ListItem title="MongoDB" icon="mongodb">
                  <ProgressBar value="40" />

                  <p className="description">
                    Erfarenhet av användning med NodeJS-baserade servrar
                  </p>
                </ListItem>
              </DeckGroup>
            </DeckBody>
          </Deck>

          <div class="margin-top-4" />

          <Deck>
            <DeckTitle>Affärslogik</DeckTitle>

            <DeckBody>
              <DeckGroup title="NodeJS">
                <ListItem title="ExpressJS" icon="expressjs">
                  <ProgressBar value="75" />

                  <p className="description">Beskrivning av teknologin</p>
                </ListItem>

                <ListItem title="SailsJS" icon="sailsjs">
                  <ProgressBar value="40" />

                  <p className="description">Beskrivning av teknologin</p>
                </ListItem>
              </DeckGroup>

              <DeckGroup title="Microsoft">
                <ListItem title="ASP.NET Core MVC" icon="netcore">
                  <ProgressBar value="66" />

                  <p className="description">Beskrivning av teknologin</p>
                </ListItem>
              </DeckGroup>
            </DeckBody>
          </Deck>

          <div class="margin-top-4" />

          <Deck>
            <DeckTitle>Presentationslager</DeckTitle>

            <DeckBody>
              <DeckGroup>
                <ListItem title="Angular" icon="angular">
                  <ProgressBar value="80" />

                  <p className="description">
                    Utvecklat stor-skaliga affärssystem för ...
                  </p>
                </ListItem>

                <ListItem title="React" icon="react">
                  <ProgressBar value="66" />

                  <p className="description" />
                </ListItem>

                <ListItem title="VueJS" icon="vuejs">
                  <ProgressBar value="75" />

                  <p className="description" />
                </ListItem>
              </DeckGroup>
            </DeckBody>
          </Deck>
        </div>
      </div>
    );
  }
}
