import React from "react";

const ProductPage = () => {
  return (
    <section className="bg-white py-32">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image Section */}
          <div>
            <div className="relative">
              <img
                src="/images/productimg.png" // Main product image
                alt="Air Max 90"
                className="w-full h-full object-cover rounded-sm "
              />
            </div>
            
          </div>

          {/* Product Details Section */}
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Nike Air Force 1<br/> PLT.AF.ORM</h1>
           

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              The Air Max 90 is a timeless classic, designedfor comfort<br/>  and
              performance. Featuring advanced cushioning <br/> and premium materials,
              it's perfect for running or everyday wear.<br/> 
              performance. Featuring advanced cushioning and premium<br/>  materials,
              it's perfect for running or everyday wear.<br/> 
              performance. Featuring advanced cushioning and premium<br/>  materials,
              it's perfect for running or everyday wear.
            </p>

            <p className="text-2xl font-bold text-black mb-6">$150.00</p>

            {/* Purchase Actions */}
            <div className="flex space-x-4 justify-center">
              <button className="bg-black text-white py-3 px-16 rounded-full font-medium hover:bg-blue-700 transition-colors">
                Buy Now
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
