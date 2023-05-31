import FoodCard from "../cards/FoodCard";

const FoodCategory = ({ items }) => {
  return (
    <div className="lg:grid grid-cols-3 gap-10">
      {items.map((item) => (
        <FoodCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default FoodCategory;
