import React from "react";

const WhyUs = () => {
  return (
    <div id="why-us" className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full opacity-50 transform -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute top-20 right-0 w-80 h-80 bg-red-200 rounded-full opacity-30 transform translate-x-1/4"></div>
      <div className="absolute bottom-0 left-10 w-48 h-48 bg-purple-200 rounded-full opacity-40 transform -translate-x-1/2"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-yellow-200 rounded-full opacity-30 transform translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold text-blue-800 mb-10">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Expertise and Experience
            </h3>
            <p className="text-gray-700">
              Our team comprises industry experts with years of experience in
              digital marketing, SEO, and entrepreneurship. We leverage our
              knowledge to provide you with tailored solutions that drive results.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Affordable Pricing
            </h3>
            <p className="text-gray-700">
              Quality services shouldn&apos;t break the bank. We offer competitive
              pricing without compromising on the quality of our work, ensuring
              you get the best value for your investment.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Proven Results
            </h3>
            <p className="text-gray-700">
              Our track record speaks for itself. We have successfully helped
              numerous businesses achieve their objectives, from increasing
              online visibility to driving engagement and conversions.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Cutting-Edge Technology
            </h3>
            <p className="text-gray-700">
              We utilize the latest tools and technologies to ensure your
              business stays ahead of the competition. Our innovative approach
              keeps you at the forefront of the digital landscape.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Transparent Communication
            </h3>
            <p className="text-gray-700">
              We believe in building trust through transparency. You&apos;ll receive
              regular updates on progress, insights, and metrics to keep you
              informed every step of the way.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Customer-Centric Approach
            </h3>
            <p className="text-gray-700">
              Your success is our priority. We go above and beyond to ensure our
              clients are satisfied, providing ongoing support and guidance even
              after project completion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
