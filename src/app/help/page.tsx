import React from "react";

import { MdPhoneAndroid } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationSharp } from "react-icons/io5";




const HelpPage = () => {
  return (
    <div id="help" className="bg-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Heading & Search */}
        <div className="bg-white p-6 rounded mb-8">
          <h1 className="text-2xl font-bold text-center mb-4">GET HELP</h1>
          <div className="flex items-center border border-gray-300 rounded p-2">
            <input
              type="text"
              placeholder="What can we help you with?"
              className="flex-1 outline-none px-4"
            />
            <button className="text-white bg-black px-4 py-2 rounded">
              Search
            </button>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </h2>
            <p className="mb-4">
              We want to make buying your favorite Nike shoes and gear online
              fast and easy, and we accept the following payment options:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Visa, Mastercard, Diners Club, Discover, American Express, Visa
                Electron, Maestro
              </li>
              <li>Apple Pay</li>
            </ul>
            <p className="mb-6">
              If you enter your PAN information at checkout, you’ll be able to
              pay for your order with PayTM or a local credit or debit card.
            </p>
            <p className="mb-6">
              <strong>Nike Members</strong> can store multiple debit or credit
              cards in their profile for faster checkout. If you’re not already
              a Member,{" "}
              <a href="#" className="text-blue-600 underline">
                join
              </a>{" "}
              us today.
            </p>
            <div className="flex gap-4 mb-8">
              <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
                JOIN US
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
                SHOP NIKE
              </button>
            </div>
            <h2 className="text-xl font-bold mb-4">FAQs</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">
                  Does my card need international purchases enabled?
                </h3>
                <p>
                  Yes, we recommend asking your bank to enable international
                  purchases on your card. You will be notified at checkout if
                  international purchases need to be enabled. Please note, some
                  banks may charge a small transaction fee for international
                  orders.
                </p>
              </div>
              <div>
                <h3 className="font-bold pt-2">
                  Can I pay for my order with multiple methods?
                </h3>
                <p>
                  No, payment for Nike orders can’t be split between multiple
                  payment methods.
                </p>
              </div>
              <div>
                <h3 className="font-bold pt-2">
                  What payment method is accepted for SNKRS orders?
                </h3>
                <p>
                  You can use any accepted credit card to pay for your SNKRS
                  order.
                </p>
              </div>
              <div>
                <h3 className="font-bold pt-2">
                  Why don’t I see Apple Pay as an option?
                </h3>
                <p>
                  To see Apple Pay as an option in the Nike App or on Nike.com,
                  you’ll need to use a compatible Apple device running the
                  latest OS, be signed in to your iCloud account and have a
                  supported card in your Wallet. Additionally, you’ll need to
                  use Safari to use Apple Pay on Nike.com.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white p-6 rounded border-l">
            <h2 className="text-xl font-bold mb-6 text-center">CONTACT US</h2>
            <div className="space-y-6">
            <div className="flex flex-col items-center gap-4">
                <MdPhoneAndroid size={55} className="text-black" />
                <div className=" text-center">
                <p className="font-bold text-lg">000 800 919 0566</p>
                <p>Products & Orders: 24 hours a day, <br/>7 days a week</p>
                <p>Company Info & Enquiries: 07:30 -<br/> <span className="text-center">16:30, Monday - Friday</span></p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <RiMessage2Fill size={55} className="text-black" />
                <p>24 hours a day,<br/> 7 days a week</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <TfiEmail size={55} className="text-black" />
                <p>We’ll reply within<br/> five business days</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <IoLocationSharp size={55} className="text-black" />
                <div>
                <h1 className="text-lg font-normal text-center">STORE LOCATOR</h1>
                <p>
                  Find Nike retail stores near you
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
