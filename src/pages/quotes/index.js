import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Link from "next/link";

import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const defaultEndpoint = "https://finalspaceapi.com/api/v0/quote";

export async function getStaticProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export const AllQuotes = ({ data }) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Todas as frases</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <section className="sm:flex sm:flex-col lg:flex lg:flex-row">
          <h1 className="text-6xl font-bold my-20">
            Todas as
            <h1 className="text-primary-600 hover:text-secondary-400 ml-4">
              frases
            </h1>
          </h1>
        </section>
        <section className="grid grid-cols-1 gap-2 md:grid md:grid-cols-2 md:gap-4 xl:grid xl:grid-cols-4 xl:gap-6">
          {data.map(({ id, quote, by, image }) => (
            <Link key={id} href="/quotes/[id]" as={`/quotes/${id}`}>
              <motion.section
                className="flex p-6 flex-row items-center border w-80 rounded-xl shadow-lg transition-colors hover:text-primary-600 focus:text-primary-600"
                whileTap={{
                  scale: 0.92,
                  transition: { duration: 0.2 },
                }}>
                <div className="flex flex-col items-center">
                  <img
                    src={image}
                    loading="lazy"
                    className="rounded-full"
                    width="58%"
                    alt={`Quote from ${by}`}
                  />
                  <h2 className="font-bold">{by}</h2>
                </div>
                <h4 className="text-left">{quote}</h4>
              </motion.section>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </section>
  );
};

AllQuotes.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
