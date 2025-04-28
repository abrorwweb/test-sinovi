import React from "react";

function QuestionCard({ questionData, handleAnswer, questionNumber, totalQuestions }) {
  return (
    <div className="w-full max-w-2xl p-8 bg-white rounded-3xl shadow-2xl flex flex-col gap-8 text-center">
      <h2 className="text-3xl font-extrabold text-primary">
        Savol {questionNumber} / {totalQuestions}
      </h2>

      <p className="text-lg md:text-xl font-semibold text-gray-700">
        {questionData.question}
      </p>

      <div className="flex flex-col gap-4">
        {questionData.options.map((option, idx) => (
          <button
            key={idx}
            className="btn btn-primary rounded-full hover:scale-105 hover:shadow-lg transition-all"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
