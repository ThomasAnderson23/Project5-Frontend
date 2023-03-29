import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./ProductSwiper.css";
import CardProducts from "../cardProducts/card-products";

const ProductSwiper = ({ products }) => {
  console.log(products);

  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={60}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <CardProducts key={product._id} product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductSwiper;
