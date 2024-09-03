import reactLogo from '../../assets/react_logo.svg';
import tailwindLogo from '../../assets/tailwindcss-logotype.svg';
import mongoDBLogo from '../../assets/MongoDB_Fores-Green.svg';
import prismaLogo from '../../assets/Prisma-DarkLogo.svg';

function MyStack() {
  return (
    <div>
      <h2 className="mobile-h2 mt-10 mb-7 sm:desktop-h2">
        🧰 J'aime travailler avec...
      </h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 justify-items-center">
        <a href="https://fr.react.dev/" target="_blank" rel="noreferrer">
          <img
            className="h-8 lg:h-16 rounded-lg"
            src={reactLogo}
            alt="React logo"
          />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <img
            className="h-8 lg:h-16 rounded-lg"
            src={tailwindLogo}
            alt="Tailwind logo"
          />
        </a>
        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
          <img
            className="h-8 lg:h-16 rounded-lg"
            src={mongoDBLogo}
            alt="MongoDB logo"
          />
        </a>
        <a href="https://www.prisma.io/" target="_blank" rel="noreferrer">
          <img
            className="h-8 lg:h-16 rounded-lg"
            src={prismaLogo}
            alt="Prisma logo"
          />
        </a>
      </div>
    </div>
  );
}

export default MyStack;
