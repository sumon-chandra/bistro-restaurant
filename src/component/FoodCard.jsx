import { useContext } from "react";
import { AuthContext } from "../context-provider/AuthProvider";
import useCart from "../hooks/useCart";

const FoodCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const handleAddToCart = (item) => {
    if (user && user.email) {
      const { name, image, price, _id } = item;
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("https://bistro-boss.vercel.app/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            alert("Add cart successfully !");
          }
        });
    }
  };
  return (
    <div className="bg-slate-100 font-inter lg:w-full mt-4 lg:mt-0 relative">
      <div className="card lg:flex ">
        <figure>
          <img src={item.image} alt="" className="w-full h-72 object-cover" />
        </figure>
        <div className="card-body text-center">
          <h5 className="text-xl font-bold">{item.name}</h5>
          <p className="card-text">{item.recipe}</p>
          <div className="mx-auto text-center">
            <button
              onClick={() => handleAddToCart(item)}
              className="uppercase border-b-2 bg-slate-200 text-primaryColor border-primaryColor py-2 px-4 font-inter font-semibold mt-6 rounded-md hover:text-secondaryColor hover:border-secondaryColor"
            >
              Add to Card
            </button>
          </div>
        </div>
        <div className="font-semibold absolute bg-black text-white top-4 right-4 px-4 py-1 rounded-md shadow-lg">
          ${item.price}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
