'use client'
import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {
  return (
    <div id="stats" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-10">Our Impact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-3xl font-bold text-blue-600">
              <CountUp end={500} duration={2} />+
            </h3>
            <p className="text-gray-700">Satisfied Clients</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-3xl font-bold text-blue-600">
              <CountUp end={120} duration={2} />+
            </h3>
            <p className="text-gray-700">Projects Completed</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-3xl font-bold text-blue-600">
              <CountUp end={10} duration={2} />+
            </h3>
            <p className="text-gray-700">Years of Experience</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-3xl font-bold text-blue-600">
              <CountUp end={1000000} duration={2} />+
            </h3>
            <p className="text-gray-700">Leads Generated</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
