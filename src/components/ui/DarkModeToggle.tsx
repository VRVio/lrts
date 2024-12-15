import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../../hooks/useDarkMode';

const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full bg-opacity-20 hover:bg-opacity-30 transition-colors duration-200"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-slate-400" />
      )}
    </motion.button>
  );
};

export default DarkModeToggle;