function MyStack() {
  return (
    <div>
      <h2 className="mobile-h2 mt-5 mb-3.5 sm:desktop-h2 sm:mt-10 sm:mb-7">
        🧰 J'aime travailler avec...
      </h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 justify-items-center">
        <a href="https://fr.react.dev/" target="_blank" rel="noreferrer">
          <img
            className="h-8 lg:h-16 rounded-lg"
            src="src/assets/react_logo.svg"
            alt="React logo"
          />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <img
            className="h-8 lg:h-16 rounded-lg"
            src="src/assets/tailwindcss-logotype.svg"
            alt="Tailwind logo"
          />
        </a>
        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
          <img
            className="h-8 lg:h-16 rounded-lg"
            src="src/assets/MongoDB_Fores-Green.svg"
            alt="MongoDB logo"
          />
        </a>
        <a href="https://www.prisma.io/" target="_blank" rel="noreferrer">
          <img
            className="h-8 lg:h-16 rounded-lg"
            src="src/assets/Prisma-DarkLogo.svg"
            alt="Prisma logo"
          />
        </a>
      </div>
    </div>
  );
}

export default MyStack;
