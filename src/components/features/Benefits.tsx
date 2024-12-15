import React from 'react';
import { Clock, MapPin, CreditCard, Shield, BarChart } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      title: 'Revolutionary Last-Mile Access',
      description: 'Unlike traditional options, LRTS provides seamless connectivity from your doorstep to metro stations and back, eliminating the hassle of finding and negotiating with rickshaws.',
      icon: Clock,
    },
    {
      title: 'Subscription-Based Convenience',
      description: 'Say goodbye to fare negotiations and cash payments. LRTS offers fixed, affordable subscription plans that let you travel unlimited within your zone.',
      icon: CreditCard,
    },
    {
      title: 'Smart Fleet Availability',
      description: 'Data-driven fleet management ensures you’ll always find a rickshaw when you need it, even during peak hours—no long waits, no stress.',
      icon: BarChart,
    },
    {
      title: 'Safe & Trustworthy Experience',
      description: 'All drivers are verified, and vehicles are monitored for safety and reliability. Travel with confidence, every time.',
      icon: Shield,
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Benefits</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose LRTS?
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{benefit.title}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;