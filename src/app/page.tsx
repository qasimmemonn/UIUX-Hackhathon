import Link from "next/link";
import React from "react";

import HeroSlider from "@/components/herobanner";
import CategorySection from "@/components/CategorySection";
import Feature from "@/components/feature";
import Banner from "@/components/Banner";
import Bottomlink from "@/components/bottomlink";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
  {
    image: "/images/card.png",
    name: "Nike Air Max Pulse",
    category: "Women's Shoes",
    price: "13,995",
  },
  {
    image: "/images/card.png",
    name: "Nike Air Max Pulse",
    category: "Men's Shoes",
    price: "13,995",
  },
  {
    image: "/images/card.png",
    name: "Nike Air Max 97 SE",
    category: "Men's Shoes",
    price: "16,995",
  },
];

export default function Home() {
  return (
    <div>
      {/* Main Content */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Aside */}

        {/* Content and Section */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-1 gap-4">
          <section className="bg-gray-100 p-4 text-center">
            {" "}
            <h1 className="font-bold">Hello Nike App</h1>
            <p className="text-sm">
              Download the app to access everything Nike.
              <Link href="/">
                <span className="underline">Get Your Great</span>
              </Link>
            </p>
          </section>
          <section className="bg-white px-8">
            <HeroSlider />
          </section>

          <section className="bg-white p-4 text-center">
            <h1 className="font-bold text-2xl">First Look</h1>
            <h1 className="font-bold pt-3 text-5xl"> NIKE AIR MAX PULSE </h1>
            <p className="text-sm pt-8">
              Extreme comfort. Hyper durable. Max volume. Introducing the Air
              Max Pulse
              <br />
              --designed to push you past your limits and hepl you to go to the
              max.
            </p>
            <div className=" flex pt-8 justify-center gap-2">
              <button className="border bg-black rounded-full text-white py-3 px-10">
                Notify Me{" "}
              </button>
              <button className="border bg-black rounded-full text-white py-3 px-10">
                Shop Air Max{" "}
              </button>
            </div>
          </section>
          <section className="bg-white p-4">
            <section className="py-12">
              <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold">Best of Air Max</h2>
                  <div className="flex items-center space-x-2">
                    {/* Left Arrow */}
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                      <FaChevronLeft size={14} />
                    </button>

                    {/* Right Arrow */}
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                      <FaChevronRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Product Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product, index) => (
                    <div key={index} className="group">
                      {/* Product Image */}
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="mt-4">
                        <h3 className="text-sm text-gray-700">
                          {product.name}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {product.category}
                        </p>
                        <p className="font-semibold text-gray-800 mt-1">
                          ₹ {product.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </section>
          <section className="bg-white px-8">
            <Feature />
          </section>
          <section className="bg-white p-4 text-center">
            <h1 className="font-bold pt-3 text-5xl">
              STEP INTO WHAT FEELS GOOD
            </h1>
            <p className="text-sm pt-8">
              Cause everyone should know the feeling of running in that perfect
              pair
            </p>
            <div className="pt-8">
              <button className="border bg-black rounded-full text-white py-3 px-10">
                Find Your Shoe{" "}
              </button>
            </div>
          </section>

          <section>
            <section className="py-12">
              <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold">Best of Air Max</h2>
                  <div className="flex items-center space-x-2">
                    {/* Left Arrow */}
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                      <FaChevronLeft size={14} />
                    </button>

                    {/* Right Arrow */}
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                      <FaChevronRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Product Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product, index) => (
                    <div key={index} className="group">
                      {/* Product Image */}
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="mt-4">
                        <h3 className="text-sm text-gray-700">
                          {product.name}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {product.category}
                        </p>
                        <p className="font-semibold text-gray-800 mt-1">
                          ₹ {product.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </section>

          <section className="bg-white px-8">
            <Banner />
          </section>
          <section className="bg-white p-4 text-center">
            <h1 className="font-bold pt-4 text-5xl">FLIGHT ESSENTIALS</h1>
            <p className="text-sm pt-8">
              Your built-to-last, all-week-wears--but with style only Jordan
              Brand can deliver.
            </p>
            <div className="pt-8">
              <button className="border bg-black rounded-full text-white py-3 px-10">
                Shop
              </button>
            </div>
          </section>
          <section className="bg-white p-2">
            <CategorySection />
          </section>
          <section className="bg-white p-2">
            <Bottomlink />
          </section>
        </div>
      </main>
    </div>
  );
}
