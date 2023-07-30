import { useContext } from "react";
import { AuthContext } from "../../context-provider/AuthProvider";
import useCart from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
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
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="bg-white shadow-lg font-inter lg:w-full mt-4 lg:mt-0 relative">
      <div className="card lg:flex ">
        <figure className="p-4">
          <img src={item.image} alt="" className="w-full h-72 object-cover" />
        </figure>
        <div className="card-body text-center">
          <h5 className="text-xl font-bold">{item.name}</h5>
          <p className="card-text">{item.recipe}</p>
          <div className="mx-auto text-center">
            <button
              onClick={() => handleAddToCart(item)}
              className="uppercase bg-primaryColor text-white text-sm font-bold py-2 px-4 font-inter mt-6 rounded-md hover:text-slate-100"
            >
              Add to Card
            </button>
          </div>
        </div>
        <div className="font-semibold absolute bg-black text-white top-8 right-8 px-4 py-1 rounded-md shadow-lg">
          ${item.price}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
