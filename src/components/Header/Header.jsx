import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav
      className="bg-gray-100 w-full h-24 sticky top-0 shadow-md z-50 flex flex-col md:flex md:flex-row items-center justify-center"
      data-testid="header">
      <menu className="relative flex justify-around">
        <Link href="/characters">
          <p className="hover:text-primary-600 text-xl font-semibold transition-colors">
            Personagens
          </p>
        </Link>
        <Link href="/locations">
          <p className="hover:text-primary-600 text-xl font-semibold transition-colors">
            Localizações
          </p>
        </Link>
        <Link href="/episodes">
          <p className="hover:text-primary-600 text-xl font-semibold transition-colors">
            Episódios
          </p>
        </Link>
        <Link href="/quotes">
          <p className="hover:text-primary-600 text-xl font-semibold transition-colors">
            Frases
          </p>
        </Link>
      </menu>
    </nav>
  );
};

export default Header;
