import React from "react";

const Header = () => {
  return (
    <div className="w-full h-24 flex justify-center items-center sticky top-0 bg-gray-100 shadow-md z-50">
      <nav className="flex flex-row">
        <h1>O famigerado header sticky da parada</h1>
        <ul>
          <li className="hover:text-primary-600">Personagens</li>
          <li className="hover:text-primary-600">Localizações</li>
          <li className="hover:text-primary-600">Episódios</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
