import PropTypes from "prop-types";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const defaultEndpoint = "https://finalspaceapi.com/api/v0/quotes";

export async function getStaticPaths() {
  const res = await fetch(defaultEndpoint);
  const quotes = await res.json();

  const paths = quotes.map((quote) => ({
    params: { id: quote.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${defaultEndpoint}/${params.id}`);
  const data = await res.json();
  return {
    props: {
      quotesData: data,
    },
  };
}

const Quote = ({ quotesData }) => {
  return (
    <div>
      <Head>
        <title>{quotesData.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Footer />
    </div>
  );
};

Quote.propTypes = {
  quotesData: PropTypes.oneOf([PropTypes.object, PropTypes.array]),
};

export default Quote;
