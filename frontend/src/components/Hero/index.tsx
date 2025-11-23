// src/components/Hero/index.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <motion.div
      className="relative text-center text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-24">
        <motion.h1
          className="mb-4 text-5xl font-extrabold tracking-tight md:text-6xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Real-time Sign Language Detection
        </motion.h1>
        <motion.p
          className="mx-auto mb-8 max-w-2xl text-lg md:text-xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Break communication barriers with our cutting-edge AI. Use your
          camera to translate sign language gestures into text, instantly.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            to="/demo"
            className="inline-block transform rounded-full bg-primary px-8 py-3 text-lg font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            Start Demo
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
