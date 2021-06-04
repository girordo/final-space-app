import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut",
  },
};

const Home = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <motion.h1 className="text-6xl font-bold my-8" data-testid="titleText">
          Mais um projeto com <br />
          <motion.a
            transition={bounceTransition}
            animate={{
              y: ["100%", "-100%"],
            }}
            className="text-primary-600 hover:text-secondary-400 transition-colors"
            href="https://nextjs.org"
            target="_blank"
            rel="noreferrer"
            whileHover={{}}>
            Next.js!
            <br />
          </motion.a>
          TailwindCSS
        </motion.h1>

        <p className="mt-3 text-2xl">
          Só que dessa vez consumindo a API do Final Space
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Home;
