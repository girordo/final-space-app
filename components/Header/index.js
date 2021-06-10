import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav
      className="bg-gray-100 w-full sticky top-0 shadow-md z-50 flex flex-col md:flex md:flex-row items-center justify-between"
      data-testid="header">
      <Link href="/">
        <img
          src="/mooncake.png"
          lazy="loading"
          alt="Mooncake hehe"
          width="80"
          data-testid="mooncake"
        />
      </Link>
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
    </nav>
  );
};

export default Header;
