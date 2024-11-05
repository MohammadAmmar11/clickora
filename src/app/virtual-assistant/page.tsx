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
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 mx-5 md:mx-10">
          <div className="text-center md:text-left">
            <div className="text-4xl md:text-6xl font-bold text-neutral-600">
              <p>
                <span>Empower Your </span>
                <br />
                <span className="text-blue-800">Business </span>With Our
                <br /> <span className="text-blue-700">Virtual Assistant </span>
                Services
              </p>
            </div>
            <div className="mt-4 text-base md:text-lg text-neutral-800">
              At <strong>&#91;Clickora&#93;</strong>, we offer comprehensive virtual
              assistant services that allow <br />
              you to focus on what you do best while we handle the rest. Our
              skilled <br /> professionals provide support tailored to your
              unique needs, helping you <br />
              streamline operations and enhance productivity.
            </div>
            <div className="mt-4">
              <Link href="/contact">
                <Button className="px-8 py-4 text-lg bg-blue-800 rounded-full transition-transform transform hover:scale-105">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          {/* Image Container */}
          <div className="flex justify-center md:ml-10 mt-8 md:mt-0">
            <Image
              src="/va2.png"
              height={500}
              width={500}
              alt="Virtual Assistant Service"
              className="rounded-lg w-full max-w-xs h-auto" // Ensure the image is responsive
            />
          </div>
        </div>
      </div>

      <section id="virtual-assistant-services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Streamline Your Workload with Our Virtual Assistant Services
          </h2>
          <p className="text-base md:text-lg text-center text-gray-600 mb-10">
            At <strong>&#91;Clickora&#93;</strong>, we provide dedicated virtual
            assistants to manage tasks that free up your time and increase your
            efficiency. Let us help you focus on your core business while we
            take care of the details.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {/* Card 1: Administrative Support */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 rounded-xl p-4 md:p-6 shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full md:w-80">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Administrative Support
              </h3>
              <p className="text-gray-700 opacity-90 text-sm md:text-base">
                Our virtual assistants manage scheduling, correspondence, and
                other administrative tasks to keep your business running
                smoothly.
              </p>
            </div>

            {/* Card 2: Customer Service */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 rounded-xl p-4 md:p-6 shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full md:w-80">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Customer Service</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Enhance your customer experience with our dedicated support
                team, ready to assist your clients and handle inquiries
                efficiently.
              </p>
            </div>

            {/* Card 3: Social Media Management */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 text-gray-800 rounded-xl p-4 md:p-6 shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full md:w-80">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Social Media Management
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Our experts create and manage engaging social media content to
                boost your online presence and connect with your audience.
              </p>
            </div>

            {/* Card 4: Content Creation */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 rounded-xl p-4 md:p-6 shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full md:w-80">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Content Creation</h3>
              <p className="text-gray-700 text-sm md:text-base">
                From blogs to newsletters, our virtual assistants produce
                high-quality content that aligns with your brand's voice
                and goals.
              </p>
            </div>

            {/* Card 5: Data Entry */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 rounded-xl p-4 md:p-6 shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full md:w-80">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Data Entry</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Let us handle data management tasks efficiently, ensuring your
                records are accurate and up-to-date.
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
