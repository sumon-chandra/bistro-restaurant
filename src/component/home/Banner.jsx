import { Carousel } from "react-responsive-carousel";

import banner1 from "../../assets/home/01.jpg";
import banner2 from "../../assets/home/02.jpg";
import banner3 from "../../assets/home/03.png";
import banner4 from "../../assets/home/04.jpg";
import banner5 from "../../assets/home/05.png";
import banner6 from "../../assets/home/06.png";
const Banner = () => {
  return (
    <Carousel className="lg:h-[700px] lg:mb-24">
      <div>
        <img src={banner1} alt="" className="" />
      </div>
      <div>
        <img src={banner2} alt="" />
      </div>
      <div>
        <img src={banner3} alt="" />
      </div>
      <div>
        <img src={banner4} alt="" />
      </div>
      <div>
        <img src={banner5} alt="" />
      </div>
      <div>
        <img src={banner6} alt="" />
      </div>
    </Carousel>
  );
};

export default Banner;
