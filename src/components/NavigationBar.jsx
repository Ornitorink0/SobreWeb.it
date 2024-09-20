import React, { PureComponent } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default class NavigationBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  // Funzione per aprire o chiudere il menu
  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <nav className="text-white p-4 flex items-center justify-between fixed w-full z-20 top-0 px-8 h-24">
        <div>
          <img src="/logo-48.svg" alt="SobreWeb logo" />
        </div>

        {/* Menu per desktop */}
        <div className="hidden md:flex gap-4 text-lg font-semibold tracking-wide">
          <a
            className="hover:text-accent1-500 transition duration-300"
            href="/home"
          >
            Home
          </a>
          <a
            className="hover:text-accent1-500 transition duration-300"
            href="/blogs"
          >
            Blogs
          </a>
          <a
            className="hover:text-accent1-500 transition duration-300"
            href="/contact"
          >
            Contact
          </a>
          <a
            className="hover:text-accent1-500 transition duration-300"
            href="/about"
          >
            About
          </a>
        </div>

        {/* Icona per mobile */}
        <div className="md:hidden z-30">
          {!isMenuOpen ? (
            <MenuRoundedIcon
              className="cursor-pointer"
              onClick={this.toggleMenu}
              fontSize="large"
            />
          ) : (
            <CloseRoundedIcon
              className="cursor-pointer"
              onClick={this.toggleMenu}
              fontSize="large"
            />
          )}
        </div>

        {/* Menu a tendina per mobile */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-10"
              onClick={this.toggleMenu}
            ></div>

            {/* Menu */}
            <div className="fixed inset-y-0 items-center justify-center right-0 w-48 p-6 z-20 text-white flex flex-col space-y-6 shadow-lg backdrop-blur-md border-l border-solid border-[#88888830]">
              <a
                className="hover:text-accent1-500 transition duration-300"
                href="/home"
                onClick={this.toggleMenu}
              >
                Home
              </a>
              <a
                className="hover:text-accent1-500 transition duration-300"
                href="/blogs"
                onClick={this.toggleMenu}
              >
                Blogs
              </a>
              <a
                className="hover:text-accent1-500 transition duration-300"
                href="/contact"
                onClick={this.toggleMenu}
              >
                Contact
              </a>
              <a
                className="hover:text-accent1-500 transition duration-300"
                href="/about"
                onClick={this.toggleMenu}
              >
                About
              </a>
            </div>
          </>
        )}
      </nav>
    );
  }
}
