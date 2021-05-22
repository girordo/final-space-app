import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full h-24 border-t">
      <div className="flex-col">
        <div className="flex mt-4">
          <p>
            Made with
            <span aria-label="Heart Purple Emoji" role="img" className="mx-2">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
