import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <nav
      className="bg-gray-100 w-full h-24 sticky top-0 shadow-md z-50 flex flex-col md:flex md:flex-row items-center justify-center"
      data-testid="header">
      <div className="relative flex justify-around">
        <Link href="/characters">
          <motion.p
            className="hover:text-primary-600 text-xl font-semibold transition-colors"
            whileHover={{ scale: 1.4, originX: 0 }}
            transition={{ type: "spring", stiffness: 400 }}>
            Personagens
          </motion.p>
        </Link>
        <Link href="/locations">
          <motion.p
            className="hover:text-primary-600 text-xl font-semibold transition-colors"
            whileHover={{ scale: 1.4, originX: 0 }}
            transition={{ type: "spring", stiffness: 400 }}>
            Localizações
          </motion.p>
        </Link>
        <Link href="/episodes">
          <motion.p
            className="hover:text-primary-600 text-xl font-semibold transition-colors"
            whileHover={{ scale: 1.4, originX: 0 }}
            transition={{ type: "spring", stiffness: 400 }}>
            Episódios
          </motion.p>
        </Link>
        <Link href="/quotes">
          <motion.p
            className="hover:text-primary-600 text-xl font-semibold transition-colors"
            whileHover={{ scale: 1.4, originX: 0 }}
            transition={{ type: "spring", stiffness: 400 }}>
            Frases
          </motion.p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
