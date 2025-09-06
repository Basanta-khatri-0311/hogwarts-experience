// src/components/sorting/SortingQuiz.jsx
import React, { useState } from "react";
import { calculateHouse } from "../../utils/calculateHouse";
import { motion, AnimatePresence } from "framer-motion";

export default function SortingQuiz({ questions = [], onFinish }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});

  const q = questions[current];

  function selectAnswer(house) {
    setAnswers(prev => ({ ...prev, [q.id]: house }));
  }

  function next() {
    if (!answers[q.id]) return;
    setCurrent(c => Math.min(c + 1, questions.length - 1));
  }

  function prev() {
    setCurrent(c => Math.max(0, c - 1));
  }

  function submit() {
    if (Object.keys(answers).length !== questions.length) {
      alert("Please answer all questions before submitting.");
      return;
    }
    const house = calculateHouse(answers);
    onFinish(house);
  }

  return (
    <div className="max-w-3xl mx-auto p-6 rounded-2xl backdrop-blur-lg bg-white/10 shadow-lg text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <div className="mb-6">
            <div className="text-sm text-gray-400">
              Question {current + 1} / {questions.length}
            </div>
            <h3 className="text-2xl font-bold mt-3 text-yellow-400 drop-shadow-md">
              {q.question}
            </h3>
          </div>

          <div className="grid gap-4">
            {q.options.map(opt => {
              const selected = answers[q.id] === opt.house;
              return (
                <motion.button
                  key={opt.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => selectAnswer(opt.house)}
                  className={`p-4 rounded-lg border transition-all duration-200 
                    ${
                      selected
                        ? "border-yellow-400 bg-yellow-500/20 shadow-md"
                        : "border-gray-700 hover:bg-white/5"
                    }`}
                >
                  <div className="font-medium">{opt.text}</div>
                </motion.button>
              );
            })}
          </div>

          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prev}
              disabled={current === 0}
              className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-40 transition"
            >
              Previous
            </button>

            {current < questions.length - 1 ? (
              <button
                onClick={next}
                className="px-6 py-2 rounded-lg bg-yellow-500 text-gray-900 font-semibold hover:bg-yellow-400 transition"
              >
                Next
              </button>
            ) : (
              <button
                onClick={submit}
                className="px-6 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-500 transition"
              >
                Submit & Reveal House
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
