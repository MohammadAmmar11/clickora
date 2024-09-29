import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const MainNavbar = () => {
  return (
    <div className="bg-neutral-800 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src="/Logo.png" height="50" width="150" alt="logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="text-zinc-200">
          <ul className="flex space-x-8 text-lg uppercase font-semibold">
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
        <div>
          <Link href="/contact">
            <Button className="bg-blue-600 text-lg px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">Book a Meeting</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
