import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="relative overflow-hidden ">
        {/* Animated Circle Shapes */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-300 rounded-full opacity-40 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute top-10 right-0 w-48 h-48 bg-red-300 rounded-full opacity-40 transform translate-x-1/2 animate-float" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-300 rounded-full opacity-40 transform -translate-x-1/2 animate-float" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-300 rounded-full opacity-40 transform translate-x-1/2 translate-y-1/2 animate-pulse" />

        {/* Additional Circles for More Depth */}
        <div className="absolute top-20 left-20 w-24 h-24 bg-green-300 rounded-full opacity-30 animate-float-slow" />
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-pink-300 rounded-full opacity-30 animate-float-slow" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-between p-10 mx-10">
          <div>
            <div className="text-5xl font-bold text-neutral-600">
              <p>
                Elevate Your <span className="text-blue-800">Online</span>
                <br />
                Presence <span className="text-red-800">with Expert </span>
                <br /> <span>SEO </span>
                <span className="text-blue-800">Strategies</span>
              </p>
            </div>
            <div className="mt-4 text-neutral-800">
              Join forces with [Clickora] to harness the power of SEO. Our
              innovative <br /> approach combines strategic insights and
              creative solutions to drive <br /> traffic, enhance visibility,
              and turn clicks into conversions.
            </div>
            <div className="mt-4">
              <Link href="/contact">
                <Button className="px-10 py-5 text-lg bg-blue-800 rounded-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          {/* Image Container */}
          <div className="flex ">
            <Image
              src="/seo.png"
              height="500"
              width="500"
              alt="herosection"
              className=""
            />
          </div>
        </div>
      </div>

      <section id="seo-services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Dominate Search Rankings with Our Expert SEO Services
          </h2>
          <p className="text-lg text-center text-gray-600 mb-10">
            At <strong>[Clickora]</strong>, we understand that effective SEO is
            not just about rankings; it&apos;s about driving qualified traffic and
            converting visitors into loyal customers. Our comprehensive SEO
            services are designed to boost your online visibility and establish
            your brand as an authority in your industry.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {/* Card 1: Tailored SEO Strategies */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 rounded-xl p-6 shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-80">
              <h3 className="text-2xl font-semibold mb-4">
                Tailored SEO Strategies
              </h3>
              <p className="text-gray-700 opacity-90">
                Every business is unique. We develop customized SEO plans that
                align with your specific goals and target audience.
              </p>
            </div>

            {/* Card 2: Advanced Keyword Research */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 rounded-xl p-6 shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-80">
              <h3 className="text-2xl font-semibold mb-4">
                Advanced Keyword Research
              </h3>
              <p>
                Our data-driven approach identifies the most valuable keywords
                to drive targeted traffic to your website.
              </p>
            </div>

            {/* Card 3: On-Page Optimization */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 text-gray-800 rounded-xl p-6 shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-80">
              <h3 className="text-2xl font-semibold mb-4">
                On-Page Optimization
              </h3>
              <p>
                We enhance your website&apos;s structure, content, and metadata
                to ensure search engines can easily index and rank your pages.
              </p>
            </div>

            {/* Card 4: Quality Link Building */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 rounded-xl p-6 shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-80">
              <h3 className="text-2xl font-semibold mb-4">
                Quality Link Building
              </h3>
              <p>
                Our ethical link-building strategies help improve your site's
                authority and ranking through quality backlinks.
              </p>
            </div>

            {/* Card 5: Performance Tracking & Analytics */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 rounded-xl p-6 shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-80">
              <h3 className="text-2xl font-semibold mb-4">
                Performance Tracking & Analytics
              </h3>
              <p>
                We provide detailed reporting and insights, so you can track
                your progress and ROI.
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
