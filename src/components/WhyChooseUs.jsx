import React from 'react';

const MahaMumbaiSection = () => {
  return (
    // Added bg-gray-100 to the outer div to extend background to full width
    <div className="w-full bg-gray-100">
      {/* Hero Section */}
      <main className="flex-1 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">
            Why Choose Maha Mumbai with Athiya Developers?
          </h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            At Athiya Developers, we identify prime opportunities in Maha Mumbai to bring you projects 
            that align with your dreams and investment goals. With our expertise and transparency, 
            we make your journey seamless and rewarding.
          </p>
          <h2 className="text-3xl font-bold mb-8">
            Discover the future with Maha Mumbai.
          </h2>
          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
            Explore Our Projects Now
          </button>
        </div>
      </main>
    </div>
  );
};

export default MahaMumbaiSection;