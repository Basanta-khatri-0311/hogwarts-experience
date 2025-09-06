import React from "react";
import { motion } from "framer-motion";

export default function SortingIntro({ onStart }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-2xl mx-auto p-8 rounded-2xl backdrop-blur-md bg-hogwarts-bg/70 text-white text-center shadow-xl border border-hogwarts-gold relative overflow-hidden"
    >
      {/* Darker overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20 rounded-2xl pointer-events-none"></div>

      <h2 className="text-4xl font-bold mb-4 text-hogwarts-gold drop-shadow-[0_0_8px_rgba(250,204,21,0.7)] relative">
        The Sorting Ceremony
      </h2>
      <p className="mb-6 text-hogwarts-stone-dark leading-relaxed drop-shadow-[0_0_4px_rgba(0,0,0,0.5)] relative">
        Welcome to Hogwarts! Answer these magical questions and let the Sorting Hat 
        reveal where you truly belong.
      </p>
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px #facc15, 0 0 30px #fbbf24" }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="px-6 py-3 bg-hogwarts-gold text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition relative"
      >
        Begin Ceremony
      </motion.button>
    </motion.div>
  );
}
