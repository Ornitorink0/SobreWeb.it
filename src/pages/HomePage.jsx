import React, { PureComponent } from "react";

import BackgroundCircle from "../components/BackgroundCircle.jsx";
import NavigationBar from "../components/NavigationBar.jsx";
import MetaTags from "../Meta.jsx";

export default class HomePage extends PureComponent {
  render() {
    return (
      <>
        <MetaTags
          title="SobreWeb"
          description="SobreWeb è un team di studenti dell'Istituto Sobrero che da oltre 15 anni si occupa della progettazione, manutenzione e gestione del sito web scolastico. Oltre a curare tutte le attività legate al web, il gruppo collabora stabilmente con enti e istituzioni esterne per la realizzazione e lo sviluppo di progetti digitali, mettendo a disposizione le proprie competenze e contribuendo a innovare il panorama online."
          name="SobreWeb"
          locale="it_IT"
          robots="index,follow"
          organization="IS Sobrero"
          logo="/logo-compat-blue.png"
          siteUrl="https://sobreweb.it"
        />
        <NavigationBar />
        <div
          className=" min-h-screen bg-primary-900 flex items-center px-8 bg-cover bg-right bg-no-repeat"
          style={{ backgroundImage: "url('/header-bg-image.png')" }}
        >
          <BackgroundCircle color="#43C2F9" position="left" />
          <div class="relative max-w-3xl pt-20 sm:pt-24 lg:pt-32">
            <h1 class="text-slate-900 font-extrabold text-6xl sm:text-7xl lg:text-8xl tracking-tight dark:text-white">
              Benvenuto nel nostro lato <span class="text-rose-500">tech</span>{" "}
            </h1>
            <p class="mt-6 text-2xl text-slate-600 max-w-3xl dark:text-slate-400">
              Vieni a scoprire i luoghi{" "}
              <span class="text-sky-500">nascosti</span> dell'IS Sobrero.
            </p>
            <div class="mt-6 sm:mt-10 flex space-x-6 text-sm">
              <button class="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">
                Inizia a navigare
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
