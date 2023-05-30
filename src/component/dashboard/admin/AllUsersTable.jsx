import { FaTrash, FaUserShield } from "react-icons/fa";

const AllUsersTable = ({ user, index }) => {
  const handleDelete = (id) => {
    console.log(id);
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
            // onClick={() => handleDelete(item._id)}
            className="btn btn-ghost bg-primaryColor btn-xs w-10 h-10 text-xl text-white hover:bg-secondaryColor"
          >
            <FaUserShield />
          </button>
        )}
      </td>
      <td>
        <button
          onClick={() => handleDelete(item._id)}
          className="btn btn-ghost bg-red-600 btn-xs w-10 h-10 text-xl text-white hover:bg-red-500"
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default AllUsersTable;
