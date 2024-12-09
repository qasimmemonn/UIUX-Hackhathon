import React from 'react';
import Link from 'next/link';
import { GiCardboardBoxClosed } from "react-icons/gi";

export default function Checkout() {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="container mx-auto px-4 lg:px-16 flex flex-col lg:flex-row gap-8">
        {/* Left Section: Form */}
        <div className="flex-1 bg-white p-8 rounded-lg ">
          <h2 className="text-lg font-semibold mb-4 text-center">
            How would you like to get your order?
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center px-10">
          Customs regulation for India require a copy of the recipient's<br/> KYC. The address on the KYC needs to match the shipping<br/> address. Our courier will contact you via SMS/email to obtain<br/> a copy of your KYC. The KYC will be stored securely and<br/> used solely for the purpose of clearing customs (including<br/> sharing it with customs officials) for all orders and returns. If<br/> your KYC does not match your shipping address, please click<br/> the link for more information. <Link href='/' className='underline'>Learn More</Link>
          </p>

          <button
            type="button"
            className="w-full py-4 border border-black rounded-md flex items-center justify-center text-center  text-gray-700 bg-white hover:bg-gray-100 transition"
          >
            <GiCardboardBoxClosed className='w-10 h-10'/> 
            Deliver it
          </button>

          <form className="mt-6 space-y-6">
            <h3 className="font-semibold">Enter your name and address:</h3>
            {/* Name Fields */}
          
              <input
                type="text"
                placeholder="First Name"
                className="border rounded-md p-3 w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border rounded-md p-3 w-full"
              />
            
            {/* Address Fields */}
            <input
              type="text"
              placeholder="Address Line 1"
              className="border rounded-md p-3 w-full"
            />
            <label className='text-gray-400 text-xs'>We do not ship to P.O. boxes</label>
            <input
              type="text"
              placeholder="Address Line 2"
              className="border rounded-md p-3 w-full"
            />
            <input
              type="text"
              placeholder="Address Line 3"
              className="border rounded-md p-3 w-full"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Postal Code"
                className="border rounded-md p-3 w-full"
              />
              <input
                type="text"
                placeholder="Locality"
                className="border rounded-md p-3 w-full"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <select
              className="border rounded-md p-3 w-full"
              defaultValue="State/Territory"
            >
              <option value="State/Territory">State/Territory</option>
              <option value="Punjab">Punjab</option>
              <option value="Balochistan">Balochistan</option>
              <option value="Delhi">Delhi</option>
              <option value="United States">United States</option>
              {/* Add other country options */}
            </select>
            <select
              className="border rounded-md p-3 w-full"
              defaultValue="India"
            >
              <option value="India">India</option>
              {/* Add other country options */}
            </select>
            </div>
            {/* Address Options */}
            <div className="flex items-center space-x-3">
              <input type="checkbox" id="save-address" className="h-4 w-4" />
              <label htmlFor="save-address" className="text-sm text-gray-600">
                Save this address to my profile
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <input type="checkbox" id="save-address" className="h-4 w-4" />
              <label htmlFor="save-address" className="text-sm text-gray-600">
              Make this my preferred address
              </label>
            </div>

            {/* Contact Info */}
            <h3 className="font-semibold">What's your contact information?</h3>
            <input
              type="email"
              placeholder="Email"
              className="border rounded-md p-3 w-full"
            />
               <label className='text-gray-400 text-xs'>A confirmation email will be sent after checkout.</label>
            <input
              type="tel"
              placeholder="Phone Number"
              className="border rounded-md p-3 w-full"
            />
<label className='text-gray-400 text-xs'>A carrier might contact you to confirm delivery.</label>
            {/* PAN Details */}
            <h3 className="font-semibold">What's your PAN?</h3>
            <input
              type="text"
              placeholder="PAN"
              className="border rounded-md p-3 w-full"
            />
        <label className='text-gray-400 text-xs'>Enter your PAN to enable payment with UPI, Net Banking or local<br/> card methods</label>


            <div className="text-sm text-gray-400 space-y-10">
              <label className="flex items-start">
                <input type="checkbox" className="h-4 w-4 mt-1" />
                <span className="ml-2">
                Save PAN details to Nike Profile
                </span>
              </label>
              <label className="flex items-start">
                <input type="checkbox" className="h-4 w-4 mt-1" />
                <span className="ml-2">
                I have read and consent to eShopWorld processing my information in<br/> accordance with the <span className='underline'><Link href='/'>Privacy Statement</Link></span> and <span className='underline'><Link href='/'>Cookie Policy.</Link></span> eShopWorld<br/> is a trusted Nike partner.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className='py-6'>
            <button
              type="submit"
              className="w-full py-5 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-800 transition"
            >
              Continue
            </button>
            </div>
          </form>

       <div className='py-8'>
          <div className=' border-t border-b py-6'>
            <li className="flex justify-between ">
              <span className="text-lg text-gray-600 hover:text-gray-950">Delivery</span>
            
            </li>
            </div>


            <div className=' border-t border-b py-6'>
            <li className="flex justify-between ">
              <span className="text-lg text-gray-600 hover:text-gray-950">Shipping</span>
             
            </li>
            </div>
            <div className=' border-t border-b py-6'>
            <li className="flex justify-between ">
              <span className="text-lg text-gray-600 hover:text-gray-950">Billing</span>
             
            </li>
            </div>
            <div className=' border-t border-b py-6'>
            <li className="flex justify-between ">
              <span className="text-lg text-gray-600 hover:text-gray-950">Payment</span>
             
            </li>
            </div>
            </div>

        </div>

        {/* Right Section: Order Summary */}
        <div className="w-full lg:w-1/3 bg-white p-8 rounded-lg ">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span className="text-sm text-gray-600">Subtotal</span>
              <span className="font-semibold">₹ 2,000.00</span>
            </li>
            <li className="flex justify-between">
              <span className="text-sm text-gray-600">Estimated Shipping</span>
              <span className="font-semibold">₹ 200.00</span>
            </li>
            <div className=' border-t border-b py-5'>
            <li className="flex justify-between ">
              <span className="text-sm text-gray-600">Total</span>
              <span className="font-semibold">₹ 2,200.00</span>
            </li>
            </div>
          </ul>
          <label className='text-gray-400 text-xs'>(The total reflects the price of your order, including all duties and taxes)</label>
         
         <h1 className='font-bold pt-5'>Arrives Mon, 27 Mar - Wed, 12 Apr</h1>
          <div className="mt-6">
            {/* Product List */}
            <div className="flex items-center space-x-4">
              <img
                src="/images/Frame (1).png"
                alt="Product Image"
                className="h-28 w-28 rounded-md object-cover"
              />
              <div>
                <p className="text-sm font-semibold">Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</p>
                <p className="text-sm text-gray-600">Qty / 1</p>
                <p className="text-sm text-gray-600">Size / M</p>
                <p className="text-sm text-gray-600">₹ 3 895.00</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <img
                src="/images/Frame (2).png"
                alt="Product Image"
                className="h-28 w-28 rounded-md object-cover"
              />
              <div>
                <p className="text-sm font-semibold">Nike Air Max 97 SE Men's Shoes</p>
                <p className="text-sm text-gray-600">Qty / 2</p>
                <p className="text-sm text-gray-600">Size / L</p>
                <p className="text-sm text-gray-600">₹ 16 995.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
