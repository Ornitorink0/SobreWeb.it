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

export default Footer;
