function Header() {
  return (
    <div className="my-10 grid col-span-2 max-w-screen-md gap-6">
      <img
        className="justify-self-end row-span-2 size-60 min-w-60"
        src="src/assets/pdp.png"
        alt="Profil prictures of Baptiste Jasselin"
      />
      <h1 className="font-caption font-bold text-5xl">Baptiste Jasselin</h1>
      <p className="font-sans text-xl">
        Je suis developpeur web[...] Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Animi, provident? Nam mollitia at ab deserunt nostrum,
        ad hic beatae molestias necessitatibus voluptatem cum dolor,
        consequatur, illo similique officiis aspernatur labore?
      </p>
      <div className="justify-self-center col-span-2 grid grid-cols-3 gap-6">
        <img
          className="w-8"
          src="src/assets/github-mark.svg"
          alt="Github logo"
        />
        <img
          className="w-8"
          src="src/assets/LinkedIn_icon.svg"
          alt="LinkedIn logo"
        />
        <img className="w-8" src="src/assets/enveloppe.png" alt="Email logo" />
      </div>
    </div>
  );
}

export default Header;
