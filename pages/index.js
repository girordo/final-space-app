import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Final Space App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <motion.h1 className="text-6xl font-bold my-8">
          Mais um projeto com <br />
          <a
            className="text-primary-600 hover:text-secondary-400 transition-colors"
            href="https://nextjs.org">
            Next.js!
            <br />
          </a>
          TailwindCSS
        </motion.h1>

        <p className="mt-3 text-2xl">
          Só que dessa vez consumindo a API do Final Space
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
