import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Latest Insights from Our Blog
        </h2>
        <p className="text-lg text-center text-gray-600 mb-10">
          Explore our latest articles to stay updated on trends, tips, and strategies for your business.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Blog Post 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-80">
            <Image
              src="/blog-1.jpg" // Replace with your blog image
              height="200"
              width="300"
              alt="Blog Post 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">The Future of Digital Marketing</h3>
              <p className="text-gray-700 mb-4">
                Discover the emerging trends in digital marketing and how to leverage them for your business.
              </p>
              <Link href="/blog/the-future-of-digital-marketing">
                <button className="px-4 py-2 bg-blue-800 text-white rounded-full">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-80">
            <Image
              src="/blog-2.jpg" // Replace with your blog image
              height="200"
              width="300"
              alt="Blog Post 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Effective SEO Strategies for 2024</h3>
              <p className="text-gray-700 mb-4">
                Learn the best practices to enhance your SEO efforts and improve your search rankings.
              </p>
              <Link href="/blog/effective-seo-strategies-for-2024">
                <button className="px-4 py-2 bg-blue-800 text-white rounded-full">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-80">
            <Image
              src="/blog-3.jpg" // Replace with your blog image
              height="200"
              width="300"
              alt="Blog Post 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Maximizing Efficiency with Virtual Assistants</h3>
              <p className="text-gray-700 mb-4">
                Discover how virtual assistants can help streamline your operations and boost productivity.
              </p>
              <Link href="/blog/maximizing-efficiency-with-virtual-assistants">
                <button className="px-4 py-2 bg-blue-800 text-white rounded-full">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
