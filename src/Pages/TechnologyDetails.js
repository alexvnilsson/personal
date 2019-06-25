import React, { Component } from "react";

import Deck, { DeckTitle, DeckBody } from "Core/UI/Components/Deck";
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
            <DeckTitle>Datalogik och -hantering</DeckTitle>

            <DeckBody>
              <ListItem heading="MySQL">
                <ProgressBar value="80" />

                <p className="description">
                  Erfarenhet av (Query SQL)?, MySQL Workbench
                </p>
              </ListItem>

              <ListItem heading="SQL Server">
                <ProgressBar value="66" />

                <p className="description">
                  Erfarenhet av Transact-SQL, Migrations med EF<sup>1</sup> Core
                  och EF 6+
                  <br />
                  <br />
                  <sup>1</sup> <small>Entity Framework</small>
                </p>
              </ListItem>

              <ListItem heading="MongoDB">
                <ProgressBar value="40" />

                <p className="description">
                  Erfarenhet av användning med NodeJS-baserade servrar
                </p>
              </ListItem>
            </DeckBody>
          </Deck>

          <div class="margin-top-4" />

          <Deck>
            <DeckTitle>Business-logik</DeckTitle>

            <DeckBody>
              <ListItem heading="Teknologiens namn">
                <ProgressBar value="12.5" />

                <p className="description">Beskrivning av teknologin</p>
              </ListItem>

              <ListItem heading="Teknologiens namn">
                <ProgressBar value="25" />

                <p className="description">Beskrivning av teknologin</p>
              </ListItem>

              <ListItem heading="Teknologiens namn">
                <ProgressBar value="37.5" />

                <p className="description">Beskrivning av teknologin</p>
              </ListItem>

              <ListItem heading="Teknologiens namn">
                <ProgressBar value="50" />

                <p className="description">Beskrivning av teknologin</p>
              </ListItem>

              <ListItem heading="Teknologiens namn">
                <ProgressBar value="75" />

                <p className="description">Beskrivning av teknologin</p>
              </ListItem>

              <ListItem heading="Teknologiens namn">
                <ProgressBar value="100" />

                <p className="description">Beskrivning av teknologin</p>
              </ListItem>
            </DeckBody>
          </Deck>

          <div class="margin-top-4" />

          <Deck>
            <DeckTitle>Business-logik</DeckTitle>

            <DeckBody>
              <ListItem heading="Teknologiens namn">
                <ProgressBar value="12.5" />

                <p className="description">Beskrivning av teknologin</p>
              </ListItem>

              <ListItem heading="Teknologiens namn">
                <ProgressBar value="25" />

                <p className="description">Beskrivning av teknologin</p>
              </ListItem>

              <ListItem heading="Teknologiens namn">
                <ProgressBar value="37.5" />

                <p className="description">Beskrivning av teknologin</p>
              </ListItem>

              <ListItem heading="Teknologiens namn">
                <ProgressBar value="50" />

                <p className="description">Beskrivning av teknologin</p>
              </ListItem>

              <ListItem heading="Teknologiens namn">
                <ProgressBar value="75" />

                <p className="description">Beskrivning av teknologin</p>
              </ListItem>

              <ListItem heading="Teknologiens namn">
                <ProgressBar value="100" />

                <p className="description">Beskrivning av teknologin</p>
              </ListItem>
            </DeckBody>
          </Deck>
        </div>
      </div>
    );
  }
}
