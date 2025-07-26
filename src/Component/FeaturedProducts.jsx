import React from 'react';
import { Link } from 'react-router-dom';
import JerseyCart from './jerseyCart';

const products = [
  {
    name: 'Black Jersey',
    description: 'Iconic design meets uncompromising',
    price: '$59.99',
    image: 'https://mysportsjersey.in/wp-content/uploads/2024/05/32-1.webp', // Replace with your image path
  },
  {
    name: 'White Polo',
    description: 'Elevate your casual style with our premium',
    price: '$49.99',
    image: 'https://indiansoccermart.in/cdn/shop/files/8cb87b92aaa0bbb536c7a119d512f2f6.png-z-0_0_f-webp_grande.webp?v=1713874455',
  },
  {
    name: 'Featured',
    description: 'Discover our diverse range of',
    price: '$54.99',
    image: 'https://images.fancode.com/media/catalog/product/m/u/mumbai_indians_official_mens_player_edition_jersey_2025_customised(2).png',
  },
];


export default function FeaturedProducts() {
  return (
    <div className="w-full min-h-screen py-10 px-2 md:px-8" style={{ backgroundImage: 'linear-gradient(to bottom, #e05d74 0%, #e05d74 50%, #f6f7f7 50%, #f6f7f7 100%)' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-2 font-mono">Featured Products</h2>
        <p className="text-center text-white mb-10 font-mono">
          Discover the perfect blend of classic and contemporary design in our
        </p>
        {/* Cards container changed to flex */}
        <div className="flex flex-wrap justify-center gap-8">
          {products.map((product, idx) => {
            return <JerseyCart product={product} key={idx}/>
          })}
        </div>
        {/* Shop All Button */}
        <div className="text-center mt-10">
          <Link to='/all-jersey' className="bg-gradient-to-r from-gray-800 via-rose-400 to-gray-800 text-white px-6 py-2 rounded-xl font-mono shadow cursor-pointer">
            Shop All
          </Link>
        </div>
      </div>
    </div>
  );
}
