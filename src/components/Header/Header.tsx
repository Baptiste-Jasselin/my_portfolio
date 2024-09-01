function Header() {
  return (
    <div className="grid max-w-screen-md mx-5 md:mx-10">
      <img
        className="justify-self-center size-60 min-w-60 md:row-span-3 md:justify-self-end"
        src="src/assets/pdp.png"
        alt="Profil prictures of Baptiste Jasselin"
      />
      <h1 className="mobile-h1 justify-self-center mb-2 md:justify-self-start sm:desktop-h1 sm:mb-4">
        Baptiste Jasselin
      </h1>
      <h2 className="mobile-h2 justify-self-center mb-3.5 sm:desktop-h2 sm:mb-7 md:justify-self-start">
        Développeur Web Full Stack
      </h2>
      <p className="mobile-body sm:desktop-body mb-6 md:col-start-2">
        ☝️ Je suis développeur web parce que j'aime comprendre, créer, explorer.
        C'est pour ces mêmes raisons que j'aime aussi le sport, la nature, les
        arts. N'hésitez pas à me contacter si vous souhaitez que nous
        travaillons ensemble.
      </p>
      <div className="justify-self-center grid grid-cols-3 gap-6 md:col-span-2">
        <a
          href="https://github.com/Baptiste-Jasselin"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-8"
            src="src/assets/github-mark.svg"
            alt="Github logo"
          />
        </a>
        <a
          href="https://linkedin.com/in/baptiste-jasselin"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-8"
            src="src/assets/LinkedIn_icon.svg"
            alt="LinkedIn logo"
          />
        </a>
        <a
          href="mailto:baptistejasselin@gmail.com"
          // target="_blank"
          // rel="noreferrer"
        >
          <img
            className="w-8"
            src="src/assets/enveloppe.png"
            alt="Email logo"
          />
        </a>
      </div>
    </div>
  );
}

export default Header;
