import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],

    // queryFn: async () => {
    //   const res = await fetch(
    //     `https://bistro-boss.vercel.app/carts?email=${user?.email}`,
    //     {
    //       headers: {
    //         authorization: `Bearer ${token}`,
    //       },
    //     }
    //   );
    //   return res.json();
    // },

    // !!!!!!!!! Uses advanced authentication mechanism using axios interceptor custom hook called axiosSecure
    queryFn: async () => {
      if (!user) {
        return [];
      }
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email && !!localStorage.getItem("JWT"),
  });
  return [cart, refetch];
};

export default useCart;
