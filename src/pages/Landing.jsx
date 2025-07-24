import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaStore } from "react-icons/fa";

const Landing = () => {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogin(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-800 via-purple-900 to-indigo-950 px-4 text-white relative overflow-hidden">
      {!showLogin ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col items-center space-y-5 text-center"
        >
          <FaStore className="text-7xl text-yellow-400 drop-shadow-xl" />
          <h1 className="text-5xl font-extrabold">
            <span className="text-white">Ready</span>
            <span className="text-yellow-400">9ja</span>
          </h1>
          <p className="text-sm font-light tracking-wide text-gray-200">
            Your Trusted Marketplace
          </p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white text-gray-800 p-10 rounded-3xl shadow-2xl w-full max-w-sm"
        >
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
            Welcome to Ready9ja
          </h2>

          <div className="space-y-4">
            <Link
              to="/login"
              className="block w-full text-center bg-purple-700 text-white py-3 rounded-xl font-semibold hover:bg-purple-800 transition-all duration-300"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="block w-full text-center border border-purple-600 text-purple-700 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300"
            >
              Register
            </Link>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Powered by <span className="font-semibold text-purple-700">Ready9ja</span>
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Landing;
