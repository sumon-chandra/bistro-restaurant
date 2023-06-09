import React from "react";
import useCart from "../../hooks/useCart";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useMenu from "../../hooks/useMenu";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageCartTable = ({ item, index }) => {
  const [axiosSecure] = useAxiosSecure();
  const { refetch } = useMenu();

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
        axiosSecure.delete(`/menu/${id}`).then(({ data }) => {
          if (data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            refetch();
          } else {
            Swal.fire("Failed!", "Failed to delete!.", "error");
          }
        });
      }
    });
  };

  //   Handle Edit item
  const handleEdit = (item) => {
    console.log(item);
  };
  return (
    <tr className="font-bold">
      <th>{index + 1}</th>
      <td>
        <div className="mask mask-squircle lg:w-32 w-12">
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
          onClick={() => handleEdit(item)}
          className="btn btn-ghost bg-primaryColor btn-xs w-10 h-10 text-xl text-white mr-6 hover:bg-secondaryColor"
        >
          <FaEdit />
        </button>
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

export default ManageCartTable;
