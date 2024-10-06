import React, { PureComponent } from "react";
import NavigationBar from "../components/NavigationBar";

export default class BlogPage extends PureComponent {
  render() {
    return (
      <>
        <MetaTags
          title="Blog"
          description="Blog"
          name="Blog"
          locale="it_IT"
          robots="index,follow"
          organization="SobreWeb"
          logo="/logo-compat-blue.png"
          siteUrl="https://sobreweb.it"
          image="/logo-compat-blue.png"
        />
        <NavigationBar />
        <div className="flex min-h-screen flex-col items-center justify-center bg-primary-900 text-slate-100">
          <h1 className="text-6xl font-extrabold">
            La pagina è in fase di sviluppo
          </h1>
          <p className="mt-4 text-lg text-slate-400">Ci vediamo presto..! ✨</p>
        </div>
      </>
    );
  }
}
