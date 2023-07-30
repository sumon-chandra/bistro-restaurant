import { Link } from "react-router-dom";

const Button = ({ isHome, item }) => {
  return (
    <button className="mx-auto absolute bottom-4 left-4 text-center w-full">
      <Link
        to={
          isHome
            ? `/shop/salad`
            : item === "offered"
            ? "/shop/salad"
            : `/shop/${item}`
        }
        className="uppercase bg-primaryColor text-white py-2 px-4 font-inter font-semibold mt-6 rounded-md  hover:shadow-lg shadow-black"
      >
        {isHome ? "Order your favorite Food" : `Order your favorite ${item}`}
      </Link>
    </button>
  );
};

export default Button;
