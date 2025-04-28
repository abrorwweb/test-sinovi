import React from "react";

function Result({ score, total, goHome }) {
  return (
    <div className="w-full max-w-md p-10 bg-white rounded-3xl shadow-2xl flex flex-col items-center gap-8 text-center animate-fade-up">
      
      <h2 className="text-4xl font-extrabold text-success drop-shadow-md">
        Test yakunlandi! 🎉
      </h2>

      <p className="text-lg md:text-xl text-gray-700 font-semibold">
        Siz {total} ta savoldan <span className="text-primary">{score}</span> tasiga to‘g‘ri javob berdingiz.
      </p>

      <div className="flex flex-col gap-4 w-full">
        <button
          className="btn btn-accent btn-lg rounded-full hover:scale-110 hover:shadow-xl transition-all duration-300"
          onClick={goHome}
        >
          🔙 Bosh sahifaga qaytish
        </button>
      </div>
    </div>
  );
}

export default Result;
