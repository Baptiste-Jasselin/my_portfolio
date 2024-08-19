function Header() {
  return (
    <div className="grid grid-cols-3">
      <img
        className="w-16"
        src="src/assets/pdp.png"
        alt="Profil prictures of Baptiste Jasselin"
      />
      <div className="col-span-2">
        <h1 className="font-caption font-bold text-5xl mb-3.5 mt-6">
          Baptiste Jasselin
        </h1>
        <p className="font-sans text-xl">
          Je suis developpeur web[...] Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Animi, provident? Nam mollitia at ab deserunt
          nostrum, ad hic beatae molestias necessitatibus voluptatem cum dolor,
          consequatur, illo similique officiis aspernatur labore?
        </p>
      </div>
      <div className="col-span-3 flex justify-center">
        <img
          className="w-8 mx-2 my-5"
          src="src/assets/github-mark.svg"
          alt="Github logo"
        />
        <img
          className="w-8 mx-2 my-5"
          src="src/assets/LinkedIn_icon.svg"
          alt="LinkedIn logo"
        />
        <img
          className="w-8 mx-2 my-5"
          src="src/assets/enveloppe.png"
          alt="Email logo"
        />
      </div>
    </div>
  );
}

export default Header;
