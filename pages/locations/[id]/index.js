import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const defaultEndpoint = "https://finalspaceapi.com/api/v0/location";

export async function getStaticPaths() {
  const res = await fetch(defaultEndpoint);
  const locations = await res.json();

  const paths = locations.map((location) => ({
    params: { id: location.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${defaultEndpoint}/${params.id}`);
  const data = await res.json();
  return {
    props: {
      locationDaat: data,
    },
  };
}

const Location = ({ locationData }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>{locationData.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center w-full min-h-screen flex-1 px-20 text-center">
        <motion.section
          drag
          dragElastic={0.2}
          className="bg-gray-200  p-4 flex flex-col shadow-lg rounded-lg">
          <img
            src={locationData.img_url}
            className="rounded-full mr-4"
            alt="Character Final Space"
          />
          <div className="flex flex-col justify-center hover:text-secondary-800 transition-colors">
            <ul className="text-left">
              <li className="mb-4">
                <h1 className="text-2xl font-bold">{locationData.name}</h1>
              </li>
              <li className="flex flex-row mb-0.5 text-sm">
                Type:<h4 className="font-semibold">{locationData.type}</h4>
              </li>
            </ul>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

Location.propTypes = {
  locationData: PropTypes.array,
};

export default Location;
