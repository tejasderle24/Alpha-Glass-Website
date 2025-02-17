import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "./ProductCard";
import G1 from "../../assets/G1.png";
import G2 from "../../assets/G2.png";
import G3 from "../../assets/G3.png";

const ProductSlider = () => {
  return (
    <div className="px-36 py-8 leading-tight md:px-16 sm:px-4 sm:py-6">
      <h2 className="text-base font-semibold text-[#005B8C] sm:text-sm sm:text-center">
        Check Our Products
      </h2>
      <h3 className="text-4xl font-bold text-[#3D3737] mb-12 sm:text-2xl sm:text-center">
        We Provide Quality Products
      </h3>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3} // Show 3 items in desktop
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 }, // Show 1 product at a time on mobile
          1024: { slidesPerView: 3 }, // Show 3 products on desktop
        }}
        className="w-full"
      >
        <SwiperSlide>
          <ProductCard img={G1} title="Laminated Glass" desc="Laminated glass is a safety glass made by bonding layers of glass with a plastic interlayer, offering durability and shatter resistance." />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard img={G2} title="Tempered Glass" desc="Tempered glass is a type of safety glass that's heat-treated to be stronger and shatter into small, less harmful pieces when broken." />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard img={G3} title="Bend Glass" desc="Bend glass is a curved or shaped glass formed by heating it until pliable and molding in architecture and design." />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
