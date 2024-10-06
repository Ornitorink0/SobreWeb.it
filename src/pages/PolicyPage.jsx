import React from "react";
import { Helmet } from "react-helmet-async";

import NavigationBar from "../components/NavigationBar.jsx";

const Policy = () => {
  return (
    <div className="min-h-screen bg-primary-900 text-slate-100">
      <NavigationBar />
      <div className="container mx-auto px-4 py-12">
        <Helmet>
          <title>Informativa sulla Privacy | SobreWeb</title>
        </Helmet>
        <h1 className="mb-4 mt-12 text-3xl font-semibold">
          Informativa sulla Privacy
        </h1>
        <p className="mb-4">
          SobreWeb ("noi" o "ci") si impegna a proteggere la privacy e la
          sicurezza delle informazioni personali dei nostri utenti. Questa
          informativa sulla privacy spiega come raccogliamo, utilizziamo e
          divulghiamo le informazioni personali.
        </p>
        <p className="mb-4">
          Non utilizziamo cookie sul nostro sito e non trattiamo alcun dato
          degli utenti. Non raccogliamo informazioni personali quando visiti il
          nostro sito, quindi non memorizziamo alcun dato relativo a te.
        </p>
        <p className="mb-4">
          Potremmo raccogliere informazioni personali solo quando ti registri
          alla nostra newsletter o ci contatti. In tal caso, potremmo
          raccogliere il tuo nome, indirizzo email, numero di telefono e altre
          informazioni di contatto.
        </p>
        <p className="mb-4">
          Utilizziamo le tue informazioni personali per fornire i nostri
          servizi, rispondere alle tue richieste e inviarti aggiornamenti e
          comunicazioni di marketing. Potremmo anche utilizzare le tue
          informazioni per personalizzare i nostri servizi e migliorare il
          nostro sito web.
        </p>
        <p className="mb-4">
          Potremmo divulgare le tue informazioni personali a terzi che
          forniscono servizi per noi, come servizi di hosting del sito web o
          servizi di email marketing. Non venderemo né affitteremo le tue
          informazioni personali a terzi.
        </p>
        <p className="mb-4">
          Hai il diritto di accedere, correggere e cancellare le tue
          informazioni personali. Puoi anche opporti al trattamento delle tue
          informazioni personali o richiedere che limitiamo il trattamento delle
          tue informazioni personali.
        </p>
        <p className="mb-4">
          Adottiamo misure ragionevoli per proteggere le tue informazioni
          personali da perdita, uso improprio, accesso non autorizzato,
          divulgazione, alterazione o distruzione. Utilizziamo anche la
          crittografia per proteggere le tue informazioni personali.
        </p>
        <p className="mb-4">
          Questa informativa è soggetta a modifiche. Pubblicheremo eventuali
          modifiche a questa informativa sul nostro sito web. Continuando a
          utilizzare il nostro sito o i nostri servizi dopo che tali modifiche
          sono entrate in vigore, accetti di essere vincolato dalla versione
          aggiornata dell'informativa sulla privacy.
        </p>
        <p className="mb-4">
          Se hai domande su questa informativa sulla privacy, ti preghiamo di
          contattarci all'indirizzo{" "}
          <a href="mailto:info@sobreweb.it" className="text-blue-500">
            info@sobreweb.it
          </a>
        </p>
      </div>
    </div>
  );
};

export default Policy;
