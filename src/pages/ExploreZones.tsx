import React from 'react';
import ZoneMap from '../components/zones/ZoneMap';
import ZoneStats from '../components/zones/ZoneStats';
import { MapPin, Users, Clock, Shield } from 'lucide-react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, LineChart, Line } from 'recharts';

const ExploreZones: React.FC = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Strategic Coverage',
      description: 'Zones are strategically placed around metro stations to ensure maximum accessibility.',
    },
    {
      icon: Users,
      title: 'Dedicated Fleet',
      description: 'Each zone has a dedicated fleet of rickshaws to maintain consistent service quality.',
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Get live updates on rickshaw availability and estimated wait times.',
    },
    {
      icon: Shield,
      title: 'Safe Travel',
      description: 'All zones are monitored 24/7 with verified drivers and maintained vehicles.',
    },
  ];

  const data = [
    { name: 'Zone 1', Rickshaws: 30, WaitTime: 2 },
    { name: 'Zone 2', Rickshaws: 45, WaitTime: 3 },
    { name: 'Zone 3', Rickshaws: 20, WaitTime: 1.5 },
    { name: 'Zone 4', Rickshaws: 50, WaitTime: 2.5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-blue-100 dark:from-gray-800 dark:to-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Explore LRTS Zones
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our extensive network of rickshaw service zones around Delhi's metro stations,
            providing convenient last-mile connectivity.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">System Overview</h2>
          <ZoneStats />
        </div>

        <div className="mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Interactive Zone Map
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Click on a zone to see detailed information about rickshaw availability,
              wait times, and landmarks. Use the buttons above to quickly navigate to specific zones.
            </p>
            <ZoneMap />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Zone Features</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                  <feature.icon className="h-6 w-6 text-blue-600 dark:text-indigo-400" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Zone Statistics</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Rickshaws per Zone</h3>
              <div className="overflow-x-auto">
                <BarChart width={500} height={300} data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                  <XAxis dataKey="name" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(45, 55, 72, 0.9)',
                      color: '#E2E8F0',
                      border: 'none',
                      borderRadius: '8px',
                    }}
                    itemStyle={{ color: '#9b79d1' }}
                    labelStyle={{ color: '#A0AEC0' }}
                  />
                  <Legend />
                  <Bar
                    dataKey="Rickshaws"
                    fill="#9b79d1"
                    onMouseOver={(e) => {
                      e.target.style.stroke = '#9058e8';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.stroke = '#9b79d1';
                    }}
                  />
                </BarChart>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Average Wait Time</h3>
              <div className="overflow-x-auto">
                <LineChart width={500} height={300} data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                  <XAxis dataKey="name" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(45, 55, 72, 0.9)',
                      color: '#E2E8F0',
                      border: 'none',
                      borderRadius: '8px',
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="WaitTime"
                    stroke="#68D391"
                    onMouseOver={(e) => {
                      e.target.style.stroke = 'rgba(104, 211, 145, 0.7)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.stroke = '#68D391';
                    }}
                  />
                </LineChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreZones;
