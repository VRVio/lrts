import React from 'react';
import Navbar from '../components/layout/Navbar';
import PassCard from '../components/passes/PassCard';

const PassesPage: React.FC = () => {
  const passes = [
    {
      title: 'Basic',
      price: '999',
      duration: 'month',
      features: [
        { text: 'Unlimited rides in one zone', included: true },
        { text: 'Peak hour access', included: true },
        { text: 'Multi-zone access', included: false },
        { text: 'Priority booking', included: false },
      ],
    },
    {
      title: 'Standard',
      price: '1499',
      duration: 'month',
      features: [
        { text: 'Unlimited rides in Multiple Zones', included: true },
        { text: 'Peak hour access', included: true },
        { text: 'Multi-zone access', included: true },
        { text: 'Priority booking', included: true },
      ],
      popular: true,
    },
  ];

  return (
    <>  
      <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Choose Your Pass
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Select the perfect pass that suits your travel needs
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {passes.map((pass, index) => (
              <PassCard key={index} {...pass} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PassesPage; 