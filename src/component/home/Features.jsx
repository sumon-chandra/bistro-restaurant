import SectionHead from "../sections/SectionHead";
import featureImg from "../../assets/home/featured.jpg";
const Features = () => {
  return (
    <section
      style={{ "--image-url": `url(${featureImg})` }}
      className="lg:mt-20 mt-8 lg:w-1200 mx-auto py-10 font-inter bg-[image:var(--image-url)] bg-cover relative h-[650px] lg:h-[700px] bg-fixed"
    >
      <div className="absolute top-0 bottom-0 bg-[#151515bd] lg:p-24 p-10">
        <SectionHead
          subHeading={"Check it out"}
          heading={"From our menu"}
          features={true}
        />
        <div className="lg:flex justify-center gap-20 items-center text-white lg:p-10 py-10">
          <div>
            <img src={featureImg} alt="" className="lg:w-full lg:e-full" />
          </div>
          <div className="mt-4 lg:mt-0 lg:space-y-4">
            <p className="lg:text-xl text-lg">March 20, 2023</p>
            <p className="lg:text-xl text-lg">WHERE CAN I GET SOME?</p>
            <p className="text-xs lg:text-[16px] pt-4 lg:pt-0 leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <div className="text-center lg:text-left">
              <button className="uppercase border-b-2 bg-transparent text-white border-white py-2 px-4 font-inter font-semibold mt-6 rounded-md hover:text-gray-300 hover:border-gray-300">
                Add to Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
