import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Link from "next/link";

import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const defaultEndpoint = "https://finalspaceapi.com/api/v0/location";

export async function getStaticProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default AllLocations = ({ data }) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Todas as localizações</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <section className="sm:flex sm:flex-col lg:flex lg:flex-row">
          <h1 className="text-6xl font-bold my-20">
            Todas as
            <h1 className="text-primary-600 hover:text-secondary-400 ml-4">
              localizações
            </h1>
          </h1>
        </section>
        <section className="grid grid-cols-1 gap-2 md:grid md:grid-cols-2 md:gap-4 xl:grid xl:grid-cols-4 xl:gap-6">
          {data.map(({ id, name, status, img_url: image }) => (
            <Link key={id} href="/locations/[id]" as={`/locations/${id}`}>
              <motion.section
                className="flex flex-col items-center border w-72 rounded-xl shadow-lg transition-colors hover:text-primary-600 focus:text-primary-600"
                whileTap={{
                  scale: 0.92,
                  transition: { duration: 0.2 },
                }}>
                <img
                  src={image}
                  loading="lazy"
                  className="rounded-2xl"
                  alt="Location from Final Space"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold">{name}</h3>
                  <h4>{status}</h4>
                  <p className="mt-4 text-xl">
                    Find in-depth information about Next.js features and API.
                  </p>
                </div>
              </motion.section>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </section>
  );
};

AllLocations.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
