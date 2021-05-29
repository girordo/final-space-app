import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const defaultEndpoint = "https://finalspaceapi.com/api/v0/episode";

export async function getStaticPaths() {
  const res = await fetch(defaultEndpoint);
  const episodes = await res.json();

  const paths = episodes.map((episode) => ({
    params: { id: episode.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${defaultEndpoint}/${params.id}`);
  const data = await res.json();
  return {
    props: {
      episodeData: data,
    },
  };
}

const Episode = ({ episodeData }) => {
  return (
    <div>
      <Head>
        <title>{episodeData.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center w-full min-h-screen flex-1 px-20 text-center">
        <motion.section
          drag
          dragElastic={0.2}
          className="bg-gray-200  p-4 flex flex-col shadow-lg rounded-lg">
          <img
            src={episodeData.img_url}
            className="rounded-full mr-4"
            alt="Character Final Space"
          />
          <div className="flex flex-col justify-center hover:text-secondary-800 transition-colors">
            <ul className="text-left">
              <li className="mb-4">
                <h1 className="text-2xl font-bold">{episodeData.name}</h1>
              </li>
              <li className="flex flex-row mb-0.5 text-sm">
                Air Date:
                <h2 className="font-semibold">
                  {dayjs(episodeData.air_date).format("DD/MM/YYYY")}
                </h2>
              </li>
            </ul>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

Episode.propTypes = {
  episodeData: PropTypes.oneOf([PropTypes.object, PropTypes.array]),
};

export default Episode;
