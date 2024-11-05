import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              At [Clickora], we specialize in delivering top-tier digital
              solutions that empower businesses to thrive in the digital age. Our services
              range from Digital Marketing to Virtual Assistance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <Link href="/digital-marketing" className="hover:underline">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/seo" className="hover:underline">
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link href="/virtual-assistant" className="hover:underline">
                  Virtual Assistant
                </Link>
              </li>
              <li>
                <Link href="/entrepreneurship" className="hover:underline">
                  Entrepreneurship
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                <FaFacebookF className="text-white hover:text-blue-500 transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
                <FaTwitter className="text-white hover:text-blue-400 transition" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn">
                <FaLinkedinIn className="text-white hover:text-blue-600 transition" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                <FaInstagram className="text-white hover:text-pink-400 transition" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} [Clickora]. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
