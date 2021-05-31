import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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

const AllLocations = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Todas as localizações</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="sm:flex sm:flex-col lg:flex lg:flex-row">
          <h1 className="text-6xl font-bold my-20">
            Todas as
            <h1 className="text-primary-600 hover:text-secondary-400 ml-4">
              localizações
            </h1>
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid md:grid-cols-2 md:gap-4 xl:grid xl:grid-cols-4 xl:gap-6">
          {data.map(({ id, name, status, img_url: image }) => (
            <Link key={id} href="/locations/[id]" as={`/locations/${id}`}>
              <motion.div
                className="p-6 my-6 flex flex-col items-center text-left border w-72 rounded-xl shadow-lg transition-colors hover:text-primary-600 focus:text-primary-600"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.4 },
                }}>
                <Image
                  src={image}
                  loading="lazy"
                  className="rounded-2xl"
                  alt="Location from Final Space"
                />
                <div>
                  <h3 className="text-2xl font-bold">{name}</h3>
                  <h4>{status}</h4>
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

AllLocations.propTypes = {
  data: PropTypes.oneOf([PropTypes.object, PropTypes.array]),
};

export default AllLocations;
