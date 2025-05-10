"use client";

const Portfolio = () => {
  const images = [
    {
      src: "/prev2.jpg",
      title: "Test1",
    },
    {
      src: "/prev3.jpg",
      title: "Test1",
    },
    {
      src: "/prev4.jpg",
      title: "Test1",
    },
    {
      src: "/prev5.jpg",
      title: "Test1",
    },
    {
      src: "/prev6.jpg",
      title: "Test1",
    },
    {
      src: "/prev7.jpg",
      title: "Test1",
    },
    {
      src: "/prev8.jpg",
      title: "Test1",
    },
    {
      src: "/prev9.jpg",
      title: "Test1",
    },
  ];

  return (
    <div className="container my-20">
      <h2 className="text-center text-2xl md:text-3xl font-medium mb-6 ">
        Visit My Previous Work Sample
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {images.map((item, index) => (
          <div
            key={index}
            className="bg-white group overflow-hidden h-[350px] w-full"
            style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
          >
            <img
              className="w-full h-full group-hover:scale-110 duration-300"
              src={item.src}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
