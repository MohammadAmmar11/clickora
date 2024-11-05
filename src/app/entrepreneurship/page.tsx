import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        {/* Animated Circle Shapes */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-300 rounded-full opacity-40 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute top-10 right-0 w-48 h-48 bg-red-300 rounded-full opacity-40 transform translate-x-1/2 animate-float" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-300 rounded-full opacity-40 transform -translate-x-1/2 animate-float" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-300 rounded-full opacity-40 transform translate-x-1/2 translate-y-1/2 animate-pulse" />

        {/* Additional Circles for More Depth */}
        <div className="absolute top-20 left-20 w-24 h-24 bg-green-300 rounded-full opacity-30 animate-float-slow" />
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-pink-300 rounded-full opacity-30 animate-float-slow" />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-6 md:p-10 mx-4 md:mx-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-600">
              <span className="">Ignite </span>
              <span>Your</span>
              <br />
              <span className="text-blue-800">Entrepreneurial</span> <span>Journey</span>
              <br /> with <span className="text-blue-700">Our Expert </span> <br />
              Guidance
            </h1>
            <p className="mt-4 text-neutral-800">
              At <strong>[Clickora]</strong>, we provide the tools, resources, and
              mentorship <br /> you need to turn your business ideas into reality. 
              Whether <br /> you&#39;re just starting or scaling up, we help you unlock <br />
              opportunities for sustainable growth.
            </p>
            <div className="mt-4">
              <Link href="/contact">
                <Button className="px-10 py-4 text-lg bg-blue-800 rounded-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Container */}
          <div className="flex justify-center mt-6 md:mt-0 md:ml-10">
            <Image
              src="/en.png"
              height={500}
              width={500}
              alt="Entrepreneurship Service"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <section id="entrepreneurship-services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Fuel Your Business Growth with Our Entrepreneurship Services
          </h2>
          <p className="text-lg text-center text-gray-600 mb-10">
            At <strong>[Clickora]</strong>, we are committed to helping
            entrepreneurs succeed by offering actionable strategies, expert advice, 
            and personalized support for each stage of your journey.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {/* Card 1: Business Planning & Strategy */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 rounded-xl p-6 shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-80">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Business Planning & Strategy
              </h3>
              <p className="text-gray-700 opacity-90">
                Our team helps you develop solid business plans and strategies 
                that align with your vision and market demands.
              </p>
            </div>

            {/* Card 2: Market Research & Analysis */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 rounded-xl p-6 shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-80">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Market Research & Analysis
              </h3>
              <p>
                We provide data-driven insights to help you understand your target audience, competitors, and trends.
              </p>
            </div>

            {/* Card 3: Financial Management & Investment */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 text-gray-800 rounded-xl p-6 shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-80">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Financial Management & Investment
              </h3>
              <p>
                Manage your finances efficiently and explore investment opportunities to accelerate growth.
              </p>
            </div>

            {/* Card 4: Scaling & Operations */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 rounded-xl p-6 shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-80">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Scaling & Operations
              </h3>
              <p>
                We help you optimize your operations and scale your business to meet growing demands.
              </p>
            </div>

            {/* Card 5: Mentorship & Support */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 rounded-xl p-6 shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-80">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Mentorship & Support
              </h3>
              <p>
                Our experienced mentors guide you every step of the way, ensuring you have the support you need to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default page;
