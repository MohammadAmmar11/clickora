import React from "react";

const WhyUs = () => {
  return (
    <div id="why-us" className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-blue-200 rounded-full opacity-50 transform -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute top-20 right-0 w-60 md:w-80 h-60 md:h-80 bg-red-200 rounded-full opacity-30 transform translate-x-1/4"></div>
      <div className="absolute bottom-0 left-10 w-36 md:w-48 h-36 md:h-48 bg-purple-200 rounded-full opacity-40 transform -translate-x-1/2"></div>
      <div className="absolute bottom-10 right-10 w-40 md:w-56 h-40 md:h-56 bg-yellow-200 rounded-full opacity-30 transform translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-10">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {[
            {
              title: "Expertise and Experience",
              content:
                "Our team comprises industry experts with years of experience in digital marketing, SEO, and entrepreneurship. We leverage our knowledge to provide you with tailored solutions that drive results.",
            },
            {
              title: "Affordable Pricing",
              content:
                "Quality services shouldn’t break the bank. We offer competitive pricing without compromising on the quality of our work, ensuring you get the best value for your investment.",
            },
            {
              title: "Proven Results",
              content:
                "Our track record speaks for itself. We have successfully helped numerous businesses achieve their objectives, from increasing online visibility to driving engagement and conversions.",
            },
            {
              title: "Cutting-Edge Technology",
              content:
                "We utilize the latest tools and technologies to ensure your business stays ahead of the competition. Our innovative approach keeps you at the forefront of the digital landscape.",
            },
            {
              title: "Transparent Communication",
              content:
                "We believe in building trust through transparency. You’ll receive regular updates on progress, insights, and metrics to keep you informed every step of the way.",
            },
            {
              title: "Customer-Centric Approach",
              content:
                "Your success is our priority. We go above and beyond to ensure our clients are satisfied, providing ongoing support and guidance even after project completion.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
            >
              <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
