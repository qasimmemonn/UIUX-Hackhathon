import React from "react";

const ProductsPage = () => {
  return (
    <div className="bg-white min-h-screen p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar */}
        <aside className="bg-white p-6 rounded  lg:col-span-1">
          <h2 className="text-lg font-bold mb-4">New (500)</h2>

          <div className="space-y-6">
            {/* Categories */}
            <div>
              <h3 className="font-semibold mb-2">Shop</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="hover:text-black cursor-pointer">Shoes</li>
                <li className="hover:text-black cursor-pointer">
                  Sports Bras
                </li>
                <li className="hover:text-black cursor-pointer">Tops & T-Shirts</li>
                <li className="hover:text-black cursor-pointer">
                  Hoodies & Sweatshirts
                </li>
                <li className="hover:text-black cursor-pointer">
                  Pants & Tights
                </li>
                <li className="hover:text-black cursor-pointer">
                  Shorts & Skirts
                </li>
                <li className="hover:text-black cursor-pointer">
                  Tracksuits & Joggers
                </li>
                <li className="hover:text-black cursor-pointer">Accessories</li>
              </ul>
            </div>
            </div>



          <div className="space-y-6 pt-8">
            {/* Filters */}
            <div>
              <h3 className="font-semibold mb-2">Gender</h3>
              <ul className="space-y-2">
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span>Men</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span>Women</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span>Unisex</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span>Kids</span>
                  </label>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 pt-5">Shop by Price</h3>
              <ul className="space-y-2">
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="price" className="form-radio" />
                    <span>Under ₹2,000.00</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="price" className="form-radio" />
                    <span>₹2,000.00 +</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="lg:col-span-3">
          <div className="flex justify-end items-center mb-6">
            
            <button className="text-gray-700 underline">Sort by</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* Product Card */}
            {Array.from({ length: 15 }).map((_, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded shadow-md hover:shadow-lg"
              >
                <img
                  src="/images/Frame (2).png"
                  alt="Product"
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-sm font-semibold mb-2">
                  Nike Air Force 1 '07
                </h3>
                <p className="text-xs text-gray-500 mb-2">Men's Shoes</p>
                <p className="font-bold">MRP: ₹6,795.00</p>
    
    
              </div>
              

              
            ))}
          </div>
           {/* Related Products Categories */}
       <div className="mt-32 border-t py-6 ">
            <h2 className="text-lg text-start font-bold mb-6">Related Product Categories</h2>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Related Category Card */}
              {["Running Shoes", "Basketball Shoes", "Training Gear", "Casual Wear"].map((category, index) => (
                <div
                  key={index}
                  className="bg-white py-2 px-5 rounded-full border flex items-center justify-center"
                >
                  <h3 className="text-center text-sm text-gray-700">
                    {category}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      
    </div>
  );
};

export default ProductsPage;
