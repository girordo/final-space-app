import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const defaultEndpoint = "https://finalspaceapi.com/api/v0/episode";

export async function getStaticProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

const AllEpisodes = ({ data }) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Todos os episódios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <section className="sm:flex sm:flex-col lg:flex lg:flex-row">
          <h1 className="text-6xl font-bold my-20">
            Todos os
            <h1 className="text-primary-600 hover:text-secondary-400 ml-4">
              episódios
            </h1>
          </h1>
        </section>
        <section className="grid grid-cols-1 gap-2 md:grid md:grid-cols-2 md:gap-4 xl:grid xl:grid-cols-4 xl:gap-6">
          {data.map(({ id, name, img_url: image }) => (
            <Link key={id} href="/episodes/[id]" as={`/episodes/${id}`}>
              <motion.div
                className="flex flex-col items-center border w-72 rounded-xl shadow-lg transition-colors hover:text-primary-600 focus:text-primary-600"
                whileTap={{
                  scale: 0.92,
                  transition: { duration: 0.2 },
                }}>
                <img
                  src={image}
                  loading="lazy"
                  className="rounded-2xl"
                  alt="Character from Final Space"
                />
                <div>
                  <h2 className="text-2xl font-bold">{name}</h2>
                  <p className="mt-4 text-xl">
                    Find in-depth information about Next.js features and API.
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </section>
  );
};

AllEpisodes.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default AllEpisodes;
