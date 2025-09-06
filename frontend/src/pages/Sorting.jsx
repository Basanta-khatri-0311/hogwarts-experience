// src/pages/Sorting.jsx
import React, { useState } from "react";
import SortingIntro from "../components/sorting/SortingIntro";
import SortingQuiz from "../components/sorting/SortingQuiz";
import SortingResult from "../components/sorting/SortingResult";
import questions from "../data/sortingQuestions";
import { useNavigate } from "react-router-dom";

export default function SortingPage() {
  const [step, setStep] = useState("intro"); // intro | quiz | result
  const [resultHouse, setResultHouse] = useState(null);
  const navigate = useNavigate();

  function start() {
    setStep("quiz");
  }

  function finish(house) {
    setResultHouse(house);
    setStep("result");
    // TODO: later save to backend (firebase) here
  }

  function continueToDash() {
    // for now, send user to homepage or /dashboard later
    navigate("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-[#0b0c10] via-[#1f2833] to-[#0b0c10]">

      <div className="w-full">
        {step === "intro" && <SortingIntro onStart={start} />}
        {step === "quiz" && <SortingQuiz questions={questions} onFinish={finish} />}
        {step === "result" && <SortingResult house={resultHouse} onContinue={continueToDash} />}
      </div>
    </div>
  );
}
