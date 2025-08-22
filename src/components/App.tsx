import React, { useState } from "react";
import { motion } from "framer-motion";

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.setAttribute(
      "data-theme",
      theme === "light" ? "dark" : "light"
    );
  };

  return (
    <div className="min-h-screen bg-base-100">
      <div className="navbar bg-base-200 shadow-lg">
        <div className="navbar-start">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-primary"
          >
            🦊 ElysiaJS + React
          </motion.div>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-primary mb-6">
            Welcome to ElysiaJS + React + Tailwind + DaisyUI + Framer Motion!
          </h1>

          <p className="text-lg text-base-content mb-8">
            This is a modern full-stack application built with cutting-edge
            technologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="card bg-base-200 shadow-xl"
            >
              <div className="card-body">
                <h2 className="card-title text-primary">🚀 ElysiaJS</h2>
                <p>Fast, type-safe web framework for Bun</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="card bg-base-200 shadow-xl"
            >
              <div className="card-body">
                <h2 className="card-title text-secondary">⚛️ React</h2>
                <p>Modern UI library for building user interfaces</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="card bg-base-200 shadow-xl"
            >
              <div className="card-body">
                <h2 className="card-title text-accent">
                  🎨 Tailwind + DaisyUI
                </h2>
                <p>Utility-first CSS framework with beautiful components</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="card bg-base-200 shadow-xl max-w-md mx-auto"
          >
            <div className="card-body text-center">
              <h3 className="card-title justify-center text-lg">
                Counter Example
              </h3>
              <p className="text-3xl font-bold text-primary mb-4">{count}</p>
              <div className="card-actions justify-center">
                <button
                  className="btn btn-primary"
                  onClick={() => setCount(count - 1)}
                >
                  -
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="mt-8"
          >
            <div className="alert alert-info shadow-lg max-w-md mx-auto">
              <div>
                <span>
                  ✨ Try hovering over the cards and clicking the counter
                  buttons!
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
