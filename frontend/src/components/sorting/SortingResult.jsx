// src/components/sorting/SortingResult.jsx
import React from "react";
import { motion } from "framer-motion";

const houseData = {
  Gryffindor: {
    color: "from-red-700 to-red-900",
    desc: "Bravery, daring, nerve and chivalry."
  },
  Slytherin: {
    color: "from-green-700 to-green-900",
    desc: "Ambition, cunning, and resourcefulness."
  },
  Ravenclaw: {
    color: "from-blue-700 to-blue-900",
    desc: "Wit, learning, wisdom, and creativity."
  },
  Hufflepuff: {
    color: "from-yellow-600 to-yellow-800",
    desc: "Dedication, patience, loyalty, and fair play."
  }
};

export default function SortingResult({ house, onContinue }) {
  const info = houseData[house] || houseData.Gryffindor;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className={`max-w-2xl mx-auto p-8 rounded-2xl shadow-2xl text-white bg-gradient-to-br ${info.color}`}
    >
      <h2 className="text-4xl font-bold mb-3">{house}</h2>
      <p className="text-lg opacity-90">{info.desc}</p>

      <motion.div whileHover={{ scale: 1.05 }} className="mt-6">
        <button
          onClick={onContinue}
          className="px-6 py-3 bg-gray-900 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Continue to Dashboard
        </button>
      </motion.div>
    </motion.div>
  );
}
