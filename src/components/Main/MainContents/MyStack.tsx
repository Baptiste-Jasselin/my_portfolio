function MyStack() {
  return (
    <>
      <h2 className="font-caption font-bold text-2xl mt-5 mb-5">
        🧰 I love to work with...
      </h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 justify-items-center">
        <img
          className="h-16 rounded-lg"
          src="src/assets/react_logo.svg"
          alt="React logo"
        />
        <img
          className="h-16 rounded-lg"
          src="src/assets/tailwindcss-logotype.svg"
          alt="Tailwind logo"
        />
        <img
          className="h-16 rounded-lg"
          src="src/assets/MongoDB_Fores-Green.svg"
          alt="MongoDB logo"
        />
        <img
          className="h-16 rounded-lg"
          src="src/assets/Prisma-DarkLogo.svg"
          alt="Prisma logo"
        />
      </div>
    </>
  );
}

export default MyStack;
