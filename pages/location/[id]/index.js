import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const Location = () => {
  const [locationData, setLocationData] = useState({});

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>{locationData.name}</title>
      </Head>
      <Header />
      <Footer />
    </div>
  );
};

export default Location;
