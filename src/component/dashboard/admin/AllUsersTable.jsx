import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useUser from "../../../hooks/useUser";

const AllUsersTable = ({ user, index }) => {
  const [, refetch] = useUser();
  const handleMakeAdmin = (user) => {
    fetch(`https://bistro-boss.vercel.app/users/admin/${user.email}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert(`${user.name} is new admin!`);
        }
      });
  };
  const handleDelete = (id) => {
    // fetch(`https://bistro-boss.vercel.app/users/${id}`, {
    //   method: "DELETE",
    // }).then(() => {
    //   alert("User deleted successfully");
    //   refetch();
    // });
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
        fetch(`https://bistro-boss.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted", "User deleted successfully", "success");
              refetch();
            } else {
              Swal.fire("Oops...", "Something went wrong!", "error");
            }
          });
      }
    });
  };
  return (
    <tr className="font-bold">
      <th>{index + 1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        {user?.rule === "admin" ? (
          "Admin"
        ) : (
          <button
            onClick={() => handleMakeAdmin(user)}
            className="btn btn-ghost bg-primaryColor btn-xs w-10 h-10 text-xl text-white hover:bg-secondaryColor"
          >
            <FaUserShield />
          </button>
        )}
      </td>
      <td>
        <button
          onClick={() => handleDelete(user._id)}
          className="btn btn-ghost bg-red-600 btn-xs w-10 h-10 text-xl text-white hover:bg-red-500"
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default AllUsersTable;
