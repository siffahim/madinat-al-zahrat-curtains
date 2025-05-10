const Video = () => {
  return (
    <div className="w-full h-[600px] relative mt-10">
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src="/video.mp4" />
      </video>
      <div className="w-full h-full bg-[#7442251f] absolute top-0 left-0 flex items-center justify-center">
        <div className="text-center bg-[#d8865723] text-white py-6 rounded">
          <h2 className="text-5xl font-medium">How to Install Curtains</h2>

          <p className="w-3/4 mx-auto">
            GRID provides an easy, hassle-free servicing system where we pick up
            your product from your home if there is any problem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
