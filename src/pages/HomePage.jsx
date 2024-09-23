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

          <hr className="border-gray-800" />
        </div>
        {/* <ContentSection /> */}
        <div className="bg-primary-900 ">
          <div className="px-10 text-slate-300 min-h-[70vh] grid grid-cols-1 lg:grid-cols-2 justify-center items-center max-w-5xl mx-auto gap-8 py-8">
            <h1 className="text-7xl font-bold">Chi siamo?</h1>
            <p className="text-lg text-slate-400 md:text-2xl">
              <span className="font-bold">SobreWeb</span> è un team di studenti
              dell'<i>Istituto Sobrero</i>, attivo da oltre{" "}
              <span className="font-bold">15 anni</span> nella progettazione e
              gestione del sito web scolastico. Questo gruppo di giovani non si
              limita a mantenere e aggiornare il portale, ma si impegna anche a
              creare un ambiente online interattivo e coinvolgente per studenti,
              docenti e genitori. Attraverso un lavoro costante e una forte
              passione per il digitale, SobreWeb ha trasformato il sito in una
              risorsa fondamentale per la comunità scolastica, migliorando la
              comunicazione e facilitando l'accesso alle informazioni.
            </p>
          </div>
        </div>
        <hr className="border-gray-800" />
        <div className="relative bg-primary-900 px-10 text-slate-300 text-center min-h-screen flex flex-col justify-center">
          <div
            className="absolute w-full h-full top-0 left-0 bg-cover bg-center xl:bg-bottom bg-no-repeat z-0 opacity-10"
            style={{ backgroundImage: "url('/grid-texure.svg')" }}
          ></div>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-300 font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight dark:text-white z-10"
          >
            Collaborazioni che Creano{" "}
            <span class="text-lime-500">Opportunità</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-slate-600 max-w-7xl mx-auto dark:text-slate-400 text-left sm:text-xl lg:text-2xl tracking-tight z-10"
          >
            Uno degli aspetti più interessanti di SobreWeb è la sua capacità di
            collaborare con enti e istituzioni esterne. Queste partnership
            rappresentano un'opportunità unica per gli studenti di entrare in
            contatto con il mondo professionale e acquisire competenze pratiche
            che vanno oltre il contesto scolastico. Lavorare a fianco di esperti
            del settore permette ai membri del team di apprendere nuove
            tecniche, scoprire strumenti digitali all'avanguardia e comprendere
            meglio le dinamiche del lavoro in gruppo. Queste esperienze non solo
            arricchiscono il loro bagaglio formativo, ma offrono anche una
            visione concreta delle sfide e delle opportunità del mondo digitale.
          </motion.p>
        </div>
      </>
    );
  }
}

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
      <div className="bg-primary-900 px-10 text-slate-300">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-0 sm:px-0">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            SobreWeb è un team di studenti dell'Istituto Sobrero, attivo da
            oltre 15 anni nella progettazione e gestione del sito web
            scolastico. Questo gruppo di giovani talenti non si limita a
            mantenere e aggiornare il portale, ma si impegna anche a creare un
            ambiente online interattivo e coinvolgente per studenti, docenti e
            genitori. Attraverso un lavoro costante e una forte passione per il
            digitale, SobreWeb ha trasformato il sito in una risorsa
            fondamentale per la comunità scolastica, migliorando la
            comunicazione e facilitando l'accesso alle informazioni.
          </motion.p>
        </div>
      </div>
      <div class="absolute inset-x-0 bottom-0 h-px overflow-hidden">
        <div class="absolute -left-8 -right-8 bottom-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
      </div>
      <div className="bg-primary-900 px-10 text-slate-300">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-0 sm:px-0">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Uno degli aspetti più interessanti di SobreWeb è la sua capacità di
            collaborare con enti e istituzioni esterne. Queste partnership
            rappresentano un'opportunità unica per gli studenti di entrare in
            contatto con il mondo professionale e acquisire competenze pratiche
            che vanno oltre il contesto scolastico. Lavorare a fianco di esperti
            del settore permette ai membri del team di apprendere nuove
            tecniche, scoprire strumenti digitali all'avanguardia e comprendere
            meglio le dinamiche del lavoro in gruppo. Queste esperienze non solo
            arricchiscono il loro bagaglio formativo, ma offrono anche una
            visione concreta delle sfide e delle opportunità del mondo digitale.
          </motion.p>
        </div>
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
