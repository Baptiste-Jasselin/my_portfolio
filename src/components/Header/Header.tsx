function Header() {
  return (
    <div className="grid max-w-screen-md gap-6 mx-5 md:mx-10">
      <img
        className="justify-self-center size-60 min-w-60 md:row-span-2 md:justify-self-end"
        src="src/assets/pdp.png"
        alt="Profil prictures of Baptiste Jasselin"
      />
      <h1 className="mobile-h1 sm:desktop-h1 justify-self-center md:justify-self-start">
        Baptiste Jasselin
      </h1>
      <p className="mobile-body sm:desktop-body">
        Je suis developpeur web[...] Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Animi, provident? Nam mollitia at ab deserunt nostrum,
        ad hic beatae molestias necessitatibus voluptatem cum dolor,
        consequatur, illo similique officiis aspernatur labore?
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
