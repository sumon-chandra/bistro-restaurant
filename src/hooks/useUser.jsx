import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    enabled: !!localStorage.getItem("JWT"),
    queryFn: async () => {
      const res = await axiosSecure.get(`http://localhost:5000/users`);
      return res.json();
    },
  });
  return [users, refetch];
};

export default useUser;
