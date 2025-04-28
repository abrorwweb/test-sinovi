import React from "react";
import { FaGithub, FaTelegramPlane, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-neutral via-neutral-800 to-neutral-900 text-neutral-content p-8 text-center flex flex-col gap-6">
      <div className="flex justify-center gap-8">
        <a
          href="https://github.com/abrorwweb"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-primary transition-transform transform hover:scale-125 duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://t.me/qwerty_0990"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-primary transition-transform transform hover:scale-125 duration-300"
        >
          <FaTelegramPlane />
        </a>
        <a
          href="https://www.linkedin.com/in/abrorjon-abdurahimov-488979335"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-primary transition-transform transform hover:scale-125 duration-300"
        >
          <FaLinkedin />
        </a>
      </div>

      <p className="text-sm tracking-wide">
        © 2025 <span className="font-bold text-primary">Online Quiz App</span> | Made with <span className="text-red-500">❤️</span> by <span className="font-semibold">Abror</span>
      </p>
    </footer>
  );
}

export default Footer;
