import SectionHead from "../sections/SectionHead";
import featureImage from "../../assets/home/slide1.jpg";
import FoodCard from "../FoodCard";

const ChefRecommends = () => {
  return (
    <section className="lg:mt-20 mt-10 lg:w-1200 mx-auto lg:px-0 px-4">
      <SectionHead heading={"Chef recommends"} subHeading={"Should try"} />
      <div className="lg:flex justify-between gap-10 mt-10">
        <FoodCard
          item={{
            name: "Caeser Salad",
            recipe: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
            image: featureImage,
            price: 100,
          }}
        />
        <FoodCard
          item={{
            name: "Caeser Salad",
            recipe: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
            image: featureImage,
            price: 200,
          }}
        />
        <FoodCard
          item={{
            name: "Caeser Salad",
            recipe: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
            image: featureImage,
            price: 120,
          }}
        />
      </div>
    </section>
  );
};

export default ChefRecommends;
