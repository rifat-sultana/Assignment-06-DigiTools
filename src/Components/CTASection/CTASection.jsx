import React from 'react';

const CTASection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-500 py-20 text-center text-white">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold">
        Ready To Transform Your Workflow?
      </h2>

      {/* Description */}
      <p className="mt-4 text-sm md:text-base text-gray-200 max-w-xl mx-auto">
        Join thousands of professionals who are already using Digitools to work smarter.
        Start your free trial today.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-8">

        {/* Explore Button */}
        <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-medium shadow-md hover:scale-105 transition">
          Explore Products
        </button>

        {/* Pricing Button */}
        <button className="border border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-purple-600 transition">
          View Pricing
        </button>

      </div>

      {/* Footer text */}
      <p className="mt-6 text-xs text-gray-200">
        14-day free trial • No credit card required • Cancel anytime
      </p>

    </div>
  );
};

export default CTASection;