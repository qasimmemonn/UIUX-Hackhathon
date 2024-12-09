import React from 'react'

const Bottomlink = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="max-w-7xl mx-auto items-center py-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* First Column */}
        <div>
          <h3 className="text-black text-xl font-semibold mb-6">Icons</h3>
          <ul className="space-y-4 text-gray-400">
            <li>Air Force 1</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
          </ul> 
        </div>

        {/* Second Column */}
        <div>
          <h3 className="text-black text-xl font-semibold mb-6">Shoes</h3>
          <ul className="space-y-4 text-gray-400">
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
        
          </ul>
        </div>

        {/* Third Column */}
        <div>
          <h3 className="text-black text-xl font-semibold mb-6">Clothing</h3>
          <ul className="space-y-4 text-gray-400">
            <li>All Clothing</li>
            <li>Modest Wear</li>
            <li>Hoodies & Pullovers</li>
            <li>Shirts & Tops</li>
          </ul>
        </div>
        {/* fourth Column */}
        <div>
          <h3 className="text-black text-xl font-semibold mb-6">Kid's</h3>
          <ul className="space-y-4 text-gray-400">
            <li>Infant & Toddler Shoes</li>
            <li>Kid's Shoes</li>
            <li>Kid's Jordan Shoes</li>
            <li>Kid's Basketball Shoes</li>
          </ul>
        </div>
        </div>
    </div>
  )
}

export default Bottomlink;
