import { useQuery } from "@tanstack/react-query";
import { GiWallet } from "react-icons/gi";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: stats = {}, isLoading: loading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });
  return (
    <div className="p-4">
      <h3 className="lg:text-3xl font-bold font-cinzel">
        Hi,{" "}
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text font-black">
          {user.displayName}
        </span>{" "}
        welcome back.
      </h3>
      {loading ? (
        <section className="lg:flex items-center justify-between gap-10 py-6 font-inter lg:space-y-0 space-y-4">
          <div className="bg-gradient-to-l to-[#BB34F5] from-[#FCDBFF] dashboard-loading-card">
            Loading...
          </div>
          <div className="bg-gradient-to-l to-[#D3A256] from-[#FDE8C0] dashboard-loading-card">
            Loading...
          </div>
          <div className="bg-gradient-to-l to-[#FE4880] from-[#FECDE9] dashboard-loading-card">
            Loading...
          </div>
          <div className="bg-gradient-to-l to-[#6AAEFF] from-[#B6F7FF] dashboard-loading-card">
            Loading...
          </div>
        </section>
      ) : (
        <section className="lg:flex items-center justify-between gap-10 py-6 font-inter lg:space-y-0 space-y-4">
          <div className="bg-gradient-to-l to-[#BB34F5] from-[#FCDBFF] dashboard-card">
            <GiWallet />
            <div>
              <h3>${stats?.revenue}</h3>
              <p className="font-normal text-2xl">Revenue</p>
            </div>
          </div>
          <div className="bg-gradient-to-l to-[#D3A256] from-[#FDE8C0] dashboard-card">
            <GiWallet />
            <div>
              <h3>{stats?.customers}</h3>
              <p className="font-normal text-2xl">Customers</p>
            </div>
          </div>
          <div className="bg-gradient-to-l to-[#FE4880] from-[#FECDE9] dashboard-card">
            <GiWallet />
            <div>
              <h3>{stats?.products}</h3>
              <p className="font-normal text-2xl">Products</p>
            </div>
          </div>
          <div className="bg-gradient-to-l to-[#6AAEFF] from-[#B6F7FF] dashboard-card">
            <GiWallet />
            <div>
              <h3>{stats?.orders}</h3>
              <p className="font-normal text-2xl">Orders</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default AdminHome;
