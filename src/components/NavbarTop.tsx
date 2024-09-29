import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const NavbarTop = () => {
  return (
    <div className="bg-white border-b border-gray-300 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Social Media Icons */}
        <div className="flex space-x-6 text-blue-600">
          <Link href="https://www.facebook.com" target="_blank" className="hover:text-blue-800 transition-colors">
            <FaFacebook size={20} />
          </Link>
          <Link href="https://www.instagram.com" target="_blank" className="hover:text-blue-800 transition-colors">
            <FaInstagram size={20} />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" className="hover:text-blue-800 transition-colors">
            <FaLinkedin size={20} />
          </Link>
        </div>

        {/* Contact Info */}
        <div className="flex space-x-6 text-gray-600">
          <div className="flex items-center space-x-2">
            <MdOutlineMail size={20} className="text-blue-600" />
            <Link href="mailto:support@clickora.com" className="hover:text-blue-800 transition-colors">support@clickora.com</Link>
          </div>
          <div className="flex items-center space-x-2">
            <IoCallSharp size={20} className="text-blue-600" />
            <Link href="tel:+920000000000" className="hover:text-blue-800 transition-colors">+92 000 0000000</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
