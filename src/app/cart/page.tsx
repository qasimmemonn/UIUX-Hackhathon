import CartItem from "@/components/CartItem";
import OrderSummary from "@/components/Ordersummary";

const CartPage = () => {
  return (
    <div id="cart" className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto p-6">
        {/* Free Delivery Banner */}
        <div className="bg-gray-100 text-sm py-5 px-4 mb-6 rounded-lg">
          <p>
            <span className="font-medium">Free Delivery</span><br/> applies to orders
            of ₹14,000.00 or more.{" "}
            <a href="#" className="text-gray-700 underline">
              View details
            </a>
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Section - Cart Items */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-6">Bag</h2>
            <div className="space-y-6">
              <CartItem />
              <CartItem />
            </div>
          </div>

          {/* Right Section - Order Summary */}
          <div>
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
