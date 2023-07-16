import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import bg from "../assets/others/pattern.png";
import loginImg from "../assets/others/register.png";
import { AuthContext } from "../context-provider/AuthProvider";
const Login = () => {
  const { loginUser, signInWithGoogle, loadJWT } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // !! Handle Sign in
  const handleLogin = (data) => {
    loginUser(data.email, data.password).then((res) => {
      loadJWT(res.user);
      reset();
      navigate(from);
    });
  };

  // !! Login with Google
  const handleGoogleLogin = () => {
    signInWithGoogle().then((result) => {
      const loggedUser = result.user;
      const user = { name: loggedUser.displayName, email: loggedUser.email };
      fetch("https://bistro-boss.vercel.app/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then(() => {
          loadJWT(loggedUser);
          navigate(from);
        });
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Login - Bistro Boss Restaurant</title>
      </Helmet>
      <section
        style={{ backgroundImage: `url("${bg}")` }}
        className=" lg:pt-32 pt-24 pb-32"
      >
        <div className="lg:w-1200 mx-auto px-4 lg:px-0 bg-transparent border rounded-xl shadow-2xl">
          <div className="lg:flex justify-evenly items-center gap-14">
            <img
              src={loginImg}
              alt=""
              className="w-1/2 hidden lg:block bg-transparent"
            />
            <div class="divider divider-horizontal lg:my-8"></div>
            <form
              onSubmit={handleSubmit(handleLogin)}
              className="card-body font-inter"
            >
              <div className="text-center">
                <h4 className="text-3xl text-primaryColor font-black ">
                  Login
                </h4>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-sm">Email</span>
                </label>
                <input
                  type="email"
                  required
                  {...register("email", { required: true })}
                  placeholder="Enter Your Email"
                  className="input"
                />
                {errors.name && (
                  <span className="text-red-400 text-xs font-semibold mt-2">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-sm">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Enter Your Password"
                  className="input"
                />
                {errors.name && (
                  <span className="text-red-400 text-xs font-semibold mt-2">
                    This field is required
                  </span>
                )}
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover font-semibold"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <input
                  disabled={false}
                  type="submit"
                  value="Login"
                  className="btn btn-sm lg:w-1/2 mx-auto hover:bg-secondaryColor bg-primaryColor normal-case border-0 text-white shadow"
                />
              </div>
              <div className="text-center text-primaryColor">
                <p className="text-xs font-semibold">
                  New here?{" "}
                  <Link to="/register" className="font-black underline">
                    Create a new account
                  </Link>
                </p>
                <div
                  onClick={handleGoogleLogin}
                  className="text-lg shadow flex justify-center items-center gap-3 mt-3 bg-white py-3 rounded-3xl cursor-pointer"
                >
                  <span className="text-sm font-bold">
                    Continue with Google
                  </span>
                  <FaGoogle />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
