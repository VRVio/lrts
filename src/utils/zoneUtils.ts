import { MetroStation } from '../data/stations';

export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export function findNearestStations(lat: number, lon: number, stations: MetroStation[], limit: number = 3): MetroStation[] {
  return stations
    .map(station => ({
      ...station,
      distance: calculateDistance(lat, lon, station.lat, station.lng),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit);
}

export function isInZone(lat: number, lon: number, station: MetroStation): boolean {
  const distance = calculateDistance(lat, lon, station.lat, station.lng);
  return distance <= 2; // 2 km radius zone
}