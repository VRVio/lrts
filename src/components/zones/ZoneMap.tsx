import React, { useState } from 'react';
import { MapContainer, TileLayer, Circle, Popup, Marker, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Users, Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { delhiMetroStations } from '../../data/stations';

const ZoneMap: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  const customIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  const ZoomToZone = ({ stationName }: { stationName: string | null }) => {
    const map = useMap();
    React.useEffect(() => {
      if (stationName) {
        const station = delhiMetroStations.find(s => s.name === stationName);
        if (station) {
          map.setView([station.lat, station.lng], 14);
        }
      }
    }, [stationName, map]);
    return null;
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {delhiMetroStations.map((station) => (
          <button
            key={station.name}
            onClick={() => setSelectedZone(station.name)}
            className={`px-3 py-2 text-sm rounded-full transition-all ${
              selectedZone === station.name
                ? 'bg-indigo-600 text-white'
                : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
            }`}
          >
            {station.name}
          </button>
        ))}
      </div>
      
      <div className="h-[600px] w-full rounded-lg overflow-hidden shadow-lg">
        <MapContainer
          center={[28.6139, 77.2090]}
          zoom={11}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <ZoomToZone stationName={selectedZone} />
          {delhiMetroStations.map((station) => (
            <React.Fragment key={station.name}>
              <Marker 
                position={[station.lat, station.lng]} 
                icon={customIcon}
              >
                <Popup>
                  <div className="p-2 min-w-[200px]">
                    <h3 className="font-bold text-lg text-indigo-600">{station.name}</h3>
                    <div className="space-y-2 mt-2">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-indigo-500" />
                        <span>{station.rickshaws} rickshaws available</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-indigo-500" />
                        <span>{station.waitTime} min average wait</span>
                      </div>
                      <div className="flex items-center">
                        {station.demand === 'High' ? (
                          <AlertTriangle className="w-4 h-4 mr-2 text-red-500" />
                        ) : (
                          <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                        )}
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          station.demand === 'High' 
                            ? 'bg-red-100 text-red-800'
                            : station.demand === 'Medium'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {station.demand} Demand
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t">
                      <p className="text-sm text-gray-600">
                        {station.landmarks} landmarks in zone
                      </p>
                    </div>
                  </div>
                </Popup>
              </Marker>
              <Circle
                center={[station.lat, station.lng]}
                radius={2000}
                pathOptions={{
                  fillColor: selectedZone === station.name ? '#4F46E5' : '#6366F1',
                  fillOpacity: selectedZone === station.name ? 0.3 : 0.1,
                  color: selectedZone === station.name ? '#4F46E5' : '#6366F1',
                  weight: selectedZone === station.name ? 2 : 1,
                }}
              />
            </React.Fragment>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default ZoneMap;