import React, { useState } from "react";
import Quiz from "./Quiz";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [category, setCategory] = useState("");

  const goHome = () => {
    setCategory("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-200 via-sky-300 to-purple-300">
      <Header goHome={goHome} />
      
      <main className="flex-1 flex items-center justify-center p-6">
        {!category ? (
          <div className="flex flex-col items-center gap-10 p-10 bg-white rounded-3xl shadow-2xl animate-fade-down w-full max-w-md">
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-lg">
              Soha tanlang 🚀
            </h1>

            <div className="flex flex-col gap-6 w-full">
              <button
                className="btn btn-primary btn-lg rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300"
                onClick={() => setCategory("frontend")}
              >
                🌟 Frontend
              </button>
              <button
                className="btn btn-accent btn-lg rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300"
                onClick={() => setCategory("backend")}
              >
                💻 Backend
              </button>
            </div>

            <p className="mt-6 text-gray-600 text-sm italic">
              "Test orqali bilimlaringizni sinang!"
            </p>
          </div>
        ) : (
          <Quiz category={category} goHome={goHome} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
