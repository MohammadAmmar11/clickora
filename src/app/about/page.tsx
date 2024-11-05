import Newsletter from "@/components/Newsletter";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import React from "react";

const Page = () => {
  return (
    <div id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-10 right-0 w-48 h-48 bg-purple-300 rounded-full opacity-20 transform translate-x-1/2" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-green-300 rounded-full opacity-15 transform -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-300 rounded-full opacity-25 transform translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto text-center relative z-10 px-4">
        <h2 className="text-4xl font-bold text-blue-800 mb-8">About Us</h2>

        <h3 className="text-3xl font-semibold text-blue-600 mb-4">Our Mission</h3>
        <p className="text-gray-600 mb-8 leading-relaxed text-lg md:text-xl">
          At [Your Company Name], our mission is to empower individuals and businesses by providing innovative solutions that enhance their online presence and drive growth. We believe in the transformative power of digital marketing, and our goal is to help you navigate the digital landscape with confidence.
        </p>

        <h3 className="text-3xl font-semibold text-blue-600 mb-4">Who We Are</h3>
        <p className="text-gray-600 mb-8 leading-relaxed text-lg md:text-xl">
          Founded in [Year], [Your Company Name] is a passionate team of digital marketing experts dedicated to delivering exceptional results for our clients. With years of experience in various industries, we bring a wealth of knowledge and creativity to every project we undertake. Our diverse backgrounds enable us to think outside the box and develop tailored strategies that meet your unique needs.
        </p>

        {/* Call to action components */}
        <div className="mt-12">
          <Services />
          <WhyUs />
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default Page;
