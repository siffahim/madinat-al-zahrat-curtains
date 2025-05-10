"use client";
import { useRouter } from "next/navigation";

const Categories = () => {
  const navigate = useRouter();
  const categories = [
    {
      image: "/curtains.jpg",
      title: "Curtains",
      link: "/curtains",
    },
    {
      image: "/wallpaper.jpg",
      title: "Wallpaper",
      link: "/wallpaper",
    },
    {
      image: "/carpet.jpeg",
      title: "Carpets",
      link: "/carpets",
    },
    {
      image: "/rollar.jpg",
      title: "Rollar Blinds",
      link: "/rollar-blinds",
    },
    {
      image: "/table.png",
      title: "TV Cabinet",
      link: "/tv-cabinet",
    },
  ];

  const handleNavigate = (path: string) => {
    navigate.push(path);
  };
  return (
    <div className="container py-14">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray">
          We do work furniture a little bit different.
        </h2>
        <p className="text-md md:text-lg">
          That means easy, affordable, and flexible—whether you’re furnishing
          your home office or your business.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-14 relative">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group overflow-hidden cursor-pointer"
            onClick={() => handleNavigate(category.link)}
          >
            <img
              className="w-full h-full group-hover:scale-110 duration-300"
              src={category.image}
              alt=""
            />
            <div className="w-full h-full  bg-[#0000005e] absolute left-0 top-0"></div>
            <div className="absolute bottom-0 p-5 text-2xl font-medium text-white group-hover:underline duration-200">
              {category.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
