import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import AllUsersTable from "../../../component/dashboard/admin/AllUsersTable";
import SectionHead from "../../../component/sections/SectionHead";

const AllUsers = () => {
  const { data: users = [], refresh } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  return (
    <>
      <Helmet>
        <title>All Users - Bistro Boos Restaurant</title>
      </Helmet>
      <section>
        <div className="lg:my-10 my-4">
          <SectionHead heading="Look at all users!" subHeading="All Users" />
        </div>
        <div className="w-full">
          <div className="uppercase font-cinzel lg:text-2xl text-xs font-bold p-3">
            <h4>
              Total User: {users.length < 9 ? `0${users.length}` : users.length}
            </h4>
          </div>
          <table className="table overflow-x-auto table-zebra w-full">
            <thead>
              <tr>
                <th className="lg:text-xl">#</th>
                <th className="lg:text-xl">Name</th>
                <th className="lg:text-xl">Email</th>
                <th className="lg:text-xl">Rule</th>
                <th className="lg:text-xl">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <AllUsersTable user={user} index={index} key={user._id} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AllUsers;
