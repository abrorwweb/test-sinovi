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
  logic: [
    {
      question: "Bir kishi dushanba kuni ertalab Toshkentdan Samarqandga yo‘lga chiqdi. U safarda 2 kun bo‘ldi. U qaysi kuni qaytib keldi?",
      options: ["Dushanba", "Chorshanba", "Payshanba", "Seshanba"],
      correct: "Chorshanba"
    },
    {
      question: "3 ta aka-uka bor: Alisher, Botir va Doston. Alisher Dostonning akasi emas. Botir esa Alisherning akasi. Kim eng katta?",
      options: ["Alisher", "Botir", "Doston", "Aniqlab bo‘lmaydi"],
      correct: "Botir"
    },
    {
      question: "Sizda 5 ta olma bor. 2 tasini do‘stingizga berdingiz. Sizda nechta olma qoldi?",
      options: ["3 ta", "2 ta", "5 ta", "0 ta"],
      correct: "3 ta"
    },
    {
      question: "Agar bugun dushanba bo‘lsa, 100 kundan keyin qaysi kun bo‘ladi?",
      options: ["Payshanba", "Chorshanba", "Juma", "Yakshanba"],
      correct: "Chorshanba"
    },
    {
      question: "4, 9, 16, 25, ? Keyingi son nima?",
      options: ["36", "30", "33", "49"],
      correct: "36"
    },
    {
      question: "5 ta oddiy odam 5 ta uy qursa, 10 ta odam 10 ta uy qurishga qancha vaqt ketadi?",
      options: ["Xuddi o‘sha vaqt", "Ko‘proq vaqt", "Kamroq vaqt", "Aniqlab bo‘lmaydi"],
      correct: "Xuddi o‘sha vaqt"
    },
    {
      question: "Agar soat 3:15 bo‘lsa, minut strelkasi bilan soat strelkasi orasidagi burchak necha gradus?",
      options: ["7.5°", "0°", "45°", "30°"],
      correct: "7.5°"
    },
    {
      question: "Sizga 1 kg temir va 1 kg paxta berildi. Qaysi biri og‘ir?",
      options: ["Temir", "Paxta", "Ikkalasi bir xil", "Aniqlab bo‘lmaydi"],
      correct: "Ikkalasi bir xil"
    },
    {
      question: "Bir bola haftaning faqat 3 kunida yolg‘on gapiradi: Dushanba, Seshanba, Chorshanba. Qolgan kunlari rost gapiradi. Agar bola payshanba kuni 'Men kecha yolg‘on gapirdim' desa, u rost gapiryaptimi?",
      options: ["Ha", "Yo‘q", "Ikkalasiyam emas", "Aniqlab bo‘lmaydi"],
      correct: "Yo‘q"
    },
    {
      question: "Kimdir: 'Men kecha men bilan ertaga uchrashadigan odam bilan uchrashdim'. Bu gap haqiqat bo‘lishi uchun bugun haftaning qaysi kuni bo‘lishi kerak?",
      options: ["Payshanba", "Juma", "Shanba", "Yakshanba"],
      correct: "Juma"
    },
    {
      question: "Agar bir oila har 4 kunda bir marta non sotib olsa, 28 kunda nechta non sotib olishadi?",
      options: ["6", "7", "8", "5"],
      correct: "7"
    },
    {
      question: "1, 1, 2, 3, 5, 8, ?, 21. Bo‘sh joyga nima yoziladi?",
      options: ["13", "14", "15", "12"],
      correct: "13"
    },
    {
      question: "Bir odam o‘zining rasmini ko‘rsatib: 'Bu mening otamning yagona o‘g‘lining o‘g‘li' dedi. Bu odam suratdagi bolaga kim bo‘ladi?",
      options: ["Ota", "Amaki", "O‘g‘il", "Bobosi"],
      correct: "Ota"
    },
    {
      question: "Agar 1 ta mashina 4 ta g‘ildirakka ega bo‘lsa, 5 ta mashinada nechta g‘ildirak bo‘ladi?",
      options: ["20", "25", "15", "10"],
      correct: "20"
    },
    {
      question: "Agar do‘stingiz sizga 2 ta qalam bersa va sizda 3 ta bo‘lsa, sizda nechta qalam bo‘ladi?",
      options: ["5", "2", "3", "7"],
      correct: "5"
    },
    {
      question: "Har bir oyda kamida nechta 28 kunli kun bor?",
      options: ["1", "0", "12", "6"],
      correct: "12"
    },
    {
      question: "Agar bugun payshanba bo‘lsa, 3 kun oldin qaysi kun bo‘lgan?",
      options: ["Dushanba", "Yakshanba", "Seshanba", "Chorshanba"],
      correct: "Dushanba"
    },
    {
      question: "Qaysi so‘z noto‘g‘ri yozilgan bo‘lsa ham to‘g‘ri deb o‘qiladi?",
      options: ["Noto‘g‘ri", "To‘g‘ri", "So‘z", "Savol"],
      correct: "Noto‘g‘ri"
    },
    {
      question: "Soat 12 dan keyin 4 soat o‘tganda tongmi, tushmi, kechmi?",
      options: ["Tush", "Tong", "Kech", "Yarim tun"],
      correct: "Tush"
    },
    {
      question: "Agar bir necha daraxtning har birida 10 tadan qush bo‘lsa va ovchi birini otib tushirsa, nechtasi qoladi?",
      options: ["0", "9", "10", "1"],
      correct: "0"
    },
    {
      question: "Sizda 5 ta olma bor edi. 2 tasini olib ketishdi. Sizda nechta olma qoldi?",
      options: ["3 ta", "0 ta", "5 ta", "2 ta"],
      correct: "5 ta"
    },
    {
      question: "Bir oddiy xonada 3 ta chiroq, boshqa xonada ularning tugmalari. Qanday qilib 1 marta kirib, qaysi tugma qaysi chiroqqa tegishli ekanligini bilasiz?",
      options: ["Ikki marta kiraman", "Tugmalardan bittasini bosib kiraman", "Bittasini yoqib, biroz kutib, o‘chirib kiraman", "Hammasini yoqib kiraman"],
      correct: "Bittasini yoqib, biroz kutib, o‘chirib kiraman"
    },
    {
      question: "Yarim kechasi soat 12 da yomg‘ir yog‘ayapti. 72 soatdan keyin quyosh qayerdan chiqadi?",
      options: ["Sharqdan", "G‘arbdan", "Yomg‘ir yog‘ganda chiqmaydi", "Tunda quyosh chiqmaydi"],
      correct: "Sharqdan"
    },
    {
      question: "Agar 1 = 5, 2 = 25, 3 = 325, 4 = 4325, 5 = ?", 
      options: ["54325", "1", "5", "4325"],
      correct: "1"
    },
    {
      question: "Bir mashina bir shahardan boshqasiga 60 km/soat tezlikda boradi va 90 km/soat tezlikda qaytadi. O‘rtacha tezlik nechchi bo‘ladi?",
      options: ["75 km/soat", "72 km/soat", "70 km/soat", "65 km/soat"],
      correct: "72 km/soat"
    },
    {
      question: "1 ta gugurt cho‘pini sindirsam 2 bo‘lak bo‘ladi. 3 ta gugurtni 1 soniyada sindirsam, 100 ta gugurtni sindirishga qancha vaqt ketadi?",
      options: ["100 soniya", "99 soniya", "50 soniya", "1 soniya"],
      correct: "1 soniya"
    },
    {
      question: "3 ta aka-uka bor: Ali, Vali, Sodiq. Ali: “Vali yolg‘onchi”. Vali: “Sodiq yolg‘onchi”. Sodiq: “Ali va Vali ikkalasi ham yolg‘onchi”. Faqat bittasi rost gapirgan bo‘lsa, kim?",
      options: ["Ali", "Vali", "Sodiq", "Hech biri"],
      correct: "Vali"
    },
    {
      question: "1 dan 1000 gacha nechta 9 raqami bor?",
      options: ["180", "189", "200", "271"],
      correct: "189"
    },
    {
      question: "Bir odam poyezdga qarshi yurib 20 km/soat tezlikda ketmoqda. Poyezd 60 km/soat tezlikda kelmoqda. Ular orasidagi masofa 100 km. Necha soatda uchrashadi?",
      options: ["1 soat", "2 soat", "1.25 soat", "1.5 soat"],
      correct: "1.25 soat"
    },
    {
      question: "Ona 35 yoshda, farzandi 5 yoshda. Necha yil o‘tib ona yoshi farzand yoshidan 2 barobar ko‘p bo‘ladi?",
      options: ["5 yil", "10 yil", "15 yil", "20 yil"],
      correct: "10 yil"
    },
    {
      question: "Bir bola 3 daqiqada 3 sham yoqdi. 9 shamni yoqish uchun qancha vaqt ketadi?",
      options: ["9 daqiqa", "3 daqiqa", "6 daqiqa", "1 daqiqa"],
      correct: "3 daqiqa"
    },
    {
      question: "3 kishi mehmonxonaga keldi. Har biri 10 ming so‘m to‘ladi. Keyin mehmonxona egasi aytdi: faqat 25 ming to‘lash kerak edi. 5 mingni qaytardi. 3 kishi 1 mingdan oldi, 2 ming qoldi. Qayerga ketdi 1 ming?",
      options: ["Hech qayerga ketmadi", "Qaytarilmadi", "Yo‘q bo‘lib ketdi", "Xatolik bor"],
      correct: "Hech qayerga ketmadi"
    },
    {
      question: "Agar bir xonada 3 marta yarim odam bo‘lsa, bu nechta odam degani?",
      options: ["1.5 odam", "1 odam", "3 odam", "2 odam"],
      correct: "1.5 odam"
    },
    {
      question: "O‘sha narsani qancha ko‘proq olsang, shuncha katta bo‘ladi. Bu nima?",
      options: ["Yoriq", "Soyaning uzunligi", "Teshik", "Qor"],
      correct: "Teshik"
    },
    {
      question: "1 oyda eng ko‘p necha dushanba bo‘lishi mumkin?",
      options: ["4", "5", "6", "7"],
      correct: "5"
    },
    {
      question: "Bir nechta otasi va farzandlar o‘rmonga bordi, jami 4 kishi. Qanday bo‘lishi mumkin?",
      options: ["3 ota va 1 o‘g‘il", "1 ota, 2 o‘g‘il, 1 nabira", "2 ota va 2 o‘g‘il", "Bular mumkin emas"],
      correct: "2 ota va 2 o‘g‘il"
    },
    {
      question: "Birinchi raqam 3 ga bo‘linadi, ikkinchisi esa yo‘q. Ammo ikkalasining yig‘indisi ham 3 ga bo‘linadi. Qanday bo‘lishi mumkin?",
      options: ["Ikkala son 3 ga bo‘linadi", "Ulardan biri manfiy", "Ulardan biri 0", "Ulardan biri 3 emas"],
      correct: "Ulardan biri manfiy"
    },
    {
      question: "Agar bugun payshanba bo‘lsa, 100 kun keyin qaysi hafta kuni bo‘ladi?",
      options: ["Shanba", "Dushanba", "Yakshanba", "Payshanba"],
      correct: "Shanba"
    },
    {
      question: "Soat 3:15 da soat minut va soat strelkalari orasidagi burchak nechcha gradus?",
      options: ["0°", "7.5°", "45°", "90°"],
      correct: "7.5°"
    },
    {
      question: "3 ta do‘st 6 ta olmani teng taqsimlashi kerak. Qanday bo‘lishi mumkin?",
      options: ["Har biri 1 ta oladi", "Har biri 2 ta oladi", "Har biri 2/3 oladi", "Har biri 1.5 ta oladi"],
      correct: "Har biri 2 ta oladi"
    },
  ]
  
};

