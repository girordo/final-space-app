import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Header />

        <Footer />
      </main>
    </>
  );
};

export default Home;
