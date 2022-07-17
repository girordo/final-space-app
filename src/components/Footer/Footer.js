import React from "react";

const Footer = () => {
  return (
    <footer
      className="flex justify-center items-center w-full h-24 border-t bg-gray-100"
      data-testid="footer">
      <section className="flex-col">
        <section className="flex flex-col md:flex-row lg:flex-row xl:flex-row mt-4">
          <p className="flex flex-col items-center md:flex-row lg:flex-row xl:flex-row">
            Made with
            <span
              aria-label="Heart Purple Emoji"
              role="img"
              className="mx-2"
              whileHover={{ scale: 1.4, originX: 0 }}
              transition={{ type: "spring", stiffness: 400 }}>
              💜
            </span>
            by
          </p>
          <a
            className="flex-col mx-2 hover:text-primary-600"
            href="https://github.com/girordo"
            target="_blank"
            rel="noreferrer">
            /girordo
          </a>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
