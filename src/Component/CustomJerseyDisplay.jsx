



import React from 'react';

export default function CustomJerseyDisplay() {
    return (
        <div className="min-h-screen lg:max-h-screen bg-[#D87C8C] flex flex-col items-center py-8 px-2 sm:px-4">
            <p className="text-white text-center mb-4 font-mono">
                collaborate with some of the most <br />
                renowned names in the industry
            </p>
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg w-full max-w-full md:max-w-6xl min-h-[650px]">
                {/* Left Side: Model */}
                <div className="bg-neutral-900 flex flex-col justify-center items-center p-2 sm:p-2 md:w-1/2 w-full min-w-[0]">
                    <img
                        src="https://img.freepik.com/free-photo/football-player_144627-11779.jpg"
                        alt="Model in kit"
                        className="w-full h-11/12 object-contain rounded-lg mb-2"
                    />
                </div>
                {/* Right Side: Content */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 gap-6 sm:gap-8 p-6 sm:p-8 bg-white">
                    {/* Top Left: Jersey 1 */}
                    <Cart data={{image : 'https://indiansoccermart.in/cdn/shop/files/8cb87b92aaa0bbb536c7a119d512f2f6.png-z-0_0_f-webp_grande.webp?v=1713874455',price : 799,name : 'T-shirt'}} /> 
                    <Cart data={{image : 'https://indiansoccermart.in/cdn/shop/files/8cb87b92aaa0bbb536c7a119d512f2f6.png-z-0_0_f-webp_grande.webp?v=1713874455',price : 799,name : 'T-shirt'}} /> 
                    <Cart data={{image : 'https://indiansoccermart.in/cdn/shop/files/8cb87b92aaa0bbb536c7a119d512f2f6.png-z-0_0_f-webp_grande.webp?v=1713874455',price : 799,name : 'T-shirt'}} /> 
                    <Cart data={{image : 'https://indiansoccermart.in/cdn/shop/files/8cb87b92aaa0bbb536c7a119d512f2f6.png-z-0_0_f-webp_grande.webp?v=1713874455',price : 799,name : 'T-shirt'}} /> 
                    
                </div>
            </div>
        </div>
    );
}


const Cart = ({data}) => {
    return (
        <div className="flex flex-col items-center border-2 border-gray-400 rounded-lg p-2">
            <div className='w-48 h-48'>
                <img
                src={data.image}
                alt="Jersey 1"
                className="w-full h-full object-contain mb-2"
            />
            </div>
            <span className="text-xs text-gray-400">{data.name}</span>
            <span className="font-mono font-bold text-base text-blue-900 -mt-1">
                {data.price}
            </span>
            <button className='text-black border-2 border-gray-300 px-4 py-1 rounded-md cursor-pointer relative hover:top-[-2px] duration-200 transition-all'>Add to Cart</button>
        </div>
    )
}