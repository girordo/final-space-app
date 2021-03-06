import PropTypes from "prop-types";
import Head from "next/head";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

const defaultEndpoint = "https://finalspaceapi.com/api/v0/quote";

export async function getStaticPaths() {
  const res = await fetch(defaultEndpoint);
  const quotes = await res.json();

  const paths = quotes.map((quote) => ({
    params: { id: quote.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();
  return {
    props: {
      quotesData: data,
    },
  };
}

export const Quote = ({ quotesData }) => {
  return (
    <div>
      <Head>
        <title>Quote by: {quotesData.by}</title>
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
