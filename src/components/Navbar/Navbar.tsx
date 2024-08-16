function Navbar() {
  return (
    <nav className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
      <a
        className="font-sans text-xl inline-block px-4 py-2 text-gray-700 hover:bg-gray-50 focus:relative"
        href="/"
      >
        Accueil
      </a>
      <a
        className="font-sans text-xl inline-block px-4 py-2 text-gray-700 hover:bg-gray-50 focus:relative"
        href="/my_projects"
      >
        Mes projets
      </a>
      <a
        className="font-sans text-xl inline-block px-4 py-2 text-gray-700 hover:bg-gray-50 focus:relative"
        href="/lab"
      >
        Lab
      </a>
    </nav>
  );
}

export default Navbar;
