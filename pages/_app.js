import "tailwindcss/tailwind.css";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
};

MyApp.propTypes = {};

export default MyApp;
