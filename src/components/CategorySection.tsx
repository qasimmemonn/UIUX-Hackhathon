import React from "react";

const CategorySection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-5">
        <h2 className="text-xl font-bold text-start mb-4">The Essentials</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Category 1 */}
          <div className="relative">
            <img
              src="/images/male.png" // Replace with your image path
              alt="Category 1"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          <button className="absolute bottom-5 left-5 border border-white bg-white text-black py-2 px-6 rounded-full font-medium hover:bg-gray-600 transition-colors">
              Men's
            </button>
          </div>

          {/* Category 2 */}
          <div className="relative">
            <img
              src="/images/women.png" // Replace with your image path
              alt="Category 2"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            <button className="absolute bottom-5 left-5 border border-white bg-white text-black py-2 px-6 rounded-full font-medium hover:bg-gray-600 transition-colors">
              Women's
            </button>
          </div>

          {/* Category 3 */}
          <div className="relative">
            <img
              src="/images/kids.png" // Replace with your image path
              alt="Category 3"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          <button className="absolute bottom-5 left-5 border border-white bg-white text-black py-2 px-6 rounded-full font-medium hover:bg-gray-600 transition-colors">
              Kid's
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
