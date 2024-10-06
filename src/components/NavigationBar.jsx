import React, { PureComponent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

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
        className={`text-white p-4 flex items-center justify-between fixed w-full z-20 top-0 px-8 transition-all duration-300 drag-none ${
          isScrolled
            ? "backdrop-blur-md bg-primary-900/200 border-b border-solid border-[#88888830] shadow-lg"
            : "bg-transparent border-transparent"
        }`}
        style={{
          minHeight: "6rem", // Fissa un'altezza minima per evitare che si compatti
          padding: "0 2rem", // Fissa il padding per evitare cambiamenti durante lo scroll
          borderBottomWidth: "1px", // Imposta un bordo trasparente per evitare il flash
        }}
      >
        <a href="/home">
          <img
            className="opacity-40 select-none drag-none"
            src="/logo-48.svg"
            alt="SobreWeb logo"
          />
        </a>

        {/* Menu per desktop */}
        <div className="hidden md:flex gap-4 text-lg font-semibold tracking-wide">
          {["Home", "Blogs", "About"].map((item, index) => (
            <a
              key={index}
              href={`/${item.toLowerCase()}`}
              className="hover:text-accent1-500 hover:opacity-100 transition duration-300 opacity-40"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Icona per mobile con animazione */}
        <div className="md:hidden z-30">
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
                className="fixed w-screen h-screen inset-0 bg-black bg-opacity-50 z-10"
                onClick={this.toggleMenu}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              <motion.div
                className="fixed w-full h-screen inset-0 flex flex-col items-center justify-center bg-primary-900/95 z-20 text-white space-y-8"
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              >
                {["Home", "Blogs", "About"].map((item, index) => (
                  <a
                    key={index}
                    href={`/${item.toLowerCase()}`}
                    className="text-2xl hover:text-accent1-500 transition duration-300 opacity-90"
                    onClick={this.toggleMenu}
                  >
                    {item}
                  </a>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    );
  }
}
