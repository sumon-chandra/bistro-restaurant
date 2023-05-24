import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";
import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import slider6 from "../../../assets/home/slide2.jpg";

const Slider = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
        },
        "@0.75": {
          slidesPerView: 2,
        },
        "@1.00": {
          slidesPerView: 3,
        },
        "@1.50": {
          slidesPerView: 4,
        },
      }}
      modules={[Pagination]}
      className="order-online-slider pb-20 relative font-cinzel"
    >
      <SwiperSlide>
        <img src={slider1} alt="" className="w-full" />
        <div className="absolute h-20 bottom-0 right-0 left-0 text-center bg-gradient-to-t from-[#03030362] to-[#ffffff00]">
          <h3 className="uppercase lg:text-2xl text-lg mt-4 font-light text-white">
            Salads
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider2} alt="" className="w-full" />
        <div className="absolute h-20 bottom-0 right-0 left-0 text-center bg-gradient-to-t from-[#03030362] to-[#ffffff00]">
          <h3 className="uppercase lg:text-2xl text-lg mt-4 font-normal text-white">
            Soups
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider3} alt="" className="w-full" />
        <div className="absolute h-20 bottom-0 right-0 left-0 text-center bg-gradient-to-t from-[#03030362] to-[#ffffff00]">
          <h3 className="uppercase lg:text-2xl text-lg mt-4 font-normal text-white">
            Pizzas
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider4} alt="" className="w-full" />
        <div className="absolute h-20 bottom-0 right-0 left-0 text-center bg-gradient-to-t from-[#03030362] to-[#ffffff00]">
          <h3 className="uppercase lg:text-2xl text-lg mt-4 font-normal text-white">
            Desserts
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider5} alt="" className="w-full" />
        <div className="absolute h-20 bottom-0 right-0 left-0 text-center bg-gradient-to-t from-[#03030362] to-[#ffffff00]">
          <h3 className="uppercase lg:text-2xl text-lg mt-4 font-normal text-white">
            Salads
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider6} alt="" className="w-full" />
        <div className="absolute h-20 bottom-0 right-0 left-0 text-center bg-gradient-to-t from-[#03030362] to-[#ffffff00]">
          <h3 className="uppercase lg:text-2xl text-lg mt-4 font-normal text-white">
            Soups
          </h3>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
