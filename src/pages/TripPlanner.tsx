import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Circle, Popup, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import { delhiMetroStations } from '../data/stations';
import { findNearestStations, isInZone } from '../utils/zoneUtils';
import LocationSearch from '../components/trip/LocationSearch';
import ZoneResult from '../components/trip/ZoneResult';
import toast from 'react-hot-toast';

const TripPlanner: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<{
    lat: number;
    lon: number;
    nearestStations: typeof delhiMetroStations;
  } | null>(null);

  const customIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  const handleSearch = async (location: string) => {
    setIsLoading(true);
    try {
      // Simulating geocoding API call with random coordinates in Delhi
      const lat = 28.6139 + (Math.random() - 0.5) * 0.1;
      const lon = 77.2090 + (Math.random() - 0.5) * 0.1;
      
      const nearest = findNearestStations(lat, lon, delhiMetroStations);
      setSearchResult({ lat, lon, nearestStations: nearest });
    } catch (error) {
      toast.error('Error finding location. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Find Your LRTS Zone
          </h1>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Enter your location to find the nearest LRTS zone and available services
          </p>
        </motion.div>

        <div className="mt-12 max-w-3xl mx-auto">
          <LocationSearch onSearch={handleSearch} isLoading={isLoading} />

          {searchResult && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 space-y-6"
            >
              <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
                <MapContainer
                  center={[searchResult.lat, searchResult.lon]}
                  zoom={13}
                  className="h-full w-full"
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  />
                  {searchResult.nearestStations.map((station) => (
                    <React.Fragment key={station.name}>
                      <Marker
                        position={[station.lat, station.lng]}
                        icon={customIcon}
                      >
                        <Popup>{station.name}</Popup>
                      </Marker>
                      <Circle
                        center={[station.lat, station.lng]}
                        radius={2000}
                        pathOptions={{
                          color: '#8b5cf6',
                          fillColor: '#8b5cf6',
                          fillOpacity: 0.1,
                        }}
                      />
                    </React.Fragment>
                  ))}
                  <Marker
                    position={[searchResult.lat, searchResult.lon]}
                    icon={customIcon}
                  >
                    <Popup>Your Location</Popup>
                  </Marker>
                </MapContainer>
              </div>

              <div className="space-y-4">
                {searchResult.nearestStations.map((station) => (
                  <ZoneResult
                    key={station.name}
                    station={station}
                    distance={station.distance!}
                    isInZone={isInZone(searchResult.lat, searchResult.lon, station)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TripPlanner;