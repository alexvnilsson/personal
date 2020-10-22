import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="page-header">Min portfölj</h1>

        <p>Här samlar jag mina tidigare projekt som kan vara av intresse.</p>

        <div className="margin-top-3" />

        <div className="margin-top-2 text-align-center">
          <div>
            <img
              src={process.env.PUBLIC_URL + "/assets/favicon-96.png"}
              alt="AlexVNilsson logo"
              width="48px"
            />
            <h4 className="margin-y-0">alexvnilsson.github.io/personal</h4>

            <p className="margin-y-tiny text-align-center">
              <a
                className="button small no-shadow"
                href="https://github.com/alexvnilsson/personal"
                target="_blank"
                rel="noopener noreferrer"
              >
                Källkod på GitHub
              </a>
            </p>

            <p className="margin-top-2">
              Min personliga webbplats (som du besöker just nu) utvecklad i
              React, för personlig marknadsföring och jobbansökningar.
            </p>
          </div>
        </div>

        <div className="margin-top-2 text-align-center">
          <div>
            <img
              src={process.env.PUBLIC_URL + "/assets/3p/comdocrm.png"}
              alt="ComdoCRM logo"
              width="48px"
            />
            <h4 className="margin-y-0">ComdoCRM</h4>

            <p className="margin-y-tiny text-align-center">
              <a
                className="button small no-shadow"
                href="https://github.com/alexvnilsson/comdocrm-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Källkod på GitHub
              </a>
            </p>

            <p className="margin-top-2">
              En webbapplikation som skulle säljas som ett verktyg för
              kundrelationshantering och säljstöd, utvecklad under NetCommando,
              av mig själv. Utvecklad i Angular (v5), back-end:an utvecklades i
              ASP.Net Core (källkoden inte släppt).
            </p>
          </div>
        </div>
      </div>
    );
  }
}
