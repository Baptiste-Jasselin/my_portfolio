function Navbar() {
  return (
    <nav className="">
      <a className="mobile-body sm:desktop-body" href="/">
        Accueil
      </a>
      <a className="mobile-body sm:desktop-body" href="/my_projects">
        Mes projets
      </a>
      <a className="mobile-body sm:desktop-body" href="/lab">
        Lab
      </a>
    </nav>
  );
}

export default Navbar;
