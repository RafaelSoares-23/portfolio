"use client";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <section className="flex flex-col justify-center items-center h-screen text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Olá, eu sou <span className="text-sky-400">Rafael Soares</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-400 mt-4"
      >
        Fullstack Developer • C# · React · SQL · Python
      </motion.p>
    </section>
  );
}
