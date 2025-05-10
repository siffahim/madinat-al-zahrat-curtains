"use client";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const reviews = [
    {
      image: "/review1.png",
    },
    {
      image: "/review2.png",
    },
    {
      image: "/review3.png",
    },
    {
      image: "/review4.png",
    },
  ];
  return (
    <div className="bg-[#353535] py-2 md:py-5">
      <div className="container my-20 ">
        <h2 className="text-center text-3xl font-medium mb-6 text-white">
          Don't take our word for it
        </h2>

        <div className="mx-auto md:mx-52">
          {/* <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            spaceBetween={2}
            autoplay={true}
            style={{
              width: "100%",
              height: "300px",
            }}
            breakpoints={{
              // when window width is <= 768px (mobile)
              768: {
                slidesPerView: 2,
              },
            }}
          > */}

          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            autoplay={true}
            style={{
              width: "100%",
              height: "300px",
            }}
            breakpoints={{
              // For mobile devices (width <= 480px)
              480: {
                slidesPerView: 1, // Show 1 slide per view
              },
              // For tablets (width <= 768px)
              768: {
                slidesPerView: 2, // Show 2 slides per view
              },
              // For larger screens (width > 768px)
              1024: {
                slidesPerView: 2, // Show 3 slides per view
              },
            }}
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-full flex justify-center items-center relative bg-white rounded mx-5 md:mx-0">
                  <img className="mx-auto" src={item.image} alt="" />
                  <h2 className="text-[100px] text-[#ffbb29] mx-auto absolute -top-12 left-0">
                    ❝
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
