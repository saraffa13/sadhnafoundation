import React, { useState } from "react";
import { motion } from "framer-motion";

const Donate = () => {
  const [customAmount, setCustomAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(null);

  const handleDonate = () => {
    const amount = selectedAmount || customAmount;
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount to donate.");
      return;
    }
    alert(`Thank you for donating ₹${amount}!`);
    setCustomAmount("");
    setSelectedAmount(null);
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center text-gray-800">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <motion.h1
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Donate to Sadhna Foundation
        </motion.h1>
        <motion.p
          className="text-center text-white mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Your contribution can make a difference. Choose an amount or enter a custom amount to donate.
        </motion.p>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[20, 30, 50].map((amount) => (
            <motion.button
              key={amount}
              className={`py-3 px-4 rounded-lg font-bold ${
                selectedAmount === amount
                  ? "bg-white text-indigo-600"
                  : "bg-indigo-500 hover:bg-indigo-600"
              } transition duration-300`}
              onClick={() => {
                setSelectedAmount(amount);
                setCustomAmount("");
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ₹{amount}
            </motion.button>
          ))}
        </div>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <label className="block text-white font-bold mb-2">
            Custom Amount
          </label>
          <input
            type="number"
            placeholder="Enter custom amount"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedAmount(null);
            }}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </motion.div>
        <motion.button
          className="w-full bg-white text-indigo-600 font-bold py-3 rounded-lg hover:bg-gray-100 transition duration-300"
          onClick={handleDonate}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Donate Now
        </motion.button>
      </div>
    </div>
  );
};

export default Donate;