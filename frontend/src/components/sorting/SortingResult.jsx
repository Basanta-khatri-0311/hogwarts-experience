import React from "react";
import { motion } from "framer-motion";

const houseData = {
  Gryffindor: {
    color: "from-yellow-500 via-red-600 to-red-700",
    desc: "Bravery, daring, nerve and chivalry."
  },
  Slytherin: {
    color: "from-green-500 via-green-700 to-green-800",
    desc: "Ambition, cunning, and resourcefulness."
  },
  Ravenclaw: {
    color: "from-blue-500 via-blue-700 to-blue-800",
    desc: "Wit, learning, wisdom, and creativity."
  },
  Hufflepuff: {
    color: "from-yellow-400 via-yellow-500 to-yellow-600",
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
      className={`max-w-2xl mx-auto p-8 rounded-2xl shadow-2xl text-white bg-gradient-to-br ${info.color} border border-hogwarts-gold relative overflow-hidden`}
    >
      {/* Overlay for extra contrast */}
      <div className="absolute inset-0 bg-black/25 rounded-2xl pointer-events-none"></div>

      <h2 className="text-4xl font-bold mb-3 drop-shadow-lg relative">{house}</h2>
      <p className="text-lg opacity-90 relative">{info.desc}</p>

      <motion.div whileHover={{ scale: 1.05,  }} className="mt-6 relative">
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
