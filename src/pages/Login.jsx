import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useForm } from "react-hook-form";

import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import bg from "../assets/others/pattern.png";
import loginImg from "../assets/others/register.png";
import { AuthContext } from "../context-provider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
const Login = () => {
  const { loginUser, signInWithGoogle } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [disabled, setDisabled] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // !! Verify that captcha
  const handleVerify = (e) => {
    if (validateCaptcha(e.target.value)) {
      setDisabled(false);
      e.target.value = "";
    } else {
      setDisabled(true);
      e.target.value = "";
    }
  };

  // !! Handle Sign in
  const handleLogin = (data) => {
    loginUser(data.email, data.password).then(() => {
      reset();
      navigate(from);
    });
  };

  // !! Login with Google
  const handleGoogleLogin = () => {
    signInWithGoogle().then((result) => {
      const loggedUser = result.user;
      const user = { name: loggedUser.displayName, email: loggedUser.email };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from);
        });
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    loadCaptchaEnginge(4);
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
        <div className="lg:w-1200 mx-auto px-4 lg:px-0 min-h-screen bg-transparent border rounded-xl shadow-2xl">
          <div className="lg:flex justify-evenly items-center gap-x-10">
            <img
              src={loginImg}
              alt=""
              className="w-1/2 hidden lg:block bg-transparent"
            />
            <form
              onSubmit={handleSubmit(handleLogin)}
              className="card-body font-inter"
            >
              <div className="text-center">
                <h4 className="text-3xl font-bold">Login</h4>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl">Email</span>
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
                  <span className="label-text font-bold text-xl">Password</span>
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
                <LoadCanvasTemplate />
                <input
                  onBlur={handleVerify}
                  type="text"
                  placeholder="Enter the captcha above"
                  className="input mt-2"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={false}
                  type="submit"
                  value="Sign in"
                  className="btn btn-sm lg:btn-md bg-secondaryColor hover:bg-primaryColor normal-case border-0 text-white lg:text-xl shadow-lg"
                />
              </div>
              <div className="text-center text-primaryColor">
                <p className="lg:text-xl font-semibold">
                  New here?{" "}
                  <Link to="/register" className="font-bold">
                    Create a new account
                  </Link>
                </p>
                <p className="my-4">Or sign in with</p>
                <div className="text-4xl flex justify-center items-center gap-10">
                  <FaFacebook className="cursor-pointer" />
                  <FaGoogle
                    onClick={handleGoogleLogin}
                    className="cursor-pointer"
                  />
                  <FaGithub className="cursor-pointer" />
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
