import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full h-24 flex justify-center items-center sticky top-0 bg-gray-100 shadow-md z-50">
      <nav className="flex items-center flex-no-shrink">
        <Link href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Final_Space_Logo.png/250px-Final_Space_Logo.png"
            width="10%"
            className="mr-40"
            alt="Final Space Logo"
          />
        </Link>
        <ul className="flex flex-row w-full block">
          <li className="hover:text-primary-600 text-xl font-semibold">
            <Link href="/characters">Personagens</Link>
          </li>
          <li className="mx-20 hover:text-primary-600 text-xl font-semibold">
            <Link href="/locations">Localizações</Link>
          </li>
          <li className="hover:text-primary-600 text-xl font-semibold">
            Episódios
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
