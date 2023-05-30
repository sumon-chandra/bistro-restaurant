import React from "react";
import useCart from "../../../hooks/useCart";
import { FaTrash } from "react-icons/fa";

const MyCartTable = ({ item, index }) => {
  const [, refetch] = useCart();
  // Handle delete item
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D1A054",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
      className: "cart-swal",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch();
            } else {
              Swal.fire("Failed!", "Failed to delete!.", "danger");
            }
          });
      }
    });
  };
  return (
    <tr className="font-bold">
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
      <th>
        <button
          onClick={() => handleDelete(item._id)}
          className="btn btn-ghost bg-red-600 btn-xs w-10 h-10 text-xl text-white hover:bg-red-500"
        >
          <FaTrash />
        </button>
      </th>
    </tr>
  );
};

export default MyCartTable;
