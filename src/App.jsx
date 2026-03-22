import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [screen, setScreen] = useState('welcome');

  // Removed Telegram SDK code for GitHub Pages deployment

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Космічний бек з тихими зірками */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-indigo-950 via-purple-950 to-black" />
        <div className="absolute inset-0 opacity-30 animate-twinkle">
          {/* Просто CSS-зірки */}
          <div className="absolute top-10 left-20 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
          <div className="absolute top-40 right-32 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
          {/* Додай ще 5–10 div-ів для зірок, якщо хочеш */}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {screen === 'welcome' && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-9xl mb-8 drop-shadow-[0_0_30px_#00ffff]"
            >
              ⚡
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              GreenWay Mini
            </h1>
            <p className="text-2xl md:text-3xl mb-12 max-w-md text-gray-300">
              Привіт! Вибирай станцію — я запущу зарядку миттєво
            </p>
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0 0 40px #00ffff" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setScreen('city')}
              className="px-12 py-6 text-3xl font-bold rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-2xl hover:shadow-[0_0_60px_#00ffff] transition-shadow"
            >
              СТАРТ →
            </motion.button>
          </motion.div>
        )}

        {screen === 'city' && (
          <motion.div
            key="city"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="relative z-10 min-h-screen flex items-center justify-center px-6"
          >
            <div className="glass p-12 rounded-3xl text-center max-w-lg border border-cyan-500/30 shadow-[0_0_40px_rgba(0,255,255,0.2)]">
              <div className="text-8xl mb-8">🇵🇱</div>
              <h2 className="text-6xl font-bold mb-6 neon-text">Варшава</h2>
              <p className="text-2xl mb-10 text-gray-300">12 станцій • 140+ кВт • 24/7</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => alert('Перехід до списку станцій — додаємо далі')}
                className="px-16 py-6 text-3xl font-bold rounded-full gradient-btn shadow-2xl"
              >
                Вибрати →
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;