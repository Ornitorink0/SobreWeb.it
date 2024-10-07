import React, { PureComponent } from "react";
import NavigationBar from "../components/NavigationBar";
import MetaTags from "../Meta";

export default class NoPage extends PureComponent {
  render() {
    return (
      <>
        <MetaTags
          title="Pagina non trovata | SobreWeb"
          description="Pagina non trovata"
          name="Pagina non trovata"
          locale="it_IT"
          robots="index,follow"
          organization="SobreWeb"
          logo="/logo-compat-blue.png"
          siteUrl="https://sobreweb.it"
          image="/logo-compat-blue.png"
        />
        <NavigationBar />
        <div className="flex min-h-screen flex-col items-center justify-center bg-primary-900 p-10 text-center text-3xl font-bold text-white">
          <h1 className="mb-4 text-6xl font-extrabold">Pagina non trovata</h1>
          <a href="/home" className="text-blue-500 hover:underline">
            Torna alla home
          </a>
          <p className="text-lg text-slate-600">
            Errore 404: pagina non trovata.
          </p>
        </div>
      </>
    );
  }
}
