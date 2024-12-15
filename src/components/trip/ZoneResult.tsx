import React from 'react';
import { MapPin, Clock, Users, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';
import { MetroStation } from '../../data/stations';
import clsx from 'clsx';

interface ZoneResultProps {
  station: MetroStation;
  distance: number;
  isInZone: boolean;
}

const ZoneResult: React.FC<ZoneResultProps> = ({ station, distance, isInZone }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={clsx(
        "p-6 rounded-lg shadow-lg",
        "bg-white dark:bg-gray-800",
        "border",
        isInZone
          ? "border-green-500 dark:border-green-400"
          : "border-gray-200 dark:border-gray-700"
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {station.name}
          </h3>
          <p className={clsx(
            "mt-1 text-sm",
            isInZone
              ? "text-green-600 dark:text-green-400"
              : "text-gray-600 dark:text-gray-400"
          )}>
            {isInZone ? "You're in this zone!" : "Nearest LRTS zone"}
          </p>
        </div>
        <div className="flex items-center space-x-1 text-primary-600 dark:text-primary-400">
          <Navigation className="w-4 h-4" />
          <span className="text-sm font-medium">{distance.toFixed(1)} km</span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="flex items-center space-x-2">
          <Users className="w-5 h-5 text-primary-500" />
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {station.rickshaws} rickshaws
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-primary-500" />
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {station.waitTime} min wait
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-primary-500" />
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {station.landmarks} landmarks
          </span>
        </div>
      </div>

      <div className={clsx(
        "mt-4 p-3 rounded-md text-sm",
        isInZone
          ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
          : "bg-gray-50 dark:bg-gray-700/20 text-gray-700 dark:text-gray-300"
      )}>
        {isInZone
          ? "LRTS services are available in your area. You can book a ride right away!"
          : `Head to ${station.name} station to access LRTS services. It's just ${distance.toFixed(1)} km away.`}
      </div>
    </motion.div>
  );
};

export default ZoneResult;