import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  // const token = localStorage.getItem("JWT");
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],

    // queryFn: async () => {
    //   const res = await fetch(
    //     `http://localhost:5000/carts?email=${user?.email}`,
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
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email && !!localStorage.getItem("JWT"),
  });
  return [cart, refetch];
};

export default useCart;
