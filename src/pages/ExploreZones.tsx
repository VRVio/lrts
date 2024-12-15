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
    { name: 'Zone 1', rickshaws: 30, waitTime: 2 },
    { name: 'Zone 2', rickshaws: 45, waitTime: 3 },
    { name: 'Zone 3', rickshaws: 20, waitTime: 1.5 },
    { name: 'Zone 4', rickshaws: 50, waitTime: 2.5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-blue-100 dark:from-gray-800 dark:to-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Explore LRTS Zones
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Discover our extensive network of rickshaw service zones around Delhi's metro stations,
            providing convenient last-mile connectivity.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">System Overview</h2>
          <ZoneStats />
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Interactive Zone Map
            </h2>
            <p className="text-gray-600 mb-6">
              Click on a zone to see detailed information about rickshaw availability,
              wait times, and landmarks. Use the buttons above to quickly navigate to specific zones.
            </p>
            <ZoneMap />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Zone Features</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-lg">
                  <feature.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Zone Statistics</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Rickshaws per Zone</h3>
              <BarChart width={500} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="rickshaws" fill="#8884d8" />
              </BarChart>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Average Wait Time</h3>
              <LineChart width={500} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="waitTime" stroke="#82ca9d" />
              </LineChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreZones;