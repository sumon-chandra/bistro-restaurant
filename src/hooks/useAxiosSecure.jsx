import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context-provider/AuthProvider";

const useAxiosSecure = () => {
  const { logoutUser } = useContext(AuthContext);
  console.log("Hello from Axios");
  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("JWT");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logoutUser();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logoutUser, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
