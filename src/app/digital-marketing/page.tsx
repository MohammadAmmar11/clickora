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
            <div className="text-7xl font-bold text-neutral-600">
              <p>
                Crafting <span className="text-blue-800">Success</span>
                <br />
                In <span className="text-red-800">Digital</span>{" "}
                <span className="text-blue-800">Age</span>
              </p>
            </div>
            <div className="mt-4 text-neutral-800">
              Partner with [Clickora] for cutting-edge <br /> digital
              marketing solutions. We blend creativity and <br /> analytics to
              create campaigns that engage and <br /> convert.
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
          <div>
            <Image
              src="/13.png"
              height="500"
              width="600"
              alt="herosection"
              className="place-items-center"
            />
          </div>
        </div>
      </div>

      <section id="why-choose-us" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Us for Your Digital Marketing Needs?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Comprehensive Digital Solutions */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 rounded-xl p-6 shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">
                Comprehensive Digital Solutions
              </h3>
              <p className="text-gray-700 opacity-90">
                At <strong>[Clickora]</strong>, we provide end-to-end digital
                marketing services tailored to your unique business goals.
                Whether you're looking to increase brand awareness, generate
                leads, or boost sales, our team creates impactful campaigns that
                deliver measurable results.
              </p>
            </div>

            {/* Card 2: Our Core Services */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 rounded-xl p-6 shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Our Core Services</h3>
              <ul className="list-disc pl-6 text-gray-700 opacity-90">
                <li>
                  <strong>PPC Advertising:</strong> Target your audience with
                  precision.
                </li>
                <li>
                  <strong>Social Media Marketing:</strong> Build a strong
                  presence on platforms.
                </li>
                <li>
                  <strong>Content Marketing:</strong> Engage your customers with
                  high-quality content.
                </li>
                <li>
                  <strong>Email Marketing:</strong> Drive conversions with
                  personalized campaigns.
                </li>
              </ul>
            </div>

            {/* Card 3: What Sets Us Apart */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 text-gray-800 rounded-xl p-6 shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">
                What Sets Us Apart?
              </h3>
              <ul className="list-disc pl-6 text-gray-700 opacity-90">
                <li>
                  <strong>Data-Driven Approach:</strong> Backed by in-depth
                  analytics.
                </li>
                <li>
                  <strong>Experienced Team:</strong> Years of experience in
                  digital marketing.
                </li>
                <li>
                  <strong>Customized Solutions:</strong> Tailored strategies for
                  your unique business.
                </li>
                <li>
                  <strong>Transparent Reporting:</strong> Full visibility into
                  performance.
                </li>
              </ul>
            </div>

            {/* Card 4: How We Work */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 rounded-xl p-6 shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">How We Work</h3>
              <ul className="list-disc pl-6 text-gray-700 opacity-90">
                <li>
                  <strong>Discovery & Strategy:</strong> We start by
                  understanding your business goals.
                </li>
                <li>
                  <strong>Execution:</strong> Implementing the strategy with
                  expert precision.
                </li>
                <li>
                  <strong>Optimization:</strong> Continuous improvement for
                  better results.
                </li>
                <li>
                  <strong>Support:</strong> Ongoing consultation and campaign
                  management.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="my-12">
        <Newsletter />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Let&apos;s Discuss Your Growth Strategy
          </h2>
          <p className="mb-8 text-gray-700">
            Ready to take your digital presence to the next level? Whether you
            need a comprehensive marketing strategy or want to optimize your
            current campaigns, our experts are here to help. Book a free
            consultation, and let&apos;s explore how we can grow your business
            together.
          </p>
          <Link href="/contact">
            <Button className="px-10 py-5 text-lg bg-blue-800 rounded-full">
              Book a Meeting
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default page;
