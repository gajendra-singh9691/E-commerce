
const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#e67c60] min-h-fit md:min-h-screen px-6 md:px-20 py-12">
      {/* Left Side: Text and Buttons */}
      <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
          Discover the <br />
          Future of
        </h1>
        <p className="text-lg tracking-wide text-white/80 mb-4">
          Elevate Your Style with Yours  yoursretrohubz -h-48 md: Premium Jersey Store
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <button className="bg-white text-[#f2826d] font-bold px-6 py-3 rounded-lg shadow transition hover:bg-gray-100">
            Shop Now
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg transition hover:bg-white hover:text-[#f2826d]">
            Explore
          </button>
        </div>
      </div>

      {/* Right Side: Cap Image */}
      <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
        <div className="w-48 md:w-112 h-48 md:h-112">
            <img
          src="../hero_section.png"
          alt="Retro Hubz Cap"
          className="w-full h-full object-contain " style={{filter : 'drop-shadow(0px 6px 10px rgba(0, 0, 0, 0.4))'}}
        />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
