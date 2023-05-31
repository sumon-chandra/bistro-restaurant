import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`https://bistro-boss.vercel.app/users`);
      return res.json();
    },
  });
  return [users, refetch];
};

export default useUser;
