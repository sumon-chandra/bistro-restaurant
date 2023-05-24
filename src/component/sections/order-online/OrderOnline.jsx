import SectionHead from "../SectionHead";
import Slider from "./Slider";

const OrderOnline = () => {
  return (
    <section className="lg:mt-36 mt-10 lg:w-[1320px] mx-auto space-y-10 lg:px-0 px-4">
      <SectionHead
        heading={"Order Online"}
        subHeading={"From 11:00am to 10:00pm"}
      />
      <Slider />
    </section>
  );
};

export default OrderOnline;
