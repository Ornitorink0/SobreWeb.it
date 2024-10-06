import React, { PureComponent } from "react";
import { motion } from "framer-motion";

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
        <div>
          <div
            className="relative flex min-h-screen items-center bg-primary-900 bg-cover bg-right bg-no-repeat px-8 xl:bg-bottom"
            style={{ backgroundImage: "url('/header-bg-image.png')" }}
          >
            <BackgroundCircle color="#43C2F9" position="left" />
            <div className="relative max-w-3xl pt-20 sm:pt-24 lg:pt-32">
              <h1 className="text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl">
                Benvenuto nel nostro lato{" "}
                <span className="text-rose-500">tech</span>{" "}
              </h1>
              <p className="mt-6 max-w-3xl text-2xl text-slate-400">
                Vieni a scoprire i luoghi{" "}
                <span className="text-sky-500">nascosti</span> dell'IS Sobrero.
              </p>
              <div className="mt-6 flex space-x-6 text-sm sm:mt-10">
                <button className="highlight-white/20 flex h-12 w-full items-center justify-center rounded-lg bg-sky-500 px-6 font-semibold text-white hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 sm:w-auto">
                  Inizia a navigare
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <ContentSection /> */}
        <div className="bg-primary-900">
          <div className="mx-auto grid min-h-[70vh] max-w-5xl grid-cols-1 items-center justify-center gap-8 px-10 py-8 text-slate-300 lg:grid-cols-2">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="z-10 text-left text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-center lg:text-7xl"
            >
              <h1 className="text-7xl font-bold">Chi siamo?</h1>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="z-10 mx-auto mt-6 max-w-7xl text-left text-lg tracking-tight text-slate-400 sm:text-xl lg:text-2xl"
            >
              <p className="border-l-4 border-gray-800 pl-4 text-lg text-slate-400 md:text-2xl">
                <span className="font-bold">SobreWeb</span> è un team di
                studenti dell'<i>Istituto Sobrero</i>, attivo da oltre{" "}
                <span className="font-bold">15 anni</span> nella progettazione e
                gestione del sito web scolastico. Questo gruppo di giovani non
                si limita a mantenere e aggiornare il portale, ma si impegna
                anche a creare un ambiente online interattivo e coinvolgente per
                studenti, docenti e genitori. Attraverso un lavoro costante e
                una forte passione per il digitale, SobreWeb ha trasformato il
                sito in una risorsa fondamentale per la comunità scolastica,
                migliorando la comunicazione e facilitando l'accesso alle
                informazioni.
              </p>
            </motion.p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 items-center justify-center px-10 text-slate-300 lg:grid-cols-2">
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-10 px-8 text-center text-slate-300 sm:mb-16 md:mb-20"
            >
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                “Fiero di noi” sempre e comunque.
              </h2>
              <figure>
                <blockquote>
                  <p className="mx-auto mt-6 max-w-3xl text-lg">
                    Sono fiero di lavorare per questo gruppo e mi piace il modo
                    in cui collaboriamo tra noi studenti. Siamo sempre in cerca
                    di idee e riusciamo a realizzarle in modo efficiente. Grazie
                    a questo gruppo posso dare sfogo alla mia intraprendenza!
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-center space-x-4 text-left">
                  <img
                    src="https://avatars.githubusercontent.com/u/174024113?v=4"
                    alt=""
                    className="h-14 w-14 rounded-full"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <div className="font-semibold text-white">
                      Matteo Gurrieri
                    </div>
                    <div className="mt-0.5 text-sm leading-6">
                      Studente della classe 4AI - Informatica
                    </div>
                  </div>
                </figcaption>
              </figure>
            </motion.section>
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="my-20 px-8 text-center text-slate-300 sm:my-16 md:my-20"
            >
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                “Esperienza di vita”
              </h2>
              <figure>
                <blockquote>
                  <p className="mx-auto mt-6 max-w-3xl text-lg">
                    Partecipare al gruppo pomeridiano mi concede l'opportunità
                    di imparare cose nuove e di simulare un ambiente reale di
                    lavoro. Ringrazio tutti per questo, a cominciare dal mio
                    professore.
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-center space-x-4 text-left">
                  <img
                    src="https://avatars.githubusercontent.com/u/173935957?v=4"
                    alt=""
                    className="h-14 w-14 rounded-full"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <div className="font-semibold text-white">
                      Giacomo Luppino
                    </div>
                    <div className="mt-0.5 text-sm leading-6">
                      Studente della classe 4AI - Informatica
                    </div>
                  </div>
                </figcaption>
              </figure>
            </motion.section>
          </div>
          <div className="px-10">
            {/* <div
            className="absolute w-full h-full top-0 left-0"
          ></div> */}
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="z-10 text-left text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-center lg:text-7xl"
            >
              Collaborazioni che Creano{" "}
              <span className="text-lime-500">Opportunità</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="z-10 mx-auto mt-6 max-w-7xl border-l-4 border-gray-800 pl-4 text-left text-lg tracking-tight text-slate-400 sm:text-xl lg:text-2xl"
            >
              Uno degli aspetti più interessanti di SobreWeb è la sua capacità
              di collaborare con enti e istituzioni esterne. Queste partnership
              rappresentano un'opportunità unica per gli studenti di entrare in
              contatto con il mondo professionale e acquisire competenze
              pratiche che vanno oltre il contesto scolastico. Lavorare a fianco
              di esperti del settore permette ai membri del team di apprendere
              nuove tecniche, scoprire strumenti digitali all'avanguardia e
              comprendere meglio le dinamiche del lavoro in gruppo. Queste
              esperienze non solo arricchiscono il loro bagaglio formativo, ma
              offrono anche una visione concreta delle sfide e delle opportunità
              del mondo digitale.
            </motion.p>
          </div>
        </div>
        {/* <hr className="border-gray-800" /> */}

        {/* <ContentSection /> */}
        <div className="bg-primary-900">
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center justify-center gap-8 bg-primary-900 px-10 py-10 text-left text-slate-400 xl:grid-cols-3">
            <BackgroundCircle color="#43C2F9" position="right" />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="border-l-4 border-gray-800 pl-4 text-lg tracking-tight text-slate-400 md:text-2xl"
            >
              In aggiunta, la collaborazione con enti esterni porta a realizzare
              progetti innovativi che spesso si traducono in iniziative concrete
              e utili per la comunità. Per esempio, alcuni progetti hanno
              incluso la creazione di campagne di sensibilizzazione su temi
              rilevanti, la realizzazione di eventi online e la promozione di
              attività culturali. Queste iniziative non solo valorizzano il
              lavoro del team, ma contribuiscono anche a creare un legame più
              forte tra la scuola e il territorio. Gli studenti diventano così
              protagonisti attivi della loro comunità, dimostrando come le
              competenze digitali possano avere un impatto positivo.
            </motion.p>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="radius-2xl mx-auto h-full w-full max-w-96 rounded-lg object-cover object-center shadow-2xl"
              src="/two-guys-making-a-project-at-pc.jpg"
              alt="two guys making a project at pc"
              loading="lazy"
            ></motion.img>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="border-l-4 border-gray-800 pl-4 text-lg tracking-tight text-slate-400 md:text-2xl"
            >
              Infine, le collaborazioni esterne sono anche un modo per stimolare
              la creatività e l’innovazione all’interno del gruppo. Ogni nuovo
              progetto porta con sé sfide diverse che richiedono brainstorming e
              scambio di idee. Questo ambiente stimolante favorisce la crescita
              personale e professionale di ciascun membro del team,
              incoraggiandoli a pensare fuori dagli schemi e a esplorare nuove
              strade. Con un approccio orientato alla sperimentazione e
              all’apprendimento continuo, SobreWeb si posiziona come un vero
              laboratorio di innovazione digitale, contribuendo a modellare un
              futuro più dinamico e interattivo per la scuola.
            </motion.p>
          </div>
        </div>
        <div className="flex min-h-screen flex-col items-center justify-center bg-primary-900">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="z-10 text-left text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-center lg:text-7xl"
          >
            Abbiamo collaborato con
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="px-10"
          >
            <PartnerSection />
          </motion.div>
        </div>
        <div className="bg-primary-900">
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center justify-center gap-8 bg-primary-900 px-10 py-10 text-left text-slate-400 xl:grid-cols-2">
            <BackgroundCircle color="#43C2F9" position="right" />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="border-l-4 border-gray-800 pl-4 text-lg tracking-tight text-slate-400 md:text-2xl"
            >
              Il lavoro di SobreWeb va oltre la semplice gestione tecnica. Gli
              studenti partecipano attivamente alla pianificazione e allo
              sviluppo di iniziative digitali, contribuendo con le loro idee e
              competenze. Questa esperienza pratica è fondamentale per la loro
              formazione, poiché permette di acquisire competenze trasversali
              che saranno preziose nel loro futuro professionale. L'approccio
              collaborativo e l'attenzione all'innovazione rendono il team un
              esempio di come la creatività giovanile possa avere un impatto
              positivo sulla comunità scolastica e oltre.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="border-l-4 border-gray-800 pl-4 text-lg tracking-tight text-slate-400 md:text-2xl"
            >
              La dedizione di SobreWeb alla qualità e all'aggiornamento continuo
              del sito web dimostra un forte impegno verso l'eccellenza. I
              membri del team sono costantemente alla ricerca di nuove soluzioni
              e tecnologie per migliorare l'esperienza utente, rendendo il sito
              sempre più accessibile e funzionale. Con una visione orientata al
              futuro, SobreWeb continua a scrivere la propria storia di
              successo, contribuendo a plasmare un ambiente digitale che
              risponde alle esigenze delle nuove generazioni.
            </motion.p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const PartnerSection = () => {
  return (
    <motion.div
      initial={{ filter: "blur(10px)" }}
      whileInView={{ filter: "blur(0px)" }}
      transition={{ duration: 1, delay: 0.2 }}
      viewport={{ once: true }}
      className="z-10 mb-12 mt-10 max-w-7xl rounded-lg border border-gray-700 bg-primary-800 p-10 opacity-70 shadow"
    >
      <div className="drag-none grid select-none grid-cols-3 items-center gap-8 bg-primary-800 opacity-70 grayscale md:grid-cols-5">
        {/* <img
          src="https://www.sobrero.edu.it/wp-content/uploads/loghi/a_terr_al.jpg"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        <img
          src="https://www.sobrero.edu.it/wp-content/uploads/2016/07/logo_alternanza.jpg"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        <img
          src="https://www.sobrero.edu.it/wp-content/uploads/loghi/chiaro.jpg"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        <img
          src="https://www.sobrero.edu.it/wp-content/uploads/2016/03/scuola_digitale.jpg"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        <img
          src="https://www.sobrero.edu.it/wp-content/uploads/2016/07/logo_serale.jpg"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        <img
          src="https://www.sobrero.edu.it/wp-content/uploads/loghi/mail.jpg"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        <img
          src="https://www.sobrero.edu.it/wp-content/uploads/loghi/registro.jpg"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        <img
          src="https://www.sobrero.edu.it/wp-content/uploads/2020/02/mad-1.jpg"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        <img
          src="https://www.sobrero.edu.it/wp-content/uploads/loghi/share.jpg"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        <img
          src="https://www.sobrero.edu.it/wp-content/uploads/2016/01/dschola.jpg"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        <img
          src="https://www.sobrero.edu.it/wp-content/uploads/loghi/miur.jpg"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        <img
          src="https://www.sobrero.edu.it/wp-content/uploads/loghi/istanze.jpg"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        <img
          src="https://www.sobrero.edu.it/wp-content/uploads/loghi/invalsi.jpg"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        <img
          src="https://www.sobrero.edu.it/wp-content/uploads/2015/09/rete_sicurezza_logo.jpg"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        <img
          src="https://www.sobrero.edu.it/wp-content/uploads/2017/04/logo_albo.jpg"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        <img
          src="https://www.sobrero.edu.it/wp-content/uploads/loghi/amm_tr.jpg"
          alt="Logo"
          className="brightness-[0.918] invert"
        /> */}
        <img
          src="https://www.retescuoleinsieme.it/wp-content/uploads/2024/02/logo-scuole-insieme-300x289.png"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        {/* <img
          src="https://www.retescuoleinsieme.it/wp-content/uploads/2024/03/ECOFFICINA_NEW_LOGO_light.jpg"
          alt="Logo"
          className="brightness-[0.918] invert"
        /> */}
        <img
          src="https://www.retescuoleinsieme.it/wp-content/uploads/2024/03/logo_aula_amianto_asbesto-1-of-1.png"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        <img
          src="https://www.retescuoleinsieme.it/wp-content/uploads/2024/04/Afeva.png"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        <img
          src="https://www.retescuoleinsieme.it/wp-content/uploads/2024/04/LogoComune.png"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        {/* <img
          src="https://www.retescuoleinsieme.it/wp-content/uploads/2024/04/anna-d_alencon.png"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        <img
          src="https://www.retescuoleinsieme.it/wp-content/uploads/2024/04/casale3.png"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        <img
          src="https://www.retescuoleinsieme.it/wp-content/uploads/2024/04/cipia.png"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        <img
          src="https://www.retescuoleinsieme.it/wp-content/uploads/2024/04/don-milani.png"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        <img
          src="https://www.retescuoleinsieme.it/wp-content/uploads/2024/04/francesco-negri.png"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        <img
          src="https://www.retescuoleinsieme.it/wp-content/uploads/2024/04/icona-balbo.png"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        <img
          src="https://www.retescuoleinsieme.it/wp-content/uploads/2024/04/icona-leardi.png"
          alt="Logo"
          className="brightness-[0.918] invert"
        /> */}
        <img
          src="https://www.retescuoleinsieme.it/wp-content/uploads/2024/04/icona-sobrero.png"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        {/* <img
          src="https://www.retescuoleinsieme.it/wp-content/uploads/2024/04/ognano.png"
          alt="Logo"
          className="brightness-[0.918] invert"
        /> */}
      </div>
    </motion.div>
  );
};

