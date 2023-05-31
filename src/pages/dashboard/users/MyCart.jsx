import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import SectionHead from "./../../../component/sections/SectionHead";
import MyCartTable from "../../../component/dashboard/users/MyCartTable";

const MyCart = () => {
  const [cart] = useCart();
  return (
    <>
      <Helmet>
        <title>My Cart - Bistro Boss Restaurant</title>
      </Helmet>
      <section>
        <div className="lg:my-10 my-4">
          <SectionHead heading="Look at your items!" subHeading="My cart" />
        </div>
        <div className="w-full">
          <div className="uppercase font-cinzel lg:text-2xl text-xs font-bold flex justify-between items-center p-3">
            <h4>
              Total Orders: {cart.length < 9 ? `0${cart.length}` : cart.length}
            </h4>
            <h4>
              Total Price: $
              {cart?.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
            </h4>
            <button className="border-b-2 bg-slate-200 text-primaryColor border-primaryColor py-2 px-4 font-inter font-semibold rounded-md hover:text-secondaryColor hover:border-secondaryColor uppercase">
              Pay
            </button>
          </div>
          <table className="table table-zebra overflow-x-auto w-full">
            <thead>
              <tr>
                <th className="lg:text-xl">#</th>
                <th className="lg:text-xl">Image</th>
                <th className="lg:text-xl">Name</th>
                <th className="lg:text-xl">Price</th>
                <th className="lg:text-xl">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item, index) => (
                <MyCartTable key={item._id} item={item} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default MyCart;
