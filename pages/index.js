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
        <meta description="Just a simple page with consuming final space API working on NextJS" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center mb-10">
        <h1 className="text-6xl font-bold">
          Mais um caso de estudo com
          <a
            className="ml-4 hover:text-primary-600 transition-colors"
            href="https://nextjs.org">
            Next.js!
          </a>
        </h1>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
