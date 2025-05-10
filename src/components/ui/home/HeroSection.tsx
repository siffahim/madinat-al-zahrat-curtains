import Navbar from "@/components/shared/Navbar";

const HeroSection = () => {
  return (
    <div className="bg-hero">
      <Navbar />
      <div className="flex justify-center items-center h-[calc(85vh-130px)]">
        <div className="text-center px-3">
          <h2 className="text-5xl md:text-7xl font-bold text-white">
            Modern Curtains
          </h2>
          <p className="text-3xl md:text-4xl text-white font-normal">
            For a better way to work
          </p>
          <button className="border-2 font-bold px-10 py-3 rounded mt-5 text-white">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
