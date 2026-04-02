import React from 'react';

const PricingSection = () => {
  return (
    <div className="py-16 px-4 bg-gray-50">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Starter */}
        <div className="bg-gray-200 rounded-xl p-6  shadow-md">
          <h3 className="font-semibold text-lg mb-2">Starter</h3>
          <p className="text-gray-500 text-sm mb-4">
            Perfect for getting started
          </p>

          <h2 className="text-3xl font-bold mb-4">
            $0 <span className="text-sm text-gray-500">/month</span>
          </h2>

          <ul className="text-sm text-gray-600 space-y-2 mb-6">
            <li>✔ Access to 10 free tools</li>
            <li>✔ Basic templates</li>
            <li>✔ Community support</li>
            <li>✔ 1 project per month</li>
          </ul>

          <button className="w-full py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white mt-15">
            Get Started Free
          </button>
        </div>

      
        <div className="relative rounded-xl p-6 text-white bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg">

          {/* Badge */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-200 text-xs px-3 py-1 rounded-full text-black">
            Most Popular
          </div>

          <h3 className="font-semibold text-lg mb-2">Pro</h3>
          <p className="text-sm mb-4 opacity-90">
            Best for professionals
          </p>

          <h2 className="text-3xl font-bold mb-4">
            $29 <span className="text-sm opacity-80">/month</span>
          </h2>

          <ul className="text-sm space-y-2 mb-6">
            <li>✔ Access to all premium tools</li>
            <li>✔ Unlimited templates</li>
            <li>✔ Priority support</li>
            <li>✔ Unlimited projects</li>
            <li>✔ Cloud sync</li>
            <li>✔ Advanced analytics</li>
          </ul>

          <button className="w-full py-2 rounded-full bg-white text-purple-600 font-medium">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-white rounded-xl px-20 py-6  shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Enterprise</h3>
          <p className="text-gray-500 text-sm mb-4">
            For teams and businesses
          </p>

          <h2 className="text-3xl font-bold mb-4">
            $99 <span className="text-sm text-gray-500">/month</span>
          </h2>

          <ul className="text-sm text-gray-600 space-y-2 mb-6">
            <li>✔ Everything in Pro</li>
            <li>✔ Team collaboration</li>
            <li>✔ Custom integrations</li>
            <li>✔ Dedicated support</li>
            <li>✔ SLA guarantee</li>
            <li>✔ Custom branding</li>
          </ul>

          <button className="w-full py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};

export default PricingSection;