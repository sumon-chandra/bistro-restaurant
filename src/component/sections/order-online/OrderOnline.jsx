import SectionHead from "../SectionHead";
import Slider from "./Slider";

const OrderOnline = () => {
  return (
    <section className="mt-36 lg:w-[1320px] mx-auto space-y-10">
      <SectionHead
        heading={"Order Online"}
        subHeading={"From 11:00am to 10:00pm"}
      />
      <Slider />
    </section>
  );
};

export default OrderOnline;