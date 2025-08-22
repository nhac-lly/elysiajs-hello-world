import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");
  const [isLoading, setIsLoading] = useState(false);
  const [lastAction, setLastAction] = useState<string>("");

  // Initialize theme from localStorage or default
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handleCounterAction = async (action: "increment" | "decrement") => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `/${action === "increment" ? "counter" : "counter"}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ action, currentCount: count }),
        }
      );

      const data = await response.json();
      setCount(data.count);
      setLastAction(`${action}ed from ${data.previousCount} to ${data.count}`);

      // Show success feedback
      setTimeout(() => setLastAction(""), 2000);
    } catch (error) {
      console.error("Error updating counter:", error);
      setLastAction(
        `Error: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  const toggleTheme = async () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setIsLoading(true);

    try {
      const response = await fetch("/theme", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ theme: newTheme }),
      });

      const data = await response.json();
      setTheme(newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      setLastAction(data.message);

      // Show success feedback
      setTimeout(() => setLastAction(""), 2000);
    } catch (error) {
      console.error("Error changing theme:", error);
      setLastAction(
        `Error changing theme: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    } finally {
      setIsLoading(false);
    }
  };

  const testEndpoint = async (endpoint: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ test: true }),
      });

      const data = await response.json();
      setLastAction(`${endpoint}: ${data.message}`);

      // Show success feedback
      setTimeout(() => setLastAction(""), 3000);
    } catch (error) {
      console.error(`Error testing ${endpoint}:`, error);
      setLastAction(
        `Error testing ${endpoint}: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    } finally {
      setIsLoading(false);
    }
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
          <button
            className={`btn btn-ghost btn-circle ${isLoading ? "loading" : ""}`}
            onClick={toggleTheme}
            disabled={isLoading}
          >
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
            Welcome to ElysiaJS + React + Tailwind CSS 4 + DaisyUI + Framer
            Motion!
          </h1>

          <p className="text-lg text-base-content mb-8">
            This is a modern full-stack application built with cutting-edge
            technologies using Remix-style mixed client and API routes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="card bg-base-200 shadow-xl cursor-pointer"
              onClick={() => testEndpoint("hello")}
            >
              <div className="card-body">
                <h2 className="card-title text-primary">🚀 ElysiaJS</h2>
                <p>Fast, type-safe web framework for Bun</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-sm btn-primary">Test API</button>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="card bg-base-200 shadow-xl cursor-pointer"
              onClick={() => testEndpoint("test")}
            >
              <div className="card-body">
                <h2 className="card-title text-secondary">⚛️ React</h2>
                <p>Modern UI library for building user interfaces</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-sm btn-secondary">Test API</button>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="card bg-base-200 shadow-xl cursor-pointer"
              onClick={() => testEndpoint("hau")}
            >
              <div className="card-body">
                <h2 className="card-title text-accent">
                  🎨 Tailwind + DaisyUI
                </h2>
                <p>Utility-first CSS framework with beautiful components</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-sm btn-accent">Test API</button>
                </div>
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
                Full-Stack Counter Example
              </h3>
              <p className="text-3xl font-bold text-primary mb-4">{count}</p>
              <div className="card-actions justify-center">
                <button
                  className={`btn btn-primary ${isLoading ? "loading" : ""}`}
                  onClick={() => handleCounterAction("decrement")}
                  disabled={isLoading}
                >
                  -
                </button>
                <button
                  className={`btn btn-primary ${isLoading ? "loading" : ""}`}
                  onClick={() => handleCounterAction("increment")}
                  disabled={isLoading}
                >
                  +
                </button>
              </div>
              <p className="text-sm text-base-content mt-2">
                Counter state is managed by the server via POST requests
              </p>
            </div>
          </motion.div>

          {lastAction && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6"
            >
              <div className="alert alert-info shadow-lg max-w-md mx-auto">
                <div>
                  <span>✨ {lastAction}</span>
                </div>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="mt-8"
          >
            <div className="alert alert-success shadow-lg max-w-md mx-auto">
              <div>
                <span>
                  🚀 Try clicking the cards to test the API endpoints, and use
                  the counter to see full-stack state management!
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
