import React from "react";
import JerseyCart from "./jerseyCart";

const product = { name: 'Featured', description: 'Discover our diverse range of', price: '$54.99', image: 'https://images.fancode.com/media/catalog/product/m/u/mumbai_indians_official_mens_player_edition_jersey_2025_customised(2).png',}
const JerseyShowcase = () => {
  return (
    <div className="flex flex-col lg:flex-row text-white min-h-screen items-center sm:p-8" style={{ backgroundImage: 'linear-gradient(to bottom, #101828 0%, #101828 50%, white 100%)' }}>
      <div className="flex flex-col justify-center px-2 sm:px-8 w-full md:w-1/2 py-16 text-center lg:text-left">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 font-mono italic">
          Revolutionizing <br /> the Jersey
        </h2>
        <p className="mb-8 text-gray-300 font-mono text-base w-full">
          At Yours Retro Hubz, we're not just selling jerseys - we're redefining the very concept
          of sportswear. Our mission is to provide our customers with a truly exceptional experience,
          from the moment they discover our brand to the moment they slip on one of our premium jerseys.
        </p>
        <div className="flex justify-center lg:justify-start gap-4">
          <button className="bg-white text-gray-900 font-mono px-6 py-3 rounded-full text-base font-semibold shadow hover:bg-gray-200 transition">
            Explore Our Vision
          </button>
          <button className="bg-gray-800 text-white font-mono px-6 py-3 rounded-full border border-gray-600 hover:bg-gray-700 transition">
            OMGZ
          </button>
        </div>
      </div>
      <div className=" w-full lg:w-1/2 h-full flex justify-center items-center">
        {/* <JerseyCart product={{name: 'Featured',description: 'Discover our diverse range of',price: '$54.99', image: 'https://images.fancode.com/media/catalog/product/m/u/mumbai_indians_official_mens_player_edition_jersey_2025_customised(2).png',}} /> */}
        <div
          className={`bg-gray-800 rounded-2xl shadow-lg drop-shadow-2xl drop-shadow-[#edeeef] rounded-lgp-6 flex flex-col items-center w-full sm:w-[50%] lg:w-[70%] p-4 h-fit`}
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-50 object-contain mb-6"
          />
          <h3 className={`text-2xl font-mono text-white py-2 font-bold`}>{product.name}</h3>
          <p className={`mb-4 text-gray-200 text-center font-mono min-h-10`}>
            {product.description}
          </p>
          <span className={`font-mono text-lg mb-4 text-white`}>
            {product.price}
          </span>
          <button className="bg-white text-black px-4 py-2 rounded-full font-mono shadow hover:bg-gray-100">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default JerseyShowcase;
