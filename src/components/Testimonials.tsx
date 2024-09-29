import React from 'react';

const Testimonials = () => {
  return (
    <div id="testimonials" className="relative py-10 md:py-20 bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-40 h-40 bg-blue-200 rounded-full opacity-30 transform" />
      <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-purple-300 rounded-full opacity-20 transform" />
      <div className="absolute bottom-[-10%] left-[-10%] w-56 h-56 bg-green-300 rounded-full opacity-15 transform" />
      <div className="absolute bottom-[-10%] right-[-10%] w-48 h-48 bg-yellow-300 rounded-full opacity-25 transform" />
  
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold text-blue-800 mb-8 md:mb-10">
          What Our Clients Say
        </h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <p className="text-gray-700 italic">
              &quot;The team at [Your Company Name] transformed our online presence. Their expertise in digital marketing has helped us reach new customers!&quot;
            </p>
            <h3 className="mt-4 font-semibold text-blue-600">- John Doe</h3>
            <p className="text-gray-500">CEO, Example Company</p>
          </div>
  
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <p className="text-gray-700 italic">
              &quot;Our sales have doubled since we started working with [Your Company Name]. Their strategies are effective and results-driven.&quot;
            </p>
            <h3 className="mt-4 font-semibold text-blue-600">- Jane Smith</h3>
            <p className="text-gray-500">Marketing Director, Another Company</p>
          </div>
  
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <p className="text-gray-700 italic">
              &quot;I can&apos;t recommend [Your Company Name] enough. They are professional, responsive, and truly care about their clients&apos; success.&quot;
            </p>
            <h3 className="mt-4 font-semibold text-blue-600">- Mike Johnson</h3>
            <p className="text-gray-500">Founder, Start-Up Co.</p>
          </div>
  
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <p className="text-gray-700 italic">
              &quot;Working with [Your Company Name] was a game-changer for our business. Their attention to detail and dedication is unmatched.&quot;
            </p>
            <h3 className="mt-4 font-semibold text-blue-600">- Sarah Lee</h3>
            <p className="text-gray-500">Owner, Local Business</p>
          </div>
  
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <p className="text-gray-700 italic">
              &quot;The strategies provided by [Your Company Name] are not only innovative but also easy to implement. We&apos;ve seen incredible growth!&quot;
            </p>
            <h3 className="mt-4 font-semibold text-blue-600">- Chris Brown</h3>
            <p className="text-gray-500">Digital Marketing Manager, Big Corp</p>
          </div>
  
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <p className="text-gray-700 italic">
              &quot;I am thrilled with the results from [Your Company Name]. They exceeded our expectations in every aspect.&quot;
            </p>
            <h3 className="mt-4 font-semibold text-blue-600">- Emma Wilson</h3>
            <p className="text-gray-500">Business Analyst, Firm XYZ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