const Footer = () => {
  let contactInfo = {
    email: "mailto:info@sobreweb.it",
    phone: "0142-454543",
    address: {
      name: "Via Candiani d'Olivola, 19 - 15033 Casale Monferrato (AL), Italia",
      link: "https://maps.app.goo.gl/PhsshtSHNnp2PhLf8",
    },
    website: "sobreweb.it",
  };
  return (
    <footer className="bg-black px-10 pt-8 text-slate-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:grid-cols-2 sm:px-0">
        <div className="flex flex-col">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Contatti
          </h2>
          <p className="mb-3 font-normal text-gray-400">
            Email:{" "}
            <a
              href={contactInfo.email}
              className="text-blue-500 hover:text-blue-700"
            >
              {contactInfo.email}
            </a>
          </p>
          <p className="mb-3 font-normal text-gray-400">
            Telefono:{" "}
            <a
              href={"tel:" + contactInfo.phone}
              className="text-blue-500 hover:text-blue-700"
            >
              {contactInfo.phone}
            </a>
          </p>
          <p className="mb-3 font-normal text-gray-400">
            Indirizzo:{" "}
            <a
              href={contactInfo.address.link}
              className="text-blue-500 hover:text-blue-700"
            >
              {contactInfo.address.name}
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Social
          </h2>
          <p className="mb-3 font-normal text-gray-400">
            <a
              href="https://www.facebook.com/sobreweb"
              className="text-blue-500 hover:text-blue-700"
            >
              <img
                src="https://img.shields.io/badge/Facebook-%231877F2.svg?style=for-the-badge&logo=facebook&logoColor=white"
                alt=""
              />
            </a>
          </p>
          <p className="mb-3 font-normal text-gray-400">
            <a
              href="https://www.instagram.com/sobreweb_it"
              className="text-blue-500 hover:text-blue-700"
            >
              <img
                src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=instagram&logoColor=white"
                alt=""
              />
            </a>
          </p>
          <p className="mb-3 font-normal text-gray-400">
            <a
              href="https://twitter.com/sobreweb_it"
              className="text-blue-500 hover:text-blue-700"
            >
              <img
                src="https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=x&logoColor=white"
                alt=""
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
