const OrderSummary = () => {
  return (
    <div className="bg-white p-6 rounded-lg ">
      <h2 className="text-xl font-bold mb-6">Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between text-sm">
          <p>Subtotal</p>
          <p>₹20,890.00</p>
        </div>
        <div className="flex justify-between text-sm">
          <p>Estimated Delivery & Handling</p>
          <p>Free</p>
        </div>
        <div className="border-t border-b border-gray-200 py-4 flex justify-between text-base font-medium">
          <p>Total</p>
          <p>₹20,890.00</p>
        </div>
      </div>
      <button className="w-full mt-6 bg-black text-white py-5 rounded-full font-medium hover:bg-gray-800">
        Member Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
