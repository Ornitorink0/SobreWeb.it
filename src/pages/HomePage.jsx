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
            className="relative min-h-screen bg-primary-900 flex items-center px-8 bg-cover bg-right xl:bg-bottom bg-no-repeat"
            style={{ backgroundImage: "url('/header-bg-image.png')" }}
          >
            <BackgroundCircle color="#43C2F9" position="left" />
            <div className="relative max-w-3xl pt-20 sm:pt-24 lg:pt-32">
              <h1 className="text-slate-900 font-extrabold text-6xl sm:text-7xl lg:text-8xl tracking-tight dark:text-white">
                Benvenuto nel nostro lato{" "}
                <span class="text-rose-500">tech</span>{" "}
              </h1>
              <p className="mt-6 text-2xl text-slate-600 max-w-3xl dark:text-slate-400">
                Vieni a scoprire i luoghi{" "}
                <span class="text-sky-500">nascosti</span> dell'IS Sobrero.
              </p>
              <div className="mt-6 sm:mt-10 flex space-x-6 text-sm">
                <button className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">
                  Inizia a navigare
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <ContentSection /> */}
        <div className="bg-primary-900 ">
          <div className="px-10 text-slate-300 min-h-[70vh] grid grid-cols-1 lg:grid-cols-2 justify-center items-center max-w-5xl mx-auto gap-8 py-8">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-slate-300 text-left lg:text-center font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight dark:text-white z-10"
            >
              <h1 className="text-7xl font-bold">Chi siamo?</h1>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 text-lg text-slate-600 max-w-7xl mx-auto dark:text-slate-400 text-left sm:text-xl lg:text-2xl tracking-tight z-10"
            >
              <p className="text-lg text-slate-400 md:text-2xl border-gray-800 border-l-4 pl-4">
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
          <div className="px-10 text-slate-300 grid grid-cols-1 lg:grid-cols-2 justify-center items-center max-w-5xl mx-auto">
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center px-8 mb-10 sm:mb-16 md:mb-20 text-slate-300"
            >
              <h2 className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white">
                “Fiero di noi” sempre e comunque.
              </h2>
              <figure>
                <blockquote>
                  <p className="mt-6 max-w-3xl mx-auto text-lg">
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
                    className="w-14 h-14 rounded-full"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <div className="text-slate-900 font-semibold dark:text-white">
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
              className="text-center px-8 my-20 sm:my-16 md:my-20 text-slate-300"
            >
              <h2 className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white">
                “Esperienza di vita”
              </h2>
              <figure>
                <blockquote>
                  <p className="mt-6 max-w-3xl mx-auto text-lg">
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
                    className="w-14 h-14 rounded-full"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <div className="text-slate-900 font-semibold dark:text-white">
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
              className="text-slate-300 text-left lg:text-center font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight dark:text-white z-10"
            >
              Collaborazioni che Creano{" "}
              <span className="text-lime-500">Opportunità</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 text-lg text-slate-600 max-w-7xl mx-auto dark:text-slate-400 text-left sm:text-xl lg:text-2xl tracking-tight z-10 border-gray-800 border-l-4 pl-4"
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
          <div className="relative bg-primary-900 px-10 py-10 gap-8 grid grid-cols-1 xl:grid-cols-3 justify-center items-center text-slate-400 text-left max-w-7xl mx-auto">
            <BackgroundCircle color="#43C2F9" position="right" />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-slate-400 md:text-2xl tracking-tight border-gray-800 border-l-4 pl-4"
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
              className="w-full h-full object-cover object-center rounded-lg radius-2xl shadow-2xl max-w-96 mx-auto"
              src="/two-guys-making-a-project-at-pc.jpg"
              alt="two guys making a project at pc"
              loading="lazy"
            ></motion.img>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-slate-400 md:text-2xl tracking-tight border-gray-800 border-l-4 pl-4"
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
        <div className="bg-primary-900 min-h-screen flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-300 text-left lg:text-center font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight dark:text-white z-10"
          >
            I nostri <span className="text-emerald-500">Partner</span>
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
      className="max-w-7xl bg-primary-800 opacity-70 mt-10 border border-gray-200 rounded-lg shadow dark:border-gray-700 p-10 z-10 mb-12"
    >
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8 grayscale bg-primary-800 opacity-70 select-none drag-none items-center">
        <img
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
        />
        <img
          src="https://www.retescuoleinsieme.it/wp-content/uploads/2024/02/logo-scuole-insieme-300x289.png"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        <img
          src="https://www.retescuoleinsieme.it/wp-content/uploads/2024/03/ECOFFICINA_NEW_LOGO_light.jpg"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
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
        <img
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
        />
        <img
          src="https://www.retescuoleinsieme.it/wp-content/uploads/2024/04/icona-sobrero.png"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
        <img
          src="https://www.retescuoleinsieme.it/wp-content/uploads/2024/04/ognano.png"
          alt="Logo"
          className="brightness-[0.918] invert"
        />
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <div className="bg-primary-900 px-10 text-slate-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8">
        <div class="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-accent3-900 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="/binary-code.jpg"
              className="h-64 w-full object-cover"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Titolo del post
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              sed necessitatibus fuga eveniet illo temporibus quia, nihil rerum
              tempore voluptatem ex qui minus praesentium nam laudantium aut
              architecto! Rerum, non?
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-accent3-600 dark:hover:bg-accent3-700 dark:focus:ring-accent3-800"
            >
              Leggi di più
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContentSection = () => {
  return (
    <>
      <div class="absolute inset-x-0 bottom-0 h-px overflow-hidden">
        <div class="absolute -left-8 -right-8 bottom-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
      </div>
      <div className="bg-primary-900 px-10 text-slate-300">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-0 sm:px-0 grid grid-cols-1 sm:grid-cols-2 items-center gap-10 mt-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            In aggiunta, la collaborazione con enti esterni porta a realizzare
            progetti innovativi che spesso si traducono in iniziative concrete e
            utili per la comunità. Per esempio, alcuni progetti hanno incluso la
            creazione di campagne di sensibilizzazione su temi rilevanti, la
            realizzazione di eventi online e la promozione di attività
            culturali. Queste iniziative non solo valorizzano il lavoro del
            team, ma contribuiscono anche a creare un legame più forte tra la
            scuola e il territorio. Gli studenti diventano così protagonisti
            attivi della loro comunità, dimostrando come le competenze digitali
            possano avere un impatto positivo.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
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
    </>
  );
};

