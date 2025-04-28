import React from "react";

function Header({ goHome }) {
  return (
    <header className="bg-gradient-to-r from-primary via-accent to-secondary text-white p-5 flex justify-between items-center shadow-md">
      <h1
        className="text-2xl md:text-3xl font-extrabold tracking-wide cursor-pointer hover:scale-105 transition-transform duration-300 drop-shadow-lg"
        onClick={goHome}
      >
        🚀 Online Quiz App
      </h1>
      
      <button
        className="btn btn-neutral btn-sm md:btn-md rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
        onClick={goHome}
      >
        🏠 Bosh sahifa
      </button>
    </header>
  );
}

export default Header;
