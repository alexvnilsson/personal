import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { store, actions } from 'Core/UI/Store';

import Button from 'Core/UI/Components/Button';

import SeamlessItem from 'Core/UI/Components/Itemization/SeamlessItem';

export default class Home extends Component {
  componentWillMount() {
    store.dispatch(actions.setColorTheme('dark'));
  }

  render() {
    

    return (
      <div className="content">
        <h1>Alexander Nilsson ‐ en webbutvecklare</h1>

        <p>
          Jag har under större delen av 2010-talet utbildat mig & arbetat med webbdesign och -teknik.
        </p>

        <p className="text-align-center margin-y-3">
          <Link to="/portfolio">
            <Button>Portfölj</Button>
          </Link>

          <br />

          <span className="inline-block margin-top-1 text-darken">eller läs mer nedan</span>
        </p>

        <div className="margin-top-4"></div>

        <div>
          <h2>Arbetslivserfarenhet</h2>

          <SeamlessItem heading="Egenföretagare" subheading="2016-2017">
            Drev egen firma fr.o.m. sena 2015 under mitt egna namn, hösten 2016 grundade jag (ej ensam) ett aktiebolag med namnet <span className="text-muted" title="Detta är ännu inte en länk.">NC NetCommando AB</span>, som gick i konkurs ett år senare (september, 2017).

            <p>
              För mig blev det tydligt väldigt fort att jag inte var "business"-begåvad, utan jag är tekniskt inriktad.
            </p>
          </SeamlessItem>

          <SeamlessItem heading="Webbansvarig/-utvecklare, ProPublic AB" subheading="2013-2016">
            Drev webbutveckling och -drift åt denna konsultfirma som startade sin verksamhet vid årsskiftet 2013-2014. Här hade jag möjlighet att under flexibla omständigheter utveckla mina komptenser inom området.
          </SeamlessItem>
        </div>

        <div>
          <h2>Utbildning <span className="text-muted text-size-smaller">(kronologisk ordning)</span></h2>

          <SeamlessItem heading="Grillska gymnasium, Västerås" subheading="2013-2014">
            Datakunskaplig inriktning, webbutveckling och datorkunskap.
          </SeamlessItem>

          <SeamlessItem heading="IT-gymnasiet, Skövde" subheading="2014">
            Datakunskaplig inriktning, webbutveckling och datorkunskap (forts.)
          </SeamlessItem>

          <SeamlessItem heading="Vuxenutbildningscentrum, Skövde" subheading="2014-2015">
            Skolan gick åt helvete, försökte studera på distans.
          </SeamlessItem>

          <SeamlessItem heading="Vuxenutbildningscentrum, Västerås" subheading="2015-2016">
            Distansstudier i Skövde gick åt helvete (märker du ett mönster), flyttade hem till Västerås, försökte med distansstudier.
          </SeamlessItem>
        </div>

        <p></p>

      </div>
    );
  }
}