function Quiz({ category, goHome }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [feedback, setFeedback] = useState(""); // Javob holatini saqlaydi

  const questions = quizData[category];

  const handleAnswer = (option) => {
    const isCorrect = option === questions[current].correct;

    if (isCorrect) {
      setScore(score + 1);
      setFeedback("✅ To‘g‘ri javob!");
    } else {
      setFeedback("❌ Noto‘g‘ri. To‘g‘ri javob: " + questions[current].correct);
    }

    setTimeout(() => {
      setFeedback(""); // Fikrni tozalash
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
      } else {
        setFinished(true);
      }
    }, 1500); // 1.5 soniyadan keyin keyingi savol
  };

  return (
    <div className="w-full max-w-xl p-6 bg-base-100 rounded-2xl shadow-xl">
      <button className="btn btn-outline mb-6" onClick={goHome}>
        ← Orqaga
      </button>

      {!finished ? (
        <>
          <QuestionCard
            questionData={questions[current]}
            handleAnswer={handleAnswer}
            questionNumber={current + 1}
            totalQuestions={questions.length}
          />

          {feedback && (
            <div className={`mt-4 p-4 rounded-lg text-lg font-semibold ${
              feedback.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}>
              {feedback}
            </div>
          )}
        </>
      ) : (
        <Result score={score} total={questions.length} goHome={goHome} />
      )}
    </div>
  );
}

export default Quiz;