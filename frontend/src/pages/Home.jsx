// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold mb-4">Hogwarts Experience</h1>
        <p className="mb-6">Live your Hogwarts journey — start with the Sorting Ceremony.</p>
        <div className="flex justify-center gap-3">
          <Link to="/sorting" className="px-4 py-2 bg-yellow-500 text-gray-900 rounded font-semibold">Go to Sorting Ceremony</Link>
        </div>
      </div>
    </div>
  );
}
