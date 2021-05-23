import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

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

const Character = () => {
  const router = useRouter();
  const { id } = router.query;
  const [characterData, setCharacterData] = useState({});

  const fetchData = async () => {
    const res = await fetch(`${defaultEndpoint}/${id}`);
    const data = await res.json();
    setCharacterData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Head>
        <title>{characterData.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center w-full min-h-screen flex-1 px-20 text-center">
        <motion.section
          drag
          dragElastic={0.2}
          className="bg-gray-200  p-4 flex flex-col shadow-lg rounded-lg">
          <img
            src={characterData.img_url}
            className="rounded-full mr-4"
            alt="Character Final Space"
          />
          <div className="flex flex-col justify-center hover:text-secondary-800 transition-colors">
            <ul className="text-left">
              <li className="mb-4">
                <h1 className="text-2xl font-bold">{characterData.name}</h1>
              </li>
              <li className="flex flex-row mb-0.5 text-sm">
                Status:<h4 className="font-semibold">{characterData.status}</h4>
              </li>
              <li className="flex flex-row mb-0.5 text-sm">
                Gender:<h4 className="font-semibold">{characterData.gender}</h4>
              </li>
              <li className="flex flex-row text-sm">
                Species:
                <h4 className="font-semibold">{characterData.species}</h4>
              </li>
            </ul>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default Character;
