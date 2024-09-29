'use client'
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // Ensure framer-motion is imported

const slides = [
  {
    title: "Accelerate Your Business Growth",
    subtitle:
      "From strategy to execution, we help brands thrive online with tailored solutions that drive real results. Let’s take your business to the next level.",
    imageSrc: "/hero1.png",
  },
  {
    title: "Boost Your Online Presence",
    subtitle:
      "Our digital marketing strategies are designed to increase your brand’s visibility, engage your audience, and grow your customer base.",
    imageSrc: "/hero4.png",
  },
  {
    title: "Get Results That Matter",
    subtitle:
      "We create campaigns that deliver measurable results, ensuring your investment brings real value to your business.",
    imageSrc: "/hero3.png",
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-100 to-white">
      {/* Animated Circle Shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-300 rounded-full opacity-40 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      <div className="absolute top-10 right-0 w-48 h-48 bg-red-300 rounded-full opacity-40 transform translate-x-1/2 animate-float" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-300 rounded-full opacity-40 transform -translate-x-1/2 animate-float" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-300 rounded-full opacity-40 transform translate-x-1/2 translate-y-1/2 animate-pulse" />
      <div className="absolute top-20 left-20 w-24 h-24 bg-green-300 rounded-full opacity-30 animate-float-slow" />
      <div className="absolute bottom-20 right-20 w-56 h-56 bg-pink-300 rounded-full opacity-30 animate-float-slow" />

      {/* Content Carousel */}
      <div className="relative z-10 flex items-center justify-between p-10 mx-10 min-h-[600px]"> {/* Increased min height */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between"
          >
            {/* Text Content */}
            <div className="max-w-lg"> {/* Limit text width for better presentation */}
              <div className="text-5xl font-bold text-neutral-600">
                <p>{slides[activeSlide].title}</p>
              </div>
              <div className="mt-4 text-neutral-800">
                {slides[activeSlide].subtitle}
              </div>
              <div className="mt-4">
                <Link href="/contact">
                  <Button className="px-10 py-5 text-lg bg-blue-800 rounded-full hover:bg-blue-900 transition-all">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            {/* Image Content */}
            <div className="ml-10">
              <Image
                src={slides[activeSlide].imageSrc}
                height={600} // Increased height for images
                width={600}  // Increased width for images
                alt="hero-image"
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Symbols without Background */}
      <div className="absolute inset-y-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="text-3xl text-blue-800 hover:text-blue-600 transition-all"
        >
          ● {/* Circle symbol for previous slide */}
        </button>
      </div>
      <div className="absolute inset-y-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="text-3xl text-blue-800 hover:text-blue-600 transition-all"
        >
          ● {/* Circle symbol for next slide */}
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-5 w-full flex justify-center">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`mx-1 h-3 w-3 rounded-full transition-all duration-300 ${
              index === activeSlide
                ? "bg-blue-800"
                : "bg-gray-300 hover:bg-blue-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;

