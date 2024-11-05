'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { FiMenu, FiX } from "react-icons/fi"; // For the hamburger menu icons

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-neutral-800 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src="/Logo.png" height="50" width="150" alt="logo" />
          </Link>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-zinc-200 text-2xl">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`text-zinc-200 md:flex ${isMenuOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-lg uppercase font-semibold mt-4 md:mt-0">
            <li>
              <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400 transition-colors">About</Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-blue-400 transition-colors">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Call to Action Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button className="bg-blue-600 text-lg px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Book a Meeting
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile CTA Button */}
      {isMenuOpen && (
        <div className="block md:hidden text-center mt-4">
          <Link href="/contact">
            <Button className="bg-blue-600 text-lg px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Book a Meeting
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MainNavbar;
