import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

const Services = () => {
  return (
    <div id="services" className="relative overflow-hidden py-10 px-4 sm:px-6 lg:px-8">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 opacity-60 z-0"></div>
      <svg
        className="absolute top-0 left-0 w-full h-full z-10"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#f0f4ff"
          d="M0,128L30,133.3C60,139,120,149,180,144C240,139,300,117,360,96C420,75,480,53,540,80C600,107,660,173,720,202.7C780,224,840,208,900,208C960,208,1020,224,1080,229.3C1140,235,1200,229,1260,202.7C1320,179,1380,133,1410,110.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
        ></path>
      </svg>

      <div className="text-center relative z-20">
        <h1 className="pt-10 text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-600">Our Services</h1>
        <p className="mt-3 text-lg md:text-xl text-blue-800">
          Empowering Your Business with Proven Digital Strategies
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 py-10 relative z-20">
        {/* Card No 1 */}
        <Card className="flex flex-col justify-between rounded-lg shadow-lg bg-gray-100 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl font-bold text-neutral-600">
              Digital Marketing
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription>
              We craft tailored digital marketing strategies that reach the right audience, drive engagement, and convert leads into loyal customers. From social media management to paid advertising, we help your business grow online.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Link href="/digital-marketing">
              <Button className="bg-blue-800 text-base rounded-full w-full">Learn More</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Card No 2 */}
        <Card className="flex flex-col justify-between rounded-lg shadow-lg bg-gray-100 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl font-bold text-neutral-600">
              SEO (Search Engine Optimization)
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription>
              Our SEO services ensure your website ranks higher in search engine results. We optimize your content, keywords, and technical aspects, so your audience can easily find you, boosting visibility and organic traffic.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Link href="/seo">
              <Button className="bg-blue-800 text-base rounded-full w-full">Learn More</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Card No 3 */}
        <Card className="flex flex-col justify-between rounded-lg shadow-lg bg-gray-100 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl font-bold text-neutral-600">
              Virtual Assistant
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription>
              Our virtual assistant services provide professional support, handling administrative tasks, customer service, data entry, and more. Focus on growing your business while we take care of the details.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Link href="/virtual-assistant">
              <Button className="bg-blue-800 text-base rounded-full w-full">Learn More</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Card No 4 */}
        <Card className="flex flex-col justify-between rounded-lg shadow-lg bg-gray-100 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl font-bold text-neutral-600">
              Entrepreneurship
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription>
              We offer comprehensive guidance and resources to help entrepreneurs turn their ideas into thriving businesses. From business planning to digital marketing, we support your journey to success.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Link href="/entrepreneurship">
              <Button className="bg-blue-800 text-base rounded-full w-full">Learn More</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Services;
