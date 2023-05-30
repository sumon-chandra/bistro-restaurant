import { Helmet } from "react-helmet-async";
import { FaTrash, FaEdit } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();
  return (
    <>
      <Helmet>
        <title>My Cart - Bistro Boss Restaurant</title>
      </Helmet>
      <section>
        <div className="w-full">
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
                <tr key={item._id} className="font-bold">
                  <th>{index + 1}</th>
                  <td>
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} alt="Food image" />
                    </div>
                  </td>
                  <td>
                    <p>{item.name}</p>
                  </td>
                  <td>
                    <p>${item.price}</p>
                  </td>
                  <th className="space-x-6">
                    <button className="btn btn-ghost bg-slate-700 btn-xs w-10 h-10 text-xl text-white hover:bg-slate-500">
                      <FaEdit />
                    </button>
                    <button className="btn btn-ghost bg-red-600 btn-xs w-10 h-10 text-xl text-white hover:bg-red-500">
                      <FaTrash />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default MyCart;
