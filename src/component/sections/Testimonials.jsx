import { useEffect, useState } from "react";
import SectionHead from "./SectionHead";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ReactStars from "react-rating-stars-component";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("./reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="lg:w-[1320px] lg:mt-20 mt-8 mx-auto font-inter">
      <SectionHead
        heading={"Testimonials"}
        subHeading={"What our client say"}
      />
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="testimonial-swiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col justify-center items-center lg:w-1/2 w-9/12 mx-auto py-10">
              <ReactStars
                value={review.rating}
                activeColor={"#CD9003"}
                edit={false}
                classNames="testimonial-rating-stars"
              />
              <p className="lg:text-7xl lg:pt-10 pt-4">
                <FaQuoteLeft />
              </p>
              <p className="py-4">{review.details}</p>
              <p className="text-3xl font-semibold text-[#CD9003]">
                {review.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
