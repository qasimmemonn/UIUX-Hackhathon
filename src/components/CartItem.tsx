import { AiOutlineHeart, AiOutlineDelete } from "react-icons/ai";

const CartItem = () => {
  return (
    <div className="flex items-center border-b border-gray-200 pb-6">
      {/* Product Image */}
      <img
        src="/images/Frame (1).png"
        alt="Product"
        className="w-30 h-30 rounded-md object-cover"
      />

      {/* Product Details */}
      <div className="flex-1 ml-4 space-y-2">
        <h3 className=" font-bold text-lg">Nike Dri-FIT ADV TechKnit Ultra</h3>
        <p className="text-sm text-gray-600">Men's Short-Sleeve Running Top</p>
        <p className="text-sm text-gray-600">Ashen Slate / Cobalt Bliss</p>
        <p className="text-sm text-gray-600">Size: L &nbsp;&nbsp; Quantity: 1</p>
          {/* Action Buttons */}
      <div className="flex gap-3 px-5 pt-3">
         {/* Wishlist Button */}
         <button
          className="text-gray-500 hover:text-blue-500 flex items-center justify-center"
          aria-label="Wishlist"
        >
          <AiOutlineHeart size={24} />
        </button>
        {/* Delete Button */}
        <button
          className="text-gray-500 hover:text-red-500 flex items-center justify-center"
          aria-label="Delete"
        >
          <AiOutlineDelete size={24} />
        </button>
        

      
      </div>
      
       
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col">

      <p className="text-lg font-medium">₹3,895.00</p>
       

      
      </div>
    </div>
  );
};

export default CartItem;
