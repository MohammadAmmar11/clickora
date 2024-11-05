import React from 'react';

const Testimonials = () => {
  return (
    <div id="testimonials" className="relative py-10 md:py-20 bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-40 h-40 bg-blue-200 rounded-full opacity-30 transform" />
      <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-purple-300 rounded-full opacity-20 transform" />
      <div className="absolute bottom-[-10%] left-[-10%] w-56 h-56 bg-green-300 rounded-full opacity-15 transform" />
      <div className="absolute bottom-[-10%] right-[-10%] w-48 h-48 bg-yellow-300 rounded-full opacity-25 transform" />

      <div className="container mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 md:mb-10">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              quote: "The team at [Your Company Name] transformed our online presence. Their expertise in digital marketing has helped us reach new customers!",
              name: "John Doe",
              title: "CEO, Example Company",
            },
            {
              quote: "Our sales have doubled since we started working with [Your Company Name]. Their strategies are effective and results-driven.",
              name: "Jane Smith",
              title: "Marketing Director, Another Company",
            },
            {
              quote: "I can't recommend [Your Company Name] enough. They are professional, responsive, and truly care about their clients' success.",
              name: "Mike Johnson",
              title: "Founder, Start-Up Co.",
            },
            {
              quote: "Working with [Your Company Name] was a game-changer for our business. Their attention to detail and dedication is unmatched.",
              name: "Sarah Lee",
              title: "Owner, Local Business",
            },
            {
              quote: "The strategies provided by [Your Company Name] are not only innovative but also easy to implement. We've seen incredible growth!",
              name: "Chris Brown",
              title: "Digital Marketing Manager, Big Corp",
            },
            {
              quote: "I am thrilled with the results from [Your Company Name]. They exceeded our expectations in every aspect.",
              name: "Emma Wilson",
              title: "Business Analyst, Firm XYZ",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
            >
              <p className="text-gray-700 italic">{`"${testimonial.quote}"`}</p>
              <h3 className="mt-4 font-semibold text-blue-600">{`- ${testimonial.name}`}</h3>
              <p className="text-gray-500">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
