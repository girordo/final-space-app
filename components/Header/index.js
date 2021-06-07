import React from "react";
import Link from "next/link";
import mooncake from "../../public/mooncake.png";

const Header = () => {
  return (
    <nav
      className="bg-gray-100 w-full sticky top-0 shadow-md z-50 flex flex-col md:flex md:flex-row items-center justify-between"
      data-testid="header">
      <Link href="/">
        <img
          src={mooncake}
          lazy="loading"
          alt="Mooncake hehe"
          width="80"
          data-testid="mooncake"
        />
      </Link>
      <Link href="/characters">
        <p className="hover:text-primary-600 text-xl font-semibold">
          Personagens
        </p>
      </Link>
      <Link href="/locations">
        <p className="hover:text-primary-600 text-xl font-semibold">
          Localizações
        </p>
      </Link>
      <Link href="/episodes">
        <p className="hover:text-primary-600 text-xl font-semibold">
          Episódios
        </p>
      </Link>
      <Link href="/quotes">
        <p className="hover:text-primary-600 text-xl font-semibold">Frases</p>
      </Link>
    </nav>
  );
};

export default Header;
