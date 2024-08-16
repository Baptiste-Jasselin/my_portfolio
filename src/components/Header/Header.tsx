function Header() {
  return (
    <div className="flex w-2/3">
      <div>
        <img
          className="w-96"
          src="src/assets/pdp.png"
          alt="Profil prictures of Baptiste Jasselin"
        />
        <div className="flex flex-row">
          <img
            className="w-8 basis-1/3"
            src="src/assets/github-mark.svg"
            alt="Github logo"
          />
          <img
            className="w-8 basis-1/3"
            src="src/assets/LinkedIn_icon.svg"
            alt="LinkedIn logo"
          />
          <img
            className="w-8 basis-1/3"
            src="src/assets/enveloppe.png"
            alt="Email logo"
          />
        </div>
      </div>
      <div>
        <h1 className="font-caption font-bold text-2xl">Baptiste Jasselin</h1>
        <p className="font-sans text-xl">
          Je suis developpeur web[...] Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Animi, provident? Nam mollitia at ab deserunt
          nostrum, ad hic beatae molestias necessitatibus voluptatem cum dolor,
          consequatur, illo similique officiis aspernatur labore?
        </p>
      </div>
    </div>
  );
}

export default Header;
