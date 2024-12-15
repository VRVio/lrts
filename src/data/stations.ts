export interface MetroStation {
  name: string;
  lat: number;
  lng: number;
  rickshaws: number;
  demand: 'High' | 'Medium' | 'Low';
  waitTime: number;
  landmarks: number;
}

export const delhiMetroStations: MetroStation[] = [
  { name: 'Rajiv Chowk', lat: 28.6327, lng: 77.2195, rickshaws: 25, demand: 'High', waitTime: 3, landmarks: 12 },
  { name: 'Kashmere Gate', lat: 28.6675, lng: 77.2285, rickshaws: 20, demand: 'High', waitTime: 4, landmarks: 8 },
  { name: 'Central Secretariat', lat: 28.6147, lng: 77.2119, rickshaws: 15, demand: 'Medium', waitTime: 2, landmarks: 10 },
  { name: 'Dwarka Sector 21', lat: 28.5520, lng: 77.0587, rickshaws: 12, demand: 'Low', waitTime: 1, landmarks: 6 },
  { name: 'Hauz Khas', lat: 28.5430, lng: 77.2060, rickshaws: 18, demand: 'High', waitTime: 5, landmarks: 9 },
  { name: 'Huda City Centre', lat: 28.4594, lng: 77.0720, rickshaws: 22, demand: 'High', waitTime: 4, landmarks: 11 },
  { name: 'Noida City Centre', lat: 28.5747, lng: 77.3560, rickshaws: 16, demand: 'Medium', waitTime: 3, landmarks: 7 },
  { name: 'Chandni Chowk', lat: 28.6581, lng: 77.2280, rickshaws: 20, demand: 'High', waitTime: 4, landmarks: 15 },
  { name: 'Lajpat Nagar', lat: 28.5710, lng: 77.2370, rickshaws: 14, demand: 'Medium', waitTime: 2, landmarks: 8 },
  { name: 'Botanical Garden', lat: 28.5644, lng: 77.3347, rickshaws: 15, demand: 'Low', waitTime: 2, landmarks: 6 },
  { name: 'Vaishali', lat: 28.6458, lng: 77.3399, rickshaws: 12, demand: 'Medium', waitTime: 3, landmarks: 5 },
  { name: 'Janakpuri West', lat: 28.6289, lng: 77.0780, rickshaws: 10, demand: 'Low', waitTime: 1, landmarks: 7 }
];