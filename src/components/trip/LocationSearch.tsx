import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface LocationSearchProps {
  onSearch: (location: string) => void;
  isLoading?: boolean;
}

const LocationSearch: React.FC<LocationSearchProps> = ({ onSearch, isLoading }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      onSearch(location.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter your location (e.g., Connaught Place)"
          className={clsx(
            "w-full px-4 py-3 pl-12 rounded-lg",
            "bg-white dark:bg-gray-800",
            "border border-gray-300 dark:border-gray-700",
            "focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
            "focus:border-transparent",
            "placeholder-gray-500 dark:placeholder-gray-400",
            "text-gray-900 dark:text-white"
          )}
        />
        <MapPin className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isLoading}
          className={clsx(
            "absolute right-2 top-2",
            "px-4 py-1.5 rounded-md",
            "bg-primary-600 dark:bg-primary-500",
            "text-white",
            "hover:bg-primary-700 dark:hover:bg-primary-600",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "transition-colors duration-200"
          )}
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <Search className="w-5 h-5" />
          )}
        </motion.button>
      </div>
    </form>
  );
};

export default LocationSearch;