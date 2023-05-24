import SectionHead from "./SectionHead";
import featureImage from "../../assets/home/slide1.jpg";

const Card = ({ item }) => {
  return (
    <div className="bg-slate-100 font-inter lg:w-full mt-4 lg:mt-0">
      <div className="card lg:flex">
        <figure>
          <img src={item.image} alt="" className="w-full h-64 object-cover" />
        </figure>
        <div className="card-body text-center">
          <h5 className="text-xl font-bold">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <div className="mx-auto text-center">
            <button className="uppercase border-b-2 bg-slate-200 text-primaryColor border-primaryColor py-2 px-4 font-inter font-semibold mt-6 rounded-md hover:text-secondaryColor hover:border-secondaryColor">
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChefRecommends = () => {
  return (
    <section className="lg:mt-20 mt-10 lg:w-[1320px] mx-auto lg:px-0 px-4">
      <SectionHead heading={"Chef recommends"} subHeading={"Should try"} />
      <div className="lg:flex justify-between gap-10 mt-10">
        <Card
          item={{
            title: "Caeser Salad",
            description:
              "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
            image: featureImage,
          }}
        />
        <Card
          item={{
            title: "Caeser Salad",
            description:
              "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
            image: featureImage,
          }}
        />
        <Card
          item={{
            title: "Caeser Salad",
            description:
              "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
            image: featureImage,
          }}
        />
      </div>
    </section>
  );
};

export default ChefRecommends;
