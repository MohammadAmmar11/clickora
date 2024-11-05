'use client';
import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {
  return (
    <div id="stats" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-10">
          Our Impact
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {[
            { number: 500, label: 'Satisfied Clients' },
            { number: 120, label: 'Projects Completed' },
            { number: 10, label: 'Years of Experience' },
            { number: 1000000, label: 'Leads Generated' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600">
                <CountUp end={item.number} duration={2} />+
              </h3>
              <p className="text-gray-700 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
