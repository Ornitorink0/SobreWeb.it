import React, { PureComponent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

export default class NavigationBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      isScrolled: false, // Stato per lo scroll
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll); // Listener per lo scroll
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll); // Rimuovi listener
  }

  // Funzione per gestire lo scroll e chiudere il menu mobile se è aperto
  handleScroll = () => {
    const scrollTop = window.scrollY;

    // Aggiorna lo stato della navbar se si scorre
    if (scrollTop > 50) {
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }

    // Se il menu mobile è aperto, chiudilo durante lo scroll
    if (this.state.isMenuOpen) {
      this.setState({ isMenuOpen: false });
    }
  };

  // Funzione per aprire o chiudere il menu
  toggleMenu = () => {
    this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }));
  };

  render() {
    const { isMenuOpen, isScrolled } = this.state;

    return (
      <nav
        className={`drag-none fixed top-0 z-20 flex w-full items-center justify-between p-4 px-8 text-white transition-all duration-300 ${
          isScrolled
            ? "bg-primary-900/200 border-b border-solid border-[#88888830] shadow-lg backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
        style={{
          minHeight: "6rem", // Fissa un'altezza minima per evitare che si compatti
          padding: "0 2rem", // Fissa il padding per evitare cambiamenti durante lo scroll
          borderBottomWidth: "1px", // Imposta un bordo trasparente per evitare il flash
        }}
      >
        <a href="/home">
          <img
            className="drag-none select-none opacity-40"
            src="/logo-48.svg"
            alt="SobreWeb logo"
          />
        </a>

        {/* Menu per desktop */}
        <div className="hidden gap-4 text-lg font-semibold tracking-wide md:flex">
          {["Home", "Blogs", "Policy"].map((item, index) => (
            <a
              key={index}
              href={`/${item.toLowerCase()}`}
              className="opacity-40 transition duration-300 hover:text-accent1-500 hover:opacity-100"
            >
              {item}
            </a>
          ))}
          {
            /* Aggiungi Sobrero.it con icona */
            <a
              href="https://www.sobrero.edu.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 opacity-40 transition duration-300 hover:text-accent1-500 hover:opacity-100"
            >
              <OpenInNewRoundedIcon className="h-6 w-6" />
              <span className="hidden md:block">Sobrero.it</span>
            </a>
          }
        </div>

        {/* Icona per mobile con animazione */}
        <div className="z-30 md:hidden">
          <motion.div
            key={isMenuOpen ? "closeIcon" : "menuIcon"}
            initial={{ rotate: 0, scale: 0.8 }}
            animate={{ rotate: 360, scale: 1 }}
            exit={{ rotate: -360, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            onClick={this.toggleMenu}
            className="cursor-pointer"
          >
            {!isMenuOpen ? (
              <MenuRoundedIcon className="opacity-40" fontSize="large" />
            ) : (
              <CloseRoundedIcon className="opacity-40" fontSize="large" />
            )}
          </motion.div>
        </div>

        {/* Menu a tendina per mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop con animazione */}
              <motion.div
                className="fixed inset-0 z-10 h-screen w-screen bg-black bg-opacity-50"
                onClick={this.toggleMenu}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              <motion.div
                className="fixed inset-0 z-20 flex h-screen w-full flex-col items-center justify-center space-y-8 bg-primary-900/95 text-white"
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              >
                {["Home", "Blogs", "Policy"].map((item, index) => (
                  <a
                    key={index}
                    href={`/${item.toLowerCase()}`}
                    className="text-2xl opacity-90 transition duration-300 hover:text-accent1-500"
                    onClick={this.toggleMenu}
                  >
                    {item}
                  </a>
                ))}
                {
                  /* Aggiungi Sobrero.it con icona */
                  <a
                    href="https://www.sobrero.edu.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl opacity-90 transition duration-300 hover:text-accent1-500"
                  >
                    <OpenInNewRoundedIcon className="mr-2 h-6 w-6" />
                    <span>Sobrero.it</span>
                  </a>
                }
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    );
  }
}