// Inoltre, il lavoro di SobreWeb va oltre la semplice gestione tecnica. Gli studenti partecipano attivamente alla pianificazione e allo sviluppo di iniziative digitali, contribuendo con le loro idee e competenze. Questa esperienza pratica è fondamentale per la loro formazione, poiché permette di acquisire competenze trasversali che saranno preziose nel loro futuro professionale. L'approccio collaborativo e l'attenzione all'innovazione rendono il team un esempio di come la creatività giovanile possa avere un impatto positivo sulla comunità scolastica e oltre.

// Infine, la dedizione di SobreWeb alla qualità e all'aggiornamento continuo del sito web dimostra un forte impegno verso l'eccellenza. I membri del team sono costantemente alla ricerca di nuove soluzioni e tecnologie per migliorare l'esperienza utente, rendendo il sito sempre più accessibile e funzionale. Con una visione orientata al futuro, SobreWeb continua a scrivere la propria storia di successo, contribuendo a plasmare un ambiente digitale che risponde alle esigenze delle nuove generazioni.

const ImageCarousel = () => {
  return (
    <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
      <div>
        <div class="bg-sky-500"></div>
      </div>
      <div class="col-start-3">
        <div class="bg-sky-500"></div>
      </div>
      <div>
        <div class="bg-sky-500"></div>
      </div>
      <div>
        <div class="bg-sky-500"></div>
      </div>
      <div class="row-start-1 col-start-2 col-span-2">
        <div class="bg-sky-500"></div>
      </div>
    </div>
  );
};

const CommentsSection = () => {
  return <div></div>;
};

const Footer = () => {
  return (
    <footer className="bg-black text-slate-300 px-10 pt-8">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-0 grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="flex flex-col">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Contatti
          </h2>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Email:{" "}
            <a
              href="mailto:info@sobreweb.it"
              className="text-blue-500 hover:text-blue-700"
            >
              info@sobreweb.it
            </a>
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Telefono:{" "}
            <a
              href="tel:+390123456789"
              className="text-blue-500 hover:text-blue-700"
            >
              +39 012 345 67 89
            </a>
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Indirizzo:{" "}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Via+Roma,+1,+10060+Montaldo+Torinese+TO"
              class="text-blue-500 hover:text-blue-700"
            >
              Via Roma, 1, 10060 Montaldo Torinese (TO)
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Social
          </h2>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
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
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
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
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
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
