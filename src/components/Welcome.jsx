import { motion } from 'framer-motion';

export default function Welcome({ onStart }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center relative">
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="text-8xl mb-8 neon-text"
      >
        ⚡
      </motion.div>
      <h1 className="text-6xl font-bold neon-text mb-4">GreenWay Mini</h1>
      <p className="text-2xl mb-12 max-w-xs">Вибирай станцію — я запущу зарядку за секунду</p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="gradient-btn text-2xl px-16 py-7 rounded-3xl shadow-2xl"
      >
        СТАРТ →
      </motion.button>
    </div>
  );
}