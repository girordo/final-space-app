import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

const defaultEndpoint = "https://finalspaceapi.com/api/v0/character";

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

const Home = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
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

        <div className="grid grid-cols-3 gap-4 w-full">
          {data.map(({ id, name, status, species, gender, img_url: image }) => (
            <Link key={id} href="/character/[id]" as={`/character/${id}`}>
              <motion.a
                href="https://nextjs.org/docs"
                className="p-6 my-6 text-left border w-96 rounded-xl shadow-lg  transition-colors hover:text-primary-600 focus:text-primary-600"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.4 },
                }}>
                <img
                  src={image}
                  className="rounded-2xl"
                  alt="Character from Final Space"
                />
                <h3 className="text-2xl font-bold">{name}</h3>
                <h4>{status}</h4>
                <h4>{species}</h4>
                <h4>{gender}</h4>
                <p className="mt-4 text-xl">
                  Find in-depth information about Next.js features and API.
                </p>
              </motion.a>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
