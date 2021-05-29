import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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

const AllQuotes = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Todas as frases</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="sm:flex sm:flex-col lg:flex lg:flex-row">
          <h1 className="text-6xl font-bold my-20">
            Todas as
            <h1 className="text-primary-600 hover:text-secondary-400 ml-4">
              frases
            </h1>
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid md:grid-cols-2 md:gap-4 xl:grid xl:grid-cols-4 xl:gap-6">
          {data.map(({ id, quote, by, image }) => (
            <Link key={id} href="/quotes/[id]" as={`/quotes/${id}`}>
              <motion.div
                className="p-6 my-6 flex flex-col items-center text-left border w-72 rounded-xl shadow-lg transition-colors hover:text-primary-600 focus:text-primary-600"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.4 },
                }}>
                <div>
                  <h3 className="text-2xl font-bold">{by}</h3>
                  <h4>{quote}</h4>
                  <p className="mt-4 text-xl">
                    Find in-depth information about Next.js features and API.
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

AllQuotes.propTypes = {
  data: PropTypes.oneOf([PropTypes.object, PropTypes.array]),
};

export default AllQuotes;