// src/components/sorting/SortingIntro.jsx
import React from "react";
import { motion } from "framer-motion";

export default function SortingIntro({ onStart }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto p-8 rounded-2xl backdrop-blur-md bg-white/10 text-white text-center shadow-lg"
    >
      <h2 className="text-4xl font-bold mb-4 text-yellow-400 drop-shadow">
        The Sorting Ceremony
      </h2>
      <p className="mb-6 text-gray-300 leading-relaxed">
        Welcome to Hogwarts! Answer these magical questions and let the Sorting Hat 
        reveal where you truly belong.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition"
      >
        Begin Ceremony
      </motion.button>
    </motion.div>
  );
}
