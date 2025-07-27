import React from "react";

const LatestJersey = () => (
  <div className="min-h-screen bg-black flex flex-col md:flex-row items-center justify-center px-6 py-12">
    {/* Jersey image */}
    <div className="flex-1 flex justify-center mb-10 md:mb-0">
     <div className="w-52 md:w-112 h-52 md:h-112">
         <img
        src="../white-t-shirt.png"
        alt="Latest Jersey"
        className="w-full h-full object-contain drop-shadow-lg"
      />
     </div>
    </div>
    {/* Content section */}
    <div className="flex-1 max-w-lg text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold font-mono leading-tight text-white mb-8">
        Introducing<br />Our Latest
      </h1>
      <p className="text-slate-400 text-base md:text-lg mb-8 font-mono">
        Behold the pinnacle of jersey design - our latest creation that
        seamlessly blends modern aesthetics with unparalleled performance.
        Crafted with the finest materials and cutting-edge
      </p>
      <button className="px-8 py-3 rounded-full bg-white text-gray-800 font-mono font-semibold text-lg hover:bg-orange-400 transition-colors">
        Shop Now
      </button>
    </div>
  </div>
);

export default LatestJersey;
