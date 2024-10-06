import React, { PureComponent } from "react";

export default class NoPage extends PureComponent {
  render() {
    return (
      <div className="bg-primary-900 min-h-screen flex flex-col items-center justify-center text-center p-10 text-3xl font-bold text-white">
        <h1 className="font-extrabold text-6xl mb-4">Pagina non trovata</h1>
        <a href="/home" className="text-blue-500 hover:underline">Torna alla home</a>
        <p className="text-lg text-slate-600">Errore 404: page not found.</p>
      </div>
    );
  }
}
