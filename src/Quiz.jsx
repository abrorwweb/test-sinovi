import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
import Result from "./Result";

const quizData = {
  frontend: [
    { question: "React nima?", options: ["Backend kutubxonasi", "Frontend kutubxonasi", "CSS framework", "Database"], correct: "Frontend kutubxonasi" },
    { question: "HTML to'liq shakli nima?", options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "High Text Machine Language", "None"], correct: "Hyper Text Markup Language" },
    { question: "CSSda background rangni o‘zgartirish uchun qaysi property ishlatiladi?", options: ["color", "background-color", "bgcolor", "style"], correct: "background-color" },
    { question: "Tailwind CSS nima?", options: ["Backend tili", "UI framework", "Hosting xizmati", "JavaScript kutubxonasi"], correct: "UI framework" },
    { question: "Reactda state qanday yaratiladi?", options: ["useEffect", "useState", "useRef", "useContext"], correct: "useState" },
    { question: "Responsive dizayn uchun qaysi texnologiya ishlatiladi?", options: ["API", "Media Queries", "Bootstrap", "None"], correct: "Media Queries" },
    { question: "DaisyUI nima?", options: ["React kutubxonasi", "Tailwind uchun komponent kutubxonasi", "Database", "Server"], correct: "Tailwind uchun komponent kutubxonasi" },
    { question: "Reactda routing uchun qaysi kutubxona ishlatiladi?", options: ["react-router-dom", "express", "next-auth", "socket.io"], correct: "react-router-dom" },
    { question: "useEffect hook qachon ishga tushadi?", options: ["Page reloadda", "State o'zgarganda", "Component o'chirilganda", "Hech qachon"], correct: "State o'zgarganda" },
    { question: "HTML5da yangi qaysi tag qo‘shilgan?", options: ["<div>", "<header>", "<section>", "<footer>"], correct: "<section>" },
  ],
  backend: [
    { question: "Node.js nima?", options: ["Frontend framework", "Backend runtime", "Database", "Library"], correct: "Backend runtime" },
    { question: "Express.js qaysi texnologiya uchun ishlatiladi?", options: ["Frontend", "Backend", "Mobile", "Desktop"], correct: "Backend" },
    { question: "MongoDB qaysi turdagi database?", options: ["SQL", "NoSQL", "GraphQL", "None"], correct: "NoSQL" },
    { question: "REST API nima?", options: ["Database turi", "Data uzatish usuli", "UI framework", "Server til"], correct: "Data uzatish usuli" },
    { question: "JWT nimani anglatadi?", options: ["JavaScript Web Token", "JSON Web Token", "Java Web Tracker", "None"], correct: "JSON Web Token" },
    { question: "Backend server yaratish uchun Node.js da qaysi modul ishlatiladi?", options: ["http", "fs", "path", "os"], correct: "http" },
    { question: "SQL database misol?", options: ["MongoDB", "PostgreSQL", "Redis", "Firebase"], correct: "PostgreSQL" },
    { question: "ORM nima qiladi?", options: ["Backend server quradi", "Frontend sahifa yasaydi", "Database bilan ishlashni osonlashtiradi", "Hosting qiladi"], correct: "Database bilan ishlashni osonlashtiradi" },
    { question: "Socket.io qaysi sohada ishlatiladi?", options: ["Static sayt", "Real-time communication", "Authentication", "Database"], correct: "Real-time communication" },
    { question: "Backend va Frontendni birlashtirish uchun nima kerak?", options: ["API", "HTML", "CSS", "Webpack"], correct: "API" },
  ],
};

function Quiz({ category, goHome }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const questions = quizData[category];

  const handleAnswer = (option) => {
    if (option === questions[current].correct) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="w-full max-w-md p-6 bg-base-100 rounded-2xl shadow-xl">
      <button className="btn btn-outline mb-6" onClick={goHome}>← Orqaga</button>
      {!finished ? (
        <QuestionCard
          questionData={questions[current]}
          handleAnswer={handleAnswer}
          questionNumber={current + 1}
          totalQuestions={questions.length}
        />
      ) : (
        <Result score={score} total={questions.length} goHome={goHome} />
      )}
    </div>
  );
}

export default Quiz;
